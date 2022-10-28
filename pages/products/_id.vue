<template>
  <app-loading v-if="loading"></app-loading>
  <div v-else class="wrapper">
    <div class="product-image">
      <div class="product-image__main">
        <img :src="product.thumbnail" :alt="product.title + ' image'">
      </div>
      <div class="product-image__truck">
        <div
          class="product-photo"
          v-for="(image, index) of product.images"
          :key="index"
        >
          <img :src="image" alt="photo">
        </div>
      </div>
    </div>
    <div class="product-info">
      <p class="product-category">/{{ product.category }}</p>
      <h2 class="product-title">
        {{ product.title }}
      </h2>
      <p class="product-brand">
        Brand: {{ product.brand }}
      </p>
      <p class="product-description">
        Description: {{ product.description }}
      </p>
      <p class="product-rating">
        Rating: {{ product.rating }}
      </p>
      <p class="product-stock">
        In stock: {{ product.stock ? product.stock : 'Not available' }}
      </p>
      <p class="product-price">
        Cost: <span>{{ product.price }}</span>$
      </p>
      <p class="product-discount">
        Discount: {{ product.discountPercentage }}%
      </p>
    </div>
  </div>

</template>

<script>
import {addSlugToUrl, changeUrl} from '~/helpers';
import AppLoading from '~/components/app-loading';

export default {
  name: 'product-page',
  components: {AppLoading},
  data() {
    return {};
  },
  computed: {
    product() {
      return this.$store.getters['products/PRODUCT'];
    },
    loading() {
      return this.$store.getters['products/LOADING'];
    }
  },
  head() {
    return {
      title: this.product.title
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  mounted() {
    changeUrl(addSlugToUrl(this.product.id, this.product.title));
    window.addEventListener('popstate', this.goBack);
  },
  destroyed() {
    window.removeEventListener('popstate', this.goBack);
  },
  async fetch({store, params}) {
    try {
      const id = +(params.id + '').split('-')[0];
      await store.dispatch('products/fetchProduct', id);

    } catch (e) {
      store.commit('products/changeError', 'Товар не найден');
    }
  }
};
</script>

<style scoped>
.wrapper {
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.product-image {
  width: 50%;
  padding: 30px;
}

.product-image__main {
  max-width: 100%;
  height: auto;
  margin-bottom: 30px;
}

.product-image__main img {
  max-width: 100%;
  height: auto;
  object-position: center;
  object-fit: contain;
}

.product-info {
  line-height: 140%;
}

.product-title {
  margin: 15px 0;
}

.product-image__truck {
  display: flex;
  align-items: center;
  max-width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 10px 0;
}

.product-image__truck::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  border-radius: 5px;
}

.product-image__truck::-webkit-scrollbar-track {
  background-color: #CCC;
}

.product-image__truck::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.7);
  border-radius: 5px;
}

.product-photo {
  width: 150px;
  height: 150px;
  object-fit: cover;
  object-position: center;
}

.product-photo + .product-photo {
  margin-left: 10px;
}

.product-photo img {
  width: 150px;
  height: 150px;
  object-fit: contain;
  object-position: center;
}

.product-info {
  width: 50%;
}

p + p {
  margin-top: 10px;
}

.product-category {
  font-size: 14px;
  letter-spacing: 0.7px;
}

.product-title {
  font-size: 36px;

}

.product-price span {
  font-size: 28px;
}

@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
    align-items: center;
  }
}

</style>
