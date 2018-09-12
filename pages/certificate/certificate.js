// pages/certificate/certificate.js
const app = getApp() 
Page({

  /**
   * 页面的初始数据
   */
  data: {
   certList:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  // use the global data from app.js
   console.log(app.globalData.prog)
   var obj = app.globalData.prog
   console.log(obj[2])
   var match=[];
   // search the programs that belongs to certificate
    for (var i = 0; i < obj.length;i++)
    if (obj[i].length=="1年"){
      match.push(obj[i]);
    }
    // add some certificate programs that are two-years 
    match.push(obj[81]);
    match.push(obj[79]);
    match.push(obj[82]);
    match.push(obj[85]);
    console.log(match)
    this.setData({
      certList: match,

    })
    console.log(this.data.certList)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})