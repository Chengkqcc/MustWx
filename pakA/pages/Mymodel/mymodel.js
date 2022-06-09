// pakA/pages/Mymodel/mymodel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    show:false,
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
    tab: "我的模板"
  },
  onClickLeft() {
    wx.showToast({
      title: '返回主页',
      icon: 'none'
    });

  },
  changeTab(e) {
    let tabs = this.data.tabs
    let index = e.currentTarget.dataset.index;
    this.setData({
      active: e.currentTarget.dataset.index,
      tab: tabs[index].title
    })
    if (index == 3) {
      wx.navigateTo({
        url: '/pakA/pages/systemModel/systemModel'
      })
    }
    if (index == 4) {
      wx.navigateTo({
        url: '/pakA/pages/otherModel/otherModel'
      })
    }

  },
  delfn() {
    console.log("删除")
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
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