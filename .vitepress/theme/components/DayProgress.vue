<template>
  <div class="day-progress-wrapper">
    <div class="progress-info">
      <span class="progress-label">{{ label }}</span>
      <span class="progress-num">{{ done }}/{{ total }}</span>
    </div>
    <div class="progress-bar">
      <div class="progress-bar-fill" :style="{ width: percent + '%' }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  done: number
  total: number
  percent: number
}>()
</script>

<style scoped>
.day-progress-wrapper {
  margin: 0.5rem 0;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.3rem;
}

.progress-label {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.progress-num {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.progress-bar {
  height: 6px;
  background: var(--vp-c-border);
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--camp-brown), var(--camp-green));
  border-radius: 3px;
  transition: width 0.5s ease;
}
</style>
