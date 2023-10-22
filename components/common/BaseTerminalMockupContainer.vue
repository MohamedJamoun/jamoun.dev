<script setup lang="ts">
const navItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
  {
    name: 'Test',
    path: '/test',
  },
]
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
      <NuxtLink v-for="item in navItems" :key="item.name" :to="item.path">
        {{ item.name }}
      </NuxtLink>
      <div class="missed" />
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
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: rgba(white, 0.025);

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

  nav.navbar {
    display: flex;
    align-items: center;
    background-color: rgba(black, 0.45);

    a {
      font-size: 14px;
      text-decoration: none;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 20px;
      font-family: 'Gabarito', sans-serif;
      letter-spacing: 1px;
      border-left: 1px solid var(--dark-grey-2);

      &:nth-child(1) {
        padding-left: 25px;
        border-left: none;
      }

      &:hover, &.router-link-active {
        border-bottom-color: var(--dark-grey);
        background-color: var(--dark-grey);

        &:last-of-type {
          border-right: 1px solid var(--dark-grey-2);
        }
      }
    }

    a,
    .missed {
      height: 40px;
      border-bottom: 1px solid rgba(white, 0.08);
      border-top: 1px solid var(--dark-grey-2);
    }

    .missed {
      width: 100%;
    }
  }
}

.terminal-body {
  padding: 25px;
}
</style>

