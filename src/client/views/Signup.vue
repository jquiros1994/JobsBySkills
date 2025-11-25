<template>
  <div class="signup-view container">
    <BaseCard class="signup-card">
      <h2>Registro</h2>
      <form @submit.prevent="handleSignup">
        <InputField
          id="name"
          label="Nombre Completo"
          type="text"
          v-model="name"
          placeholder="Tu Nombre"
          required
        />
        <InputField
          id="email"
          label="Correo Electrónico"
          type="email"
          v-model="email"
          placeholder="tu@ejemplo.com"
          required
        />
        <InputField
          id="password"
          label="Contraseña"
          type="password"
          v-model="password"
          placeholder="********"
          required
        />
        <InputField
          id="confirmPassword"
          label="Confirmar Contraseña"
          type="password"
          v-model="confirmPassword"
          placeholder="********"
          required
        />
        <BaseButton type="primary" @click="handleSignup">Registrarse</BaseButton>
      </form>
      <p class="alt-action">
        ¿Ya tienes cuenta? <router-link to="/login">Inicia Sesión</router-link>
      </p>
    </BaseCard>
  </div>
</template>

<script>
import InputField from '../components/InputField.vue';
import BaseButton from '../components/BaseButton.vue';
import BaseCard from '../components/BaseCard.vue';
import authStore from '../store/authStore';

export default {
  name: 'SignupView',
  components: {
    InputField,
    BaseButton,
    BaseCard,
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    handleSignup() {
      authStore.methods.login('client', { email: this.email, name: this.name });
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.signup-view {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
}

.signup-card {
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.signup-card h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
}

.signup-card form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.signup-card .alt-action {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: var(--color-text);
}
</style>
