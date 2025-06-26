<template>
  <div class="experience">
    <!-- Hero Section -->
    <v-sheet
      color="primary"
      class="d-flex align-center justify-center py-16"
      min-height="300"
      rounded="0"
    >
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center text-white">
            <h1 class="text-h3 text-md-h2 font-weight-bold mb-4">Experiencia</h1>
            <p class="text-h6 font-weight-regular">Mi trayectoria profesional y educación</p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Experience & Education -->
    <v-container class="py-16">
      <v-row>
        <!-- Work Experience -->
        <v-col cols="12" md="6" class="mb-10 mb-md-0">
          <div class="d-flex align-center mb-6">
            <v-icon size="40" color="primary" class="me-4">fas fa-briefcase</v-icon>
            <h2 class="text-h4 font-weight-bold">Experiencia Laboral</h2>
          </div>
          
          <v-timeline side="end" density="compact" class="ms-n4">
            <v-timeline-item
              v-for="(job, i) in workExperience"
              :key="'job-'+i"
              :dot-color="job.current ? 'primary' : 'grey-lighten-1'"
              size="small"
            >
              <div class="mb-6">
                <div class="d-flex justify-space-between flex-column flex-md-row">
                  <h3 class="text-h6 font-weight-bold">{{ job.position }}</h3>
                  <div class="text-caption text-md-body-2 text-medium-emphasis">
                    {{ job.period }}
                  </div>
                </div>
                <div class="text-subtitle-2 mb-2">
                  {{ job.company }} • {{ job.location }}
                </div>
                <ul class="mt-2 mb-0">
                  <li v-for="(responsibility, j) in job.responsibilities" :key="'resp-'+j">
                    {{ responsibility }}
                  </li>
                </ul>
                <div v-if="job.technologies" class="mt-2">
                  <v-chip
                    v-for="(tech, k) in job.technologies"
                    :key="'tech-'+k"
                    size="small"
                    color="primary"
                    variant="outlined"
                    class="mr-1 mb-1"
                  >
                    {{ tech }}
                  </v-chip>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-col>

        <!-- Education -->
        <v-col cols="12" md="6">
          <div class="d-flex align-center mb-6">
            <v-icon size="40" color="primary" class="me-4">fas fa-graduation-cap</v-icon>
            <h2 class="text-h4 font-weight-bold">Educación</h2>
          </div>
          
          <v-timeline side="end" density="compact" class="ms-n4">
            <v-timeline-item
              v-for="(edu, i) in education"
              :key="'edu-'+i"
              dot-color="primary"
              size="small"
            >
              <div class="mb-6">
                <div class="d-flex justify-space-between flex-column flex-md-row">
                  <h3 class="text-h6 font-weight-bold">{{ edu.degree }}</h3>
                  <div class="text-caption text-md-body-2 text-medium-emphasis">
                    {{ edu.period }}
                  </div>
                </div>
                <div class="text-subtitle-2 mb-2">
                  {{ edu.institution }}
                </div>
                <p v-if="edu.description" class="mb-0">
                  {{ edu.description }}
                </p>
                <div v-if="edu.courses" class="mt-2">
                  <v-chip
                    v-for="(course, k) in edu.courses"
                    :key="'course-'+k"
                    size="small"
                    color="primary"
                    variant="outlined"
                    class="mr-1 mb-1"
                  >
                    {{ course }}
                  </v-chip>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>

          <!-- Certifications -->
          <div class="mt-10">
            <div class="d-flex align-center mb-4">
              <v-icon size="32" color="primary" class="me-3">fas fa-certificate</v-icon>
              <h2 class="text-h4 font-weight-bold">Certificaciones</h2>
            </div>
            
            <v-card
              v-for="(cert, i) in certifications"
              :key="'cert-'+i"
              class="mb-4"
              variant="outlined"
            >
              <v-card-item>
                <div class="d-flex">
                  <v-avatar
                    color="primary"
                    size="56"
                    class="me-4"
                    rounded="lg"
                  >
                    <v-icon size="32" color="white">fas fa-certificate</v-icon>
                  </v-avatar>
                  <div>
                    <div class="text-h6 font-weight-bold">{{ cert.name }}</div>
                    <div class="text-subtitle-1">{{ cert.issuer }}</div>
                    <div class="text-caption text-medium-emphasis">
                      {{ cert.date }}
                      <span v-if="cert.credentialId"> • ID: {{ cert.credentialId }}</span>
                    </div>
                    <v-btn
                      v-if="cert.url"
                      :href="cert.url"
                      target="_blank"
                      size="small"
                      variant="text"
                      color="primary"
                      class="mt-2 pa-0"
                      prepend-icon="fas fa-external-link-alt"
                    >
                      Ver credencial
                    </v-btn>
                  </div>
                </div>
              </v-card-item>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const workExperience = [
  {
    position: 'Desarrollador Full Stack',
    company: 'Empresa Tecnológica',
    location: 'Ciudad, País',
    period: 'Ene 2022 - Presente',
    current: true,
    responsibilities: [
      'Desarrollo y mantenimiento de aplicaciones web con Vue.js y Node.js',
      'Diseño e implementación de APIs RESTful',
      'Colaboración con equipos multidisciplinarios',
      'Optimización del rendimiento de aplicaciones'
    ],
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Docker', 'AWS']
  },
  {
    position: 'Desarrollador Frontend',
    company: 'Agencia Digital',
    location: 'Ciudad, País',
    period: 'Mar 2020 - Dic 2021',
    responsibilities: [
      'Desarrollo de interfaces de usuario con React y Vue.js',
      'Implementación de diseños responsivos',
      'Integración con APIs REST',
      'Mantenimiento y mejora de código existente'
    ],
    technologies: ['React', 'Vue.js', 'Redux', 'Sass', 'Git']
  },
  {
    position: 'Practicante de Desarrollo',
    company: 'Startup Tecnológica',
    location: 'Ciudad, País',
    period: 'Jun 2019 - Feb 2020',
    responsibilities: [
      'Asistencia en el desarrollo de funcionalidades',
      'Corrección de errores',
      'Pruebas de usuario',
      'Documentación técnica'
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Git']
  }
];

const education = [
  {
    degree: 'Ingeniería en Sistemas',
    institution: 'Universidad Tecnológica',
    period: '2016 - 2020',
    description: 'Enfoque en desarrollo de software y arquitectura de sistemas.',
    courses: ['Algoritmos', 'Bases de Datos', 'Redes', 'IA']
  },
  {
    degree: 'Bootcamp Full Stack',
    institution: 'Academia de Programación',
    period: '2019',
    description: 'Programa intensivo de desarrollo web full stack.'
  },
  {
    degree: 'Bachillerato Técnico',
    institution: 'Instituto Técnico',
    period: '2010 - 2015',
    description: 'Especialización en informática y programación.'
  }
];

const certifications = [
  {
    name: 'Vue.js - The Complete Guide',
    issuer: 'Udemy',
    date: 'Ene 2022',
    credentialId: 'UC-12345678',
    url: '#'
  },
  {
    name: 'Node.js Developer',
    issuer: 'Platzi',
    date: 'Nov 2021',
    credentialId: 'ABC123',
    url: '#'
  },
];
</script>

<style scoped>
.v-timeline-item__body {
  padding-bottom: 0;
}

ul {
  padding-left: 20px;
  margin-bottom: 0;
}

li {
  margin-bottom: 4px;
}

.v-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.v-card:hover {
  transform: translateY(-2px);
}
</style>
