<template>
  <view>
    <uni-card>
      <text>网络请求数据:{{ data }}</text>
    </uni-card>
    <button @click="test">测试网络请求</button>
    <button @click="test404">测试网络请求:404</button>
    <button @click="untest">清除</button>
    <button @click="exit">退出</button>
  </view>
</template>

<script setup lang="ts">
import { http } from '@/utils/http'

import { ref } from 'vue'
// 网络请求数据
let data = ref('无')
// 测试网络请求
const test = async () => {
  console.log('测试网络请求')

  const res = await http<string>({
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    method: 'GET',
    header: {},
  })
  console.log('success', res)
  data.value = JSON.stringify(res)
}
// 测试网络请求
const test404 = async () => {
  console.log('测试网络请求404')

  const res = await http<string>({
    url: 'https://jsonplaceholder.typicode.com/todos/1123232sdafafaf',
    method: 'GET',
    header: {},
  })
  console.log('success', res)
  data.value = JSON.stringify(res)
}
// 清除数据
const untest = () => {
  data.value = '无'
}

// 退出
const exit = () => {
  uni.navigateTo({
    url: '/pages/index/index',
  })
}
</script>

<style></style>
