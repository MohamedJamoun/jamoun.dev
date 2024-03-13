<script setup lang="ts">
onMounted(() => {
  const animating = document.querySelectorAll('.highlighted.animating')

  for (let i = 0; i < animating.length; i++)
    animating[i].classList.remove('animating')
})

async function sentMail() {
  await Email.send({
    SecureToken: '951fdc57-ed3e-4a66-8fc6-8d5162731700',
    To: 'mjamoun28@gmail.com',
    From: 'mjamoun28@gmail.com',
    Subject: 'This is the subject',
    Body: 'And this is the body',
  })
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
