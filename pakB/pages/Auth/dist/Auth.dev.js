"use strict";

// pakB/pages/Auth/Auth.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    company: '',
    rzState: false
  },
  //   删除该企业
  deletefn: function deletefn() {
    var _this = this;

    var companiesList = wx.getStorageSync('companiesList');
    var arr = companiesList.filter(function (item) {
      if (item.company !== _this.data.company) return item;
    });
    console.log(arr);
    wx.setStorageSync('companiesList', arr);
    wx.showModal({
      content: '企业删除成功',
      showCancel: false,
      success: function success(res) {
        if (res.confirm) {
          console.log('用户点击确定');
          wx.navigateTo({
            url: '/pakB/pages/bm/bm'
          });
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
    console.log(options);
    this.setData({
      company: options.company,
      rzState: options.rzState
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function onShareAppMessage() {}
});