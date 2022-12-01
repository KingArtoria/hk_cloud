<template>
  <div>
    <div class="tabbar">
      <!-- logo -->
      <img src="../assets/huokeyk.png" class="tabbar_1" />
      <!-- 左侧盒子 -->
      <div class="tabbar_2">
        <!-- 菜单 -->
        <div
          class="tabbar_2_1"
          v-for="(item, index) in menu"
          :key="index"
          @click="menuJump(item)"
        >
          {{ item.name }}
        </div>
      </div>
      <!-- 右侧盒子 -->
      <div class="tabbar_3">
        <!-- 搜索框 -->
        <div class="tabbar_3_3">
          <!-- 输入框 -->
          <input type="text" placeholder="请输入关键字" class="tabbar_3_3_1" />
          <!-- 小图标 -->
          <img src="../assets/sousuo.png" class="tabbar_3_3_2" />
        </div>
        <!-- 电话 -->
        <img src="../assets/dianhua.png" class="tabbar_3_7" />
        <!-- 微信 -->
        <img src="../assets/weixin.png" class="tabbar_3_2" />
        <!-- 头像 -->
        <img :src="userInfo.head" class="tabbar_3_1" />
        <!-- 头像悬浮框 -->
        <div class="tabbar_3_4">
          <!-- 信息盒子 -->
          <div class="tabbar_3_4_1">
            <!-- 头像 -->
            <img src="../assets/tx.png" class="tabbar_3_4_1_1" />
            <!-- 信息 -->
            <div class="tabbar_3_4_1_2">
              <!-- 姓名 -->
              <div class="tabbar_3_4_1_2_1">用户1</div>
              <!-- id -->
              <div class="tabbar_3_4_1_2_2">ID：00001</div>
            </div>
          </div>
          <!-- 手机号 -->
          <div class="tabbar_3_4_2">注册手机号：15190664662</div>
        </div>
        <!-- 微信悬浮框 -->
        <div class="tabbar_3_5">
          <!-- 二维码 -->
          <div class="tabbar_3_5_1" />
          <!-- 文本 -->
          <div class="tabbar_3_5_2">客服企业微信</div>
        </div>
        <!-- 联系方式悬浮框 -->
        <div class="tabbar_3_6">
          <!-- 标题 -->
          <div class="tabbar_3_6_1">联系方式</div>
          <!-- 联系方式 -->
          <div class="tabbar_3_6_2">0516-83898991</div>
          <!-- 时间 -->
          <div class="tabbar_3_6_3">
            <div class="tabbar_3_6_3_1">周一至周五：9:00-21:00</div>
            <div class="tabbar_3_6_3_1">周末节假日：9:00-18:00</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MENU } from "../utils/const";
