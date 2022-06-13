"use strict";

var _idcardReg = _interopRequireDefault(require("../../../utils/idcardReg"));

var _toast = _interopRequireDefault(require("../../../miniprogram_npm/@vant/weapp/toast/toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Page({
  /**
   * 页面的初始数据
   */
  data: {
    qiyeName: "",
    //企业名称
    xinyongCode: "",
    //信用代码
    farenName: "",
    //法人名称
    farenCode: "",
    //法人证件号
    kaihuName: "",
    //开户名称
    yinhangName: "",
    //银行名称
    duigongNum: "" //对公帐号

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
    this.setData({
      qiyeName: options.name
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