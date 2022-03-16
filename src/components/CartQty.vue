<template>
  <div>
    <div class="product__counter form__counter">
      <button type="button"
      aria-label="Убрать один товар"
      @click.prevent="minusProduct(item.productId)">
        <svg width="10" height="10" fill="currentColor">
          <use xlink:href="#icon-minus"></use>
        </svg>
      </button>

      <input type="text" v-model.number="amount" name="count">

      <button type="button" aria-label="Добавить один товар"
      @click.prevent="plusProduct(item.productId)">
        <svg width="10" height="10" fill="currentColor">
          <use xlink:href="#icon-plus"></use>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['item'],

  computed: {
    amount: {
      get() {
        return this.item.amount;
      },
      set(value) {
        this.$store.commit('updateCartProductAmount', { productId: this.item.productId, amount: value });
      },
    },
  },

  methods: {
    ...mapMutations({
      deleteProduct: 'deleteCartProduct',
      minusProduct: 'minusCartProduct',
      plusProduct: 'plusCartProduct',
    }),
  },
};
</script>
