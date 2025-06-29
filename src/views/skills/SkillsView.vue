<template>
  <div class="skills">
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
            <h1 class="text-h3 text-md-h2 font-weight-bold mb-2">Mis Habilidades</h1>
            <p class="text-h6 font-weight-regular">Tecnologías y herramientas que utilizo</p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Skills Section -->
    <v-container class="py-4">
      <!-- Categories Navigation -->
      <v-tabs
        v-model="activeTab"
        grow
        color="primary"
        class="mb-6"
        :show-arrows="true"
        center-active
      >
        <v-tab value="frontend">
          <v-icon start>fas fa-laptop-code</v-icon>
          Frontend
        </v-tab>
        <v-tab value="backend">
          <v-icon start>fas fa-server</v-icon>
          Backend
        </v-tab>
        <v-tab value="tools">
          <v-icon start>fas fa-tools</v-icon>
          Herramientas
        </v-tab>
      </v-tabs>

      <v-window v-model="activeTab" class="elevation-1 rounded-lg">
        <!-- Frontend Skills -->
        <v-window-item value="frontend">
          <v-list lines="two" class="pa-0">
            <v-list-subheader class="text-h6 font-weight-bold bg-grey-lighten-4">
              <v-icon icon="fas fa-laptop-code" class="me-2"></v-icon>
              Habilidades de Frontend
            </v-list-subheader>
            <v-list-item
              v-for="(skill, i) in frontendSkills"
              :key="'front-' + i"
              :title="skill.name"
              :subtitle="skill.description || ''"
              class="py-3"
            >
              <template v-slot:prepend>
                <v-avatar :color="skill.color" size="50" class="me-4">
                  <v-icon :icon="skill.icon" size="24" color="white"></v-icon>
                </v-avatar>
              </template>
            </v-list-item>
          </v-list>
        </v-window-item>

        <!-- Backend Skills -->
        <v-window-item value="backend">
          <v-list lines="two" class="pa-0">
            <v-list-subheader class="text-h6 font-weight-bold bg-grey-lighten-4">
              <v-icon icon="fas fa-server" class="me-2"></v-icon>
              Habilidades de Backend
            </v-list-subheader>
            <v-list-item
              v-for="(skill, i) in backendSkills"
              :key="'back-' + i"
              :title="skill.name"
              :subtitle="skill.description || ''"
              class="py-3"
            >
              <template v-slot:prepend>
                <v-avatar :color="skill.color" size="50" class="me-4">
                  <v-icon :icon="skill.icon" size="24" color="white"></v-icon>
                </v-avatar>
              </template>
            </v-list-item>
          </v-list>
        </v-window-item>

        <!-- Tools & Other Skills -->
        <v-window-item value="tools">
          <v-list lines="two" class="pa-0">
            <v-list-subheader class="text-h6 font-weight-bold bg-grey-lighten-4">
              <v-icon icon="fas fa-tools" class="me-2"></v-icon>
              Herramientas
            </v-list-subheader>
            <v-list-item
              v-for="(skill, i) in otherSkills"
              :key="'other-' + i"
              :title="skill.name"
              :subtitle="skill.description || ''"
              class="py-3"
            >
              <template v-slot:prepend>
                <v-avatar :color="skill.color" size="50" class="me-4">
                  <v-icon :icon="skill.icon" size="24" color="white"></v-icon>
                </v-avatar>
              </template>
            </v-list-item>
          </v-list>
        </v-window-item>
      </v-window>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const activeTab = ref('frontend');

const frontendSkills = [
{ 
    name: 'JavaScript', 
    icon: 'fab fa-js', 
    color: 'yellow-darken-2',
    description: 'Programación del lado del cliente'
  },
  { 
    name: 'Vue.js', 
    icon: 'fab fa-vuejs', 
    color: 'green',
    description: 'Desarrollo de aplicaciones SPA'
  },
  { 
    name: 'TypeScript', 
    icon: 'fab fa-js', 
    color: 'blue-darken-2',
    description: 'Lenguaje de programación para interfaces de usuario'
  },
  { 
    name: 'Vuetify', 
    icon: 'fas fa-palette', 
    color: 'light-blue',
    description: 'Framework de UI para Vue.js'
  },
  {
    name: 'Bootstrap', 
    icon: 'fab fa-bootstrap', 
    color: 'blue',
    description: 'Framework de UI para desarrollo web'
  },
  { 
    name: 'Sass/SCSS', 
    icon: 'fab fa-sass', 
    color: 'blue',
    description: 'Preprocesador de CSS'
  },
  { 
    name: 'HTML5', 
    icon: 'fab fa-html5', 
    color: 'orange',
    description: 'Maquetación web semántica y accesible'
  },
  { 
    name: 'CSS3', 
    icon: 'fab fa-css3-alt', 
    color: 'blue',
    description: 'Estilos, animaciones y diseño responsivo'
  },
];

