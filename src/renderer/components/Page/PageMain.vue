<template>
  <h1>test</h1>
</template>

<script>
export default {
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    }
  }
}
</script>

<style>
</style>
