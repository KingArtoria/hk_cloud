<template>
  <div>
    <div class="content">
      <!-- 标题 -->
      <div class="content_1">《游戏分类》</div>
      <!-- 标签 -->
      <div class="content_2">
        <!-- 单个标签 -->
        <div
          class="content_2_1"
          v-for="(item, index) in tags"
          :key="index"
          @click="toSearch(item)"
        >
          {{ item }}
        </div>
      </div>
      <!-- 文章 -->
      <div class="content_3">
        <!-- 头部 -->
        <div class="content_3_1">
          <!-- 最新文章 -->
          <div class="content_3_1_1">最新文章</div>
          <!-- 排序 -->
          <div class="content_3_1_2">排序：发布时间</div>
        </div>
        <!-- 列表 -->
        <div class="content_3_2">
          <!-- 单个 -->
          <div
            class="content_3_2_1"
            v-for="(item, index) in list"
            :key="index"
            @mouseover="mouseover(index)"
            @mouseleave="mouseleave(index)"
            @click="toAppDetail"
          >
            <!-- 左侧盒子 -->
            <div class="content_3_2_1_1">
              <!-- 序号 -->
              <img
                src="../../assets/no.1.png"
                class="content_3_2_1_1_1"
                v-if="index == 0"
              />
              <img
                src="../../assets/no.2.png"
                class="content_3_2_1_1_1"
                v-else-if="index == 1"
              />
              <img
                src="../../assets/no.3.png"
                class="content_3_2_1_1_1"
                v-else-if="index == 2"
              />
              <div class="content_3_2_1_1_4" v-else>{{ index }}</div>
              <!-- icon -->
              <img
                src="../../assets/hot.png"
                class="content_3_2_1_1_2"
                v-if="index <= 2"
              />
              <!-- 标题 -->
              <div class="content_3_2_1_1_3" :id="index">
                {{ item.title }}
              </div>
            </div>
            <!-- 右侧盒子 -->
            <div class="content_3_2_1_2">阅读（{{ item.view }}）</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HOT_TAGS, LIST, COLOR } from "../../utils/const";
export default {
  data() {
    return {
      // 标签
      tags: [],
      // 列表
      list: [],
    };
  },
  methods: {
    // 鼠标悬浮标题变色
    mouseover(index) {
      // 从颜色常量中随机取1个颜色
      const color = COLOR[Math.floor(Math.random() * COLOR.length)];
      document.getElementById(index).style.color = color;
    },
    // 鼠标离开标题变色
    mouseleave(index) {
      document.getElementById(index).style.color = "#3A3A3A";
    },
    // 前往APP详细
    toAppDetail() {
      this.$router.push("/info");
    },
    // 前往搜索
    toSearch(name) {
      this.$router.push(`/search?keyword=${name}`);
    },
  },
  mounted() {
    // 获取标签
    this.tags = HOT_TAGS;
    // 获取列表
    this.list = LIST;
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>