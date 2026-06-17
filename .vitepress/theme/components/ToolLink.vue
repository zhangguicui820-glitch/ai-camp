<template>
  <a :href="url" target="_blank" rel="noopener noreferrer" class="tool-link">
    <span class="tool-icon">{{ icon }}</span>
    <span class="tool-label">{{ label }}</span>
    <span class="tool-arrow">↗</span>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  url: string
  label: string
  icon?: string
}>()
</script>

<style scoped>
.tool-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.9rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.2s;
  margin: 0.2rem 0.3rem;
}

.tool-link:hover {
  border-color: var(--camp-brown);
  background: rgba(196, 168, 130, 0.1);
  text-decoration: none;
  color: var(--vp-c-brand-1);
}

.tool-icon {
  font-size: 1rem;
}

.tool-arrow {
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
  margin-left: 0.2rem;
}
</style>
