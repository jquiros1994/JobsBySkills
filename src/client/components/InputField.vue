<template>
  <div class="input-field-container">
    <label v-if="label" :for="id">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      :required="required"
      class="input-field"
    />
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.input-field-container {
  margin-bottom: 1rem;
}

.input-field-container label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-text);
}

.input-field {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 1rem;
  background-color: var(--color-card-bg);
  color: var(--color-text);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.input-field:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.25);
}
</style>
