<template>
  <header class="header">
    <div class="wrapper">
      <div class="logo">KomTransBel</div>
      <nav class="navigation">
        <ul class="navigation__list">
          <li class="navigation__item">
            <NuxtLink class="navigation__link" to="/">Home</NuxtLink>
          </li>
          <li class="navigation__item">
            <NuxtLink class="navigation__link" to="/products">Products</NuxtLink>
          </li>
        </ul>
      </nav>
      <button class="login">
        <svg class="login__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="320" height="448"
             viewBox="0 0 320 448">
          <path
            d="M320 349.75c0 36.5-24 66.25-53.25 66.25h-213.5c-29.25 0-53.25-29.75-53.25-66.25 0-65.75 16.25-141.75 81.75-141.75 20.25 19.75 47.75 32 78.25 32s58-12.25 78.25-32c65.5 0 81.75 76 81.75 141.75zM256 128c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96z"></path>
        </svg>

      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'app-header'
};
</script>

<style scoped>

.header {
  min-height: 40px;
  background: #CCC;
  padding: 20px;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 42px;
}

.navigation {
}

.navigation__list {
  display: flex;
  list-style: none;
}

.navigation__item {
  transition: 0.2s;
}

.navigation__item:hover {
  text-decoration: underline;
}

.navigation__item + .navigation__item {
  margin-left: 20px;
}

.navigation__link {
  font-size: 20px;
  line-height: 140%;
  color: inherit;
  text-decoration: none;
}

.nuxt-link-exact-active {
  color: aquamarine;
}

.login {
  border: none;
  background: none;
  cursor: pointer;
}

.login__icon {
  height: 30px;
  width: auto;
}

</style>
