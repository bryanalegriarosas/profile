<template>
  <div class="projects">
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
            <h1 class="text-h3 text-md-h2 font-weight-bold mb-4">Mis Proyectos</h1>
            <p class="text-h6 font-weight-regular">Algunos de mis trabajos más recientes</p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Projects Grid -->
    <v-container class="py-16">
      <v-row>
        <v-col
          v-for="(project, i) in projects"
          :key="i"
          cols="12"
          sm="6"
          lg="4"
          class="d-flex"
        >
          <v-card class="d-flex flex-column" height="100%" elevation="4" hover>
            <v-img
              :src="project.image"
              height="200"
              cover
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title class="text-white">{{ project.title }}</v-card-title>
            </v-img>
            
            <v-card-text class="flex-grow-1">
              <p>{{ project.description }}</p>
              <div class="mt-2">
                <v-chip
                  v-for="(tag, tagIndex) in project.tags"
                  :key="tagIndex"
                  size="small"
                  color="primary"
                  variant="outlined"
                  class="mr-1 mb-1"
                >
                  {{ tag }}
                </v-chip>
              </div>
            </v-card-text>
            
            <v-card-actions class="mt-auto">
              <v-spacer></v-spacer>
              <v-btn
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                color="primary"
                variant="text"
              >
                Demo
              </v-btn>
              <v-btn
                v-if="project.github"
                :href="project.github"
                target="_blank"
                variant="text"
                color="secondary"
              >
                <v-icon start>fab fa-github</v-icon>
                Código
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const projects = [
  {
    title: 'E-commerce App',
    description: 'Plataforma de comercio electrónico con carrito de compras, autenticación y pasarela de pago.',
    image: 'https://via.placeholder.com/600x400?text=E-commerce+App',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    demo: '#',
    github: '#'
  },
  {
    title: 'Sistema de Gestión',
    description: 'Aplicación web para la gestión de tareas y proyectos con seguimiento de tiempo.',
    image: 'https://via.placeholder.com/600x400?text=Task+Manager',
    tags: ['React', 'Firebase', 'Material-UI'],
    demo: '#',
    github: '#'
  },
  {
    title: 'Blog Personal',
    description: 'Blog personal con sistema de autenticación, comentarios y panel de administración.',
    image: 'https://via.placeholder.com/600x400?text=Personal+Blog',
    tags: ['Nuxt.js', 'Express', 'MongoDB'],
    demo: '#',
    github: '#'
  },
  {
    title: 'Aplicación del Tiempo',
    description: 'Aplicación meteorológica con pronóstico extendido y búsqueda por ubicación.',
    image: 'https://via.placeholder.com/600x400?text=Weather+App',
    tags: ['Vue.js', 'OpenWeather API', 'Vuetify'],
    demo: '#',
    github: '#'
  },
  {
    title: 'Red Social',
    description: 'Plataforma de red social con perfiles, publicaciones y mensajería en tiempo real.',
    image: 'https://via.placeholder.com/600x400?text=Social+Network',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    demo: '#',
    github: '#'
  },
  {
    title: 'Portafolio Personal',
    description: 'Sitio web personal para mostrar mis proyectos y habilidades como desarrollador.',
    image: 'https://via.placeholder.com/600x400?text=Portfolio',
    tags: ['Vue.js', 'Vuetify', 'Vue Router'],
    demo: '#',
    github: '#'
  }
];
</script>

<style scoped>
.v-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.v-card:hover {
  transform: translateY(-5px);
}
</style>
