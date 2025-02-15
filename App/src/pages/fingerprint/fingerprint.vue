<template>
  <view class="content">
    <image class="logo" src="/static/lock.png"></image>
  </view>

  <view>
    <button class="button-area" @click="button_1">指纹注册</button>
    <button class="button-area" @click="button_2">指纹删除</button>
  </view>
</template>

<script lang="ts" setup>
import mqttService from '../../utils/mqtt'
const button_1 = () => {
  mqttService.publish('menjin', '{"msg":"Register"}')
  // 弹窗提示
  uni.showToast({
    title: '开始注册',
    icon: 'success',
    duration: 1000
  })
}

const button_2 = () => {
  uni.showModal({
    title: '输入编号(请输入1到100之间的编号)',
    content: '0',
    editable: true,
    success: function (res) {
      if (res.confirm && res.content) {
        const inputNumber = parseInt(res.content);
        if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 100) {
          uni.showToast({
            title: '输入无效，请输入1到100之间的编号',
            icon: 'none',
            duration: 2000
          });
        } else {
          console.log('输入的编号为' + inputNumber);
          mqttService.publish('menjin', '{"msg":"' + (inputNumber - 1) + '"}');
          uni.showToast({
            title: '开始删除',
            icon: 'success',
            duration: 1000
          });
        }
      } else if (res.cancel) {
        console.log('用户取消输入');
      }
    },
    fail: function (res) {
      console.log(res.errMsg);
    }
  });
};


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
}</style>
