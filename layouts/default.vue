<template>
  <div class="layout">
    <app-header></app-header>
    <main class="main">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import AppHeader from '~/components/app-header';

export default {
  components: {AppHeader}
};
</script>
