<script setup lang="ts">

</script>

<template>
  <div class="base-main-layout">
    <slot />
  </div>
</template>

<style scoped>
.base-main-layout {
  min-height: 100vh;
  width: 100vw;
  background-color: var(--secondary-color);
  padding-top: 20vh;
}
</style>
