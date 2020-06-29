<template>
  <div>
    <!-- banner -->
    <section class="banner"
             ref="banner">
      <div class="video-container">
        <!--   :style="{visibility:videoFlag?'visible':'hidden'}" -->
        <video src="../assets/index.mp4"
               @canplaythrough="()=>$parent.setLoading(false)"
               autoplay
               muted
               loop
               tabindex="-1"
               class="main-video">
        </video>
      </div>
      <div class="main">
        <div class="search-box">
          <div class="title">
            <h1 class="title-ch">月出惊山鸟 时鸣春涧中</h1>
            <p class="title-en">WELCOME JOBS</p>
          </div>
          <div class="contain">
            <input type="text"
                   class="search-text"
                   v-model="searchText"
                   placeholder="输入城市或职位进行搜索" />
            <Button type="primary"
                    shape="circle">
              <Icon type="ios-search"
                    size="24"
                    :style="{'margin':'1px -2px'}" />
            </Button>
          </div>

        </div>
        <div class="banner-foot">
          <div class="cirle"
               @click="goStep"></div>
          <Icon type="ios-arrow-round-down"
                size="30" />
          <div class="dash"></div>
        </div>
      </div>
    </section>
    <!-- 主要内容 -->
    <div class="main-page">
      <!-- 产品 -->
      <article class="product"
               ref='product'>
        <!-- 背景小图 -->
        <div class="bg-material">
          <div class="gray-circle"
               style="width: 24px; height: 24px; top: 180px; left: 200px;"></div>
          <div class="gray-circle"
               style="width: 45px; height: 45px; top: 280px; left: -15px;background:#ebf8e8"></div>
          <div class="gray-circle"
               style="width: 15px; height: 15px; top: 80px; right: 200px;"></div>
          <div class="gray-circle"
               style="width: 45px; height: 45px; top: 260px; right: 100px;background:rgba(255,186,107,.1)"></div>
          <div class="blue-triangle"
               style="top: 50px; left:50px; transform:  scale(0.6) rotateZ(70deg);opacity:0.05;"></div>
          <div class="blue-triangle"
               style="top: 120px; right:-30px; transform:  scale(0.8) rotateZ(15deg);opacity:0.1;"></div>
        </div>
        <div class="container"
             style="margin-top:100px">
          <!-- 内容 -->
          <div class="title wow fadeInUp"
               data-wow-offset="50">
            <h1 class="title-text">Inspire creativity, enrich life</h1>
            <h1 class="title-bg">OUR MISSION</h1>
          </div>
          <p class="wow fadeInUp"
             data-wow-offset="50">截至目前，我们的产品已覆盖超过 150 个国家和地区，75 个语种</p>
          <ul class="product-list clearfix">
            <template>
              <li v-for="(item,i) in productList"
                  :key="item.title"
                  :style="{'marginTop':i<=6?(4-(i+1))*(50-(i+1)*8)+'px':(i-4)*((i+1-6)*8)+'px'}">
                <a href="javascript:;">
                  <img :src='"../assets/images/"+item.ico+".png"'
                       :alt="item.title">
                  <p class="wow fadeInUp"
                     data-wow-offset="50">{{item.title}}</p>
                </a>
              </li>
            </template>
          </ul>
          <Button type="primary"
                  shape="circle"
                  style="width:136px;height:54px;font-size:16px"
                  class="wow fadeInUp"
                  data-wow-offset="50">了解更多</Button>

        </div>
      </article>
      <!-- 职位 -->
      <article class="jobs">
        <div class="bg-material">
          <div class="gray-circle"
               style="width: 65px; height: 65px; top: 80px; right: -30px;background:#ebf8e8"></div>
        </div>

        <article class="container">
          <div class="title wow fadeInUp"
               data-wow-offset="50">
            <h1 class="title-text">探索你感兴趣的职位</h1>
            <h1 class="title-bg">WHAT'S YOUR PASSION</h1>
          </div>
          <ul class="job-list">
            <template>
              <li v-for="i in 8"
                  :key="i">
                <a href="javascript:;">
                  <div class="job-img-box">
                    <img src="../assets/images/rd2.png"
                         alt="研发">
                  </div>
                  <p class="wow fadeInUp"
                     data-wow-offset="50">前端</p>
                </a>
              </li>

            </template>
          </ul>

        </article>
      </article>

      <!-- 0-1 -->
      <article class="byteBox">
        <!-- 背景 -->
        <div class="bg-material ">
          <div class="gray-dot"
               style="width: 160px; height: 284px; top: -80px; right: 0px"></div>
          <div class="gray-dot"
               style="width: 160px; height: 95px; bottom: -95px; left: 0"></div>
          <div class="gray-square"
               style="width: 880px; height: 100%; top: 0px; right: 0px;"></div>
          <div class="blue-triangle"
               style="top: 500px; right:-30px; transform:  scale(0.8) rotateZ(-8deg);opacity:0.1;"></div>
        </div>
        <!-- 内容 -->
        <!-- 1 -->
        <article class="container">
          <div class="title wow fadeInUp"
               data-wow-offset="50">
            <h1 class="title-text"
                style="text-align:left">JOBS文化</h1>
            <h1 class="title-bg"
                style="left:0;transform: translate(0, -50%);">JOBSSTYLE</h1>
          </div>
          <p class="wow fadeInUp"
             data-wow-offset="50"
             style="text-align:left">美好品德是企业文化的重要组成部分，是我们共同认可的行为准则</p>
        </article>
        <div class="byte-show">
          <div class="byte-img">
            <curtain-img :color="byteStyleColor"
                         :imgPath="byteStyleChose"
                         ref="byteStyeImg"></curtain-img>
          </div>

          <div class="byte-box">
            <ul class="byte-style-tab">
              <li v-for="item in byteStyleList"
                  :key="item.title"
                  class="wow fadeInUp"
                  data-wow-offset="50">
                <a href="javascript:;"
                   :class="item.img==byteStyleChose?'active':''"
                   @click="changeByteStyle(item.img,item.color)">{{item.title}}</a>
                <p v-if="item.img==byteStyleChose"
                   v-html="item.content"></p>
              </li>
            </ul>

          </div>

        </div>
        <!-- JOBS生活 -->
        <article class="container">
          <div class="title wow fadeInUp"
               data-wow-offset="50">
            <h1 class="title-text"
                style="text-align:left;margin-top:150px">JOBS生活</h1>
            <h1 class="title-bg"
                style="left:0;transform: translate(0, -50%);">JOBSLIFE</h1>
          </div>
          <div class="byte-show">
            <div class="byte-box">
              <div class="byte-content">
                <div class="title wow fadeInUp"
                     data-wow-offset="50">
                  <h1 class="title-text"
                      style="text-align:left">在扁平开放的氛围<br>里工作</h1>
                  <h1 class="title-bg bg-num"
                      style="">01</h1>
                </div>
                <Divider />
                <h2 class="wow fadeInUp"
                    data-wow-offset="50">务实扁平的工作氛围</h2>
                <p class="wow fadeInUp"
                   data-wow-offset="50">不讲 title 和层级，敢于授权新人，专注完成业务目标，没有领地意识</p>
                <h2 class="wow fadeInUp"
                    data-wow-offset="50">弹性灵活的工作时间</h2>
                <p class="wow fadeInUp"
                   data-wow-offset="50">上下班无需打卡，效率为先，你的工作节奏，由你自己来掌控</p>
                <h2 class="wow fadeInUp"
                    data-wow-offset="50">高效开放的办公环境</h2>
                <p class="wow fadeInUp"
                   data-wow-offset="50">开放式工位，即时讨论，让灵感碰撞不受空间约束</p>
              </div>

            </div>
            <div class="byte-img">
              <curtain-img color="rgb(219, 236, 243)"
                           imgPath="life_1.png"></curtain-img>

            </div>

          </div>
        </article>
      </article>
      <!-- 2 -->
      <article class="byteBox">
        <!-- 背景 -->
        <div class="bg-material">
          <div class="gray-square"
               style="width: 100%; height: 460px; top: 0; right: 0px;"></div>
        </div>
        <article class="container">
          <div class="byte-show">
            <div class="byte-img">
              <curtain-img color="rgb(254, 247, 225)"
                           imgPath="life3.png"></curtain-img>
            </div>
            <div class="byte-box"
                 style="padding:0 0 0 100px;">
              <div class="byte-content">
                <div class="title wow fadeInUp"
                     data-wow-offset="50">
                  <h1 class="title-text"
                      style="text-align:left">关注每一位<br>员工 的成长</h1>
                  <h1 class="title-bg bg-num"
                      style="">02</h1>
                </div>
                <Divider />
                <p class="wow fadeInUp"
                   data-wow-offset="50">我们拥有较为完善的职业发展体系，充分贴近年轻员工追求自我发展的定位，为员工提供具有针对性和差异化的培训项目</p>
                <p class="wow fadeInUp"
                   data-wow-offset="50">设立专门的“人才发展”部门，与各业务部门协同推出领导力培养项目跃计划（Jump Program）、研发新员工培训项目 Bootcamp、海外员工培训计划 NBO（New Orientation）、校招生培训项目舞计划（Dance Program）等</p>
              </div>

            </div>

          </div>
        </article>
      </article>
      <!-- 3 -->
      <article class="byteBox">
        <!-- 背景 -->
        <div class="bg-material">
          <div class="gray-circle"
               style="width: 80px; height:80px; top: 18px; left: -40px;background:#ebf8e8"></div>
          <div class="gray-dot"
               style="width: 160px; height: 95px; bottom: -96px; left: 300px"></div>
        </div>
        <article class="container">
          <div class="byte-show">
            <div class="byte-box">
              <div class="byte-content">
                <div class="title wow fadeInUp"
                     data-wow-offset="50">
                  <h1 class="title-text"
                      style="text-align:left">全方位贴心关爱
                    <br>你的生活</h1>
                  <h1 class="title-bg bg-num"
                      style="">03</h1>
                </div>
                <Divider />
                <h2 class="wow fadeInUp"
                    data-wow-offset="50">免费三餐和就近住房补贴</h2>
                <p class="wow fadeInUp"
                   data-wow-offset="50">提供营养均衡的三餐及下午茶，零食饮料水果无限供应。住房补贴分担你的生活成本，有效节省通勤时间，把精力投资在更有意义的事情上</p>
                <h2 class="wow fadeInUp"
                    data-wow-offset="50">完善的商业保险</h2>
                <p class="wow fadeInUp"
                   data-wow-offset="50">五险一金及补充商业保险，公司是你前进路上的坚实后盾</p>
                <h2 class="wow fadeInUp"
                    data-wow-offset="50">多样的健康关怀</h2>
                <p class="wow fadeInUp"
                   data-wow-offset="50">年度体检，免费健身房和康体娱乐中心，心理关怀福利，帮助大家健康快乐地工作和生活</p>
              </div>

            </div>

            <div class="byte-img">
              <curtain-img color="rgb(233, 226, 241)"
                           imgPath="life2.png"></curtain-img>

            </div>

          </div>
        </article>
      </article>
      <!-- 4 -->
      <article class="byteBox">
        <!-- 背景 -->
        <div class="bg-material">
          <div class="gray-square"
               style="width: 100%; height: 460px; top: 0px; right: 0px;"></div>
        </div>
        <article class="container">
          <div class="byte-show">
            <div class="byte-img">
              <curtain-img color="rgb(219, 236, 243)"
                           imgPath="bytelifechild.png"></curtain-img>
            </div>
            <div class="byte-box"
                 style="padding:0 0 0 100px;">

              <div class="byte-content">
                <div class="title wow fadeInUp"
                     data-wow-offset="50">
                  <h1 class="title-text"
                      style="text-align:left">感恩家人的支持<br>与陪伴</h1>
                  <h1 class="title-bg bg-num"
                      style="">04</h1>
                </div>
                <Divider />
                <h2 class="wow fadeInUp"
                    data-wow-offset="50">温暖的家庭礼物</h2>
                <p class="wow fadeInUp"
                   data-wow-offset="50">儿童节亲子礼物，春节家书礼盒，你和家人在一起的每个珍贵瞬间，也牵挂在我们的心上</p>
                <h2 class="wow fadeInUp"
                    data-wow-offset="50">欢乐有趣的家庭活动日</h2>
                <p class="wow fadeInUp"
                   data-wow-offset="50">请家人来看看 我们 每天创造成绩的地方</p>
              </div>

            </div>

          </div>
        </article>
      </article>
      <!-- 5 -->
      <article class="byteBox">
        <!-- 背景 -->
        <div class="bg-material">
          <div class="gray-dot"
               style="width: 276px; height: 169px; top: 400px; right: 0px"></div>
        </div>
        <article class="container">
          <div class="byte-show">
            <div class="byte-box">
              <div class="byte-content">
                <div class="title wow fadeInUp"
                     data-wow-offset="50">
                  <h1 class="title-text"
                      style="text-align:left">信息助力公益
                    <br>创造社会价值</h1>
                  <h1 class="title-bg bg-num"
                      style="">05</h1>
                </div>
                <Divider />
                <h2 class="wow fadeInUp"
                    data-wow-offset="50">助力寻人 科技向善</h2>
                <p class="wow fadeInUp"
                   data-wow-offset="50">“寻人”是一个面向全国的公益寻人项目。基于庞大的用户量，“寻人”根据走失人员的走失位置，回溯其有可能出现的地点，精确地将走失信息推送给该位置附近的用户。每一位打开定位和弹窗功能的用户，都有可能参与到寻人的公益活动中，帮助失散家庭团圆。截至 2020 年 1 月 8 日，“寻人”已经帮助 12301 个家庭团圆，最快找到走失者仅用时 60 秒</p>

              </div>

            </div>
            <div class="byte-img">
              <curtain-img color="rgb(246, 227, 226)"
                           imgPath="life5.png"></curtain-img>
            </div>
          </div>
          <div class="byte-show"
               style="padding-top:15px;">
            <div class="byte-box">
              <div class="byte-content">
                <h2 class="wow fadeInUp"
                    data-wow-offset="50">产品助力文旅扶贫</h2>
                <p class="wow fadeInUp"
                   data-wow-offset="50">通过我们在流量倾斜、人才培训、产品扶持和产品认证的四个方面投入及运营，帮助国家级贫困县的特色文旅资源打造品牌，提升拉动当地文旅品牌影响力并持续带动相关产业的经营发展。截至目前，“山里 DOU 是好风光”已落地实施河南栾川、山西永和、四川甘孜稻城亚丁等项目</p>
              </div>

            </div>
            <div class="byte-img"
                 style="display:flex">
              <curtain-img style="flex:1;margin-right:20px;"
                           color="rgb(246, 227, 226)"
                           imgPath="bytelife5block1.jpg"></curtain-img>
              <curtain-img style="flex:1"
                           color="rgb(246, 227, 226)"
                           imgPath="bytelife5block2x.jpg"></curtain-img>

            </div>
          </div>

        </article>
      </article>
      <!-- 员工故事 -->
      <article class="story clearfix">
        <!-- 背景 -->
        <div class="bg-material">
          <div class="gray-circle"
               style="width: 65px; height: 65px; top: 380px; left: -28px;"></div>
          <div class="gray-circle"
               style="width: 45px; height: 45px; top: 260px; right: -22px;"></div>
          <div class="blue-triangle"
               style="top: 100px; left:-5 px; transform: rotateZ(15deg);opacity:0.05;"></div>
          <div class="blue-triangle"
               style="top: 400px; right:0px; transform:  scale(0.6) rotateZ(15deg);opacity:0.1;"></div>
        </div>
        <article class="container">
          <div class="title wow fadeInUp"
               data-wow-offset="50">
            <h1 class="title-text">员工故事</h1>
            <h1 class="title-bg">JOBSWORKER STORY</h1>
          </div>
          <Row class="story-list"
               :gutter="20">
            <template>
              <Col :span="8"
                   v-for="i in 3"
                   :key="i">
              <a href="javascirpt:;">
                <img src="../assets/images/xiongdianavarta.png">
                <h2 class="wow fadeInUp"
                    data-wow-offset="50">体验最极致的成就感</h2>
                <p class="wow fadeInUp"
                   data-wow-offset="50">员工
                  <Divider type="vertical" />JOBS - iOS</p>
                <p class="content wow fadeInUp"
                   data-wow-offset="50">公司没有让我们把所有时间都用来完成目标，仍然给大家很多时间，去做与业务没有直接关联的技术研究，大家都能停下脚步思考更多问题。
                </p>

                <Icon class="wow fadeInUp"
                      data-wow-offset="50"
                      size="30"
                      type="ios-arrow-round-forward"
                      style="margin-top:20px" />
              </a>
              </Col>

            </template>
          </Row>
        </article>
      </article>

    </div>
    <BackTop>
      <BackTop :height="2000">
        <div class="top">
          <Icon type="md-arrow-up" />
        </div>
      </BackTop>
    </BackTop>
  </div>

