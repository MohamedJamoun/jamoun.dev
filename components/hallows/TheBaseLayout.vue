<script setup lang="ts">

</script>

<template>
  <div class="base-main-layout">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.base-main-layout {
  min-height: 100vh;
  width: 100vw;
  background: var(--primary-gray);

  @screen md {
    background: linear-gradient(180deg, #161a1d 0%, #0b090a 100%);
    padding-top: 20vh;
  }
}
</style>
