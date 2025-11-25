<template>
  <div class="companies-view">
    <header class="hero-section">
      <div class="container">
        <h1>Atraiga al Mejor Talento para su Empresa</h1>
        <p>Publique sus ofertas y conéctese con profesionales cuyas habilidades coinciden perfectamente con sus necesidades.</p>
        <router-link to="/company/signup">
          <BaseButton type="primary">Publicar una Oferta</BaseButton>
        </router-link>
      </div>
    </header>

    <section class="how-it-works-section container">
      <h2>¿Cómo Funciona?</h2>
      <div class="steps-grid">
        <BaseCard class="step-item">
          <h3>1. Publique su Oferta</h3>
          <p>Cree una oferta de empleo detallada en minutos. Especifique las habilidades clave que está buscando.</p>
        </BaseCard>
        <BaseCard class="step-item">
          <h3>2. Reciba Candidatos Filtrados</h3>
          <p>Nuestro sistema inteligente le presenta los perfiles más compatibles, ahorrándole tiempo y esfuerzo.</p>
        </BaseCard>
        <BaseCard class="step-item">
          <h3>3. Contrate al Mejor</h3>
          <p>Comuníquese con los mejores candidatos y encuentre al miembro perfecto para su equipo.</p>
        </BaseCard>
      </div>
    </section>

    <section class="pricing-section">
      <div class="container">
        <h2>Nuestros Planes</h2>
        <div class="pricing-grid">
          <BaseCard class="pricing-plan">
            <h3>Básico</h3>
            <p class="price">Gratis</p>
            <ul>
              <li>1 publicación de empleo activa</li>
              <li>Hasta 25 postulaciones</li>
              <li>Soporte por correo electrónico</li>
            </ul>
            <router-link to="/company/signup">
              <BaseButton type="secondary">Empezar Gratis</BaseButton>
            </router-link>
          </BaseCard>
          <BaseCard class="pricing-plan featured">
            <h3>Profesional</h3>
            <p class="price">50$ /mes</p>
            <ul>
              <li>10 publicaciones de empleo activas</li>
              <li>Postulaciones ilimitadas</li>
              <li>Candidatos destacados</li>
              <li>Soporte prioritario</li>
            </ul>
            <router-link to="/company/signup">
              <BaseButton type="primary">Elegir Plan Pro</BaseButton>
            </router-link>
          </BaseCard>
          <BaseCard class="pricing-plan">
            <h3>Empresarial</h3>
            <p class="price">Contacto</p>
            <ul>
              <li>Publicaciones ilimitadas</li>
              <li>Integración con ATS</li>
              <li>Manager de cuenta dedicado</li>
              <li>Y mucho más...</li>
            </ul>
            <router-link to="/company/signup">
              <BaseButton type="secondary">Contactar Ventas</BaseButton>
            </router-link>
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
  name: 'CompaniesView',
  components: {
    BaseButton,
    BaseCard,
  },
};
</script>

<style scoped>
.companies-view {
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

.steps-grid, .pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.step-item, .pricing-plan {
  text-align: center;
}

.step-item h3, .pricing-plan h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.pricing-plan {
  display: flex;
  flex-direction: column;
}

.pricing-plan.featured {
  border-color: var(--color-primary);
  transform: scale(1.05);
}

.pricing-plan .price {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.pricing-plan ul {
  list-style: none;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.pricing-plan ul li {
  margin-bottom: 0.75rem;
}
</style>