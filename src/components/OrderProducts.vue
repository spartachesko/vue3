<template>
  <div class="cart__block">
    <ul class="cart__orders">
      <li class="cart__order"
      v-for="item in products"
      :key="item.id"
      >
        <h3>Смартфон Xiaomi Redmi Note 7 Pro 6/128GB</h3>
        <b>18 990 ₽</b>
        <span>Артикул: 150030</span>
      </li>
    </ul>

    <div class="cart__total">
      <p>Доставка: <b>500 ₽</b></p>
      <p>Итого: <b>3</b> товара на сумму <b>{{ totalPrice }} ₽</b></p>
    </div>
  </div>
</template>

<script>
import numberFormat from '@/helpers/numberFormat';
import { mapGetters } from 'vuex';

export default {
  filters: {
    numberFormat,
  },

  computed: {
    ...mapGetters({
      products: 'cartDetailProducts',
      totalPrice: 'cartTotalPrice',
      totalProducts: 'cartTotalProducts',
      orderInfo: 'showOrderInfo',
    }),
  },
  created() {
    console.log('orderInfo-', this.orderInfo);
  },

};
</script>