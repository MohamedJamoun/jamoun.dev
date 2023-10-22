<script setup lang="ts">
defineProps<{
  pageName?: string
}>()
</script>

<template>
  <div class="page" :class="pageName">
    <slot />
  </div>
</template>

<style scoped>

</style>
