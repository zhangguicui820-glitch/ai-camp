<template>
  <div class="progress-check">
    <label class="check-label" :class="{ checked: isChecked }">
      <input
        type="checkbox"
        :checked="isChecked"
        @change="handleToggle"
      />
      <span class="check-text">
        <span v-if="isChecked">✅ 今日已完成</span>
        <span v-else>⬜ 点击标记今日完成</span>
        <span v-if="isChecked && completedDate" class="check-date">{{ completedDate }}</span>
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useProgress } from '../composables/useProgress'

const props = defineProps<{ dayId: string }>()

const { isDayCompleted, toggleDay, progress } = useProgress()

const isChecked = ref(false)
const completedDate = ref<string | null>(null)

function updateState() {
  isChecked.value = isDayCompleted(props.dayId)
  completedDate.value = progress.value[props.dayId]?.date ?? null
}

onMounted(updateState)

// 监听 progress 变化
import { watch } from 'vue'
watch(() => progress.value[props.dayId], updateState, { deep: true })

function handleToggle() {
  toggleDay(props.dayId)
  updateState()
}
</script>

<style scoped>
.progress-check {
  margin: 0.5rem 0;
}

.check-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
  transition: all 0.2s;
  user-select: none;
}

.check-label:hover {
  border-color: var(--vp-c-brand-1);
}

.check-label.checked {
  background: rgba(168, 181, 162, 0.15);
  border-color: var(--camp-green);
}

.check-label input[type="checkbox"] {
  accent-color: var(--camp-green);
  width: 1.1rem;
  height: 1.1rem;
}

.check-text {
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
}

.check-date {
  margin-left: 0.5rem;
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}
</style>
