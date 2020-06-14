<template>
  <div class="filter-box">
    <h2>{{title}}</h2>
    <CheckboxGroup v-model="checkList">
      <Checkbox v-for="item in showList"
                :key="item"
                :label="item"></Checkbox>
    </CheckboxGroup>
    <template>
      <Select v-if="hiddenList.length>0"
              v-model="addmore"
              placement="bottom"
              prefix="ios-search"
              placeholder="更多"
              filterable
              @on-select="addJobCheck"
              ref="selectInput">
        <Option v-for="(item,i) in hiddenList"
                :value="i"
                :key="item">{{item}}</Option>
      </Select>
    </template>

  </div>
</template>

<script>
export default {
  data () {
    return {
      showList: [],
      hiddenList: [],
      addmore: "",//要新增的职位选择,
      checkList: []
    }
  },
  props: {
    title: String,
    list: Array,
    checkedItems: Array
  },
  mounted () {
    this.showList = this.checkedItems;
    if (this.showList.length < 6) {
      this.showList = this.showList.concat(this.list.slice(0, 6));
    }

    this.hiddenList = this.list.slice(6);
  },
  methods: {
    addJobCheck (i) {
      let item = this.hiddenList.splice(i, 1);
      this.showList.push(item[0]);//新增
      this.checkList.push(item[0]);

    }
  },
  watch: {
    checkList (val) {
      this.$emit('on-change', val);
    }
  }

}
</script>

<style lang="less" scoped>
.filter-box {
  margin-top: 20px;
  .ivu-checkbox-group-item {
    display: block;
    margin: 10px 0;
  }
  /deep/.ivu-select-selection {
    border: none;
  }
  /deep/.ivu-select-single {
    position: relative;
    border-bottom: 1px solid #eee;
  }
  /deep/.ivu-select-visible .ivu-select-selection {
    box-shadow: none;
  }
  /deep/.ivu-select-single::after {
    display: block;
    content: "";
    width: 0;
    height: 1px;
    position: absolute;
    z-index: 1;
    background-color: #3370ff;
    bottom: -1px;
    left: 0;
    transition: 0.5s ease;
  }
  /deep/.ivu-select-single:hover::after,
  .ivu-select-visible.ivu-select-single::after {
    width: 100%;
  }
  /deep/ .ivu-icon-ios-arrow-down:before {
    content: "";
  }
}
</style>