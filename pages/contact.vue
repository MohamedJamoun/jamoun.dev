<script setup lang="ts">
import { nextTick, ref } from 'vue'

const steps = [
  {
    label: 'Can you please share your contact info (email, phone, link...)',
    index: 0,
    value: ref(''),
  },
  {
    label: 'Anything you\'d like to share with me?',
    index: 1,
    value: ref(''),
  },
]

const currentStep = ref(0)
const inputRefs = steps.map(() => ref<HTMLInputElement[] | null>(null))

const loader = ref(false)
const error = ref('')

function nextStep() {
  currentStep.value++

  nextTick(() => {
    const prevInput = inputRefs[currentStep.value - 1]?.value
    const nextInput = inputRefs[currentStep.value]?.value

    if (currentStep.value >= steps.length && (prevInput && prevInput.length)) {
      submit()

      prevInput[0].blur()
    }

    if (nextInput && nextInput?.length)
      nextInput[0].focus()
  })
}

function submit() {
  loader.value = true
  error.value = ''

  try {
    sendMail(steps[1].value.value, steps[0].value.value)
  }
  catch (e) {
    setTimeout(() => {
      error.value = 'Oops! Something went wrong. Alternatively, contact me here'
    }, 1300)
  }
  finally {
    setTimeout(() => {
      loader.value = false
    }, 1300)
  }
}

onMounted(() => {
  nextTick(() => {
    if (inputRefs.length && inputRefs[0]?.value?.length)
      inputRefs[0]?.value[0].focus()
  })
})
</script>

<template>
  <div id="contact-page">
    <div class="terminal-stepper">
      <template v-for="step in steps" :key="step.index">
        <form v-if="step.index <= currentStep" class="step" @submit.prevent="nextStep">
          <div class="label">
            <span class="prefix">?</span>
            {{ step.label }}
          </div>

          <div class="value">
            <input :ref="inputRefs[step.index]" v-model="step.value.value" type="text">
          </div>
        </form>
      </template>
    </div>
    <footer>
      <div class="alerts">
        <div v-if="loader" class="loader" />
        <div v-else-if="error" class="error">
          {{ error }}
        </div>
        <div v-else-if="currentStep >= steps.length" class="thank">
          Thank you! Hope we have a great journey together ✨
        </div>
      </div>

      <a href="mailto:mjamoun28@gmail.com" class="contact-info">
        <div class="emoji">
          👉🏻
        </div>
        <div class="contact">
          mjamoun28@gmail.com
        </div>
      </a>
    </footer>
  </div>
</template>

<style scoped lang="scss">
#contact-page {
  min-height: 170px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

footer {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  .alerts {
    font-size: 14px;
    p {
      color: white !important;
    }
  }

  .contact-info {
    display: flex;
    align-items: center;
    gap: 8px;

    .emoji {
      font-size: 16px;
    }

    .contact {
      font-size: 14px;
      color: var(--primary-color)
    }
  }
}

.loader {
  color: white;

  &:after {
    animation: changeContent .8s linear infinite;
    display: block;
    content: "⠋";
    font-size: 14px;
  }

  @keyframes changeContent {
    10% { content: "⠙"; }
    20% { content: "⠹"; }
    30% { content: "⠸"; }
    40% { content: "⠼"; }
    50% { content: "⠴"; }
    60% { content: "⠦"; }
    70% { content: "⠧"; }
    80% { content: "⠇"; }
    90% { content: "⠏"; }
  }
}

.terminal-stepper {
  .step {
    margin-bottom: 10px;
    .label {
      display: flex;
      gap: 5px;
      align-items: center;

      .prefix {
        color: var(--primary-color);
      }
    }
    .value {
      padding: 0 13px;

      input {
        color: var(--body-secondary-text-color);
        background-color: transparent;
        width: 100%;
        padding: 5px 0;
        outline: none;
      }
    }
  }
}
</style>
