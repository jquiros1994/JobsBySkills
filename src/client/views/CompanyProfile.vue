<template>
  <div class="company-profile-view container">
    <BaseCard v-if="company">
      <div class="company-header">
        <img :src="company.logo" :alt="company.name + ' logo'" class="company-logo" v-if="company.logo">
        <h1>{{ company.name }}</h1>
        <p class="company-location">{{ company.location }}</p>
      </div>

      <div class="company-description">
        <h3>Sobre Nosotros</h3>
        <p>{{ company.description }}</p>
      </div>

      <div class="company-jobs-section">
        <h3>Ofertas de Empleo de {{ company.name }}</h3>
        <div v-if="companyJobs.length > 0" class="job-list">
          <JobCard v-for="job in companyJobs" :key="job.id" :job="job" />
        </div>
        <p v-else class="no-jobs-message">
          Actualmente no hay ofertas de empleo disponibles de esta empresa.
        </p>
      </div>
    </BaseCard>
    <div v-else class="loading-message">
      Cargando perfil de la empresa...
    </div>
  </div>
</template>

<script>
import BaseCard from '../components/BaseCard.vue';
import JobCard from '../components/JobCard.vue';

export default {
  name: 'CompanyProfileView',
  components: {
    BaseCard,
    JobCard,
  },
  data() {
    return {
      company: null,
      allCompanies: [
        {
          id: 101,
          name: 'Tech Solutions',
          logo: 'https://via.placeholder.com/100x100?text=TS',
          location: 'Remoto',
          description: 'Tech Solutions es una empresa líder en desarrollo de software, especializada en soluciones innovadoras para la transformación digital. Nos apasiona la tecnología y el impacto que podemos generar.',
        },
        {
          id: 102,
          name: 'Global Innovations',
          logo: 'https://via.placeholder.com/100x100?text=GI',
          location: 'Madrid, España',
          description: 'Global Innovations es una multinacional tecnológica que impulsa el futuro con productos y servicios de vanguardia. Buscamos talentos que quieran crecer con nosotros.',
        },
        {
          id: 103,
          name: 'Creative Agency',
          logo: 'https://via.placeholder.com/100x100?text=CA',
          location: 'Barcelona, España',
          description: 'Creative Agency es un estudio de diseño galardonado, enfocado en crear experiencias de usuario memorables y estéticamente atractivas para marcas globales.',
        },
      ],
      allJobs: [
        { id: 1, title: 'Desarrollador Frontend Vue.js', company: 'Tech Solutions', companyId: 101, location: 'Remoto', skills: ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'API REST'] },
        { id: 2, title: 'Ingeniero de Backend Node.js', company: 'Global Innovations', companyId: 102, location: 'Madrid, España', skills: ['Node.js', 'Express', 'MongoDB', 'SQL'] },
        { id: 3, title: 'Diseñador UX/UI Senior', company: 'Creative Agency', companyId: 103, location: 'Barcelona, España', skills: ['Figma', 'Sketch', 'UX Research', 'Prototipado'] },
        { id: 4, title: 'Analista de Datos Junior', company: 'Data Insights', companyId: 104, location: 'Remoto', skills: ['Python', 'SQL', 'Excel', 'Power BI'] },
        { id: 5, title: 'Especialista en Marketing Digital', company: 'Growth Hackers', companyId: 105, location: 'Valencia, España', skills: ['SEO', 'SEM', 'Redes Sociales', 'Google Analytics'] },
      ],
    };
  },
  computed: {
    companyJobs() {
      return this.allJobs.filter(job => job.companyId == this.company.id);
    },
  },
  mounted() {
    this.fetchCompanyDetails(this.$route.params.id);
  },
  methods: {
    fetchCompanyDetails(companyId) {
      this.company = this.allCompanies.find(c => c.id == companyId);
    },
  },
};
</script>

<style scoped>
.company-profile-view {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.company-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
}

.company-logo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 1px solid var(--color-border);
}

.company-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.company-header .company-location {
  font-size: 1.1rem;
  color: var(--color-text);
  opacity: 0.8;
}

.company-description, .company-jobs-section {
  margin-bottom: 2rem;
}

.company-description h3, .company-jobs-section h3 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
}

.company-description p {
  line-height: 1.8;
}

.job-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.no-jobs-message {
  text-align: center;
  font-style: italic;
  color: var(--color-text);
  opacity: 0.7;
}

.loading-message {
  text-align: center;
  font-size: 1.2rem;
  color: var(--color-text);
}
</style>
