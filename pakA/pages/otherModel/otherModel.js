// pakA/pages/otherModel/otherModel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    tabs: ["所有", "经营", "买卖", "租赁", "承揽", "担保", "技术", "借款", "劳动", "运输", "保险", "证券", "房产", "建筑", "工程", "招标", "租赁", "产权", "其它", "综合"],
    detail: "d0",
    arr0: ["顾问聘请协议", "项目顾问咨询合同", "财税顾问合同", "财税顾问协议", "财税顾问合作协议", "财税咨询代理协议", "聘请顾问协议书", "税务代理合同书", "房地产项目全程顾问咨询服务合同", "媒体顾问协议", "公司管理顾问聘用合同", "会计公司服务协议书"]
  },
  changeTab(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      active: index,
      detail: "d" + (index - 1)
    })
  },
  detialfn(e) {
    let index = e.currentTarget.dataset.index
    let arr = this.data.arr0;
    wx.navigateTo({
      url: '/pakA/pages/allmodel/allmodel?title=' + arr[index]
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