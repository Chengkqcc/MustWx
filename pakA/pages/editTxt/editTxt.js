// pakA/pages/editTxt/editTxt.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formats: {}
  },
  format(e) {
    console.log(e)
    let {
      name,
      value
    } = e.target.dataset
    if (!name) return
    // console.log('format', name, value)
    
    this.editorCtx.format(name, value)
    // console.dir(this.editorCtx.format)
    console.log(this.data.formats)
  },
  getEditorContent() {

  },
  onEditorReady() {
    const that = this;
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context
    }).exec()
  },
  onStatusChange(e) {
    console.log(e)
    const formats = e.detail
    this.setData({
      formats
    })
    console.log(this.data.formats)
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