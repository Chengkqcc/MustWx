// pakA/pages/otherModel/otherModel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    tabs: ["所有", "经营", "买卖", "租赁", "承揽", "担保", "技术", "借款", "劳动", "运输", "保险", "证券", "房产", "建筑", "工程", "招标", "租赁", "产权", "其它", "综合"],
    detail: "d0"
  },
  changeTab(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      active: index,
      detail: "d" + (index - 1)
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