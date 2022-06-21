// pakA/pages/fillcontent/fillcontent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    magnify: true,//显示放大缩小
    show: false,//弹窗显示
    success: false,//填写成功
    wait: false,//等待填写
    content: true//合同页面
  },
  magnifyfn() {
    this.setData({
      magnify: !this.data.magnify
    })
  },
  onClose() {
    this.setData({
      show: false
    })
  },
  invateFn() {
    if (!this.data.success) {
      this.setData({
        show: true,
        wait: true,
        content: false
      })
    }else {
      this.setData({
        show: true,
      })
    }

  },
  fillbtn() {
    this.setData({
      show: false,
      wait: false,
      content: false,
      success: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.title) {
      this.setData({
        title: options.title
      })
    }
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