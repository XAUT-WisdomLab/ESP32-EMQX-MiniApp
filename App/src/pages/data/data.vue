<template>
  <view class="content">
    <image class="logo" src="/static/MQTT.png"></image>
  </view>

  <view class="data-card">
    <text class="title">设备数据</text>
    <view class="data-item" v-for="(value, key) in formattedData" :key="key">
      <text class="label">{{ key }}</text>
      <text class="value">{{ value }}</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue'
import mqttService from '../../utils/mqtt'

const topic = '/ESP32/attribute'

// 存储 MQTT 数据
const deviceData = ref<Record<string, any>>({})

// 监听 mqttService.msg 的变化并更新 deviceData
watch(
  () => mqttService.msg.value, // 监听 mqttService.msg.value
  (newValue) => {
    if (newValue && newValue.params) {
      deviceData.value = Object.assign({}, newValue.params)
    }
  },
  { immediate: true } // 立即触发一次
)

// 计算格式化数据
const formattedData = computed(() => {
  const data = deviceData.value || {}
  return {
    "温度": data.temperature !== undefined ? `${data.temperature.toFixed(1)} ℃` : '--',
    "湿度": data.humidity !== undefined ? `${data.humidity.toFixed(1)} %` : '--',
    "气压": data.pressure !== undefined ? `${data.pressure.toFixed(1)} hPa` : '--',
    "光照强度": data.lightIntensity !== undefined ? `${data.lightIntensity} lx` : '--',
    "烟雾浓度": data.smokeDensity !== undefined ? `${data.smokeDensity.toFixed(1)} ppm` : '--',
    "继电器 1 状态": data.relayStatus_1 !== undefined ? (data.relayStatus_1 ? '开启' : '关闭') : '--',
    "继电器 2 状态": data.relayStatus_2 !== undefined ? (data.relayStatus_2 ? '开启' : '关闭') : '--',
    "继电器 3 状态": data.relayStatus_3 !== undefined ? (data.relayStatus_3 ? '开启' : '关闭') : '--',
    "继电器 4 状态": data.relayStatus_4 !== undefined ? (data.relayStatus_4 ? '开启' : '关闭') : '--',
    "断路器状态": data.circuitBreakerStatus !== undefined ? (data.circuitBreakerStatus ? '正常' : '断开') : '--'
  }
})

// 页面挂载时订阅 MQTT 主题
onMounted(() => {
  console.log('获取数据页面挂载完毕')
  mqttService.subscribe(topic)
})
</script>

<style scoped>
.logo {
  height: 300rpx;
  width: 300rpx;
  margin: 50rpx auto;
  display: block;
}

.data-card {
  background: #fff;
  padding: 30rpx;
  border-radius: 20rpx;
  box-shadow: 0 5rpx 15rpx rgba(0, 0, 0, 0.1);
  width: 90%;
  margin: auto;
}

.title {
  font-size: 42rpx;
  color: #333;
  text-align: center;
  margin-bottom: 20rpx;
}

.data-item {
  display: flex;
  justify-content: space-between;
  padding: 15rpx 0;
  font-size: 36rpx;
  border-bottom: 1rpx solid #eee;
}

.label {
  color: #666;
}

.value {
  color: #333;
  font-weight: bold;
}
</style>
