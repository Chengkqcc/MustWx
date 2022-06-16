// pakB/pages/xieyi/xieyi.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      name:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log(options);
      let name = options.name
      wx.setNavigationBarTitle({
        title: name,
      })
      switch (name) {
        case '用户注册协议':
            name = 'yhzcxy'
          break;
        case '用户隐私协议':
            name = 'yhysxy'
          break;
        case '实名认证授权协议':
            name = 'smrzsqxy'
          break;
        case '数字证书申领协议':
            name = 'szzsslxy'
          break;
      }
      this.setData({name})
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