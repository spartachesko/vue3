<template>
  <component :is="currentPageComponent"/>
</template>

<script>
import MainPage from '@/pages/MainPage.vue';
import ProductPage from '@/pages/ProductPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const routes = {
  main: 'MainPage',
  product: 'ProductPage',
};

export default {
  data() {
    return {
      currentPage: 'main',
    };
  },

  computed: {
    currentPageComponent() {
      return routes[this.currentPage] || 'NotFoundPage';
    },
  },

  components: {
    MainPage,
    ProductPage,
    NotFoundPage,
  },
};
</script>
