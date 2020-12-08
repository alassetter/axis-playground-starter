<template>
  <div id="app" class="font-sans" :class="{'mode-dark': darkMode}">
    <div class="flex justify-between items-center bg-black dark:bg-gray-900 border-b dark:border-gray-900 p-4 text-white dark:text-gray-500 text-xl font-400">
      Axis Playground
    </div>
    <Canvas :darkMode="darkMode" @toggle-dark-mode="darkMode = $event"/>
  </div>
</template>

<script>
import Canvas from '@/components/Canvas'

export default {
  components: {
    Canvas
  },

  data () {
    return {
      darkMode: localStorage.getItem('darkMode') === 'true'
    }
  },

  watch: {
    darkMode (value) {
      localStorage.setItem('darkMode', value)
    }
  }
}
</script>

<style>
body {
  background-color: #fff !important;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply text-gray-900;
}
</style>