const backendSkills = [
  { 
    name: 'PHP', 
    icon: 'fab fa-php', 
    color: 'blue-darken-2',
    description: 'Lenguaje de programación para desarrollo web'
  },
  { 
    name: 'Laravel', 
    icon: 'fa-brands fa-laravel', 
    color: 'red-darken-1',
    description: 'Framework para aplicaciones web PHP'
  },
  { 
    name: 'MySQL', 
    icon: 'fas fa-database', 
    color: 'blue-darken-2',
    description: 'Base de datos relacional'
  },
  { 
    name: 'PostgreSQL', 
    icon: 'fas fa-database', 
    color: 'blue-darken-2',
    description: 'Base de datos relacional'
  },
  { 
    name: 'MariaDB', 
    icon: 'fas fa-database', 
    color: 'blue-darken-2',
    description: 'Base de datos relacional'
  },
  { 
    name: 'SQL', 
    icon: 'fas fa-database', 
    color: 'blue-grey',
    description: 'Lenguaje de consulta estructurada'
  },
  { 
    name: 'Java', 
    icon: 'fab fa-java', 
    color: 'green-darken-2',
    description: 'Lenguaje de programación versátil'
  },
];

const otherSkills = [
  { 
    name: 'Docker', 
    icon: 'fab fa-docker', 
    color: 'info',
    description: 'Contenedores de aplicaciones'
  },
  { 
    name: 'Git', 
    icon: 'fab fa-git-alt', 
    color: 'orange-darken-2',
    description: 'Control de versiones distribuido'
  },
  { 
    name: 'GitHub', 
    icon: 'fab fa-github', 
    color: 'black',
    description: 'Control de versiones distribuido'
  },
  {
    name: 'GitLab', 
    icon: 'fab fa-gitlab', 
    color: 'orange-darken-2',
    description: 'Control de versiones distribuido'
  },
  { 
    name: 'RESTful APIs', 
    icon: 'fas fa-code', 
    color: 'teal',
    description: 'Diseño e implementación de APIs REST'
  },
  { 
    name: 'Linux', 
    icon: 'fab fa-linux', 
    color: 'red-darken-2',
    description: 'Sistema operativo y línea de comandos'
  },
  { 
    name: 'Vite', 
    icon: 'fa-brands fa-vuejs', 
    color: 'primary',
    description: 'Herramienta de construcción de frontend'
  },
  {
    name: 'Pinia y Vuex', 
    icon: 'fa-brands fa-raspberry-pi', 
    color: 'blue-darken-2',
    description: 'Gestor de estado para Vue.js'
  },
  { 
    name: 'NPM', 
    icon: 'fab fa-npm', 
    color: 'amber',
    description: 'Gestor de paquetes de Node.js'
  },
  { 
    name: 'Composer', 
    icon: 'fa-solid fa-gear', 
    color: 'purple',
    description: 'Gestor de dependencias para PHP'
  },
  {
    name: 'Jira', 
    icon: 'fab fa-jira', 
    color: 'blue-darken-2',
    description: 'Gestor de proyectos'
  },
  {
    name: 'Stripe API', 
    icon: 'fab fa-stripe', 
    color: 'cyan-darken-2',
    description: 'Gestor de pagos'
  },
  {
    name: 'PayPal API', 
    icon: 'fab fa-paypal', 
    color: 'green-darken-2',
    description: 'Gestor de pagos'
  },
];

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
.skills {
  min-height: 100vh;
}

.v-list-item {
  transition: all 0.3s ease;
}

.v-list-item:hover {
  background-color: rgba(0, 0, 0, 0.02);
  transform: translateX(5px);
}

/* Ajustes para móviles */
@media (max-width: 600px) {
  .v-tab {
    min-width: auto;
    font-size: 0.7rem;
    padding: 0 8px;
  }
  
  .v-tab .v-icon {
    margin-right: 4px;
  }
  
  .v-list-item {
    padding-left: 8px;
    padding-right: 8px;
  }
  
  .v-list-item__prepend {
    margin-right: 12px !important;
  }
  
  .v-avatar {
    width: 40px !important;
    height: 40px !important;
  }
}
</style>
