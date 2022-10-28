<template>
  <div class="products-list">
    <product-card
      v-for="product of products"
      :key="product.id"
      :product="product"
    ></product-card>
  </div>
</template>

<script>
import AppProductCard from './product-card';

export default {
  name: 'product-list',
  components: {AppProductCard},

  computed: {
    products() {
      return this.$store.getters['products/PRODUCTS'];
    }
  }
};
</script>

<style scoped>
.products-list {
  padding: 20px;
  border: 2px solid #CCC;
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 15px;
}
</style>
