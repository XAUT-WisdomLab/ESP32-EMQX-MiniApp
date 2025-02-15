<template>
  <view class="content">
    <image class="logo" src="/static/lock.png"></image>
  </view>

  <view>
    <button class="button-area" @click="buttton_1">生成临时密码</button>
  </view>
  <div class="title">临时密码:{{ mqttService.password }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import mqttService from '../../utils/mqtt'

const buttton_1 = () => {
  mqttService.publish('menjin', '{"msg":"Password"}')
  // 弹窗提示
  uni.showToast({
    title: '开始生成临时密码',
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
  margin-top: 100rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 55rpx;
  color: #0e0e0e;
}
</style>
