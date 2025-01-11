<script setup lang="ts">

import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";

// 应用初始化时执行，全局只执行一次
onLaunch(() => {
  console.log("App Launch");
});

// 当应用从后台进入前台显示时执行
onShow(() => {
  console.log("App Show");
});

// 当应用从前台进入后台时执行
onHide(() => {
  console.log("App Hide");
});
</script>
<style></style>
