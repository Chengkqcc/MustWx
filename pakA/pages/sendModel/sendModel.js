// pakA/pages/sendModel/sendModel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true,
    obj: {
      minHeight: 80
    },
    fileList: []
  },
  afterRead(event) {
    const {
      file
    } = event.detail;
    console.log(file)
    const {
      fileList = []
    } = this.data;
    console.log(fileList)
    fileList.push({
      url:file.url,
      deletable: true,
    });
    this.setData({
      fileList
    });
  },
  delfile(e){
    let index = e.detail.index;
    const {
      fileList = []
    } = this.data;
    fileList.splice(index,1);
    this.setData({
      fileList
    });
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