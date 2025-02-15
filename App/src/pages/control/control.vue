<template>
  <view class="content">
    <image class="logo" src="/static/MQTT.png"></image>
  </view>

  <view class="control-panel">
    <text class="title">设备控制</text>

    <!-- 继电器控制 -->
    <view class="control-item">
      <text class="label">继电器 1</text>
      <switch :checked="control.dalay_1" @change="onControlChange('dalay_1', $event)" />
    </view>
    <view class="control-item">
      <text class="label">继电器 2</text>
      <switch :checked="control.dalay_2" @change="onControlChange('dalay_2', $event)" />
    </view>
    <view class="control-item">
      <text class="label">继电器 3</text>
      <switch :checked="control.dalay_3" @change="onControlChange('dalay_3', $event)" />
    </view>
    <view class="control-item">
      <text class="label">继电器 4</text>
      <switch :checked="control.dalay_4" @change="onControlChange('dalay_4', $event)" />
    </view>

    <!-- 断路器控制 -->
    <view class="control-item">
      <text class="label">断路器</text>
      <switch :checked="control.circuit_breaker" @change="onControlChange('circuit_breaker', $event)" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import mqttService from '../../utils/mqtt'

// 控制指令的绑定对象
const control = ref({
  dalay_1: false,
  dalay_2: false,
  dalay_3: false,
  dalay_4: false,
  circuit_breaker: false
})

// 控制状态改变时发送 MQTT 指令
const onControlChange = (key: string, event: any) => {
  // 从事件中获取布尔值，并转换为 1 或 0
  const value = event.detail.value ? 1 : 0

  // 更新控制项的状态
  control.value[key] = value
  const msg = { ...control.value }
  console.log('发送控制指令:', msg)

  // 将 msg 对象转换为 JSON 字符串
  const msgString = JSON.stringify(msg)

  // 发布控制指令到对应的 MQTT 主题
  mqttService.publish('/ESP32/control', msgString)
}
</script>

<style scoped>
.logo {
  height: 300rpx;
  width: 300rpx;
  margin-top: 100rpx;
  margin-left: 30%;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.control-panel {
  padding: 30rpx;
  background-color: #fff;
  border-radius: 20rpx;
  box-shadow: 0 5rpx 15rpx rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 42rpx;
  color: #333;
  text-align: center;
  margin-bottom: 20rpx;
}

.control-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20rpx;
  font-size: 36rpx;
}

.label {
  color: #666;
}

.switch {
  color: #333;
}
</style>
