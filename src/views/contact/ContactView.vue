<template>
  <div class="contact">
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
            <h1 class="text-h3 text-md-h2 font-weight-bold mb-2">Contacto</h1>
            <p class="text-h6 font-weight-regular">¡Hablemos! Estoy disponible para nuevas oportunidades.</p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Contact Content -->
    <v-container class="my-2">
      <v-row justify="center">
        <!-- Contact Info -->
        <v-col cols="12" md="8" xl="6">
          <v-card class="pa-4" elevation="4">
            <v-card-text>
              <v-list lines="two" class="py-0">
                <v-list-item class="px-0">
                  <template v-slot:prepend>
                    <v-icon icon="fas fa-envelope" color="primary" class="me-4"></v-icon>
                  </template>
                  <v-list-item-title class="text-h6">Correo Electrónico</v-list-item-title>
                  <v-list-item-subtitle>
                    <a href="mailto:bryanalegriarosas@gmail.com" class="text-decoration-none">bryanalegriarosas@gmail.com</a>
                  </v-list-item-subtitle>
                </v-list-item>
                
                <v-divider class="my-4"></v-divider>
                
                <v-list-item class="px-0">
                  <template v-slot:prepend>
                    <v-icon icon="fas fa-phone" color="primary" class="me-4"></v-icon>
                  </template>
                  <v-list-item-title class="text-h6">Teléfono</v-list-item-title>
                  <v-list-item-subtitle>
                    <a href="tel:+529935911033" class="text-decoration-none">+52 9935911033</a>
                  </v-list-item-subtitle>
                </v-list-item>
                
                <v-divider class="my-4"></v-divider>
                
                <v-list-item class="px-0">
                  <template v-slot:prepend>
                    <v-icon icon="fas fa-map-marker-alt" color="primary" class="me-4"></v-icon>
                  </template>
                  <v-list-item-title class="text-h6">Ubicación</v-list-item-title>
                  <v-list-item-subtitle>Tabasco, México</v-list-item-subtitle>
                </v-list-item>
              </v-list>
              
              <div class="text-center mt-8">
                <div class="text-h6 mb-4">Redes Sociales</div>
                <div class="d-flex justify-center">
                  <v-btn
                    v-for="(social, i) in socialLinks"
                    :key="i"
                    :href="social.url"
                    target="_blank"
                    :icon="social.icon"
                    variant="text"
                    size="large"
                    class="mx-2"
                    color="primary"
                  ></v-btn>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const socialLinks = [
  { 
    icon: 'fab fa-github', 
    url: 'https://github.com/bryanalegriarosas',
    name: 'GitHub'
  },
  { 
    icon: 'fab fa-linkedin-in', 
    url: 'https://www.linkedin.com/in/bryan-de-jesus-alegria-rosas-918a501a7/',
    name: 'LinkedIn'
  },
];
</script>

<style scoped>
.v-card {
  border-radius: 16px;
  overflow: hidden;
}

.v-list-item {
  padding-left: 0;
  padding-right: 0;
}

.v-list-item__prepend {
  margin-right: 16px;
}

a {
  transition: color 0.2s ease;
}

a:hover {
  color: var(--v-primary-base);
}

.v-btn--icon {
  transition: all 0.3s ease;
}

.v-btn--icon:hover {
  transform: translateY(-3px);
  background-color: rgba(var(--v-theme-primary), 0.1);
}
</style>
