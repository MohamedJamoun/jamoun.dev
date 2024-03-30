<script setup lang="ts">
const props = defineProps<{
  noLine: boolean
}>()

const timelineSpaceLeft = computed(() => {
  return props.noLine ? '10px' : '15px'
})
</script>

<template>
  <div class="timeline">
    <div v-if="!noLine" class="left-border" />
    <slot />
  </div>
</template>

<style>
.terminal-body {
  margin-top: var(--space-y);
  padding-top: 0 !important;
}
</style>

<style scoped lang="scss">
.timeline {
  padding-left: v-bind(timelineSpaceLeft);
  position: relative;

  .left-border {
    position: absolute;
    left: 0;
    top: 16px;
    height: calc(100% - 16px);
    width: 2px;
    background-color: var(--secondary-gray);
  }

  :deep(h1),
  :deep(h2),
  :deep(h3) {
    position: relative;

    &::before,
    &::after {
      content: "";
      position: absolute;
    }

    a {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 18px;
      margin-top: 0;

      sup {
        margin: 0;
        font-weight: 500;
        color: var(--primary-color) !important;
        font-size: 14px;
      }
    }
  }

  :deep(h1),
  :deep(h2) {

    &,
    * {
      color: var(--primary-color) !important;
    }

    &::after {
      --size: 7px;
      top: calc(50% - calc(var(--size) / 2));
      left: -18px;
      height: var(--size);
      width: var(--size);
      border-radius: 50px;
      background-color: var(--primary-color);
    }

    &::before {
      --size: 32px;
      top: calc(50% - calc(var(--size) / 2));
      left: -19px;
      height: var(--size);
      width: 10px;
      background-color: var(--primary-gray);
    }
  }

  :deep(h2) {
    font-size: 18px;
    position: sticky !important;
    background-color: var(--primary-gray);
    top: 0;
    z-index: 9;
    transform: translateY(-1px);
    margin-top: 0;
    box-shadow: -14px 1px 0px var(--primary-gray), -20px 0px 0px var(--primary-gray), -14px 5px 0px var(--primary-gray);
  }

  :deep(h3) {
    font-size: 15px;

    &::before {
      top: calc(50% - 8px);
      left: -27px;
      height: 7px;
      width: 7px;
      background-color: var(--secondary-gray);
      outline: 4px solid var(--primary-gray);
      border-radius: 50px;
    }
  }
}
</style>