</template>
<script>
import { mapMutations } from 'vuex'
import { WOW } from 'wowjs'
import CurtainImg from '../components/curtainImg'
export default {
  data: function () {
    return {
      videoFlag: false,
      searchText: "",
      byteStyleChose: "bytestyle1clear.png",
      byteStyleColor: "rgb(219, 236, 243)",
      productList: [
        {
          ico: 'icon',
          title: '产品1'
        }, {
          ico: 'icon',
          title: '产品2'
        }, {
          ico: 'icon',
          title: '产品3'
        }, {
          ico: 'icon',
          title: '产品4'
        }, {
          ico: 'icon',
          title: '产品5'
        }, {
          ico: 'icon',
          title: '产品6'
        },
        {
          ico: 'icon',
          title: '产品7'
        }, {
          ico: 'icon',
          title: '产品8'
        }, {
          ico: 'icon',
          title: '产品9'
        },
        {
          ico: 'icon',
          title: '产品10'
        },
      ],
      byteStyleList: [
        {
          title: "追求极致",
          content: "不断提高要求，延迟满足感<br>在更大范围里找最优解，不放过问题，思考本质<br>持续学习和成长",
          img: "bytestyle1clear.png",
          color: "rgb(219, 236, 243)"
        },
        {
          title: "务实敢为",
          content: "直接体验，深入事实<br>不自嗨，注重效果，能突破有担当，打破定式<br>尝试多种可能，快速迭代",
          img: "tancheng.png",
          color: "rgb(240, 221, 177)"
        }, {
          title: "开放谦逊",
          content: "内心阳光，信任伙伴<br>乐于助人和求助，合作成大事<br>格局大，上个台阶想问题<br>对外敏锐谦虚，ego 小，听得进意见",
          img: "style03_1576395987141.png",
          color: "rgb(235, 234, 236)"
        },
        {
          title: "坦诚清晰",
          content: "敢当面表达真实想法<br>能承认错误，不装不爱面子<br>实事求是，暴露问题，反对“向上管理”<br>准确、简洁、直接，有条理有重点",
          img: "style02_1576395987268.png",
          color: "rgb(233, 245, 251)"
        }, {
          title: "始终创业",
          content: "自驱，不设边界，不怕麻烦有韧性，直面现实并改变它<br>拥抱变化，对不确定性保持乐观<br>始终像公司创业第一天那样思考",
          img: "bytestyle5clear.png",
          color: "rgb(239, 240, 240)"

        }, {
          title: "多元兼容",
          content: "理解并重视差异和多元，建立火星视角<br>打造多元化的团队，欢迎不同背景的人才，激发潜力<br>鼓励人人参与，集思广益，主动用不同的想法来挑战自己<br>创造海纳百川，兼容友好的工作环境",
          img: "duoyuanjianrong_1584512668065.jpg",
          color: "background-color: rgb(240, 218, 203)"

        }
      ],
      oldY: 0
    }
  },
  created () {
    let listimg = this.byteStyleList.map(item => item.img)
    this.$parent.loadImages(listimg);
  },
  mounted () {
    // 在项目加载完成之后初始化wow

    this.$nextTick(() => {
      let wow = new WOW({
        live: false
      })
      wow.init()
    });
    window.addEventListener('scroll', this.pageScroll)

  },
  destroyed () {
    //单页面应用，当切换路由，当前组件被销毁，但是滚动事件是添加在window 上的，并不会被销毁
    //所以依然在监听滚动，浪费性能，
    //2 当操作当前组件的dom 的时候会报错，因为当前组件已经被销毁了
    window.removeEventListener('scroll', this.pageScroll);
  },
  methods: {
    ...mapMutations(['setHeaderClass']),
    goStep () {
      this.$refs.product.scrollIntoView({ block: 'start', behavior: 'smooth' });
    },
    changeByteStyle (key, color) {
      this.byteStyleChose = key;
      this.byteStyleColor = color
    },
    // 监听滚动
    pageScroll () {
      let scroll = document.documentElement.scrollTop || document.body.scrollTop;
      let height = this.$refs.banner.clientHeight;
      if (scroll > this.oldY) {
        this.oldY = scroll;
        return this.setHeaderClass("header-stop")
        // return this.headerClass = "header-stop"
      }
      // console.log(this.oldY, scroll);
      this.oldY = scroll;
      if (scroll < height) {
        this.setHeaderClass("header-fixed")
        // this.headerClass = "header-fixed"
      } else {
        this.setHeaderClass("header-scroll")
        // this.headerClass = "header-scroll"
      }

    }
  },
  components: {
    CurtainImg
  }
}
</script>
<style lang="less" scoped>
@black: #1f2329;
@black-gray: #515a61;
@blue: #3370ff;

