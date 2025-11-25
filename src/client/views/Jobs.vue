<template>
  <div class="jobs-view container">
    <h2>Explora Ofertas de Empleo</h2>

    <div class="search-filter-section">
      <InputField
        id="jobSearch"
        v-model="searchQuery"
        placeholder="Buscar por título, empresa o habilidad..."
        class="search-input"
      />
      <BaseButton type="primary">Buscar</BaseButton>
    </div>

    <div class="job-list">
      <JobCard v-for="job in filteredJobs" :key="job.id" :job="job" />
    </div>
  </div>
</template>

<script>
import JobCard from '../components/JobCard.vue';
import InputField from '../components/InputField.vue';
import BaseButton from '../components/BaseButton.vue';

export default {
  name: 'JobsView',
  components: {
    JobCard,
    InputField,
    BaseButton,
  },
  data() {
    return {
      searchQuery: '',
      allJobs: [
        { id: 1, title: 'Desarrollador Frontend Vue.js', company: 'Tech Solutions', location: 'Remoto', skills: ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'API REST'] },
        { id: 2, title: 'Ingeniero de Backend Node.js', company: 'Global Innovations', location: 'Madrid, España', skills: ['Node.js', 'Express', 'MongoDB', 'SQL'] },
        { id: 3, title: 'Diseñador UX/UI Senior', company: 'Creative Agency', location: 'Barcelona, España', skills: ['Figma', 'Sketch', 'UX Research', 'Prototipado'] },
        { id: 4, title: 'Analista de Datos Junior', company: 'Data Insights', location: 'Remoto', skills: ['Python', 'SQL', 'Excel', 'Power BI'] },
        { id: 5, title: 'Especialista en Marketing Digital', company: 'Growth Hackers', location: 'Valencia, España', skills: ['SEO', 'SEM', 'Redes Sociales', 'Google Analytics'] },
      ],
    };
  },
  computed: {
    filteredJobs() {
      if (!this.searchQuery) {
        return this.allJobs;
      }
      const query = this.searchQuery.toLowerCase();
      return this.allJobs.filter(job =>
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.skills.some(skill => skill.toLowerCase().includes(query))
      );
    },
  },
};
</script>

<style scoped>
.jobs-view h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--color-text);
}

.search-filter-section {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.search-input {
  flex-grow: 1;
}

.job-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}
</style>
