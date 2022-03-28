<template>
  <div>
    <li class="catalog__item">
      <router-link
        class="catalog__pic"
        :to="{name: 'product', params: {id: product.id}}"
      >
        <img :src="product.image" :alt="product.title" />
      </router-link>
      <h3 class="catalog__title">
        <a href="#">
          {{ product.title }}
        </a>
      </h3>
      <span class="catalog__price">
        {{ product.price | numberFormat }} ₽
      </span>
    </li>
    <ul class="colors colors--black">
      <li
        class="colors__item"
        v-for="(_color, index) in product.colors"
        :key="index"
      >
        <label class="colors__label">
          <input
            class="colors__radio sr-only"
            type="radio"
            :value="_color"
            v-model="color"
          />
          <span class="colors__value" :style="{ 'background-color': _color }">
          </span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';

export default {
  data() {
    return {
      color: '',
    };
  },
  props: ['product'],
  filters: {
    numberFormat,
  },

  methods: {
    gotoPage,
  },
};
</script>