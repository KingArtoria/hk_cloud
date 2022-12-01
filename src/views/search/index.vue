<template>
  <div>
    <!-- 内容 -->
    <div class="content">
      <!-- 面包屑 -->
      <div class="content_1" @click="toIndex">当前位置：首页>{{ keyword }}</div>
      <!-- 列表 -->
      <div class="content_2">
        <!-- 单个列表 -->
        <Item :list="list" />
      </div>
    </div>
  </div>
</template>

<script>
import Item from "../../components/Item";
import { SEARCH_RESULT } from "../../utils/const";
export default {
  data() {
    return {
      // 关键词
      keyword: "",
      // 列表
      list: [],
    };
  },
  methods: {
    // 前往首页
    toIndex() {
      this.$router.push("/");
    },
  },
  mounted() {
    // 获取get参数
    this.keyword = this.$route.query.keyword;
    // 获取列表
    this.list = SEARCH_RESULT;
  },
  components: { Item },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>