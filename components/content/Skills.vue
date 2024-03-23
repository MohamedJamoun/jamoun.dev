<script setup lang="ts">
defineProps<{
  skills: string[]
}>()
</script>

<template>
  <div class="skills">
    <span v-for="(skill, i) in skills" :key="i" class="skill" :class="{ 'primary-skill': skill.includes('!') }">
      {{ skill.replace('!', '') }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.skills {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  padding: 3px 0;
  margin-top: 5px;

  .skill {
    color: rgba(white, 0.7);
    background-color: var(--secondary-gray);
    font-size: 11px;
    font-weight: 700 !important;
    padding: 0px 5px;

    &.primary-skill {
      background-color: var(--primary-color);
      color: var(--primary-gray);
    }
  }
}
</style>
