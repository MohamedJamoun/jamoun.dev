<script setup lang="ts">
import { PhArrowUpRight } from '@phosphor-icons/vue'

defineProps<{
  link: string
  title: string
}>()
</script>

<template>
  <div>
    <a target="_blank" :href="link" class="external-link">
      {{ title }}

      <PhArrowUpRight :size="12" weight="bold" class="icon" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.external-link {
  font-size: 14px;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;

  &::after {
    content: "";
    position: absolute;
    bottom: 1px;
    height: 1px;
    width: 100%;
    background-color: #01c5c7;
  }

  &,
  :deep(*) {
    color: #01c5c7 !important;
  }

  .icon {
    margin-top: 3px;
  }
}
</style>
