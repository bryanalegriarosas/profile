<template>
  <v-app-bar color="primary" density="default" elevation="0">
    <v-app-bar-nav-icon @click="$emit('toggle-drawer')" class="d-md-none">
      <v-icon>fas fa-bars</v-icon>
    </v-app-bar-nav-icon>
    
    <v-toolbar-title class="text-h5 font-weight-bold d-flex align-center">
      <v-icon icon="fas fa-code" class="me-2"></v-icon>
      <router-link to="/" class="text-white text-decoration-none">
        Mi Portafolio
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Desktop Navigation -->
    <div class="d-none d-md-flex">
      <v-btn
        v-for="(item, i) in navItems"
        :key="i"
        :to="item.to"
        variant="text"
        class="text-white mx-1"
        active-class="text-secondary"
        :prepend-icon="item.icon"
      >
        {{ item.title }}
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script setup>
const navItems = [
  { title: 'Inicio', to: '/', icon: 'fas fa-home' },
  { title: 'Proyectos', to: '/projects', icon: 'fas fa-project-diagram' },
  { title: 'Habilidades', to: '/skills', icon: 'fas fa-code' },
  { title: 'Experiencia', to: '/experience', icon: 'fas fa-briefcase' },
  { title: 'Contacto', to: '/contact', icon: 'fas fa-envelope' },
];
</script>
