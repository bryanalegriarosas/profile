<template>
  <div class="experience">
    <!-- Hero Section -->
    <v-sheet
      color="primary"
      class="d-flex align-center justify-center py-8"
      min-height="100"
      rounded="0"
    >
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center text-white">
            <h1 class="text-h3 text-md-h2 font-weight-bold mb-2">Mi Trayectoria</h1>
            <p class="text-h6 font-weight-regular">Experiencia profesional y formación académica</p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-container class="py-6">
      <!-- Experiencia Laboral -->
      <v-row justify="center" class="mb-12">
        <v-col cols="12" lg="10">
          <div class="d-flex align-center mb-6">
            <v-icon size="40" color="primary" class="me-3">mdi-briefcase</v-icon>
            <h2 class="text-h4 font-weight-bold">Experiencia Laboral</h2>
          </div>
          
          <v-card class="pa-6 mb-8" elevation="4">
            <v-timeline side="end" density="comfortable">
              <v-timeline-item
                v-for="(job, i) in workExperience"
                :key="'job-'+i"
                :dot-color="job.current ? 'primary' : 'grey-lighten-1'"
                size="small"
              >
                <div class="d-flex align-start">
                  <v-avatar :color="job.current ? 'primary' : 'grey-lighten-1'" size="48" class="me-4 mt-1">
                    <v-icon icon="fas fa-briefcase" color="white"></v-icon>
                  </v-avatar>
                  <div>
                    <div class="d-flex flex-wrap justify-space-between align-center">
                      <h3 class="text-h5 font-weight-bold">{{ job.position }}</h3>
                      <v-chip size="small" color="primary" variant="outlined" v-if="job.current" class="ml-2">
                        Actual
                      </v-chip>
                    </div>
                    <div class="text-subtitle-1 font-weight-medium text-primary mb-1">{{ job.company }}</div>
                    <div class="text-caption text-medium-emphasis mb-2">
                      {{ job.period }} • {{ job.location }}
                    </div>
                    <ul class="pl-3 mb-0">
                      <li v-for="(resp, j) in job.responsibilities" :key="'resp-'+i+'-'+j" class="mb-1">
                        {{ resp }}
                      </li>
                    </ul>
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card>
        </v-col>
      </v-row>

      <!-- Educación -->
      <v-row justify="center">
        <v-col cols="12" lg="10">
          <div class="d-flex align-center mb-6">
            <v-icon size="40" color="primary" class="me-3">mdi-school</v-icon>
            <h2 class="text-h4 font-weight-bold">Educación</h2>
          </div>
          
          <v-card class="pa-6" elevation="4">
            <v-timeline side="end" density="comfortable">
              <v-timeline-item
                v-for="(edu, i) in education"
                :key="'edu-'+i"
                dot-color="primary"
                size="small"
              >
                <div class="d-flex align-start">
                  <v-avatar color="primary" size="48" class="me-4 mt-1">
                    <v-icon icon="fas fa-graduation-cap" color="white"></v-icon>
                  </v-avatar>
                  <div>
                    <h3 class="text-h5 font-weight-bold mb-1">{{ edu.degree }}</h3>
                    <div class="text-subtitle-1 font-weight-medium text-primary mb-1">{{ edu.institution }}</div>
                    <div class="text-caption text-medium-emphasis mb-2">{{ edu.period }}</div>
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const workExperience = [
  {
    position: 'Desarrollador Full Stack',
    company: 'Aplicaciones Creativas',
    location: 'Villahermosa, Tabasco',
    period: 'Ene 2022 - Jun 2025',
    current: false,
    responsibilities: [
      'Desarrollo de aplicaciones web con tecnologías modernas',
      'Colaboración en el diseño de arquitecturas escalables',
      'Trabajo en equipo siguiendo metodologías ágiles',
      'Integración con APIs REST',
    ]
  },
  {
    position: 'Desarrollador Backend',
    company: 'Prefabricados de Palenque (Fymsa)',
    location: 'Villahermosa, Tabasco',
    period: 'Abr 2021 - Ene 2022',
    current: false,
    responsibilities: [
      'Implementación de interfaces de usuario responsivas',
      'Mantenimiento y optimización de código existente',
      'Optimización de rendimiento',
    ]
  },
  {
    position: 'Desarrollador Freelance',
    company: 'Freelance',
    location: 'Villahermosa, Tabasco',
    period: 'Oct 2019 - Feb 2021',
    current: false,
    responsibilities: [
      'Sistema de registro de examenes psicométricos (Laravel + Bootstrap + MySQL) (Oct 2019 - Feb 2021)',
      'Sistema de asistencia con reportes (Laravel + Vue.js + MySQL) (Feb 2020 - May 2020)',
      'Sitio informativo para eventos escolares (Laravel + Bootstrap + MySQL) (Oct 2019 - Ene 2020)',
    ],
  },
];

const education = [
  {
    degree: 'Ingeniería en Sistemas Computacionales',
    institution: 'Instituto Tecnológico de Villahermosa',
    period: '2014 - 2019',
  },
  {
    degree: 'Informática',
    institution: 'Colegio de Bachilleres de Tabasco',
    period: '2012 - 2014',
  }
];

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
.v-timeline-item__body {
  padding-bottom: 0;
}

.v-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.v-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1) !important;
}

.v-timeline {
  padding: 0;
}

.v-timeline-item {
  min-height: 120px;
  padding-bottom: 32px;
}

ul {
  list-style-type: disc;
  padding-left: 16px;
  margin: 8px 0;
}

li {
  margin-bottom: 4px;
  line-height: 1.6;
}

h2 {
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
}

h2::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 60px;
  height: 3px;
  background-color: var(--v-primary-base);
  border-radius: 3px;
}
</style>
