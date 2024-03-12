<script setup lang="ts">
const props = withDefaults(defineProps<{
  x: boolean
  space: number | string
}>(), {
  space: 20,
})

const spaceMOdel = computed(() => `${props.space}px`)
</script>

<template>
  <div class="spacer" />
</template>

<style lang="scss" scoped>
.spacer {
  height: v-bind(spaceMOdel);
  width: 100%;
  display: block;
}
</style>
