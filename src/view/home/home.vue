<template>
  <div id="home">
    <h3>{{msg}}</h3>
    <el-button @click.native="startHacking">Let's do it</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'this is home!'
    }
  },
  methods: {

  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
