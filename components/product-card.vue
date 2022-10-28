<template>
  <div class="product-card">
    <p class="product-category">
      /{{ product.category }}
    </p>
    <div class="product-image">
      <img
        :src="product.thumbnail"
        :alt="product.title + ' image'"
      >
    </div>
    <h2 class="product-title">
      <NuxtLink class="product-link" :to="'/products/' + product.id">
        {{ product.title }}
      </NuxtLink>
    </h2>
    <p class="product-description">
      {{ product.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'product-card',
  props: ['product']
};
</script>

<style scoped>
.product-card {
  width: 300px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  transition: 0.2s;
}

.product-card:hover {
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
}

.product-category {
  margin-bottom: 10px;
}

.product-image {
  width: 280px;
  height: 200px;
  text-align: center;
  margin-bottom: 30px;
}

.product-image img {
  max-width: 280px;
  height: 200px;
  object-fit: contain;
  object-position: center;
}

.product-title {
  text-align: center;
  margin-bottom: 10px;
}

.product-link {
  color: inherit;
  text-decoration: none;
}

.product-link:hover {
  text-decoration: underline;
}

.product-description {
  padding: 5px;

}

</style>
