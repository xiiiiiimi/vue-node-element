<template>
  <div id="product1">
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'this is product1!'
    }
  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
