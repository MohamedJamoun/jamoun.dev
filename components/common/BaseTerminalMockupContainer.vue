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
  background-color: var(--primary-grey);
  box-shadow: var(--primary-shadow);
  border-radius: 12px;
  border: var(--primary-border);
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
    background-color: var(--primary-grey);

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
    background-color: var(--nav-bg-color);
    height: 35px;
    font-size: 14px;
    letter-spacing: 0.85px;

    a {
      text-decoration: none;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 20px;
      font-family: 'Montserrat', sans-serif;
      border-left: var(--primary-border);

      &:nth-child(1) {
        padding-left: 25px;
        border-left: none;
      }

      &:hover, &.router-link-active {
        border-bottom-color: var(--primary-grey);
        background-color: var(--primary-grey);

        &:last-of-type {
          border-right: var(--primary-border);
        }
      }
    }

    a,
    .missed {
      height: 100%;
      border-bottom: 1px solid rgba(white, 0.08);
      border-top: var(--primary-border);
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

