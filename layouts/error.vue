<template>
    <div class="error-page">
      <h1>{{ error.statusCode }}</h1>
      <p v-if="error.statusCode === 404">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p v-else>
        Oops! Something went wrong.
      </p>
      <NuxtLink to="/">Go back to home</NuxtLink>
    </div>
  </template>
  
  <script>

  export default {
    // Nuxt automatically passes an error object to this layout
    props: ['error']
  }
  </script>
  
  <style scoped>
  .error-page {
    text-align: center;
    margin-top: 100px;
  }
  h1 {
    font-size: 72px;
    color: #ff0000;
  }
  p {
    font-size: 24px;
  }
  </style>
  