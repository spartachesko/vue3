<template>
  <div>
    <div class="product__counter form__counter">
      <button type="button"
      aria-label="Убрать один товар"
      @click.prevent="minusOne">
        <svg width="10" height="10" fill="currentColor">
          <use xlink:href="#icon-minus"></use>
        </svg>
      </button>

      <input type="number" v-model.number="amount" name="count">

      <button type="button" aria-label="Добавить один товар"
      @click.prevent="plusOne">
        <svg width="10" height="10" fill="currentColor">
          <use xlink:href="#icon-plus"></use>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  props: ['value'],
  data() {
    return {
      amount: 0,
    };
  },

  mounted() {
    this.amount = this.value ? this.value : 0;
  },

  watch: {
    amount(val) {
      if (val > 0) {
        this.$emit('input', val);
      } else {
        this.amount = 1;
      }
    },
  },

  methods: {
    minusOne() {
      if (this.amount > 1) {
        this.amount -= 1;
      }
    },

    plusOne() {
      this.amount += 1;
    },
  },
};
</script>