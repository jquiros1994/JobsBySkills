<template>
  <nav class="navbar">
    <div class="container navbar-container">
      <div class="navbar-left">
        <router-link to="/" class="navbar-brand">JobsBySkills</router-link>
        <div class="navbar-menu">
          <router-link v-if="authStore.state.userType === 'company'" to="/company/requests">Solicitudes</router-link>
          <router-link v-else to="/jobs">Buscar Empleos</router-link>

          <router-link v-if="authStore.state.userType === 'company'" to="/clients">Para Clientes</router-link>
          <router-link v-else to="/companies">Para Empresas</router-link>
          
          <router-link to="/blog">Blog</router-link>
        </div>
      </div>

      <div class="navbar-center">
        <div class="search-bar-nav">
          <input type="text" placeholder="Buscar empleos...">
          <BaseButton type="primary">Buscar</BaseButton>
        </div>
      </div>

      <div class="navbar-right">
        <button @click="toggleTheme" class="theme-switcher">
          <img v-if="isDarkMode" src="/icons/sun.svg" alt="Light Mode" />
          <img v-else src="/icons/moon.svg" alt="Dark Mode" />
        </button>

        <template v-if="authStore.state.isLoggedIn">
          <router-link :to="accountLink" class="icon-button">
            <img src="/icons/account.svg" alt="Cuenta" />
          </router-link>
          <BaseButton type="secondary" @click="handleLogout">Cerrar Sesión</BaseButton>
        </template>
        <template v-else>
          <router-link to="/login" class="button-secondary">Iniciar Sesión</router-link>
          <router-link to="/signup" class="button-primary">Registro</router-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import BaseButton from './BaseButton.vue';
import authStore from '../store/authStore';

export default {
  name: 'Navbar',
  components: {
    BaseButton,
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  computed: {
    authStore() {
      return authStore;
    },
    accountLink() {
      return this.authStore.state.userType === 'client' ? '/profile' : '/company/dashboard';
    }
  },
  mounted() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark-theme');
    } else {
      this.isDarkMode = false;
      document.documentElement.classList.remove('dark-theme');
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
      }
    },
    handleLogout() {
      this.authStore.methods.logout();
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: var(--color-card-bg);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 0;
  box-shadow: 0 2px 4px var(--color-card-shadow);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-left, .navbar-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.navbar-center {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  padding: 0 2rem;
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--color-text);
}

.navbar-menu {
  display: flex;
  gap: 1.5rem;
}

.navbar-menu a {
  font-weight: 500;
  color: var(--color-text);
}

.search-bar-nav {
  display: flex;
  width: 100%;
  max-width: 400px;
}

.search-bar-nav input {
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px 0 0 8px;
  font-size: 0.9rem;
  background-color: var(--color-background);
  color: var(--color-text);
}

.search-bar-nav .button-primary {
  border-radius: 0 8px 8px 0;
  padding: 0.5rem 1rem;
}

.theme-switcher {
  background: none;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
}

.theme-switcher img {
  width: 100%;
  height: 100%;
}

.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
}

.icon-button img {
  width: 100%;
  height: 100%;
  filter: invert(var(--color-text-filter-value, 0));
}

.button-primary, .button-secondary {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
}
</style>
