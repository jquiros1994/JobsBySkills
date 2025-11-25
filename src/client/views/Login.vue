<template>
  <div class="login-view container">
    <BaseCard class="login-card">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="handleLogin">
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
        <BaseButton type="primary" @click="handleLogin">Iniciar Sesión</BaseButton>
      </form>
      <p class="alt-action">
        ¿No tienes cuenta? <router-link to="/signup">Regístrate aquí</router-link>
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
  name: 'LoginView',
  components: {
    InputField,
    BaseButton,
    BaseCard,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      authStore.methods.login('client', { email: this.email, name: 'Usuario Cliente' });
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--navbar-height, 4rem));
}

.login-card {
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.login-card h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
}

.login-card form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.login-card .alt-action {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: var(--color-text);
}
</style>
