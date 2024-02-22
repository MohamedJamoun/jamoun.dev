<script setup lang="ts">

</script>

<template>
  <div class="timeline">
    <div class="left-border"></div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.timeline {
  padding-left: 15px;
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
  :deep(h2) {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: calc(50% - 5px);
      left: -19px;
      height: 10px;
      width: 10px;
      border-radius: 50px;
      background-color: var(--primary-color);
      box-shadow: 0px 0px 0px 10px var(--primary-gray);
    }
  }
}
</style>
 