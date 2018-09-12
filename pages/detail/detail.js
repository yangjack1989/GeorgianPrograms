// pages/detail/detail.js
const app = getApp() 


Page({

  /**
   * 页面的初始数据
   */
  data: {
   
    programs: {},
    toView: "s1",

  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //wx request method
    /** console.log('onLoad')
     var that = this
     that.setData({
       programid:options.id
     })
     wx.request({
       url: 'http://10.250.5.163/db1',//
       data: {},
       method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
       header: {
         'Accept': 'application/json'
       }, // 设置请求的 header
       success: function (res) {
         var data = res.data.posts.filter(item => {
           return item.id==options.id;
         });
         console.log(data)
         that.setData({
           programs: data,//res.data.posts[options.id],
          
         })
       },
       fail: function () {
         // fail
         wx.showToast({
           title: '网络异常！',
           duration: 2000
         }); 
       },
       complete: function () {
         // complete
       }
     })
     },**/
    

    // use the global data from app.js then search the deatials based on seleted id. 
    var that = this;
    console.log(options.id)
    
    var id = options.id;
    var obj = app.globalData.prog.filter(item => {
      return item.id == id;
    })
    console.log(obj)

    that.setData({

      programs: obj,

    })

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