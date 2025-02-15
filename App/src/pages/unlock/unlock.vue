<template>
  <view class="content">
    <image class="logo" src="/static/lock.png"></image>
  </view>

  <view>
    <button class="button-area" @click="buttton_1">开门</button>
    <button class="button-area" @click="buttton_2">关门</button>
  </view>
</template>

<script lang="ts" setup>
// 引入生命周期函数
import { onMounted } from 'vue'

import mqttService from '../../utils/mqtt'

// 页面挂载完毕
onMounted(() => {
  console.log('页面挂载完毕')
})

const buttton_1 = () => {
  mqttService.publish('menjin', '{"msg":"Open Door"}')
  // 弹窗提示
  uni.showToast({
    title: '开门成功',
    icon: 'success',
    duration: 1000
  })
}

const buttton_2 = () => {
  mqttService.publish('menjin', '{"msg":"Close Door"}')
  // 弹窗提示
  uni.showToast({
    title: '关门成功',
    icon: 'success',
    duration: 1000
  })
}
</script>

<style scoped>
.logo {
  height: 300rpx;
  width: 300rpx;
  margin-top: 100rpx;
  margin-left: 36%;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.button-area {
  width: 70%;
  height: 100rpx;
  background-color: #f7c11c;
  color: #000000;
  font-size: 45rpx;
  border: none;
  border-radius: 10rpx;
  margin-top: 100rpx;
}
.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
