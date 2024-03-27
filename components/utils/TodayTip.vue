<script setup lang="ts">
const isTipActive = ref(false)
const tipStep = ref(0)

const tipSteps = [
  {
    label: 'Yow.. Do you have any idea how many apples grow on a tree? 🤔',
    actions: [
      {
        label: 'Huh?!',
        handler() {
          isTipActive.value = true
          tipStep.value = 1
        },
      },
    ],
  },
  {
    label: 'For real! You don\'t know?',
    actions: [
      {
        label: 'No i don\'t',
        handler() {
          tipStep.value = 2

          setTimeout(() => tipStep.value = 0, 4000)
        },
      },
    ],
  },
  {
    label: 'Neither I 😛',
  },
]
</script>

<template>
  <div class="tip" :class="{ active: isTipActive }">
    <transition-group name="fade">
      <template v-for="(step, i) in tipSteps" :key="i">
        <div v-if="tipStep === i" class="tip-steps">
          <div class="label">
            {{ step.label }}
          </div>

          <template v-if="step.actions?.length">
            <div v-for="action in step.actions" :key="action.label" class="actions" @click="action.handler">
              <button>
                {{ action.label }}
              </button>
            </div>
          </template>
        </div>
      </template>
    </transition-group>
  </div>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.tip {
  position: absolute;
  color: white;
  z-index: -1;
  transition: all .5s;

  &:nth-child(1) {
    transform: rotate(-4deg);
    bottom: -50px;
    left: 20px;

    &:hover {
      transform: rotate(-1deg);
      bottom: -80px;

      .actions {
        opacity: 1;
      }
    }
  }

  .label {
    height: 45px;
    display: flex;
    align-items: center;
    font-weight: 500;
    padding: 0 17px 3px;
    width: fit-content !important;
  }

  .label, .actions button {
    border: var(--primary-border);
    background-color: var(--primary-gray);
    box-shadow: var(--primary-shadow);
    border-radius: 6px;
  }

  .actions {
    transition: opacity .3s;
    opacity: 0;

    button {
      padding: 3px 15px 6px;
      cursor: pointer;
      margin-top: 5px;
    }
  }
}
</style>
