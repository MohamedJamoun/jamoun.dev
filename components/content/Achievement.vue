<script setup>
import { PhCheck } from '@phosphor-icons/vue';

</script>
    
<template>
  <div class="achievement">
    <div class="check-icon">
      <PhCheck weight="bold" size="14" />
    </div>
    <div class="label">
      <slot />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.achievement {
  display: flex;
  gap: 5px;
  align-items: flex-start;
  margin-bottom: 2px;

  .check-icon {
    margin-top: 2.2px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16px;
    width: 16px;
    border-radius: 50px;

    :deep(*) {
      color: var(--primary-color);
    }
  }

  .label {
    :deep(p) {
      margin: 0;
      color: white;
    }
  }
}
</style>