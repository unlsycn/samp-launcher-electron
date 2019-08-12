<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
  export default {
    name: 'launcher-page',
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
.el-header, .el-footer
{
  text-align: center;
  line-height: 60px;
}
.el-aside
{
  text-align: center;
  line-height: 200px;
}
.el-main
{
  text-align: center;
  line-height: 160px;
}
body > .el-container
{
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside .el-container:nth-child(6) .el-aside 
{
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>