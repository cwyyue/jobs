<template>
  <div class="byte-img">
    <img :src='"../assets/images/"+imgPath+""'>

    <span :class="{wow:flag, slideOutRight:flag}"
          data-wow-duration="0.5s"></span>
    <span :class="{wow:flag, slideOutRight:flag}"
          data-wow-duration="0.5s"
          data-wow-offset="50"
          data-wow-delay="0.2s"
          :style="{'backgroundColor':color}"></span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      flag: true
    }
  },
  props: {
    imgPath: String,
    color: String
  },
  watch: {
    imgPath () {
      this.flag = false;
      setTimeout(() => {
        this.flag = true;
      }, 1)
    }

  }
}
</script>

<style scoped>
img {
  width: 100%;
}
span {
  display: block;
  position: absolute;
  visibility: hidden;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #f1f3f6;
  opacity: 0.8;
  animation-fill-mode: forwards;
}
.slideOutRight-after-enter {
  transition: 0.5s;
}
.byte-img {
  position: relative;
  overflow: hidden;
  line-height: 0;
}
</style>