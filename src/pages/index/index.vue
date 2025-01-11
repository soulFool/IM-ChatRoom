<template>
  <view class="content">
    <view class="topbar">
      <view class="topbar__left">
        <image src="/static/images/page/four.png" />
      </view>
      <view class="topbar__center">
        <image src="/static/images/topbar/logo.png" />
      </view>
      <view class="topbar__right">
        <view class="topbar__right--search">
          <image src="/static/images/topbar/search.png" />
        </view>
        <view class="topbar__right--add">
          <image src="/static/images/topbar/add.png" />
        </view>
      </view>
    </view>

    <view class="content__body">
      <view class="friends-list">
        <view class="friends-list__item">
          <view class="friends-list__item-left">
            <text class="friends-list__item-tip">1</text>
            <image
              class="friends-list__item-avatar"
              src="/static/images/page/apply.png"
            />
          </view>
          <view class="friends-list__item-right">
            <view class="friends-list__item-info">
              <view class="friends-list__item-name">好友申请</view>
              <view class="friends-list__item-time">10:00</view>
            </view>
            <view class="friends-list__item-message"> 你是帅b </view>
          </view>
        </view>
      </view>
      <view class="friends-list">
        <view class="friends-list__item" v-for="item in friends" :key="item.id">
          <view class="friends-list__item-left">
            <text class="friends-list__item-tip">{{ item.tip }}</text>
            <image
              class="friends-list__item-avatar"
              :src="item.imgUrl"
            />
          </view>
          <view class="friends-list__item-right">
            <view class="friends-list__item-info">
              <view class="friends-list__item-name">{{ item.name }}</view>
              <view class="friends-list__item-time">{{ formatMessageTime(item.time) }}</view>
            </view>
            <view class="friends-list__item-message">
              {{ item.news }}
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { formatMessageTime } from '@/utils'

const friends = ref<any[] | null>(null)

onLoad(() => {
  friends.value = [
    {
      id: 1,
      imgUrl: 'four.png',
      tip: 99,
      name: '飞翔的企鹅',
      time: new Date(),
      news: '你再说尼玛呢???????????????????????????????????',
    },
    {
      id: 2,
      imgUrl: 'one.png',
      tip: 88,
      name: '企鹅',
      time: new Date(),
      news: '你再说尼玛呢????',
    },
    {
      id: 3,
      imgUrl: 'two.png',
      tip: 77,
      name: '坠机的企鹅',
      time: new Date(),
      news: '你再说尼玛呢????',
    },
    {
      id: 4,
      imgUrl: 'three.png',
      tip: 66,
      name: '进击的企鹅',
      time: new Date(),
      news: '你再说尼玛呢????',
    },
    {
      id: 5,
      imgUrl: 'five.png',
      tip: 55,
      name: '拉屎的企鹅',
      time: new Date(),
      news: '你再说尼玛呢????',
    },
    {
      id: 6,
      imgUrl: 'six.png',
      tip: 44,
      name: '吃饭的企鹅',
      time: new Date(),
      news: '你再说尼玛呢????',
    },
    {
      id: 7,
      imgUrl: 'seven.png',
      tip: 33,
      name: '尿尿的企鹅',
      time: new Date(),
      news: '你再说尼玛呢????',
    },
    {
      id: 8,
      imgUrl: 'eight.png',
      tip: 22,
      name: '遛鸟的企鹅',
      time: new Date(),
      news: '你再说尼玛呢????',
    },
    {
      id: 9,
      imgUrl: 'nine.png',
      tip: 11,
      name: '游泳的企鹅',
      time: new Date(),
      news: '你再说尼玛呢????',
    },
    {
      id: 10,
      imgUrl: 'ten.png',
      tip: 1,
      name: '睡觉的企鹅',
      time: new Date(),
      news: '你再说尼玛呢????',
    },
    {
      id: 11,
      imgUrl: 'eleven.png',
      tip: 2,
      name: '打游戏的企鹅',
      time: new Date(),
      news: '你再说尼玛呢????',
    },
  ]
})
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.topbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  width: 100%;
  height: $topbar-height;

  background-color: $uni-bg-color;
  border-bottom: 1px solid $uni-border-color;

  view {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__left {
    padding-left: $uni-spacing-col-base;

    image {
      width: 68rpx;
      height: 68rpx;

      border-radius: 16rpx;
    }
  }

  &__center {
    flex: 1;

    image {
      width: 88rpx;
      height: 42rpx;
    }
  }

  &__right {
    justify-content: flex-end;

    padding-right: 14rpx;

    image {
      width: 52rpx;
      height: 52rpx;
    }
  }
}

.content__body {
  box-sizing: border-box;

  width: 100%;
  padding-top: $topbar-height;

  .friends {
    &-list {
      // 好友列表样式

      &__item {
        // 好友项样式
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 96rpx;
        padding: 16rpx $uni-spacing-col-base;

        &:active {
          background-color: $uni-bg-color-grey;
        }

        image {
          width: 96rpx;
          height: 96rpx;

          background-color: $uni-color-primary;
          border-radius: $uni-border-radius-base;
        }

        &-left {
          // 左侧样式
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        &-right {
          // 右侧样式
          flex: 1;
          overflow: hidden;

          padding-left: $uni-spacing-col-base;
        }

        &-tip {
          // 提示数字样式
          position: absolute;
          top: -6rpx;
          right: -6rpx;
          z-index: 10;

          min-width: 36rpx;
          height: 36rpx;
          line-height: 36rpx;

          text-align: center;
          font-size: $uni-font-size-sm;
          color: $uni-text-color-inverse;
          background-color: $uni-color-warning;
          border-radius: $uni-border-radius-circle;
        }

        &-avatar {
          // 头像样式
        }

        &-info {
          // 顶部样式
          display: flex;
          justify-content: space-between;
          align-items: center;

          height: 50rpx;
        }

        &-name {
          // 名字样式
          line-height: 50rpx;

          font-size: 36rpx;
          color: $uni-text-color;
        }

        &-time {
          // 时间样式
          line-height: 50rpx;

          font-size: $uni-font-size-sm;
          color: $uni-text-color-disable;
        }

        &-message {
          // 消息样式
          @include no-wrap();

          line-height: 40rpx;

          font-size: $uni-font-size-base;
          color: $uni-text-color-grey;
        }
      }
    }
  }
}
</style>
