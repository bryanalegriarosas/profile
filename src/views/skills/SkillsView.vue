<template>
  <div class="skills">
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
            <h1 class="text-h3 text-md-h2 font-weight-bold mb-4">Mis Habilidades</h1>
            <p class="text-h6 font-weight-regular">Tecnologías y herramientas que utilizo</p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Skills Section -->
    <v-container class="py-16">
      <!-- Frontend Skills -->
      <v-row class="mb-10">
        <v-col cols="12" class="text-center mb-8">
          <v-icon size="60" color="primary" class="mb-4">fas fa-laptop-code</v-icon>
          <h2 class="text-h4 font-weight-bold mb-4">Frontend</h2>
          <v-divider class="mx-auto" width="100" color="primary"></v-divider>
        </v-col>
        <v-col
          v-for="(skill, i) in frontendSkills"
          :key="'front-'+i"
          cols="6"
          sm="4"
          md="3"
          lg="2"
          class="text-center"
        >
          <v-card variant="flat" class="h-100 pa-4" hover>
            <v-avatar size="80" class="mb-4 bg-grey-lighten-4">
              <v-icon size="40" :color="skill.color">
                {{ skill.icon }}
              </v-icon>
            </v-avatar>
            <h3 class="text-subtitle-1 font-weight-medium mb-2">
              {{ skill.name }}
            </h3>
            <v-rating
              v-model="skill.level"
              color="amber"
              size="small"
              readonly
              half-increments
              density="compact"
            ></v-rating>
          </v-card>
        </v-col>
      </v-row>

      <!-- Backend Skills -->
      <v-row class="mb-10">
        <v-col cols="12" class="text-center mb-8">
          <v-icon size="60" color="primary" class="mb-4">mdi-server</v-icon>
          <h2 class="text-h4 font-weight-bold mb-4">Backend</h2>
          <v-divider class="mx-auto" width="100" color="primary"></v-divider>
        </v-col>
        <v-col
          v-for="(skill, i) in backendSkills"
          :key="'back-'+i"
          cols="6"
          sm="4"
          md="3"
          lg="2"
          class="text-center"
        >
          <v-card variant="flat" class="h-100 pa-4" hover>
            <v-avatar size="80" class="mb-4 bg-grey-lighten-4">
              <v-icon size="40" :color="skill.color">
                {{ skill.icon }}
              </v-icon>
            </v-avatar>
            <h3 class="text-subtitle-1 font-weight-medium mb-2">
              {{ skill.name }}
            </h3>
            <v-rating
              v-model="skill.level"
              color="amber"
              size="small"
              readonly
              half-increments
              density="compact"
            ></v-rating>
          </v-card>
        </v-col>
      </v-row>

      <!-- Tools & Other Skills -->
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <v-icon size="60" color="primary" class="mb-4">mdi-tools</v-icon>
          <h2 class="text-h4 font-weight-bold mb-4">Herramientas y Otros</h2>
          <v-divider class="mx-auto" width="100" color="primary"></v-divider>
        </v-col>
        <v-col
          v-for="(skill, i) in otherSkills"
          :key="'other-'+i"
          cols="6"
          sm="4"
          md="3"
          lg="2"
          class="text-center"
        >
          <v-card variant="flat" class="h-100 pa-4" hover>
            <v-avatar size="80" class="mb-4 bg-grey-lighten-4">
              <v-icon size="40" :color="skill.color">
                {{ skill.icon }}
              </v-icon>
            </v-avatar>
            <h3 class="text-subtitle-1 font-weight-medium mb-2">
              {{ skill.name }}
            </h3>
            <v-rating
              v-model="skill.level"
              color="amber"
              size="small"
              readonly
              half-increments
              density="compact"
            ></v-rating>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const frontendSkills = [
  { name: 'HTML5', icon: 'fab fa-html5', color: 'orange', level: 4.5 },
  { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'blue', level: 4.5 },
  { name: 'JavaScript', icon: 'fab fa-js', color: 'warning', level: 4 },
  { name: 'Vue.js', icon: 'fab fa-vuejs', color: 'success', level: 4.5 },
  { name: 'React', icon: 'fab fa-react', color: 'info', level: 4 },
  { name: 'Vuetify', icon: 'fas fa-palette', color: 'primary', level: 4.5 },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: 'purple', level: 4 },
  { name: 'Sass/SCSS', icon: 'fab fa-sass', color: 'pink', level: 4 },
];

const backendSkills = [
  { name: 'Node.js', icon: 'fab fa-node-js', color: 'success', level: 4.5 },
  { name: 'Express', icon: 'fas fa-server', color: 'grey-darken-3', level: 4 },
  { name: 'Python', icon: 'fab fa-python', color: 'blue', level: 3.5 },
  { name: 'Django', icon: 'fab fa-python', color: 'green-darken-2', level: 3 },
  { name: 'MongoDB', icon: 'fas fa-database', color: 'green', level: 3.5 },
  { name: 'PostgreSQL', icon: 'fas fa-database', color: 'blue', level: 4 },
  { name: 'RESTful APIs', icon: 'fas fa-code', color: 'teal', level: 4 },
  { name: 'GraphQL', icon: 'fas fa-project-diagram', color: 'pink', level: 3.5 },
];

const otherSkills = [
  { name: 'Git', icon: 'fab fa-git-alt', color: 'orange-darken-2', level: 4.5 },
  { name: 'Docker', icon: 'fab fa-docker', color: 'info', level: 3.5 },
  { name: 'AWS', icon: 'fab fa-aws', color: 'amber', level: 3 },
  { name: 'Firebase', icon: 'fas fa-fire', color: 'orange', level: 3.5 },
  { name: 'Figma', icon: 'fab fa-figma', color: 'purple', level: 3.5 },
  { name: 'Linux', icon: 'fab fa-linux', color: 'grey-darken-3', level: 4 },
  { name: 'CI/CD', icon: 'fas fa-code-branch', color: 'blue-grey', level: 3.5 },
  { name: 'Agile/Scrum', icon: 'fas fa-users', color: 'green', level: 4 },
];
</script>

<style scoped>
.v-card {
  transition: transform 0.3s ease;
}

.v-card:hover {
  transform: translateY(-5px);
}
</style>
