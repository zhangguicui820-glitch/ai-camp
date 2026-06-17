<template>
  <div class="collapsible" :class="{ open: isOpen }">
    <button class="collapsible-trigger" @click="isOpen = !isOpen">
      <span class="trigger-icon">{{ isOpen ? '🔽' : '🔽' }}</span>
      <span>{{ title }}</span>
      <span class="trigger-hint">{{ isOpen ? '收起' : '展开' }}</span>
    </button>
    <div class="collapsible-content" v-show="isOpen">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ title?: string }>()

const isOpen = ref(false)
</script>

<style scoped>
.collapsible {
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  margin: 1rem 0;
  overflow: hidden;
  background: var(--vp-c-bg-alt);
}

.collapsible.open {
  border-color: var(--camp-purple);
}

.collapsible-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
  transition: background 0.2s;
}

.collapsible-trigger:hover {
  background: rgba(184, 169, 201, 0.1);
}

.trigger-icon {
  font-size: 0.7rem;
  transition: transform 0.2s;
}

.collapsible.open .trigger-icon {
  transform: rotate(180deg);
}

.trigger-hint {
  margin-left: auto;
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}

.collapsible-content {
  padding: 0.5rem 1rem 1rem;
  border-top: 1px solid var(--vp-c-border);
}
</style>
