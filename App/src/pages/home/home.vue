<template>
  <view class="content">
    <image class="logo" src="/static/lock.png"></image>
  </view>

  <view>
    <button class="button-area" @click="buttton_1">开锁</button>
    <button class="button-area" @click="buttton_2">指纹</button>
    <button class="button-area" @click="buttton_3">临时密码</button>
  </view>
</template>

<script lang="ts" setup>
const buttton_1 = () => {
  uni.navigateTo({
    url: '/pages/unlock/unlock',
  })
}
const buttton_2 = () => {
  uni.navigateTo({
    url: '/pages/fingerprint/fingerprint',
  })
}
const buttton_3 = () => {
  uni.navigateTo({
    url: '/pages/password/password',
  })
}
// 引入生命周期函数
import { onMounted } from 'vue'

import mqttService from '../../utils/mqtt'


// 页面挂载完毕
onMounted(() => {
  console.log('页面挂载完毕')
})
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

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
