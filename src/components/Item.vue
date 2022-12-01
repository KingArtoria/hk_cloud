<template>
  <div>
    <!-- 项目 -->
    <div class="item" v-for="(item, index) in list" :key="index">
      <!-- 图像盒子 -->
      <div class="item_1" :style="`background-image: url(${bg})`" />
      <!-- 信息 -->
      <div class="item_2">
        <!-- 标题 -->
        <div class="item_2_1">{{ item.title }}</div>
        <!-- 介绍 -->
        <div class="item_2_2">{{ item.info }}</div>
        <!-- 底部盒子 -->
        <div class="item_2_3">
          <!-- 时间/热度 -->
          <div class="item_2_3_1">
            <!-- 时间 -->
            <div class="item_2_3_1_1">{{ item.time }}</div>
            <!-- 热度 -->
            <div class="item_2_3_1_2">
              <!-- icon -->
              <img src="../assets/hot.png" class="item_2_3_1_2_1" />
              <!-- 热度 -->
              <div class="item_2_3_1_2_2">{{ item.view }}</div>
            </div>
          </div>
          <!-- 按钮 -->
          <div class="item_2_3_2">查看更多</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      // 背景图片
      bg: require("../assets/tx.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 10.4875rem;
  background: #ffffff;
  padding: 0.4375rem 0.35rem 0.4375rem 0.45rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.1625rem;
  cursor: pointer;
  .item_1 {
    width: 2.275rem;
    height: 1.4125rem;
    border: 0.0125rem solid #f4f7f6;
    border-radius: 0.0625rem;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    margin-right: 0.5125rem;
    flex-shrink: 0;
  }
  .item_2 {
    width: 6.9rem;
    .item_2_1 {
      font-size: 0.25rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: #3a3a3a;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .item_2_2 {
      font-size: 0.175rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #7a7a7a;
      // 多行超出省略号
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-top: 0.15rem;
      margin-bottom: 0.075rem;
    }
    .item_2_3 {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      .item_2_3_1 {
        display: flex;
        align-items: center;
        .item_2_3_1_1 {
          font-size: 0.1875rem;
          font-family: PingFang SC;
          font-weight: 400;
          color: #9ea0b3;
          margin-right: 0.35rem;
        }
        .item_2_3_1_2 {
          display: flex;
          align-items: center;
          .item_2_3_1_2_1 {
            width: 0.175rem;
            height: 0.2rem;
            margin-right: 0.1rem;
          }
          .item_2_3_1_2_2 {
            font-size: 0.1875rem;
            font-family: PingFang SC;
            font-weight: 400;
            color: #9ea0b3;
          }
        }
      }
      .item_2_3_2 {
        width: 1.4375rem;
        height: 0.4875rem;
        background: #313131;
        border-radius: 0.0375rem;
        text-align: center;
        line-height: 0.4875rem;
        font-size: 0.1875rem;
        font-family: PingFang SC;
        font-weight: bold;
        color: #ffffff;
        transition: all 0.5s;
        cursor: pointer;
      }
      .item_2_3_2:hover {
        background: #ff6b11;
        transition: all 0.5s;
      }
    }
  }
}
</style>