.banner {
  height: 100vh;
  min-width: 1080px;
  min-height: 400px;
  position: relative;
  .video-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: url("../assets/images/video-poster.png") no-repeat center;
    background-size: cover;
  }
  .main {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(51, 112, 255, 0.2);
    .search-box {
      width: 610px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
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
      .contain {
        position: relative;
        margin: 50px auto 0;
        width: 400px;
        .search-text {
          height: 56px;
          width: 100%;
          display: block;
          border-radius: 56px;
          padding: 0 28px;
          font-size: 16px;
          border: 1px #fff solid;
        }
        .search-text:hover {
          border: 1px #82a7fc solid;
        }
        .ivu-btn {
          position: absolute;
          top: 4px;
          right: 4px;
          width: 48px;
          height: 48px;
        }
      }
    }
    .banner-foot {
      opacity: 0.8;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      .cirle {
        width: 30px;
        height: 30px;
        border: 1px #fff solid;
        border-radius: 50%;
      }
      .cirle::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0);
        z-index: 2;
        cursor: pointer;
      }
      .ivu-icon {
        color: #fff;
        position: absolute;
        top: 0;
        animation: dance 1s ease infinite;
      }

      .dash {
        width: 50%;
        margin-top: 10px;
        height: 20px;
        border-right: 1px #fff dashed;
      }
    }
  }
}

