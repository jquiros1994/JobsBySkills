<template>
  <button :class="['button', typeClass]" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
  },
  computed: {
    typeClass() {
      return `button-${this.type}`;
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>

<style scoped>
.button {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  font-size: 1rem;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.button-primary {
  background-color: var(--color-primary);
  color: white;
  border: 1px solid var(--color-primary);
}

.button-primary:hover {
  background-color: var(--color-primary-hover);
  border-color: var(--color-primary-hover);
}

.button-secondary {
  background-color: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.button-secondary:hover {
  background-color: var(--color-card-bg);
  border-color: var(--color-text);
}

.button-text {
  background-color: transparent;
  color: var(--color-primary);
  border: none;
  padding: 0.5rem 1rem;
}

.button-text:hover {
  text-decoration: underline;
}
</style>
