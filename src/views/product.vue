<template>
  <div class="main">
    <ul class="control">
      <li v-for="(item,index) in productList"
          :key="item.title"
          :class="active==index?'active':''"
          @click="handleChangeActive(index)">
        <img :src='"../assets/images/"
               +item.icon+""'>
      </li>
    </ul>

    <div v-for="(item,index) in productList"
         :key="item.title"
         :class="{'show-box':true,'animated':true,'front':front===index,'show':active===index,[frontClass]:front===index,[animatedClass]:active===index}"
         :style="{backgroundImage:'url('+item.backImg+')'}">
      <div class="info">
        <img :src='"../assets/images/"+item.icon+""'
             :class="{'animated':true,'show':active===index,'slideInUp':active===index}">
        <h1 :class="{'animated':true,'show':active===index,'slideInUp':active===index}">{{item.title}}</h1>

        <p v-for="i in item.content"
           :key="i"
           :class="{'animated':true,'show':active===index,'slideInUp':active===index}">
          {{i}}
        </p>

        <p :class="{'animated':true,'show':active===index,'slideInUp':active===index}">更多信息，请访问：<a :href="item.url">{{item.url}}</a></p>

      </div>

    </div>
    <div :class="{'mask':true,'animated':true,'show fadeOut':flag}"></div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      //旧的
      front: -1,
      //当前的
      active: 0,
      flag: false,
      animatedClass: '',
      frontClass: '',
      timer: null,
      productList: [
        {
          title: '产品1',
          icon: 'icon.png',
          backImg: require('../assets/images/toutiao_new_2.png'),
          content: [
            "新闻是一款个性化资讯推荐引擎产品，致力于连接人与信息，让优质、丰富的信息得到高效、精准的分发，为用户创造价值。",
            "目前拥有科技、体育、健康、美食、教育、三农、国风、NBA 等超过 100 个垂直领域，覆盖了图文、图集、小视频、短视频、短内容、直播、小程序等多种信息体裁。"
          ],
          url: 'https://www.toutiao.com/'
        },
        {
          title: '产品2',
          icon: 'icon.png',
          backImg: require('../assets/images/douyin-bg2.jpg'),
          content: [
            "视频是一个帮助用户表达自我，记录美好生活的短视频平台。截至 2020 年 1 月，日活跃用户数已经突破 4 亿，并继续保持高速增长。",
          ],
          url: 'https://www.douyin.com/'
        },
        {
          title: '产品3',
          icon: 'icon.png',
          backImg: require('../assets/images/xigua-bg2.jpg'),
          content: [
            "我们旗下的一款视频 App，作为聚合多元文化的综合视频平台，它通过个性化推荐，源源不断地为不同人群提供丰富的优质内容，同时鼓励多样化创作，帮助人们轻松地向全世界分享视频作品。",
            "目前视频累计用户数超过 3.5 亿，日均播放量超过 40 亿。"
          ],
          url: 'https://www.ixigua.com/'
        },
        {
          title: '产品4',
          icon: 'icon.png',
          backImg: require('../assets/images/dongche-bg2.jpg'),
          content: [
            "“看车、选车、买车”一站式汽车媒体和服务平台，产品基于个性化推荐引擎帮助用户发现感兴趣的汽车内容，同时配有车型库、360 度全景看车等选车工具，首创短视频社区“车友圈”，为用户打造内容 + 社区 + 工具的多元生态。目前，已经成长为增长最快的汽车类手机应用。"
          ],
          url: 'https://www.dongchediapp.com/'
        },
        {
          title: '产品5',
          icon: 'icon.png',
          backImg: require('../assets/images/gogokid-bg2.jpg'),
          content: [
            " 一个面向 4 - 12 岁孩子的在线少儿英语 1 对 1学习平台。主打 100% 纯北美外教；教材对标美国小学主流课标（CCSS），融入 SED（社交情商培养）、多元智能理论，为中国孩子带来高效的英语学习体验。"
          ],
          url: 'https://www.gogokid.com.cn'
        },
        {
          title: '产品6',
          icon: 'icon.png',
          backImg: require('../assets/images/pipi_new.png'),
          content: [
            "爆笑社区，一个只要打开就能让你笑到停不下来的 App。",
            "一直坚持「传播快乐，分享生活」的目标，以特有的「神评」玩法形成了独特的社区氛围。之后，将不断提供更多有趣的功能，帮助用户创造出更多优质的内容。"
          ],
          url: 'https://mp.pipix.com/'
        },
        {
          title: '产品7',
          icon: 'icon.png',
          backImg: require('../assets/images/feishu_bg.jpg'),
          content: [
            "后台是新一代企业办公套件，整合即时沟通、日历、音视频会议、在线文档、云盘、工作台等功能于一体，为企业提供全方位协作解决方案，成就组织和个人，更高效、更愉悦。",

          ],
          url: 'https://www.feishu.cn/'
        },
        {
          title: '产品8',
          icon: 'icon.png',
          backImg: require('../assets/images/fanqie_bg_5071431.jpeg'),
          content: [
            "小说是一个面向网文热爱者的免费阅读平台，拥有海量正版小说，涵盖青春、言情、玄幻、校园、仙侠、都市、悬疑等全部主流网文类型，致力于为读者提供畅快不花钱的极致阅读体验。目前用户规模超过1亿，是小说类产品中的新兴国民级产品。",

          ],
          url: 'https://changdunovel.com/'
        }, {
          title: '产品9',
          icon: 'icon.png',
          backImg: require('../assets/images/jimeng.jpeg'),
          content: [
            "4 亿年轻人都爱用的卖萌自拍神器。",
            "一款能社交的 AR 相机，海量酷炫贴纸、 表情包 、实时美颜、 趣味特效让聊天姿势更丰富更有趣，满足全方位拍摄需求。累计用户量超过 4 亿， 平均每天为用户提供 1.7 亿次拍摄服务。",

          ],
          url: 'https://www.faceu.com'
        },
        {
          title: '产品10',
          icon: 'icon.png',
          backImg: require('../assets/images/qingyan-bg2.jpg'),
          content: [
            "相机是一款主打高级感的质感自拍相机，连续霸榜应用商店。拥有时下最流行的滤镜、美颜效果、和海量拍照“姿势”模板，一键就能 get 潮流自拍。",

          ],
          url: 'https://m.ulikecam.com/'
        }

      ]
    }
  },
  created () {
    let imgList = this.productList.map(item => item.backImg);
    this.$parent.loadImages(imgList);
  },
  mounted () {
    document.addEventListener('wheel', this.throttle(this.pageScroll, 1500))
  },
  destroyed () {
    window.removeEventListener('wheel', this.throttle(this.pageScroll, 1500));
  },
  methods: {
    handleChangeActive (i) {
      console.log(this.active, this.front)
      if (this.active === i) {
        return;
      }
      if (this.timer) {
        this.timer = null;
      }
      this.front = this.active;
      this.flag = true;
      if (i > this.front) {
        //向上淡出
        this.frontClass = "show fadeOutUp"
        this.animatedClass = "fadeInUp"
      } else {
        this.frontClass = "show fadeOutDown"
        this.animatedClass = "fadeInDown"
      }
      this.timer = setTimeout(() => {
        this.flag = false;
        this.timer = null;
      }, 800)
      this.active = i;

    },
    pageScroll (e) {
      if (e.deltaY > 0) {
        //向下滚动
        if (this.active >= this.productList.length - 1) return;
        this.handleChangeActive(this.active + 1);
      } else {
        if (this.active <= 0) return;
        this.handleChangeActive(this.active - 1)
      }
    },
    //防抖
    debounce (func, wait) {
      let timer;
      return function () {
        let args = arguments; // arguments中存着e
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args)
        }, wait)
      }
    },
    //节流
    throttle (func, wait) {
      let previous = 0;
      return function () {
        let now = Date.now();
        let context = this;
        let args = arguments;
        if (now - previous > wait) {
          func.apply(context, args);
          previous = now;
        }
      }
    }
  }





}
</script>

<style lang="less" scoped>
.main {
  position: absolute;
  right: 0;
  left: 0;
  top: 60px;
  bottom: 0;
  overflow: hidden;
  min-height: 600px;
  min-width: 1060px;
  .front {
    z-index: 2;
  }
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    display: block;
    background-color: #fff;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    visibility: hidden;
  }
  .show-box {
    position: absolute;
    width: 100%;
    height: 100%;
    background: no-repeat center center;
    background-size: cover;
    visibility: hidden;
    animation-duration: 0.6s;
    animation-timing-function: ease-in;
    -webkit-animation-timing-function: ease-in;
    animation-fill-mode: both;

    .info {
      position: absolute;
      width: 400px;
      top: 50%;
      left: 5%;
      transform: translateY(-50%);
      visibility: hidden;
      img {
        width: 80px;
        height: 80px;
        border-radius: 16px;
      }
      h1 {
        margin: 20px 0;
      }
      p {
        margin-bottom: 20px;
      }
    }
  }
  .show {
    visibility: visible;
  }
}
.control {
  position: absolute;
  z-index: 8;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  li {
    margin: 15px 0;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    transition: 0.3s all;
    cursor: pointer;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
  }
  li:hover,
  .active {
    transform: scale(1.5);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
}
</style>
