import {API} from '~/CONST';

export const state = () => ({
  products: [],
  isLoading: false,
  error: null,
  product: {}
});

export const getters = {
  PRODUCTS: state => state.products,
  PRODUCT: state => state.product,
  LOADING: state => state.isLoading,
  ERROR: state => state.error
};

export const mutations = {
  changeProducts(state, products) {
    state.products = products;
  },
  changeProduct(state, product) {
    state.product = product;
  },
  changeLoading(state) {
    state.isLoading = !state.isLoading;
  },
  changeError(state, error) {
    state.error = error;
  }
};

export const actions = {
  async fetchAllProducts({commit}) {
    try {
      commit('changeLoading');
      const data = await this.$axios.get(API.PRODUCTS);
      commit('changeProducts', data.data.products);
    } catch (e) {
      commit('changeError', e.message);
      console.log(e.message);
    } finally {
      commit('changeLoading');
    }
  },

  async fetchProduct({commit}, id) {
    try {
      commit('changeLoading');
      const data = await this.$axios.get(API.PRODUCT_ITEM(id));
      commit('changeProduct', data.data);
    } catch (e) {
      commit('changeError', e.message);
      console.log(e.message);
    } finally {
      commit('changeLoading');
    }
  }
};