export default {
  data() {
    return {
      // 菜单
      menu: [],
      // 用户信息
      userInfo: {},
    };
  },
  methods: {
    // 菜单跳转
    menuJump(item) {
      this.$router.push(item.path);
    },
  },
  mounted() {
    // 菜单常量赋值
    this.menu = MENU;
    // 获取用户信息
    this.userInfo = localStorage.getItem("userInfo");
    console.log(this.userInfo);
  },
};
</script>
<style lang="scss" scoped>
.tabbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 calc(calc(100% - 15rem) / 2);
  height: 0.8rem;
  background: #313131;
  position: relative;
  z-index: 999;
  .tabbar_1 {
    position: absolute;
    left: 2.1875rem;
    width: 1.3625rem;
    height: 0.325rem;
  }
  .tabbar_2 {
    height: 0.8rem;
    display: flex;
    .tabbar_2_1 {
      padding: 0 0.35rem;
      line-height: 0.8rem;
      font-size: 0.1875rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #f4f7f6;
      margin-right: 0.175rem;
      background: transparent;
      cursor: pointer;
    }
    .tabbar_2_1:hover {
      background: rgba(244, 247, 246, 0.12);
      transition: all 0.5s;
    }
  }
  .tabbar_3 {
    display: flex;
    align-items: center;
    .tabbar_3_1 {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      margin-left: 0.4625rem;
      cursor: pointer;
    }
    .tabbar_3_1:hover {
      transform: rotate(360deg);
    }
    .tabbar_3_1:hover ~ .tabbar_3_4 {
      height: 1.9rem;
      transition: all 0.5s;
    }
    .tabbar_3_2 {
      width: 0.45rem;
      height: 0.45rem;
      margin-left: 0.475rem;
    }
    .tabbar_3_7 {
      width: 0.45rem;
      height: 0.45rem;
      margin-left: 0.475rem;
    }
    .tabbar_3_2:hover ~ .tabbar_3_5 {
      height: 2.45rem;
      transition: all 0.5s;
    }
    .tabbar_3_7:hover ~ .tabbar_3_6 {
      height: 2.0375rem;
      transition: all 0.5s;
    }
    .tabbar_3_3 {
      display: flex;
      align-items: center;
      width: 3.5rem;
      height: 0.4375rem;
      background: #ffffff;
      border-radius: 0.0625rem;
      padding: 0 0.125rem;
      .tabbar_3_3_1 {
        font-size: 0.1625rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #9b9b9b;
        width: 100%;
      }
    }
    .tabbar_3_4 {
      position: absolute;
      top: 0.8rem;
      right: calc(4.5rem - 2.0625rem);
      width: 4.125rem;
      height: 0;
      background: #ffffff;
      box-shadow: 0px 0px 0.0875rem 0px rgba(0, 0, 0, 0.22);
      overflow: hidden;
      .tabbar_3_4_1 {
        display: flex;
        align-items: center;
        padding: 0 0.275rem;
        height: 1.1375rem;
        border-bottom: 0.0125rem solid #eaf1ef;
        .tabbar_3_4_1_1 {
          width: 0.625rem;
          height: 0.625rem;
          border-radius: 50%;
          margin-right: 0.15rem;
        }
        .tabbar_3_4_1_2 {
          height: 0.625rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .tabbar_3_4_1_2_1 {
            font-size: 0.2125rem;
            font-family: PingFang SC;
            font-weight: 400;
            color: #2d2d2d;
          }
          .tabbar_3_4_1_2_2 {
            font-size: 0.1625rem;
            font-family: PingFang SC;
            font-weight: 400;
            color: #616161;
          }
        }
      }
      .tabbar_3_4_2 {
        height: calc(1.9rem - 1.1375rem);
        line-height: calc(1.9rem - 1.1375rem);
        font-size: 0.1875rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #898989;
        padding-left: 0.275rem;
      }
    }
    .tabbar_3_5 {
      position: absolute;
      top: 0.8rem;
      width: 2.225rem;
      height: 0;
      background: #ffffff;
      box-shadow: 0px 0px 0.0875rem 0px rgba(0, 0, 0, 0.22);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      right: calc(4.5rem + 0.1rem);
      overflow: hidden;
      .tabbar_3_5_1 {
        width: 1.725rem;
        height: 1.725rem;
        margin-bottom: 0.1375rem;
        background: #2d2d2d;
      }
      .tabbar_3_5_2 {
        font-size: 0.1875rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #2d2d2d;
      }
    }
    .tabbar_3_6 {
      position: absolute;
      width: 2.625rem;
      height: 0;
      background: #ffffff;
      box-shadow: 0px 0px 0.0875rem 0px rgba(0, 0, 0, 0.22);
      top: 0.8rem;
      right: calc(4.5rem + 0.75rem);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      .tabbar_3_6_1 {
        font-size: 0.2125rem;
        font-family: PingFang SC;
        font-weight: 500;
        color: #2d2d2d;
        line-height: 1;
        margin-bottom: 0.2125rem;
      }
      .tabbar_3_6_2 {
        width: 2.1875rem;
        height: 0.4rem;
        background: #f7ebe0;
        text-align: center;
        font-size: 0.225rem;
        font-family: PingFang SC;
        font-weight: 500;
        color: #e35908;
        line-height: 0.4rem;
        margin-bottom: 0.2125rem;
      }
      .tabbar_3_6_3 {
        .tabbar_3_6_3_1 {
          font-size: 0.15rem;
          font-family: PingFang SC;
          font-weight: 400;
          color: #898989;
          line-height: 0.2125rem;
        }
      }
    }
  }
}
</style>