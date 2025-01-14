<template>
  <view class="page login">
    <Topbar>
      <template #right>
        <view class="login__register">
          <text>注册</text>
        </view>
      </template>
    </Topbar>
    <view class="login__logo">
      <image src="/static/images/common/logo-lg.png" />
    </view>
    <view class="login__main">
      <view class="login__title">登录</view>
      <view class="login__slogan"> 您好，欢迎来到 {{ title }} </view>
      <view class="login__form">
        <Input
          label="用户名/邮箱"
          type="email"
          v-model="inputValue.username"
        />
        <Input
          label="密码"
          type="password"
          v-model="inputValue.password"
        />
        <view class="login__tips">输入用户名或密码错误！</view>
      </view>
      <view class="login__button">
        <button>登录</button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Topbar from '@/components/Topbar/index.vue'
import Input from '@/components/Input/index.vue'

const title = import.meta.env.VITE_APP_TITLE

const inputValue = ref({
  username: '',
  password: ''
})

const handleFocus = () => {
  console.log('focus')
}

const handleBlur = () => {
  console.log('blur')
}

const handleInput = () => {
  console.log('input')
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/base.scss';

.login {
  &__register {
    font-size: $uni-font-size-lg;
    color: $uni-text-color;
  }

  &__logo {
    padding-top: calc(256rpx - $topbar-height - var(--status-bar-height));

    image {
      width: 194rpx;
      height: 92rpx;
    }
  }

  &__main {
    box-sizing: border-box;

    width: 100%;
    padding: 54rpx $uni-spacing-row-lg;
  }

  &__title {
    line-height: 80rpx;

    font-size: 56rpx;
    font-weight: 500;
    color: $uni-text-color;
  }

  &__slogan {
    line-height: 56rpx;

    font-size: 40rpx;
    color: $uni-text-color-grey;
  }

  &__form {
    padding: 8rpx 0 120rpx;

    ::v-deep .input {
      padding-top: 40rpx;
      line-height: 88rpx;

      height: 88rpx;

      font-size: $uni-font-size-lg;
      font-weight: 500;
      color: $uni-text-color;
    }
  }

  &__tips {
    /* 使元素不占据高度，但是显示在页面上 */
    float: left;

    line-height: 56rpx;

    font-size: $uni-font-size-lg;
    color: $uni-color-error;
  }

  &__button {
    button {
      line-height: 96rpx;

      width: 520rpx;
      height: 96rpx;

      font-size: $uni-font-size-lg;
      font-weight: 500;
      color: $uni-text-color;
      background: $uni-color-primary;
      border-radius: 48rpx;
      box-shadow: 0 50rpx 32rpx -36rpx rgba(255, 228, 49, 0.4);
    }
  }
}
</style>
