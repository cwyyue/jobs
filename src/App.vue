<template>
  <div id="app">

    <!-- 头部导航 -->
    <header :class="$route.name=='Index'||$route.name=='School'?headerClass:'header-blue'"
            ref="header">
      <div class="hd-container">
        <div class="logo">
          <h3>JOBS<small> | 招聘</small></h3>
        </div>
        <div class="nav">
          <Menu mode="horizontal"
                theme="light"
                :active-name="$route.name">
            <MenuItem name="Index"
                      to="/">主页</MenuItem>
            <MenuItem name="Position"
                      to="/position">职位</MenuItem>
            <MenuItem name="Product"
                      to="/product">产品与服务</MenuItem>
            <MenuItem name="School"
                      to="/school">校园招聘</MenuItem>
            <li style="float: left;height:60px">
              <Divider type="vertical" />
            </li>

            <MenuItem name="Login"
                      to="/login">登录</MenuItem>
          </Menu>
        </div>
      </div>
    </header>

    <Loading :flag="isLoading" />
    <router-view />
    <!-- 底部 -->
    <footer v-if="$route.name!=='Product'&&$route.name!=='School'">
      <Row class="container">
        <Col :lg="8"
             :md="{span:24}">
        <div class="logo">
          <h3>JOBS<small> | 招聘</small>
          </h3>
        </div>
        <p>本项目由陈婉月制作</p>
        <p>本网页主要注重视觉特效，交互体验，同时我也注重后台，团队效率开发</p>

        </Col>
        <Col :lg="{span:4}"
             :md="{span:24}">
        <dl>希望您能联系我</dl>
        <dt><a href="javascript:;">电话:13281020373</a></dt>
        <dt><a href="javascript:;">邮箱:527202897@qq.com</a></dt>
        </Col>
        <Col :lg="{span:4}"
             :md="{span:24}">
        <dl>企业官网</dl>
        <dt><a href="javascript:;">JOBS招聘</a></dt>
        </Col>
        <Col :lg="{span:8}"
             :md="{span:24}">
        <dl>实时动态与招聘信息，关注我们</dl>
        <dt class="icon-dt">

          <Poptip trigger="hover"
                  content="content">
            <a href="javascript:;">1</a>
            <template slot="content">
              <img src="./assets/images/code1.png">
              <p>关注官方微信号</p>
            </template>
          </Poptip>
          <Poptip trigger="hover"
                  content="content">
            <a href="javascript:;">2</a>
            <template slot="content">
              <img src="./assets/images/code1.png">
              <p>关注官方微信号</p>
            </template>
          </Poptip>
          <Poptip trigger="hover"
                  content="content">
            <a href="javascript:;">3</a>
            <template slot="content">
              <img src="./assets/images/code1.png">
              <p>关注官方微信号</p>
            </template>
          </Poptip>
          <Poptip trigger="hover"
                  content="content">
            <a href="javascript:;">4</a>
            <template slot="content">
              <img src="./assets/images/code1.png">
              <p>关注官方微信号</p>
            </template>
          </Poptip>

        </dt>
        </Col>
      </Row>
    </footer>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import Loading from './components/loading'
export default {

  computed: {
    ...mapState(['headerClass', 'isLoading']),
  },
  methods: {
    ...mapMutations(['setLoading']),
    ...mapActions(['Loading']),
    show () {
      this.setLoading(true)
    },
    loadImages (urlArr) { //参数 图片地址数组
      if (urlArr.length <= 0) return;
      let i = 0,
        timer = null,
        len = urlArr.length;
      const image = Array.from(new Array(len), (x, index) => {
        x = new Image();
        console.log('预加载', x, index)
        if (urlArr[index][0] == '/') {
          x.src = urlArr[index];
        } else {
          x.src = require("./assets/images/" + urlArr[index]);
        }
        return x;
      });
      //第一张加载好就撤 其他的慢慢加载
      image[0].onload = () => {
        this.setLoading(false);
      }


    }

  }, components: {
    Loading
  }, watch: {
    // 如果路由有变化，会再次执行该方法
    "$route": "show"
  }

}
</script>
<style lang="less" scoped>
@black: #1f2329;
@gray: #7b7e81;
@black-gray: #515a61;
@blue: #3370ff;
//默认样式
.main-content {
  position: relative;
}
header {
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  transition: transform 0.3s ease;
  transform: translateY(0);
  min-width: 780px;
  top: 0;
  z-index: 999;
  .ivu-menu-light {
    background: none;
  }
  .ivu-menu-horizontal.ivu-menu-light:after {
    height: 0;
  }
  .ivu-menu-light.ivu-menu-horizontal {
    .ivu-menu-item-active {
      color: #fff;
      font-weight: 900;
      border-bottom: 0;
    }
    .ivu-menu-item-active::before {
      content: "";
      display: block;
      position: absolute;
      bottom: 12px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background: #fff;
    }
    .ivu-menu-item {
      color: #fff;
      border-bottom: 0;
    }
    .ivu-menu-item:hover {
      color: #ccc;
      border-bottom: 0;
    }
  }
  .hd-container {
    position: relative;
    display: flex;
    padding: 0 96px;
    justify-content: space-between;
    height: 60px;
    .logo {
      width: 190px;
      height: 60px;
      color: #fff;
      line-height: 60px;
    }
  }
}
header.header-stop {
  transform: translateY(-64px);
}
// 开始滚动
header.header-fixed {
  position: fixed;
  transform: translateY(0);
}
// 滚动样式
header.header-scroll {
  transform: translateY(0);
  position: fixed;
  background: inherit;
  background: hsla(0, 0%, 100%, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  .logo {
    color: @blue;
  }
  .ivu-menu-light.ivu-menu-horizontal {
    .ivu-menu-item {
      color: @black-gray;
    }
    .ivu-menu-item:hover {
      color: @blue;
    }
    .ivu-menu-item-active {
      color: @blue;
    }
    .ivu-menu-item-active::before {
      background: @blue;
    }
  }
}
// 蓝色样式
header.header-blue {
  position: relative;
  .logo {
    color: @blue;
  }
  .ivu-menu-light.ivu-menu-horizontal {
    .ivu-menu-item {
      color: @black-gray;
    }
    .ivu-menu-item:hover {
      color: @blue;
    }
    .ivu-menu-item-active {
      color: @blue;
    }
    .ivu-menu-item-active::before {
      background: @blue;
    }
  }
}

footer {
  width: 100%;
  min-width: 1080px;
  background: @black;
  color: #7b7e81;
}
dl {
  margin: 10px 0 20px;
}
dt {
  a {
    color: #d2d3d4;
  }
  a:hover {
    color: @gray;
  }
}
.icon-dt {
  a {
    margin: 0 10px;
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #ccc;
    overflow: hidden;
    line-height: 32px;
  }
  a:hover {
    opacity: 0.7;
  }
}
.ivu-col:nth-child(n + 2) {
  text-align: center;
  position: relative;
}
.ivu-col:nth-child(n + 2)::before {
  content: "";
  display: block;
  position: absolute;
  width: 1px;
  height: 96px;
  background: #34373b;
  top: 2px;
  left: 0;
}
.container {
  padding: 72px 0 72px 96px;
  box-sizing: border-box;
}
.logo {
  width: 190px;
  height: 60px;
  color: #fff;
  line-height: 60px;
}
@media screen and (max-width: 990px) {
  header .hd-container {
    padding: 0 32px;
  }
  .ivu-col:nth-child(n + 2)::before {
    display: none;
  }
  .logo {
    margin: auto;
  }
  .ivu-col {
    text-align: center;
    height: auto;
  }
}
</style>