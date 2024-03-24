<script setup lang="ts">
const navItems = [
  {
    name: 'Me',
    path: '/',
  },
  {
    name: 'Experience',
    path: '/experience',
  },
  {
    name: 'Let\'s Connect',
    path: '/contact',
  },
]

const left = ref(0)
const top = ref(0)
const dragging = ref(false)
const startX = ref(0)
const startY = ref(0)
const MOBILE_SCREEN_WIDTH = 765

function startDragging(event: MouseEvent) {
  if (window.innerWidth < MOBILE_SCREEN_WIDTH)
    return

  dragging.value = true
  startX.value = event.clientX - left.value
  startY.value = event.clientY - top.value
}

function drag(event: MouseEvent) {
  if (window.innerWidth < MOBILE_SCREEN_WIDTH)
    return

  if (!dragging.value)
    return

  left.value = event.clientX - startX.value
  top.value = event.clientY - startY.value
}

function stopDragging() {
  dragging.value = false
}

function centerTheTerminal() {
  const terminal = document.getElementById('terminal')

  if (terminal) {
    const terminalWidth = terminal.offsetWidth

    left.value = (window.innerWidth - terminalWidth) / 2
    top.value = (window.innerHeight / 100) * 20
    terminal.style.opacity = '1'
    terminal.style.transform = 'none'
  }
}

onMounted(() => {
  if (window.innerWidth < MOBILE_SCREEN_WIDTH)
    return

  window.addEventListener('mousemove', drag)
  window.addEventListener('mouseup', stopDragging)

  centerTheTerminal()
  window.addEventListener('resize', centerTheTerminal)
})
</script>

<template>
  <div id="terminal" class="terminal-mockup-container" :style="{ left: `${left}px`, top: `${top}px` }">
    <div class="top-bar" @mousedown="startDragging">
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
  background-color: var(--primary-gray);
  overflow: hidden;
  transition: transform 0.1s cubic-bezier(.22, .68, 0, 1), opacity 0.3s ease-in-out;

  @screen md {
    width: 90%;
    max-width: 800px;
    box-shadow: var(--primary-shadow);
    border-radius: 12px;
    border: var(--primary-border);
    position: fixed;
    z-index: 999999;
    transform: translateY(30px);
    opacity: 0;
  }

  .top-bar {
    width: 100%;
    height: 30px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: var(--primary-gray);
    display: none;

    @screen md {
      display: block;
    }

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
    align-items: center;
    background-color: var(--nav-bg-color);
    height: var(--nav-height);
    font-size: 14px;
    letter-spacing: 0.85px;
    user-select: none;
    display: flex;

    a {
      white-space: nowrap;
      text-decoration: none;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 20px;
      font-family: var(--secondary-font-family);
      border-left: var(--primary-border);

      &:nth-child(1) {
        border-left: none;
      }

      &:hover,
      &.router-link-active {
        border-bottom-color: var(--primary-gray);
        background-color: var(--primary-gray);

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
  --space-y: 20px;
  --space-x: 20px;
  padding: var(--space-y) var(--space-x);
  overflow: auto;
  width: 100vw;
  max-height: calc(100vh - var(--nav-height));

  @screen md {
    max-height: calc(100vh - var(--nav-height) - var(--space-y));
    --space-y: 25px;
    --space-x: 25px;
    max-height: 60vh;
    width: auto;
  }
}
</style>
