<script setup lang="ts">
onMounted(() => {
  const animating = document.querySelectorAll('.highlighted.animating')

  for (let i = 0; i < animating.length; i++)
    animating[i].classList.remove('animating')
})

async function sentMail() {
  const res = await Email.send({
    SecureToken: '330dac4b-2595-40b1-a55a-9afd5f74e414',
    To: 'mjamoun28@gmail.com',
    From: 'mjamoun28@gmail.com',
    Subject: 'This is the subject',
    Body: 'And this is the body',
  })

  console.log(res)
}
</script>

<template>
  <div id="home">
    <ContentDoc />

    <button @click="sentMail">
      send an email now
    </button>
  </div>
</template>

<style lang="scss">
.terminal-body {
  padding-bottom: 0 !important;
  margin-bottom: 0 !important;

  #home {
    h1 {
      margin-bottom: 0;
    }

    h3 {
      margin-top: 5px;

      &,
      * {
        color: var(--primary-color) !important
      }
    }

    .me {
      float: right;
      shape-outside: url('/me.png');
      shape-margin: 20px;

      p {
        margin: 0;
      }
    }
  }
}
</style>