.main-page {
  position: relative;
  width: 100%;
  min-width: 1080px;
  overflow: hidden;
  .product {
    position: relative;
    border-top: 1px solid rgba(255, 255, 255, 0);
    height: 860px;
    min-height: 700px;
    text-align: center;
    background: url("../assets/images/global.png") no-repeat;
    background-size: 1440px auto;
    background-position: center 500px;
    .product-list {
      margin: 120px auto 30px;
      display: flex;
      justify-content: space-around;
      li {
        width: 90px;
        a {
          display: block;
          color: @black-gray;
        }
        img {
          width: 100%;
          border-radius: 20px;
          transition: transform 0.2s;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          margin-bottom: 10px;
        }
        a:hover img {
          transform: translateY(-10%) scale(1.2, 1.2);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        a:hover {
          color: #2d8cf0;
        }
      }
    }
  }
  .jobs {
    position: relative;

    min-width: 1080px;
    background: url("../assets/images/jobs-bg2x.png") no-repeat;
    background-size: 100%;
    .job-list {
      margin-top: 100px;
      justify-content: space-between;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 25%;
        a {
          width: 216px;
          display: block;
          margin: 0 auto;
          color: @black-gray;
        }
        a:hover {
          color: @blue;
        }
        a:hover img {
          transform: scale(1.2);
        }
        a:hover .job-img-box {
          box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
        }
        .job-img-box {
          width: 216px;
          height: 216px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            transition: ease 0.3s;
          }
        }
        p {
          font-size: 24px;
          margin: 30px 0 100px;
        }
      }
    }
  }

  .byteBox {
    position: relative;
    margin-bottom: 100px;
    width: 100%;
    min-width: 1080px;
    .container {
      padding: 0 96px;
    }
    .byte-show {
      padding-top: 80px;
      display: flex;
      .byte-img {
        flex: 5;
        max-width: 1080px;
        border-radius: 8px;
      }

      .byte-box {
        flex: 3;
        position: relative;
        padding-right: 20px;
        box-sizing: border-box;
        .byte-content {
          max-width: 460px;
          h2 {
            color: @black;
            font-weight: 600;
          }
          p {
            font-size: 14px;
            text-align: left;
            margin: 10px 0 20px;
          }
        }
      }
      ul.byte-style-tab {
        width: 320px;
        margin-left: 120px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border: none;
        li {
          margin: 20px 0;
        }
        a {
          color: @black;
          font-size: 20px;
        }

        .active {
          font-size: 28px;
          font-weight: 700;
        }
      }
    }
  }
  .story {
    position: relative;
    margin: 150px 0 80px;
    .story-list {
      padding: 0 40px;
      a {
        max-width: 380px;
        margin: auto;
        display: block;
        color: @black;
        padding: 40px 10px 20px;
        border-radius: 10px;
        background: #fff;
        text-align: center;
      }
      .ivu-icon {
        color: #ddd;
        border: 1px solid #ddd;
        border-radius: 50%;
      }
      a:hover {
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
      }
      a:hover .ivu-icon {
        color: @blue;
        border-color: @blue;
      }
      img {
        width: 216px;
        height: 216px;
        margin-bottom: 20px;
      }
      h2 {
        font-weight: 500;
      }
      p {
        font-size: 14px;
        margin: 8px;
      }
      .content {
        width: 260px;
        margin: auto;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
    }
  }
  .container {
    .title {
      position: relative;
      .title-text {
        font-weight: 600;
        font-size: 28px;
        color: @black;
        text-align: center;
        margin-bottom: 38px;
      }
      .title-bg {
        position: absolute;
        white-space: nowrap;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 48px;
        opacity: 0.06;
      }

      .title-bg.bg-num {
        font-size: 100px;
        left: 0;
        top: 20%;
        transform: translate(0, -50%);
      }
    }

    p {
      font-size: 16px;
      text-align: center;
    }
  }
  // 背景
  .bg-material {
    .gray-square {
      position: absolute;
      background: #f8f9fa;
      z-index: -1;
    }
    .gray-circle {
      position: absolute;
      border-radius: 50%;
      background: rgba(143, 149, 158, 0.1);
      z-index: -1;
    }
    .blue-triangle {
      position: absolute;
      border: 38px solid transparent;
      border-bottom: 64px solid rgba(16, 127, 231);
      z-index: -1;
    }
    .gray-dot {
      position: absolute;
      background-image: radial-gradient(
        circle,
        rgba(143, 149, 158, 0.1) 20%,
        transparent 0
      );
      background-size: 20px 20px;
    }
  }
}
// 箭头动画
@keyframes dance {
  0% {
    top: -2px;
  }
  50% {
    top: 2px;
  }
  100% {
    top: -2px;
  }
}
@media screen and (max-width: 1080px) {
  .main-page .byteBox .container {
    padding: 0 0 0 96px;
  }
}
</style>