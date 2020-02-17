<template>
    <el-container>
        <el-header>
            <page-header></page-header>
        </el-header>
        <el-main>
            <page-main></page-main>
        </el-main>
        <el-footer>
            <page-footer></page-footer>
        </el-footer>
    </el-container>
</template>

<script>
    import PageMain from "./Page/PageMain";
    import PageHeader from "./Page/PageHeader";
    import PageFooter from "./Page/PageFooter";
    export default
    {
        name: "launcher-page",
        components:
        {
            PageMain,
            PageHeader,
            PageFooter
        }
    };
</script>

<style>
    .el-header,
    .el-footer {
        text-align: center;
        line-height: 60px;
    }

    .el-main {
        text-align: center;
        line-height: 160px;
    }

    body>.el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>