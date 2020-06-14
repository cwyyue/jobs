<template>
  <div :class="{loading:true,fade:!flag}">
    <div class="container">
      <h1>本项目由西华大学 陈婉月制作</h1>

      <div>拼命加载中...</div>
      <Icon type="ios-snow"
            size=50
            class="demo-spin-icon-load"
            style="top:23px;left:300px;"></Icon>
      <Icon type="ios-snow"
            size=25
            class="demo-spin-icon-load"
            style="top:-18px;left:462px;animation-duration:8s"></Icon>
      <Icon type="ios-snow"
            size=45
            class="demo-spin-icon-load"
            style="top:-12px;left:746px;animation-duration:3s"></Icon>
      <Icon type="ios-snow"
            size=30
            class="demo-spin-icon-load"
            style="top:38px;left:582px;;animation-duration:6s"></Icon>
    </div>

  </div>

</template>

<script>
export default {

  props: ['flag'],
  // data () {
  //   flag
  // },
  mounted () {
  },
  watch: {
    flag () {
      console.log(this.flag);
    }
  }

}
</script>

<style scoped>
.loading {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9;
  animation: forwards;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgb(28, 168, 223);
}
.fade {
  animation: go_out 0.5s forwards;
}
@keyframes go_out {
  0% {
    opacity: 1;
  }
  99% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    visibility: hidden;
    display: none;
  }
}
.container {
  position: relative;
}
.demo-spin-icon-load {
  position: absolute;
  animation: ani-demo-spin 4s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: translate(-100%, -100%) rotate(0deg);
    opacity: 1;
  }
  80% {
    transform: translate(100%, 140%) rotate(288deg);
    opacity: 0;
  }
  to {
    transform: translate(120%, 200%) rotate(360deg);
    opacity: 0;
  }
}
</style>