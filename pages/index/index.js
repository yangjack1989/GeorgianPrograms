//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    items: [
      { name: "two-year-diploma", value: "专科文凭", checked: "true" },
      { name: "four-year-degree", value: "本科学位" },
      { name: "certificate", value: "研究生文凭" },
      { name: "EAP", value: "英语预科课程" },
    ],
    imageSrc: [
      "../../images/h4.png",
      "../../images/h5.jpg",
      "../../images/h6.jpg"
    ],
    motto: 'Hello World',
    choose: "",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    if (e.detail.value.radiogroup == "two-year-diploma") {
      wx.navigateTo({
        url: '../diploam/diploam'
      })
    } else if (e.detail.value.radiogroup == "four-year-degree") {
      wx.navigateTo({
        url: '../degree/degree'
      })
    } else if (e.detail.value.radiogroup == "certificate") {
      wx.navigateTo({
        url: '../certificate/certificate'
      })
    } else if (e.detail.value.radiogroup == "EAP") {
      wx.navigateTo({
        url: '../eap/eap'
      })
    }


  },




  navigatorTo: function (e) {

    wx.navigateTo({
      url: '../diploam/diploam'
    })
  },

  //radio 事件
  radioChange: function (e) {
    console.log("radio change event, value: ", e.detail.value)
  },

  onLoad: function () {
   /* if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }*/
  },
 /* getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }*/
})
