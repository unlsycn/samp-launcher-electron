<template>
  <el-row>
    <el-button class="alt" type="primary" round icon="el-icon-suitcase" @click="open('https://github.com/Hobr/samp-launcher-electron')">Powered by Hobr/samp-launcher-electron.</el-button>
  </el-row>
</template>

<script>
export default {
    methods: {
        open (link)
        {
            this.$electron.shell.openExternal(link);
        }
    }
};
</script>

<style>
</style>
