const app = getApp() 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    matchList:{},
    
    selectHide: false,

    inputValue: '',

    getSearch: [],

    modalHidden: true,
    matchidlist:{},

  },
  // 获取用户输入框的值

    searchNameInput: function (e) {

    var that = this;
    
      that.setData({

      inputValue: e.detail.value

      })
    
  },
  setSearch: function () {

      //读取用户搜索
   // console.log(app.globalData.prog)
      
      var inputName = this.data.inputValue
      console.log(inputName)
       
    var match = [];
    for (var i = 0; i < app.globalData.prog.length;i++)
        if (app.globalData.prog[i].name.indexOf(inputName)>-1){ 
         match.push(app.globalData.prog[i]);
          
        }
     
      console.log(match)
  
     this.setData({
       matchList:match,

     })
     console.log(this.data.matchList)
    if(this.data.matchList.length==0){
      wx.showModal({
        title: '无相关专业',
        content: '请输入其它关键字',

        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
         
          }
        }
      })
    }
    },
    clear:function(){
      
       this.setData({
         matchList:{},
       })
      if (this.data.inputValue!=null){
        var that=this;
        that.setData({
          inputValue:'',
        })
      }
    },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
   

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log('search is onHide')

    wx.redirectTo({

      url: '../search/search'

    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})