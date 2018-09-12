Page({

  /**
   * 页面的初始数据
   */
  data: {
    semester: [
      { name: 1, value: '1' },
      { name: 2, value: '2' },
      { name: 3, value: '3' },
      { name: 4, value: '4' },
      { name: 5, value: '5' },
      { name: 6, value: '6' },
      { name: 7, value: '7' },
      { name: 8, value: '8' },
    ],
    semesterNum: 0,
    tuition: 0,
    house: 0,
    food: 0,
    transportation: 0,

  },
  add: function (e) {

    this.setData({
      total: parseInt(this.data.tuition) + parseInt(this.data.food) + parseInt(this.data.house) + parseInt(this.data.transportation)

    })

  },
  getTuition: function (e) {
    var that = this;
    that.setData({
      tuition: e.detail.value
    })

  },
  getHouse: function (e) {
    var that = this;
    that.setData({
      house: e.detail.value * that.data.semesterNum * 4
    })

  },
  getFood: function (e) {
    var that = this;
    that.setData({
      food: e.detail.value * that.data.semesterNum * 4
    })
  },
  getTrans: function (e) {
    var that = this;
    that.setData({
      transportation: e.detail.value * that.data.semesterNum * 4
    })
  },
  reset: function () {
    console.log("重置");
    this.setData({
      food: 0, house: 0,
      tuition: 0, transportation: 0,
      total: 0
    })
  },
  sub: function () {
    console.log("提交表单");
    var rmb = this.data.total * 5
    wx.showModal({
      title: '留学总费用（人名币)',
      content: 'RMB:' + rmb,

      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  radioChange: function (e) {
    var that = this;
    console.log("radio change event, value: ", e.detail.value);

    that.setData({
      semesterNum: e.detail.value
    })



  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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