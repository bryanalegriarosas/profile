<template>
  <div class="contact">
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
            <h1 class="text-h3 text-md-h2 font-weight-bold mb-4">Contacto</h1>
            <p class="text-h6 font-weight-regular">¡Hablemos sobre tu próximo proyecto!</p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Contact Content -->
    <v-container class="my-16">
      <v-row>
        <!-- Contact Form -->
        <v-col cols="12" md="7" class="mb-10 mb-md-0 pe-md-8">
          <h2 class="text-h4 font-weight-bold mb-6">Envíame un mensaje</h2>
          
          <v-form @submit.prevent="submitForm" v-model="isFormValid">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.name"
                  label="Nombre"
                  :rules="[v => !!v || 'El nombre es requerido']"
                  variant="outlined"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.email"
                  label="Correo electrónico"
                  :rules="emailRules"
                  variant="outlined"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.subject"
                  label="Asunto"
                  :rules="[v => !!v || 'El asunto es requerido']"
                  variant="outlined"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="form.message"
                  label="Mensaje"
                  :rules="[v => !!v || 'El mensaje es requerido']"
                  variant="outlined"
                  rows="5"
                  required
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-btn
                  type="submit"
                  color="primary"
                  size="large"
                  :loading="isLoading"
                  :disabled="!isFormValid || isLoading"
                >
                  <v-icon start>fas fa-paper-plane</v-icon>
                  Enviar mensaje
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>

        <!-- Contact Info -->
        <v-col cols="12" md="5" class="ps-md-8">
          <h2 class="text-h4 font-weight-bold mb-6">Información de contacto</h2>
          
          <v-card variant="flat" class="mb-6">
            <v-card-text>
              <div class="d-flex mb-4">
                <v-icon icon="fas fa-envelope" size="large" class="me-4" color="primary"></v-icon>
                <div>
                  <div class="text-subtitle-2 text-medium-emphasis">Correo electrónico</div>
                  <a href="mailto:contacto@midominio.com" class="text-body-1 text-decoration-none">contacto@midominio.com</a>
                </div>
              </div>
              
              <div class="d-flex mb-4">
                <v-icon icon="fas fa-phone" size="large" class="me-4" color="primary"></v-icon>
                <div>
                  <div class="text-subtitle-2 text-medium-emphasis">Teléfono</div>
                  <a href="tel:+1234567890" class="text-body-1 text-decoration-none">+1 (234) 567-890</a>
                </div>
              </div>
              
              <div class="d-flex mb-4">
                <v-icon icon="fas fa-map-marker-alt" size="large" class="me-4" color="primary"></v-icon>
                <div>
                  <div class="text-subtitle-2 text-medium-emphasis">Ubicación</div>
                  <div class="text-body-1">Ciudad, País</div>
                </div>
              </div>
              
              <div class="mt-8">
                <div class="text-subtitle-2 text-medium-emphasis mb-4">Sígueme</div>
                <div class="d-flex">
                  <v-btn
                    v-for="(social, i) in socialLinks"
                    :key="i"
                    :href="social.url"
                    target="_blank"
                    :icon="social.icon"
                    variant="text"
                    size="large"
                    color="primary"
                    class="mx-1"
                  ></v-btn>
                </div>
              </div>
            </v-card-text>
          </v-card>
          
          <!-- Map -->
          <div class="elevation-2 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209132066!2d-73.98731968459379!3d40.75889597932689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="250"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Success Dialog -->
    <v-dialog v-model="showSuccessDialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5 bg-success text-white">
          <v-icon icon="fas fa-check-circle" class="me-2"></v-icon>
          Mensaje enviado
        </v-card-title>
        <v-card-text class="pa-4">
          <p class="text-body-1">¡Gracias por tu mensaje! Me pondré en contacto contigo lo antes posible.</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="showSuccessDialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isFormValid = ref(false);
const isLoading = ref(false);
const showSuccessDialog = ref(false);

const emailRules = [
  v => !!v || 'El correo es requerido',
  v => /.+@.+\..+/.test(v) || 'El correo debe ser válido',
];

const socialLinks = [
  { icon: 'fab fa-github', url: 'https://github.com/tu-usuario' },
  { icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/in/tu-usuario' },
  { icon: 'fab fa-twitter', url: 'https://twitter.com/tu-usuario' },
  { icon: 'fab fa-instagram', url: 'https://instagram.com/tu-usuario' },
];

const submitForm = () => {
  if (isFormValid.value) {
    isLoading.value = true;
    
    // Simular envío del formulario
    setTimeout(() => {
      console.log('Formulario enviado:', form.value);
      isLoading.value = false;
      showSuccessDialog.value = true;
      
      // Resetear formulario
      form.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }, 1500);
  }
};
</script>

<style scoped>
.contact-info-item {
  margin-bottom: 24px;
}

.v-btn--icon {
  border-radius: 8px;
  transition: all 0.3s ease;
}

.v-btn--icon:hover {
  transform: translateY(-3px);
  background-color: rgba(var(--v-theme-primary), 0.1);
}

.contact-form .v-field {
  border-radius: 8px;
}

.v-card {
  border-radius: 12px;
}
</style>
