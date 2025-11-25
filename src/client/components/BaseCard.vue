<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
};
</script>

<style scoped>
.card {
  background-color: var(--color-card-bg);
  border-radius: 12px;
  box-shadow: 0 4px 12px var(--color-card-shadow);
  padding: 1.5rem;
  border: 1px solid var(--color-border);
}
</style>
