<template>
  <div>
    <li class="catalog__item">
      <a class="catalog__pic" href="#">
        <img :src="product.image"  :alt="product.title">
      </a>
      <h3 class="catalog__title">
        <a href="#">
          {{ product.title }}
        </a>
      </h3>
      <span class="catalog__price">
        {{ product.price }}
      </span>
    </li>
    <ul class="colors colors--black">
      <li class="colors__item" v-for = "(_color, index) in product.colors" :key="index">
        <label class="colors__label">
          <input class="colors__radio sr-only"
          type="radio"
          :value="_color"
          v-model="color">
          <span class="colors__value"
          :style="{'background-color': _color}">
          </span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      color: 'this.product.colors[0]',
    };
  },
  props: ['product'],
};
</script>
