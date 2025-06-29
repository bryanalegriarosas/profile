<template>
  <div class="home">
    <!-- Hero Section -->
    <v-sheet
      color="primary"
      class="d-flex align-center justify-center"
      min-height="90vh"
      rounded="0"
    >
      <v-container>
        <v-row align="center" class="text-white">
          <v-col cols="12" md="6" class="text-center text-md-left">
            <h1 class="text-h3 text-md-h2 font-weight-bold mb-4">
              Hola, soy <span class="text-secondary">Bryan Alegria</span>
            </h1>
            <h2 class="text-h5 text-md-h4 mb-6">
              Desarrollador Full Stack
            </h2>
            <p class="text-body-1 mb-8">
              Apasionado por crear soluciones web innovadoras y de alto rendimiento
              con las últimas tecnologías del mercado.
            </p>
            <div class="d-flex flex-wrap justify-center justify-md-start">
              <v-btn
                color="secondary"
                size="large"
                class="me-4 mb-4"
                @click="$router.push('/contact')"
              >
                Contáctame
              </v-btn>
              <v-btn
                variant="outlined"
                color="white"
                size="large"
                class="mb-4"
                @click="$router.push('/projects')"
              >
                Mis Proyectos
              </v-btn>
            </div>
          </v-col>
          <!--<v-col cols="12" md="6" class="d-none d-md-flex justify-center">
            <v-avatar size="400" class="elevation-12">
              <i class="fa-solid fa-user-tie" style="font-size: 250px; color: white"></i>
            </v-avatar>
          </v-col>-->
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Sobre Mí -->
    <v-sheet class="py-16" elevation="0" rounded="0">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" class="text-center mb-10">
            <h2 class="text-h4 font-weight-bold mb-4">Sobre Mí</h2>
            <v-divider class="mx-auto" width="100" color="primary"></v-divider>
          </v-col>
          <v-col cols="12" md="8" class="text-justify">
            <p class="text-body-1 mb-6">
              Desarrollador backend con más de 3 años de experiencia utilizando Laravel y MySQL. 
              Cuento con ambientes "stage" de los proyectos en los que colaboré. 
              También tengo experiencia en frontend con Vue.js y actualmente estoy retomando conocimientos en Java.
            </p>
            <v-btn
              color="primary"
              variant="outlined"
              @click="$router.push('/experience')"
            >
              Ver mi experiencia
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Habilidades Destacadas -->
    <v-sheet color="grey-lighten-4" class="py-16" elevation="0" rounded="0">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" class="text-center mb-10">
            <h2 class="text-h4 font-weight-bold mb-4">Habilidades</h2>
            <v-divider class="mx-auto" width="100" color="primary"></v-divider>
          </v-col>
          
          <v-col
            v-for="(skill, i) in skills"
            :key="i"
            cols="6"
            sm="4"
            md="2"
            class="text-center"
          >
            <v-avatar size="80" class="mb-4 bg-white">
              <v-icon size="40" :color="skill.color">
                {{ skill.icon }}
              </v-icon>
            </v-avatar>
            <h3 class="text-subtitle-1 font-weight-medium">
              {{ skill.name }}
            </h3>
          </v-col>
          
          <v-col cols="12" class="text-center mt-8">
            <v-btn
              color="primary"
              @click="$router.push('/skills')"
            >
              Ver todas mis habilidades
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script setup>
const skills = [
  { name: 'PHP', icon: 'fab fa-php', color: 'primary' },
  { name: 'JavaScript', icon: 'fab fa-js', color: 'warning' },
  { name: 'Vue.js', icon: 'fab fa-vuejs', color: 'success' },
  { name: 'HTML5', icon: 'fab fa-html5', color: 'orange' },
  { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'info' },
  { name: 'Git', icon: 'fab fa-git-alt', color: 'grey-darken-3' },
];
</script>

<style scoped>
.v-sheet {
  transition: all 0.3s ease;
}
</style>
