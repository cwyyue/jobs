<template>
  <div>
    <div class="banner">
      <h1>从现在开始，加入我们吧</h1>
      <div :class="{contain:true, containTop:flag}"
           ref="searchContain">
        <div class="search-box">
          <Icon type="ios-search"
                size="20" />
          <input type="text"
                 class="search-text"
                 v-model="queryInfo.keywords"
                 placeholder="搜索职位" />
          <Button type="primary"
                  @click="searchJob()">
            搜索
          </Button>
        </div>
      </div>

    </div>
    <div class="container">
      <div class="left">
        <p><b>筛选</b><span style="float:right">清除</span></p>
        <FilterCheckbox title="职位类别"
                        :list="jobList"
                        :checkedItems="queryInfo.job"
                        @on-change="(res)=>{queryInfo.job=res;searchJob()}"></FilterCheckbox>
        <FilterCheckbox title="城市"
                        :list="cityList"
                        :checkedItems="queryInfo.city"
                        @on-change="(res)=>{queryInfo.city=res;searchJob()}"></FilterCheckbox>

      </div>
      <div class="right">
        <h1 style="margin-left:10px">开启新工作（{{count}}）</h1>
        <ul class="job-box"
            v-if="jobData.length>0">
          <template>
            <li v-for="item in jobData"
                :key="item.title">
              <a href="javascript:;">
                <h2>{{item.title}}</h2>
                <span>{{item.city}}
                  <Divider type="vertical" />{{item.job}}
                  <Divider type="vertical" />{{item.type}}</span>
                <p>{{item.info}}</p>
              </a></li>
            <Page :total="100"
                  size="small" />
          </template>
        </ul>
        <div v-else>
          <p style="text-align:center;margin-top:20px">暂无职位，请尝试其他搜索条件…</p>
        </div>

      </div>

    </div>
  </div>
</template>
<script>
import FilterCheckbox from '../components/filterCheckbox'
import { getSearchInfo } from '../assets/js/global.js'
import { getJobList } from '../api/position'

export default {

  data: function () {
    return {
      // 控制搜索框吸顶
      flag: false,
      jobData: [],
      count: 0,
      queryInfo: {
        job: [],
        city: [],
        keywords: ""
      },
      // jobList: [
      //   {
      //     id: "1",
      //     name: "产品"
      //   },
      //   {
      //     id: "2",
      //     name: "运营"
      //   }, {
      //     id: "3",
      //     name: "研发"
      //   }, {
      //     id: "4",
      //     name: "销售"
      //   }, {
      //     id: "5",
      //     name: "职能/支持"
      //   }, {
      //     id: "6",
      //     name: "设计"
      //   }, {
      //     id: "7",
      //     name: "教研教学"
      //   }
      // ],
      jobList: [
        "产品",
        "运营",
        "研发",
        "销售",
        "职能/支持",
        "设计",
        "教研教学",
      ],
      cityList: [
        "北京", "上海", "深圳", "杭州", "广州", "成都", "武汉",
        "天津", "南京", "西安", "福州", "无锡", "新加坡", "郑州"
      ],
      jobMore: ""
    }
  },
  created () {
    this.$parent.loadImages(['joblistbanner2x.jpg'])
  },
  mounted () {
    this.$refs.offsetParent
    this.pos = this.$refs.searchContain.offsetTop + 60;//+顶部导航栏
    window.addEventListener('scroll', this.pageScroll);
    this.searchJob();
  },
  destroyed () {
    window.removeEventListener('scroll', this.pageScroll);
  },
  methods: {
    pageScroll () {
      let scroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (scroll >= this.pos) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    },
    async searchJob () {
      console.log('查询参数为:', this.queryInfo);
      let res = await this.getJobList(this.queryInfo);
      this.jobData = res.list;
      this.count = res.count
    },
    getSearchInfo,
    getJobList
  },
  components: {
    FilterCheckbox,

  }
}
</script>
<style lang="less" scoped>
@black: #1f2329;
@black-gray: #515a61;
@blue: #3370ff;
@gray: #7b7e81;
.container {
  max-width: 1080px;
  margin-bottom: 100px;
}
.banner {
  position: relative;
  width: 100%;
  min-width: 1080px;
  height: 340px;
  background: url("../assets/images/joblistbanner2x.jpg") top center;
  background-size: cover;
  h1 {
    text-align: center;
    color: #fff;
    font-size: 48px;
    line-height: 340px;
  }
  .contain {
    position: absolute;
    width: 100%;
    bottom: -28px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-box {
    position: relative;
    width: 100vw;
    height: 56px;
    max-width: 800px;
    border-radius: 56px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    .ivu-icon {
      position: absolute;
      left: 30px;
      top: 50%;
      transform: translateY(-50%);
      color: #ccc;
    }
    .search-text {
      height: 100%;
      width: 100%;
      display: block;
      padding: 0 60px;
      font-size: 16px;
      border: 1px #fff solid;
      border-radius: 56px;
      transition: 0.3s ease;
    }

    .ivu-btn {
      height: 100%;
      width: 149px;
      position: absolute;
      top: 0;
      right: -1px;
      border-radius: 0;
      font-weight: 700;
    }
  }
  // 吸顶样式
  .containTop {
    position: fixed;
    z-index: 98;
    height: 80px;
    top: 0;
    left: 0;
    background: #fff;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    .search-box {
      max-width: 1000px;
      box-shadow: none;
      height: 40px;
      .search-text {
        border: 1px solid #eee;
      }
    }
  }
  .search-box:hover .search-text {
    border: 1px @blue solid;
  }
}
.container {
  color: @black;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
}
.left {
  min-width: 276px;
  margin: 0 35px 0 10px;
  > p {
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
  }
}
.right {
  border-left: 1px solid #eee;
  padding-left: 24px;
  width: 100%;
  .job-box {
    li {
      padding: 20px 10px;
      margin: 20px 0;
      transition: 0.3s ease;
      a {
        display: block;
        color: @black;
      }
      span {
        display: block;
        font-size: 16px;
        color: @black-gray;
        margin: 5px 0 10px;
        .ivu-divider {
          background: #aaa;
        }
      }
      p {
        color: @gray;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
    li:hover {
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.05);
    }
    /deep/.ivu-page.mini {
      li {
        margin: 10px !important;
      }
      .ivu-page-item-active {
        font-weight: 700;
        color: @blue;
        cursor: not-allowed;
        a {
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>