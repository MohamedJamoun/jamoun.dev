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
    top.value = (window.innerHeight - terminal.offsetHeight) / 2
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
  opacity: 0;
  transition: transform 0.2s cubic-bezier(.22, .68, 0, 1), opacity 0.1s ease-in-out;

  @screen md {
    max-width: 90%;
    box-shadow: var(--primary-shadow);
    border-radius: 12px;
    border: var(--primary-border);
    position: fixed;
    z-index: 999999;
    transform: translateY(30px);
  }

  @screen lg {
    max-width: 800px;
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
    display: none;
    align-items: center;
    background-color: var(--nav-bg-color);
    height: 35px;
    font-size: 14px;
    letter-spacing: 0.85px;
    user-select: none;

    @screen md {
      display: flex;
    }

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
  padding: 25px;
  max-height: 60vh;
  overflow: auto;
}
</style>

