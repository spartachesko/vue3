<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a class="pagination__link
      pagination__link--arrow"
      :class="classLinkDisabledLeft"
      aria-label="Предыдущая страница"
      @click.prevent="previousPage()">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>
    <li class="pagination__item"
    v-for="pageNumber in pages"
    :key="pageNumber">
      <a href="#"
      class="pagination__link"
      :class="{'pagination__link--current': pageNumber === page}"
      @click.prevent="paginate(pageNumber)">
        {{ pageNumber }}
      </a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link
      pagination__link--arrow"
      :class="classLinkDisabledRight"
      href="#"
      aria-label="Следующая страница"
      @click.prevent="nextPage()">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>

export default {
  model: {
    prop: 'page',
    event: 'paginate',
  },
  props: ['page', 'count', 'perPage'],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
    classLinkDisabledLeft() {
      return {
        'pagination__link--disabled': this.page === 1,
      };
    },
    classLinkDisabledRight() {
      const quantityPages = this.pages();
      return {
        'pagination__link--disabled': this.page === quantityPages.length,
      };
    },
  },
  methods: {
    paginate(page) {
      this.$emit('paginate', page);
    },
    nextPage() {
      this.paginate(this.page + 1);
    },
    previousPage() {
      this.paginate(this.page - 1);
    },
  },
};
</script>
