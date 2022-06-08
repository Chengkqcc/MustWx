// pakA/pages/Mymodel/mymodel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    tabs: [{
        title: "我的模板",
      },
      {
        title: "草稿箱",
        
      },
      {
        title: "待审模板",
      },
      {
        title: "系统模板",
      },
      {
        title: "其他模板",
      }
    ],
    tab:"我的模板"
  },
  onClickLeft() {
    wx.showToast({
      title: '返回主页',
      icon: 'none'
    });
  },
  changeTab(e){
    console.log(e.currentTarget.dataset.index)
    let tabs= this.data.tabs
    let index = e.currentTarget.dataset.index;
    this.setData({
      active:e.currentTarget.dataset.index,
      tab:tabs[index].title
    })
  },
  onOpen(){

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