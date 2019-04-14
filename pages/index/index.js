//index.js
var util = require('../../utils/util.js')

const app = getApp()
Page({
  data: {
    imgUrls: [
'http://gw.alicdn.com/imgextra/i4/195/TB2TTzyaCiJ.eBjSszfXXa4bVXa_!!195-0-yamato.jpg_q50.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 2000,
    duration: 1000
  },
  onLoad: function () {
    
  },
  onPullDownRefresh:function(options) {
    console.log('onPullDownRefresh')
  },
  onShareAppMessage:function(options){
    console.log('onShareAppMessage')
  },
  onReachBottom:function(options) {
    console.log('onReachBottom')
  },
  onPageScroll:function(options){
    console.log('onPageScroll')
  }
})
