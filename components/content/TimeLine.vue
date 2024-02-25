<script setup lang="ts">
const props = defineProps<{
  noLine: boolean
}>();

const timelineSpaceLeft = computed(() => {
  return props.noLine ? '10px' : '15px'
});
</script>

<template>
  <div class="timeline">
    <div class="left-border" v-if="!noLine"></div>
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
    width: 1px;
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
      sup {
        margin: 0;
        font-weight: 500;
        color: var(--primary-color) !important;
        font-size: 12px
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
      --height: 10px;
      top: calc(50% - calc(var(--height) / 2));
      left: -19px;
      height: var(--height);
      width: 10px;
      border-radius: 50px;
      background-color: var(--primary-color);
    }

    &::before {
      --height: 32px;
      top: calc(50% - calc(var(--height) / 2));
      left: -19px;
      height: var(--height);
      width: 10px;
      background-color: var(--primary-gray);
    }
  }

  :deep(h2) {
    position: sticky !important;
    background-color: var(--primary-gray);
    top: 0;
    z-index: 9;
    margin-top: 0;
    box-shadow: -14px 1px 0px var(--primary-gray), -20px 0px 0px var(--primary-gray), -14px 5px 0px var(--primary-gray);
  }

  :deep(h3) {
    &::before {
      top: 50%;
      left: -24px;
      height: 1px;
      width: 15px;
      background-color: var(--secondary-gray);
    }
  }
}
</style>
 