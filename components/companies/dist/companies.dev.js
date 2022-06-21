"use strict";

var _myrequest = _interopRequireDefault(require("../../utils/myrequest"));

var _toast = _interopRequireDefault(require("../../miniprogram_npm/@vant/weapp/toast/toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tip: String,
    hasSwitch: Boolean,
    btnText: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    company: '',
    // 输入的公司名
    companies: null,
    // 联想的公司数据
    closed: false,
    // 关闭联想
    checked: true // 开关开启

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //   点击提示
    tip: function tip() {
      wx.showModal({
        title: '提示',
        content: this.data.tip,
        showCancel: false
      });
    },
    // 输入内容时触发
    changeValue: function changeValue(event) {
      var _ref, data;

      return regeneratorRuntime.async(function changeValue$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap((0, _myrequest["default"])({
                url: '/goods/qsearch?query=' + event.detail
              }));

            case 2:
              _ref = _context.sent;
              data = _ref.data;
              console.log(data);
              this.setData({
                company: event.detail,
                companies: data.message,
                closed: false
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    // 关闭联想
    closed: function closed() {
      this.setData({
        closed: true
      });
    },
    onChange: function onChange(event) {
      // 需要手动对 checked 状态进行更新
      this.setData({
        checked: event.detail
      });

      if (!event.detail) {
        (0, _toast["default"])('您关闭后，客服将不会主动联系您，第一次使用建议开启；');
        return;
      }
    },
    // 点击当前项赋值给输入框
    itemfn: function itemfn(event) {
      this.setData({
        company: event.target.dataset.company
      }); // 关闭联想框

      this.closed();
    },
    // 下一步按钮
    addBtn: function addBtn() {
      var _this = this;

      if (!this.data.company) {
        (0, _toast["default"])('企业名称不正确');
        return;
      }

      var arr = wx.getStorageSync('companiesList') || [];
      arr.push({
        company: this.data.company,
        rzState: false
      });
      wx.setStorageSync('companiesList', arr);
      wx.nextTick(function () {
        wx.showLoading({
          title: '加载中',
          success: function success() {
            wx.showToast({
              title: '企业添加成功',
              icon: 'success',
              duration: 2000
            });
          }
        });
      });
      setTimeout(function () {
        wx.hideLoading();
        wx.navigateTo({
          url: '/pakB/pages/Auth/Auth?company=' + _this.data.company
        });
      }, 1500);
    }
  }
});