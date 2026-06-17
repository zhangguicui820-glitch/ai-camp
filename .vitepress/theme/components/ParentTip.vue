<template>
  <div class="parent-tip">
    <div class="parent-tip-header">👨‍👩‍👧 给家长的话</div>
    <div class="parent-tip-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.parent-tip {
  border: 1px solid var(--camp-pink);
  border-left: 4px solid var(--camp-pink);
  border-radius: 0 10px 10px 0;
  margin: 1rem 0;
  background: rgba(212, 181, 161, 0.08);
  overflow: hidden;
}

.parent-tip-header {
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  color: #8b6f5e;
  background: rgba(212, 181, 161, 0.2);
}

.parent-tip-body {
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}
</style>
