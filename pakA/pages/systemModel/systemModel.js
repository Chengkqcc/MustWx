// pakA/pages/systemModel/systemModel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hdData: [{
      title: "商品合同1",
    }, {
      title: "商品合同2",
    }, {
      title: "商品合同3",
    }, {
      title: "商品合同4",
    }, {
      title: "商品合同5",
    }, {
      title: "商品合同6",
    }, {
      title: "商品合同71",
    }, {
      title: "商品合同11",
    }, {
      title: "商品合同27",
    }, {
      title: "商品合同57",
    }, {
      title: "商品合同8",
    }, {
      title: "商品合同9",
    }],
    hdArr:[],
    value: ""
  },
  onClickLeft() {
    wx.navigateBack({
      delta: 1,
    })
  },
  filterHd(e) {
    let value = e.detail
    let arr = this.data.hdData
    let newArr = arr.filter((item) => {
      return item.title.indexOf(value) != -1
    })
    console.log(newArr)
    this.setData({
      hdArr: newArr
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      hdArr:this.data.hdData
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