// pages/diploam/diploam.js
var progressNum = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {

    showView1: true,
    showView3: true,
    showView4: true,
    showView5: true,
    showView6: true,
    showView7: true,
    showView8: true,
    toView:"low"
  },
  showButton1: function () {
    var that = this;
    that.setData({
      showView1: (!that.data.showView1)
    })
  },
  showButton3: function () {
    var that = this;
    that.setData({
      showView3: (!that.data.showView3)
    })
  },
  showButton4: function () {
    var that = this;
    that.setData({
      showView4: (!that.data.showView4)
    })
  },
  showButton5: function () {
    var that = this;
    that.setData({
      showView5: (!that.data.showView5)
    })
  },
  showButton6: function () {
    var that = this;
    that.setData({
      showView6: (!that.data.showView6)
    })
  },
  showButton7: function () {
    var that = this;
    that.setData({
      showView7: (!that.data.showView7)
    })
  },
  showButton8: function () {
    var that = this;
    that.setData({
      showView8: (!that.data.showView8)
    })
  },


  /**
   * 
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var timer = setInterval(function () {
      progressNum++;
      if (progressNum >= 100) {
        clearInterval(timer)
      }
      that.setData({
        progress: progressNum
      });
    }, 30);
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