<script setup
        lang="ts"
>

</script>

<template>
  <div class="flex justify-center items-center w-full h-dvh flex-col">
    <img src="/vite.svg" class="logo" alt="Vite logo">

    <router-link :to="{ name: 'index' }" class="hover:underline">
      <button class="bg-purple-600 text-white px-4 py-2 rounded-lg">
        Index
      </button>
    </router-link>
  </div>
</template>

<style scoped>
.logo {
  height: 14em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
