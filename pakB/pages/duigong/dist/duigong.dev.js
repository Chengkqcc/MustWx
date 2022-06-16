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
    userID: "",
    //法人证件号
    kaihuName: "",
    //开户名称
    yinhangName: "",
    //银行名称
    duigongNum: "",
    //对公帐号
    allInfoState: false // 全部信息状态

  },
  //企业名称
  onQiyeName: function onQiyeName(event) {
    if (!event.detail.value) {
      (0, _toast["default"])('企业名称输入不合法或为空');
      this.setData({
        allInfoState: false
      });
      return;
    }

    this.setData({
      qiyeName: event.detail.value.trim(),
      allInfoState: true
    });
  },
  //信用代码
  onCode: function onCode(event) {
    if (!event.detail.value) {
      (0, _toast["default"])('信用代码输入不合法或为空');
      this.setData({
        allInfoState: false
      });
      return;
    }

    this.setData({
      xinyongCode: event.detail.value.trim(),
      allInfoState: true
    });
  },
  // 法人名称
  onFarenName: function onFarenName(event) {
    if (!event.detail.value) {
      (0, _toast["default"])('法人名称输入不合法或为空');
      this.setData({
        allInfoState: false
      });
      return;
    }

    this.setData({
      farenName: event.detail.value.trim(),
      allInfoState: true
    });
  },
  // 法人证件号
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
  // 开户名称
  onKaihu: function onKaihu(event) {
    if (!event.detail.value) {
      (0, _toast["default"])('开户名称输入不合法或为空');
      this.setData({
        allInfoState: false
      });
      return;
    }

    this.setData({
      kaihuName: event.detail.value.trim(),
      allInfoState: true
    });
  },
  // 银行名称
  onYinhang: function onYinhang(event) {
    if (!event.detail.value) {
      (0, _toast["default"])('银行名称输入不合法或为空');
      this.setData({
        allInfoState: false
      });
      return;
    }

    this.setData({
      yinhangName: event.detail.value.trim(),
      allInfoState: true
    });
  },
  // 对公帐号
  onDuigong: function onDuigong(event) {
    if (!event.detail.value) {
      (0, _toast["default"])('对公帐号输入不合法或为空');
      this.setData({
        allInfoState: false
      });
      return;
    }

    this.setData({
      duigongNum: event.detail.value.trim(),
      allInfoState: true
    });
  },
  // 确认提交
  submitBtn: function submitBtn() {
    var _this = this;

    // console.log(this.data)
    // if (!this.data.name || !this.data.code || !this.data.username || !this.data.userID) {
    //    Toast('信息填写有误');
    //    this.setData({
    //       userID: null
    //    })
    //    return
    // };
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
          qiyeName: _this.data.qiyeName,
          xinyongCode: _this.data.xinyongCode,
          farenName: _this.data.farenName,
          userID: _this.data.userID,
          kaihuName: _this.data.kaihuName,
          yinhangName: _this.data.yinhangName,
          duigongNum: _this.data.duigongNum
        };
        var arr = result.data.duigong;
        arr.push(obj);
        wx.hideLoading(); //停止loading
      }
    });
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