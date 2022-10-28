<template>
  <div class="wrapper">
    <h1 class="error-title">
      <span>404</span>
      <br>
      Page not found
    </h1>
  </div>
</template>

<script>
export default {
  name: 'error',
  layout: 'default'
};
</script>

<style scoped>
.wrapper {
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.error-title {
  text-align: center;
}

.error-title span {
  color: red;
}

</style>
