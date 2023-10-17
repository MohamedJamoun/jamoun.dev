<script setup lang="ts">

</script>

<template>
  <div class="terminal-mockup-container">
    <div class="top-bar">
      <div class="top-bar-buttons">
        <div class="top-bar-button top-bar-button-red" />
        <div class="top-bar-button top-bar-button-yellow" />
        <div class="top-bar-button top-bar-button-green" />
      </div>
    </div>
    <nav class="navbar">
      ..
    </nav>
    <main class="terminal-body">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.terminal-mockup-container {
  width: 100%;
  margin: auto;
  background-color: var(--dark-grey);
  box-shadow: 0 22px 70px 4px rgba(0, 0, 0, 0.56);
  border-radius: 12px;
  border: 1px solid rgba(white, 0.25);
  overflow: hidden;

  @screen md {
    max-width: 90%;
  }

  @screen lg {
    max-width: 1000px;
  }

  @screen xl {
    max-width: 1200px;
  }

  .top-bar {
    width: 100%;
    height: 30px;
    background-color: rgba(black, 0.8);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 1px solid var(--dark-grey);

    .top-bar-buttons {
      display: flex;
      align-items: center;
      gap: 9px;
      height: 100%;
      padding: 0 10px;

      .top-bar-button {
        width: 14px;
        height: 14px;
        border-radius: 50%;
      }

      .top-bar-button-red {
        background-color: var(--red);
      }

      .top-bar-button-yellow {
        background-color: var(--yellow);
      }

      .top-bar-button-green {
        background-color: var(--green);
      }
    }
  }
}

.terminal-body {
  padding: 20px;
}
</style>

