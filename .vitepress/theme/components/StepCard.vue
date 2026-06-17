<template>
  <div class="step-card">
    <div class="step-header">
      <span class="step-badge">{{ badge }}</span>
      <span class="step-title">{{ title }}</span>
      <span class="step-time" v-if="duration">{{ duration }}</span>
    </div>
    <div class="step-body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  badge: string
  title: string
  duration?: string
}>()
</script>

<style scoped>
.step-card {
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  margin: 0.8rem 0;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
}

.step-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1rem;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.step-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.8rem;
  height: 1.8rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  background: var(--camp-brown);
  color: #fff;
}

.step-title {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
}

.step-time {
  margin-left: auto;
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}

.step-body {
  padding: 0.8rem 1rem;
}
</style>
