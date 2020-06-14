<template>
  <div class='container'>
    <h1>这里是登录页~</h1>
    <h1>不过作者来不及写啦！(T＿T)</h1>
    <h1>待施工...</h1>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$nextTick(() => {
      this.$parent.Loading(500)
    })
  }

}
</script>

<style lang="less" scoped>
.container {
  text-align: center;
  line-height: 50px;
}
</style>