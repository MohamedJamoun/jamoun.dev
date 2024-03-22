<script setup lang="ts">
defineProps<{
  text: string
  delay: number | string
}>()
</script>

<template>
  <span class="highlight">
    <span v-for="i in 2" :key="i" :class="`double-highlight-${i}`" :data-delay="delay">
      {{ text }}
    </span>
  </span>
</template>

<style lang="scss" scoped>
@use 'sass:math';

.highlight {
  &, * {
    white-space: nowrap;
  }
  position: relative;

  .double-highlight {

    &-1,
    &-2 {
      padding: 0 2px;
    }

    &-1 {
      line-height: normal;
    }

    &-2 {
      line-height: normal;
      position: absolute;
      top: 0;
      left: 0;
      background-color: var(--primary-color);
      color: var(--primary-gray);
      clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
      animation: highlight .6s forwards cubic-bezier(1, -0.03, 0.58, 0.99);

      @for $i from 1 through 7 {
        &[data-delay="#{$i}"] {
          $delay: math.div($i + 8, 3);
          animation-delay: #{$delay}s;
        }
      }

      @keyframes highlight {
        to {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
      }
    }

  }
}
</style>
