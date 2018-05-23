import Vue from 'vue'
import App from './App'
import './css/app.css'
Vue.config.productionTip = false
App.mpType = 'app'
import '@/css/minx.less'
import '../static/weui/weui.css'
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: [
      'pages/index/index','^pages/user/user'

    ], // Will be filled in webpack
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '辣个车',
      navigationBarTextStyle: 'black'
    },
     tabBar: {
      color: '#7D7D7D',
      selectedColor: '#FF4615',
      backgroundColor: '#ffffff',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: 'static/images/souye.png',
          selectedIconPath: 'static/images/souye1.png'
        },
        {
          pagePath: 'pages/user/user',
          text: '我的',
          iconPath: 'static/images/wode.png',
          selectedIconPath: 'static/images/wode1.png'
        }
      ]
    } 
  }
}
