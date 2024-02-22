<script setup lang="ts">
import { PhArrowUpRight } from '@phosphor-icons/vue';

defineProps<{
  link: string
  title: string
}>()
</script>

<template>
  <div>
    <a target="_blank" :href="link" class="external-link">
      {{ title }}

      <PhArrowUpRight :size="16" weight="bold" class="icon" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.external-link {
  font-size: 14px;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  margin-bottom: 2px;

  &,
  :deep(*) {
    color: var(--primary-color) !important;
  }

  .icon {
    margin-top: 1px;
  }

  &:hover {
    text-decoration: underline;
  }
}
</style>
