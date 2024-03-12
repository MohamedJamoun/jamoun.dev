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
  gap: 5px;
  padding: 3px 0;
  margin-top: 5px;

  .skill {
    color: rgba(white, 0.7);
    background-color: var(--secondary-gray);
    font-size: 11px;
    padding: 0px 6px;

    &.primary-skill {
      background-color: white;
      color: var(--primary-gray);
    }
  }
}
</style>
