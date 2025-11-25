<template>
  <div class="clients-view">
    <header class="hero-section">
      <div class="container">
        <h1>Encuentra el Empleo de tus Sueños</h1>
        <p>Descubre miles de oportunidades laborales que se ajustan a tus habilidades y aspiraciones profesionales.</p>
        <router-link to="/signup">
          <BaseButton type="primary">Regístrate Gratis</BaseButton>
        </router-link>
      </div>
    </header>

    <section class="how-it-works-section container">
      <h2>¿Cómo Funciona?</h2>
      <div class="steps-grid">
        <BaseCard class="step-item">
          <h3>1. Crea tu Perfil</h3>
          <p>Completa tu perfil con tus habilidades, experiencia y preferencias laborales. ¡Es rápido y sencillo!</p>
        </BaseCard>
        <BaseCard class="step-item">
          <h3>2. Explora Ofertas Personalizadas</h3>
          <p>Recibe recomendaciones de empleos que realmente te interesan, filtradas por nuestro sistema inteligente.</p>
        </BaseCard>
        <BaseCard class="step-item">
          <h3>3. Postúlate y Consigue el Empleo</h3>
          <p>Aplica fácilmente a las ofertas y gestiona tus postulaciones desde un solo lugar. ¡Tu futuro te espera!</p>
        </BaseCard>
      </div>
    </section>

    <section class="benefits-section">
      <div class="container">
        <h2>Beneficios de Unirte</h2>
        <div class="benefits-grid">
          <BaseCard class="benefit-item">
            <h3>Acceso Exclusivo</h3>
            <p>Descubre empleos que no encontrarás en ningún otro lugar, de empresas líderes en tu sector.</p>
          </BaseCard>
          <BaseCard class="benefit-item">
            <h3>Herramientas Inteligentes</h3>
            <p>Utiliza nuestras herramientas para optimizar tu búsqueda y destacar entre otros candidatos.</p>
          </BaseCard>
          <BaseCard class="benefit-item">
            <h3>Soporte Personalizado</h3>
            <p>Nuestro equipo está aquí para ayudarte en cada paso de tu camino profesional.</p>
          </BaseCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
import BaseCard from '../components/BaseCard.vue';

export default {
  name: 'ClientsView',
  components: {
    BaseButton,
    BaseCard,
  },
};
</script>

<style scoped>
.clients-view {
  width: 100%;
}

.hero-section {
  text-align: center;
  padding: 4rem 0;
  background-color: var(--color-card-bg);
}

.hero-section h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.hero-section p {
  font-size: 1.25rem;
  color: var(--color-text);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

section {
  padding: 4rem 0;
}

section h2 {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 3rem;
}

.steps-grid, .benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.step-item, .benefit-item {
  text-align: center;
}

.step-item h3, .benefit-item h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
</style>