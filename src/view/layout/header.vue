<template>
  <div id="nav">
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
  </div>
</template>
<script>
    export default {
        name: 'regionList',
        data (){
            return {
                list: {}
            }
        },
        methods: {
            setCurRegion: function () {
                console.log('导航组件成功实现')
            }
        },
        created: function () {
            this.setCurRegion();
        }
    }
</script>

<style>
</style>
