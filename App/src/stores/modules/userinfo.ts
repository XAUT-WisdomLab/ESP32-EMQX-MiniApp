import type { LoginResult } from '@/types/userinfo'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useUserInfoStore = defineStore(
  'member',
  () => {
    // 用户信息
    const userInfo = ref<LoginResult>()

    // 保存用户信息，登录时使用
    const setUserInfo = (val: LoginResult) => {
      userInfo.value = val
    }

    // 清理用户信息，退出时使用
    const clearUserInfo = () => {
      userInfo.value = undefined
    }

    // 导出
    return {
      userInfo,
      setUserInfo,
      clearUserInfo,
    }
  },
  {
    // 小程序端配置
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
