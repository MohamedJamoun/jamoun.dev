<script setup lang="ts">
onMounted(() => {
  const animating = document.querySelectorAll('.highlighted.animating')

  for (let i = 0; i < animating.length; i++)
    animating[i].classList.remove('animating')
})
</script>

<template>
  <div id="home">
    <ContentDoc />
  </div>
</template>

<style lang="scss">
.terminal-body {
  padding-bottom: 0 !important;
  margin-bottom: 0 !important;

  #home {
    h3 {
      margin: 10px 0 15px;

      &,
      * {
        color: var(--primary-color) !important
      }
    }

    .me {

      img {
        @screen md {
          float: right;
          shape-outside: url('/me.png');
          shape-margin: 20px;
          max-width: 330px;
        }
      }

      p {
        margin: 0;
      }
    }
  }
}
</style>
