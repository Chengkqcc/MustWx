"use strict";

var _idcardReg = _interopRequireDefault(require("../../../utils/idcardReg"));

var _toast = _interopRequireDefault(require("../../../miniprogram_npm/@vant/weapp/toast/toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    //企业名称
    code: "",
    //信用代码
    username: "",
    //法人名称
    userID: "",
    //法人证件号
    allInfoState: false // 全部信息状态

  },
  onName: function onName(event) {
    if (!event.detail.value) {
      (0, _toast["default"])('企业名称输入不合法或为空');
      this.setData({
        allInfoState: false
      });
      return;
    }

    this.setData({
      name: event.detail.value.trim(),
      allInfoState: true
    });
  },
  onCode: function onCode(event) {
    if (!event.detail.value) {
      (0, _toast["default"])('信用代码输入不合法或为空');
      this.setData({
        allInfoState: false
      });
      return;
    }

    this.setData({
      code: event.detail.value.trim(),
      allInfoState: true
    });
  },
  onUsername: function onUsername(event) {
    if (!event.detail.value) {
      (0, _toast["default"])('法人名称输入不合法或为空');
      this.setData({
        allInfoState: false
      });
      return;
    }

    this.setData({
      username: event.detail.value.trim(),
      allInfoState: true
    });
  },
  onUserID: function onUserID(event) {
    // 身份证正则验证
    var res = (0, _idcardReg["default"])(event.detail.value);

    if (!res) {
      (0, _toast["default"])('身份证输入不合法或为空');
      this.setData({
        userID: null,
        allInfoState: false
      });
      return;
    } else {
      this.setData({
        userID: event.detail.value,
        allInfoState: true
      });
    }
  },
  // 下一步
  nextBtn: function nextBtn() {
    var _this = this;

    if (!this.data.allInfoState) {
      (0, _toast["default"])('信息填写有误');
      this.setData({
        userID: null
      });
      return;
    }

    ; // loading加载

    wx.showLoading({
      title: '加载中...'
    });
    wx.request({
      url: 'https://mock.presstime.cn/mock/6231d826560ad300225857e7/example/auth',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function success(result) {
        console.log(result.data);
        var obj = {
          name: _this.data.name,
          code: _this.data.code,
          username: _this.data.username,
          userID: _this.data.userID
        };
        var arr = result.data.faren;
        arr.push(obj);
        wx.hideLoading(); //停止loading
        // 将企业认证状态存入本地存储

        wx.setStorageSync('rzState', true);
        var rzState = wx.getStorageSync('rzState');
        wx.showToast({
          title: '企业认证成功',
          icon: 'success',
          duration: 2000,
          success: function success() {
            wx.navigateTo({
              url: '/pakB/pages/bm/bm?company=' + _this.data.name + '&rzState=' + rzState
            });
          }
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
    console.log(options);
    this.setData({
      name: options.company
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