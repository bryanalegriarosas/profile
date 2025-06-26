<template>
  <v-footer color="secondary" class="text-white mt-10">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="text-center text-md-left">
          <h3 class="text-h6 font-weight-bold mb-4">Sígueme</h3>
          <div class="d-flex justify-center justify-md-start">
            <v-btn
              v-for="(social, i) in socialLinks"
              :key="i"
              :href="social.url"
              target="_blank"
              variant="text"
              :icon="social.icon"
              class="text-white mx-1"
              size="small"
            >
              <template v-slot:default>
                <v-icon :icon="social.icon" size="small"></v-icon>
              </template>
            </v-btn>
          </div>
        </v-col>
        
        <v-col cols="12" md="4" class="text-center">
          <h3 class="text-h6 font-weight-bold mb-4">Enlaces rápidos</h3>
          <v-list class="bg-transparent" density="compact">
            <v-list-item
              v-for="(item, i) in navItems"
              :key="i"
              :to="item.to"
              :prepend-icon="item.icon"
              class="text-white"
              link
            >
              <template v-slot:prepend>
                <v-icon :icon="item.icon" size="small" class="me-2"></v-icon>
              </template>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        
        <v-col cols="12" md="4" class="text-center text-md-right">
          <h3 class="text-h6 font-weight-bold mb-4">Contacto</h3>
          <p class="mb-2 d-flex align-center justify-center justify-md-end">
            <v-icon icon="fas fa-envelope" class="me-2" size="small"></v-icon>
            <a href="mailto:contacto@midominio.com" class="text-white text-decoration-none">contacto@midominio.com</a>
          </p>
          <p class="d-flex align-center justify-center justify-md-end">
            <v-icon icon="fas fa-phone" class="me-2" size="small"></v-icon>
            <a href="tel:+1234567890" class="text-white text-decoration-none">+123 456 7890</a>
          </p>
          <p class="d-flex align-center justify-center justify-md-end mt-2">
            <v-icon icon="fas fa-map-marker-alt" class="me-2" size="small"></v-icon>
            <span>Ciudad, País</span>
          </p>
        </v-col>
      </v-row>
      
      <v-divider class="my-4"></v-divider>
      
      <div class="text-center">
        &copy; {{ new Date().getFullYear() }} Mi Portafolio. Todos los derechos reservados.
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
const navItems = [
  { title: 'Inicio', to: '/', icon: 'fas fa-home' },
  { title: 'Proyectos', to: '/projects', icon: 'fas fa-project-diagram' },
  { title: 'Habilidades', to: '/skills', icon: 'fas fa-code' },
  { title: 'Experiencia', to: '/experience', icon: 'fas fa-briefcase' },
  { title: 'Contacto', to: '/contact', icon: 'fas fa-envelope' },
];

const socialLinks = [
  { icon: 'fab fa-github', url: 'https://github.com/tu-usuario' },
  { icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/in/tu-usuario' },
  { icon: 'fab fa-twitter', url: 'https://twitter.com/tu-usuario' },
  { icon: 'fab fa-instagram', url: 'https://instagram.com/tu-usuario' },
  { icon: 'fab fa-youtube', url: 'https://youtube.com/tu-canal' },
];
</script>

<style scoped>
.v-footer {
  margin-top: auto;
}
</style>
