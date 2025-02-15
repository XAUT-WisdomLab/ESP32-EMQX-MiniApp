import { connect, MqttClient } from 'mqtt/dist/mqtt'
import { ref } from 'vue'

// 连接配置参数：
const mqttOptions = {
  host: 'XXXX',
  username: 'APP',
  password: 'APP',
}

class MqttService {
  private static instance: MqttService
  private client: MqttClient
  public msg = ref('')

  private constructor() {
    this.client = connect(`mqtt://${mqttOptions.host}:8084/mqtt`, {
      username: mqttOptions.username,
      password: mqttOptions.password,
      protocol: 'wxs', // 小程序只能用 wx 或 wxx 协议
      clientId: 'wechat_' + Math.random().toString(16).substring(2, 8),
      keepalive: 60,
    })

    this.client.on('connect', () => {
      // 弹窗提示
      uni.showToast({
        title: 'MQTT连接成功',
        icon: 'success',
        duration: 1000,
      })
      console.log('连接成功')
    })

    this.client.on('reconnect', (error: any) => {
      console.log('正在重连...')
    })

    this.client.on('error', (error: any) => {
      console.log('连接失败...', error)
    })

    this.client.on('end', () => {
      console.log('连接断开')
    })

    this.client.on('message', (topic: any, message: any) => {
      console.log('接收推送信息：', message.toString())
      this.msg.value = JSON.parse(message.toString())
    })
  }

  public static getInstance(): MqttService {
    if (!MqttService.instance) {
      MqttService.instance = new MqttService()
    }
    return MqttService.instance
  }

  public subscribe(topic: string): void {
    this.client.subscribe(topic, (err: any) => {
      if (!err) {
        console.log('订阅成功')
      } else {
        console.log('订阅失败')
      }
    })
  }

  public publish(topic: string, message: string): void {
    this.client.publish(topic, message)
  }
}

// 导出单例
const mqttService = MqttService.getInstance()
export default mqttService
