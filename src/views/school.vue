<template>
  <div class="banner">
    <div class="banner-main">
      <div class="search-box">
        <div :class="{'title':true,'animated':true,'fade-up':flag}">
          <h1 class="title-ch">校园招聘 关于我的介绍</h1>
          <p class="title-en">PLEASE HIRE ME </p>
        </div>
        <a href="javascript:;"
           @click="()=>flag=true"
           v-if="!flag"
           class="start animated pulse">点击开启</a>
      </div>
      <div :class="{'banner-foot':true,'scoll-in':flag}">
        <div :class="{'container':true,'fade-up-in':flag}">
          <div class="introduce-box">
            <h3>个人简介</h3>
            <p>我叫陈婉月，来自四川成都</p>
            <p>是西华大学软件工程专业学生,目前大三，将于2021年毕业</p>
            <p>日常比较宅，喜欢画画，也会一些PS</p>
            <p>我很喜欢前端这份工作，目前也在不断学习中</p>

          </div>
          <div class="introduce-box">
            <h3>关于项目</h3>
            <p>感谢您的观看！</p>
            <p>此项目仿照了字节招聘官网</p>
            <p>由我独立开发完成</p>
            <p>希望可以寻找一份前端开发的工作</p>

          </div>
          <div class="introduce-box">
            <h3>联系方式</h3>
            <p>电话：13281020373</p>
            <p>邮箱：527202897@qq.com</p>
            <p>GitHub:<a href="https://github.com/cwyyue/jobs"
                 target="_blank">https://github.com/cwyyue/jobs</a></p>

          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$parent.Loading(3000)
    })
  }

}
</script>

<style lang="less" scoped>
.banner {
  position: relative;
  width: 100%;
  min-width: 1080px;
  height: 100vh;
  min-height: 500px;
  background: url("../assets/images/me.png") top center no-repeat;
  overflow: hidden;
  background-size: cover;
  .banner-main {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(55, 151, 135, 0.2);
    .search-box {
      width: 570px;
      position: absolute;
      z-index: 1;
      left: 50%;
      top: 50%;
      text-align: center;
      transform: translate(-50%, -50%);
      height: 180px;
      .title {
        color: #fff;
        .title-ch {
          font-size: 54px;
        }
        .title-en {
          text-indent: 20px;
          letter-spacing: 20px;
          text-align: center;
          position: relative;
          opacity: 0.8;
          font-weight: 700;
        }
        .title-en::before,
        .title-en::after {
          content: "";
          display: block;
          width: 74px;
          height: 2px;
          background: linear-gradient(
            270deg,
            rgba(0, 0, 0, 0),
            #fff 47%,
            rgba(0, 0, 0, 0)
          );
          border-radius: 50%;
          position: absolute;
          top: 50%;
          margin-top: -1px;
        }
        .title-en::after {
          right: 0;
        }
        .title-en::before {
          left: 0;
        }
      }
    }
    .start {
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -40px;
      color: #fff;
      display: block;
      font-size: 20px;
      animation-iteration-count: infinite;
    }
  }
  .banner-foot {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: hsla(0, 0%, 0%, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    display: flex;
    justify-items: center;
    align-items: center;
  }
}
.container {
  display: flex;
  color: #fff;
  font-size: 16px;
  justify-content: space-between;
  visibility: hidden;

  .introduce-box {
    margin-left: 30px;
    h3 {
      text-align: center;
      height: 30px;
      border-bottom: 1px #fff solid;
      margin-bottom: 10px;
    }
    a {
      color: #fff;
    }
  }
}
.scoll-in {
  animation: scoll-in 2s forwards;
}
@keyframes scoll-in {
  0% {
    height: 100%;
  }
  80% {
    height: 0;
    bottom: 0;
  }
  100% {
    height: 250px;
    bottom: 10%;
  }
}
.fade-up-in {
  animation: fade-up-in 1s forwards 2.3s;
}
@keyframes fade-up-in {
  0% {
    visibility: visible;
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
}
.fade-up {
  animation: fade-up 3s forwards;
}
@keyframes fade-up {
  0% {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    visibility: visible;
    opacity: 0;
    transform: translateY(50%);
  }
  100% {
    visibility: visible;
    opacity: 1;
    transform: translateY(-30%);
  }
}
</style>