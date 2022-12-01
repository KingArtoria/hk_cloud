<template>
  <div id="app">
    <Tabbar />
    <!-- 整个页面 -->
    <div class="app">
      <!-- 宣传图 -->
      <img src="./assets/bannner_sy.png" class="app_3" />
      <!-- 内容 -->
      <div class="app_1">
        <!-- 左侧盒子 -->
        <div>
          <!-- 路由页面 -->
          <router-view />
        </div>
        <!-- 右侧盒子 -->
        <div>
          <rightBox />
        </div>
      </div>
    </div>
    <!-- 登录弹窗 -->
    <div class="login" v-if="loginShow">
      <!-- 登录盒子 -->
      <div class="login_1">
        <!-- 左侧图片 -->
        <img src="./assets/del_bg.png" class="login_1_1" />
        <!-- 右侧盒子 -->
        <div class="login_1_2">
          <!-- 标题 -->
          <div class="login_1_2_1">火客云控后台登录</div>
          <!-- 小方块 -->
          <div class="login_1_2_2" />
          <!-- 输入账号 -->
          <div class="login_1_2_3">
            <!-- 输入框 -->
            <input
              type="text"
              class="login_1_2_3_1"
              placeholder="请输入账号"
              v-model="loginParams.phone"
            />
          </div>
          <!-- 验证码 -->
          <div class="login_1_2_3">
            <!-- 输入框 -->
            <input
              type="text"
              class="login_1_2_3_1"
              placeholder="请输入验证码"
              v-model="loginParams.code"
            />
            <!-- 获取验证码 -->
            <div class="login_1_2_3_2" @click="getCode">{{ tips }}</div>
          </div>
          <!-- 按钮 -->
          <div class="login_1_2_4" @click="login">登录</div>
          <!-- 提示 -->
          <div class="login_1_2_5">未注册的用户会自动注册</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tabbar from "./components/Tabbar";
import rightBox from "./components/rightBox";
import { getVerifyCode, login } from "./utils/api";
export default {
  data() {
    return {
      // 登录/注册参数
      loginParams: {},
      // 获取验证码提示
      tips: "获取验证码",
      // 登录弹窗
      loginShow: false,
    };
  },
  methods: {
    // 登录/注册
    login() {
      // 登录/注册API
      login(this.loginParams).then((res) => {
        // 抛出异常
        if (res.code != 1) return this.$message.error(res.msg);
        // 保存token
        localStorage.setItem("token", res.data.token);
        // 保存用户信息
        localStorage.setItem("userInfo", JSON.stringify(res.data.userinfo));
        // 关闭登录弹窗
        this.loginShow = false;
      });
    },
    // 获取验证码
    getCode() {
      // 获取验证码API
      getVerifyCode({ phone: this.loginParams.phone }).then((res) => {
        // 抛出异常
        if (res.code != 1) return this.$message.error(res.msg);
        // 获取验证码
        this.tips = "60s";
        // 倒计时
        let time = 60;
        let timer = setInterval(() => {
          time--;
          this.tips = time + "s";
          if (time == 0) {
            clearInter * val(timer);
            this.tips = "获取验证码";
          }
        }, 1000);
      });
    },
  },
  mounted() {
    // 是否有用户信息
    if (!localStorage.getItem("userInfo")) {
      // 显示登录弹窗
      this.loginShow = true;
    }
  },
  components: { Tabbar, rightBox },
};
</script>
<style>
@import "./index.css";
</style>
<style lang="scss">
.app {
  background: #f4f7f6;
  min-height: 100vh;
  .app_1 {
    display: flex;
    width: 15rem;
    margin: 0 auto;
    justify-content: space-between;
  }
  .app_3 {
    display: block;
    width: 15rem;
    height: 2.5rem;
    margin: 0 auto;
    margin-top: 0.175rem;
    margin-bottom: 0.2rem;
  }
}
.login {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba($color: #000000, $alpha: 0.34);
  .login_1 {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 10.6rem;
    height: 6.7125rem;
    display: flex;
    .login_1_1 {
      width: 4.575rem;
      height: 6.7125rem;
    }
    .login_1_2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 6.0375rem;
      height: 6.7125rem;
      background: #ffffff;
      box-shadow: 0px 0px 0.875rem 0px rgba(232, 241, 251, 0.67);
      padding-top: 0.6375rem;
      .login_1_2_1 {
        font-size: 0.375rem;
        font-family: PingFang SC;
        font-weight: 800;
        color: #282828;
        line-height: 1;
        margin-bottom: 0.2rem;
      }
      .login_1_2_2 {
        width: 0.425rem;
        height: 0.05rem;
        background: #313131;
        margin-bottom: 0.6rem;
      }
      .login_1_2_3 {
        width: 4.375rem;
        height: 0.6625rem;
        background: #f3f4f9;
        margin-bottom: 0.2125rem;
        padding: 0 0.375rem;
        display: flex;
        align-items: center;
        .login_1_2_3_1 {
          font-size: 0.2rem;
          font-family: PingFang SC;
          font-weight: 400;
          color: #b9bac2;
          line-height: 0.6625rem;
          width: 100%;
          background: transparent;
        }
        .login_1_2_3_2 {
          font-size: 0.2rem;
          font-family: PingFang SC;
          font-weight: 400;
          color: #000;
          line-height: 0.6625rem;
          width: 100%;
          background: transparent;
          text-align: right;
          cursor: pointer;
        }
      }
      .login_1_2_4 {
        width: 4.375rem;
        height: 0.6625rem;
        background: #313131;
        text-align: center;
        line-height: 0.6625rem;
        font-size: 0.25rem;
        font-family: PingFang SC;
        font-weight: bold;
        color: #ffffff;
        cursor: pointer;
        margin-top: 0.95rem;
      }
      .login_1_2_5 {
        font-size: 0.2rem;
        font-family: PingFang SC;
        font-weight: 500;
        color: #9a9ca9;
        margin-top: 0.425rem;
      }
    }
  }
}
</style>