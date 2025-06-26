<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import AppBar from '@/components/layout/AppBar.vue';
import AppFooter from '@/components/layout/AppFooter.vue';

const drawer = ref(false);
const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>

<template>
  <v-app>
    <app-bar @toggle-drawer="toggleDrawer" />
    
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item
          v-for="(item, i) in [
            { title: 'Inicio', to: '/' },
            { title: 'Proyectos', to: '/projects' },
            { title: 'Habilidades', to: '/skills' },
            { title: 'Experiencia', to: '/experience' },
            { title: 'Contacto', to: '/contact' },
          ]"
          :key="i"
          :to="item.to"
          :title="item.title"
          link
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid class="pa-0">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </v-container>
    </v-main>

    <app-footer />
  </v-app>
</template>

<style scoped>
.font {
  font-family: 'Outfit', sans-serif;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
