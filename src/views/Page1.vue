<script setup
        lang="ts"
>

</script>

<template>
  <div class="flex justify-center items-center w-full h-dvh flex-col">
    <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo">

    <router-link :to="{ name: 'page2' }" class="hover:underline">
      <button class="bg-green-600 text-white px-4 py-2 rounded-lg">
        Page 2
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
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
