<template>
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
</template>

<script>

export default{
    props: ['product', 'index']
}
</script>
