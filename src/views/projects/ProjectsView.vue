<template>
  <div class="projects">
    <!-- Hero Section -->
    <v-sheet
      color="primary"
      class="d-flex align-center justify-center py-4"
      min-height="100"
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
              height="250"
              width="550"
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
                @click="openCredentials(project.credentials)"
                variant="tonal"
                color="secondary"
                class="me-2"
              >
                Credenciales
              </v-btn>
              <v-btn
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                variant="tonal"
                color="primary"
              >
                Ir al Demo
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Credentials Dialog -->
    <v-dialog v-model="credentialsDialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5 bg-primary text-white pa-4">
          Credenciales de Acceso
        </v-card-title>
        <v-card-text class="pa-4">
          <v-row class="mb-4">
            <v-col cols="12" class="mb-2">
              <div class="text-subtitle-1 mb-1">Usuario:</div>
              <v-text-field
                :model-value="currentCredentials.username"
                readonly
                outlined
                density="compact"
                hide-details
                append-inner-icon="mdi-content-copy"
                @click:append-inner="copyToClipboard(currentCredentials.username)"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="mb-2">
              <div class="text-subtitle-1 mb-1">Contraseña:</div>
              <v-text-field
                :model-value="currentCredentials.password"
                :type="showPassword ? 'text' : 'password'"
                readonly
                outlined
                density="compact"
                hide-details
                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showPassword = !showPassword"
                class="mb-2"
              ></v-text-field>
              <v-btn
                size="small"
                variant="text"
                color="primary"
                @click="copyToClipboard(currentCredentials.password)"
                prepend-icon="mdi-content-copy"
              >
                Copiar contraseña
              </v-btn>
            </v-col>
            <v-col cols="12" v-if="currentCredentials.note">
              <v-alert type="info" variant="tonal" class="mt-2">
                {{ currentCredentials.note }}
              </v-alert>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="justify-end pa-4">
          <v-btn color="primary" variant="text" @click="credentialsDialog = false">
            Cerrar
          </v-btn>
          <v-btn
            color="primary"
            variant="elevated"
            :href="currentDemoUrl"
            target="_blank"
            @click="credentialsDialog = false"
          >
            Ir al Demo
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  
    <!-- Snackbar para notificaciones -->
    <v-snackbar
      v-model="snackbar.show"
      :timeout="2000"
      :color="snackbar.color"
      location="top center"
      transition="slide-y-reverse-transition"
      class="mt-4"
    >
      <template v-slot:actions>
        <v-btn
          variant="text"
          @click="snackbar.show = false"
          icon="mdi-close"
          size="small"
        ></v-btn>
      </template>
      <div class="text-subtitle-1">{{ snackbar.message }}</div>
    </v-snackbar>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const credentialsDialog = ref(false);
const snackbar = ref({
  show: false,
  message: '',
  color: 'success'
});
const currentCredentials = ref({});
const showPassword = ref(false);
const currentDemoUrl = ref('');

const openCredentials = (credentials) => {
  currentCredentials.value = credentials || {};
  currentDemoUrl.value = projects.find(p => p.credentials === credentials)?.demo || '';
  credentialsDialog.value = true;
};

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    snackbar.value = {
      show: true,
      message: '¡Copiado al portapapeles!',
      color: 'success'
    };
  } catch (err) {
    console.error('Error al copiar: ', err);
    snackbar.value = {
      show: true,
      message: 'Error al copiar al portapapeles',
      color: 'error'
    };
  }
};

const projects = [
  {
    title: 'GNIUX',
    description: 'GNIUX es un sistema web tipo CRM inmobiliario que permite a usuarios (asesores o agencias) gestionar propiedades, ventas, rentas, análisis de mercado y relaciones con clientes. Está diseñado para centralizar y automatizar tareas relacionadas con la operación diaria de una inmobiliaria.',
    image: '/img/login-gniux.png',
    demo: 'https://gniux.apscreativas.dev',
    credentials: {
      username: 'bryan.alegria@apscreativas.com',
      password: '12345678',
      note: 'Puedes usar estas credenciales para acceder a la plataforma de demostración.'
    }
  },
  {
    title: 'Kolaboro',
    description: 'Kolaboro es un sistema web inmobiliario que permite gestionar propiedades, ventas, rentas, análisis de comparativo. Compartir inmuebles entre usuarios respaldados por el AMPI.',
    image: '/img/home-kolaboro.png',
    demo: 'https://kolaboro.apscreativas.dev',
    credentials: {
      username: 'bryan.alegria@apscreativas.com',
      password: '12345678',
      note: 'Estas credenciales te darán acceso a una cuenta de demostración con datos de ejemplo.'
    }
  },
  {
    title: 'AMPI',
    description: 'AMPI es un sistema web inmobiliario que permite gestionar propiedades, ventas, rentas, desarrollos, análisis de comparativo. La Bolsa Inmobiliaria De Los Profesionales Inmobiliarios. Herramienta para impulsar tu inventario por medio del intercambio comercial.',
    image: '/img/login-ampi.png',
    demo: 'https://ampi.apscreativas.dev',
    credentials: {
      username: 'mario@grupoarvi.com',
      password: 'ampi2023',
      note: 'Accede con estas credenciales para probar todas las funcionalidades de la aplicación.'
    }
  },
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
