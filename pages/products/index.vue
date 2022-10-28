<template>
  <div class="products">
    <h2 class="title">Products Page</h2>
    <app-loading v-if="loading"></app-loading>
    <div class="wrapper" v-else>
      <product-list></product-list>
    </div>
  </div>
</template>

<script>
import AppProductList from '~/components/product-list';
import AppLoading from '~/components/app-loading';

export default {
  name: 'products-page',
  components: {AppLoading, AppProductList},
  computed: {
    loading() {
      return this.$store.getters['products/LOADING'];
    }
  },
  async fetch({store}) {
    if (!store.getters['products/PRODUCTS'].length) {
      await store.dispatch('products/fetchAllProducts');
    }
  }
};
</script>

<style scoped>
.title {
  text-align: center;
  padding: 20px 0;
  margin-bottom: 40px;
  font-size: 32px;
}

.products {
  padding: 20px 0;
}

</style>
