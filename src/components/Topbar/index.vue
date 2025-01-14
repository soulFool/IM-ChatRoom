<template>
  <view :class="['topbar', { 'border-b': borderBottom }]">
    <view class="topbar__left">
      <slot name="left" />
    </view>
    <view class="topbar__center">
      <slot name="center" />
    </view>
    <view class="topbar__right">
      <slot name="right" />
    </view>
  </view>
</template>

<script setup lang="ts">
const { borderBottom = false } = defineProps<{
  borderBottom?: boolean
}>()
</script>

<style lang="scss" scoped>
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: $topbar-height;
  padding-top: var(--status-bar-height);

  background-color: $uni-bg-color;

  ::v-deep view {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & &__left {
    justify-content: flex-start;

    width: 20%;
    padding-left: $uni-spacing-col-base;

    ::v-deep image {
      width: 68rpx;
      height: 68rpx;

      border-radius: 16rpx;
    }
  }

  &__center {
    flex: 1;

    ::v-deep image {
      width: 88rpx;
      height: 42rpx;
    }
  }

  & &__right {
    justify-content: space-around;

    width: 20%;
    padding-right: 14rpx;

    ::v-deep image {
      width: 52rpx;
      height: 52rpx;
    }
  }
}
</style>
