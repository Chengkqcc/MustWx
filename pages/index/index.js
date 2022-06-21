Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 常用服务
    "server": [
      {
        "id": 0,
        "imgsrc": "https://oss2.1dq.com/app/static/app-plus/images/add.png",
        "text": "上传",
      },
      {
        "id": 1,
        "imgsrc": "https://oss2.1dq.com/app/static/app-plus/images/pingtai.png",
        "text": "全部合同"
      },
      {
        "id": 2,
        "imgsrc": "https://oss2.1dq.com/app/static/app-plus/images/zaixian.png",
        "text": "模板"
      },
      {
        "id": 3,
        "imgsrc": "https://oss2.1dq.com/app/static/app-plus/images/help.png",
        "text": "帮助中心"
      },
      {
        "id": 4,
        "imgsrc": "https://oss2.1dq.com/app/static/app-plus/images/zhineng.png",
        "text": "企业管理"
      },
      {
        "id": 5,
        "imgsrc": "https://oss2.1dq.com/app/static/app-plus/images/hetongguanli.png",
        "text": "账户设置"
      }
    ],
    // 轮播图
    "banner": {
      "title": "体验无纸化办公",
      "bannerList": [
        {
          "id": 0,
          "imgsrc": "https://oss2.1dq.com/app/static/app-plus/images/index-b03.jpg"
        },
        {
          "id": 1,
          "imgsrc": "https://oss2.1dq.com/app/static/app-plus/images/index-b02.jpg"
        },
        {
          "id": 2,
          "imgsrc": "https://oss2.1dq.com/app/static/app-plus/images/index-b01.jpg"
        }
      ]
    },
    // 系统模板
    "model": {
      "title": "系统模板",
      "modelList": [
        {
          "id": 0,
          "imgsrc": "https://safe-storage-cos2.1dq.com/template/a8f9571df21f4f8e4fbf93a41506abff/png/13d9eb0e-1.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKID1oUyEJ7WEjzIJ2cuSt4ybw0mgJfjIC5s%26q-sign-time%3D1655339107%3B1655339767%26q-key-time%3D1655339107%3B1655339767%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D95a8b0bfbf1fe3b587169c7e9c6ee91862d21c23&&imageMogr2/thumbnail/400x",
          "text": "通用合同"
        },
        {
          "id": 1,
          "imgsrc": "https://safe-storage-cos2.1dq.com/template/85705283361de94062a17b7fbd3e8636/png/0f4de9b3-1.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKID1oUyEJ7WEjzIJ2cuSt4ybw0mgJfjIC5s%26q-sign-time%3D1655292689%3B1655293349%26q-key-time%3D1655292689%3B1655293349%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D4c417126ca63e22a7c42706cef1de9cf94d18a50&&imageMogr2/thumbnail/400x",
          "text": "房屋租赁合同"
        },
        {
          "id": 2,
          "imgsrc": "https://safe-storage-cos2.1dq.com/template/f77ae3689bf9efd79a5b0ed052eedd6f/png/d790e428-1.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKID1oUyEJ7WEjzIJ2cuSt4ybw0mgJfjIC5s%26q-sign-time%3D1655292689%3B1655293349%26q-key-time%3D1655292689%3B1655293349%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D1d0d3df7c5830bb325c71a8193e44592629324fc&&imageMogr2/thumbnail/400x",
          "text": "劳动合同"
        },
        {
          "id": 3,
          "imgsrc": "https://safe-storage-cos2.1dq.com/template/c63cb0fa4e2b9ec2c912a0866045531d/png/54df436d-1.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKID1oUyEJ7WEjzIJ2cuSt4ybw0mgJfjIC5s%26q-sign-time%3D1655292689%3B1655293349%26q-key-time%3D1655292689%3B1655293349%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3Db4a9cd6c3f9df2ddeb17a92d0af0f67dccbe6e1d&&imageMogr2/thumbnail/400x",
          "text": "安全承诺书"
        },
        {
          "id": 4,
          "imgsrc": "https://safe-storage-cos2.1dq.com/template/75ddbdfb32db6bbb3b18f95047e6abb2/png/72d9cf03-1.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKID1oUyEJ7WEjzIJ2cuSt4ybw0mgJfjIC5s%26q-sign-time%3D1655292689%3B1655293349%26q-key-time%3D1655292689%3B1655293349%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D00d2a241ba55138105d6d2253682645c02de40b4&&imageMogr2/thumbnail/400x",
          "text": "公司劳动合同"
        },
        {
          "id": 5,
          "imgsrc": "https://safe-storage-cos2.1dq.com/template/d17d3a78f00a3450dbd51cf90821b2e2/png/f7a012bb-1.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKID1oUyEJ7WEjzIJ2cuSt4ybw0mgJfjIC5s%26q-sign-time%3D1655292689%3B1655293349%26q-key-time%3D1655292689%3B1655293349%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D3876197ee3b6e52ab8559cb0faab986383f02ed7&&imageMogr2/thumbnail/400x",
          "text": "广告合同范本"
        }
      ]
    },
    // 控制电子合同使用流程弹出层的显示和隐藏
    "show": false,
    // 电子合同使用流程
    "flow": {
      // 企业用户
      firm: [
        {
          "id": 0,
          "imgsrc": "https://oss2.1dq.com/app/static/app-plus/index-push/user.png",
          "title": "注册账户",
          "text": "使用手机号快速注册",
          "finish": "去完成",
          "video": "视频"
        },
        {
          "id": 1,
          "imgsrc": "https://oss2.1dq.com/app/static/app-plus/index-push/safe.png",
          "title": "实名认证",
          "text": "签署合同需实名认证",
          "finish": "去完成",
          "video": "视频"
        },
        {
          "id": 2,
          "imgsrc": "https://oss2.1dq.com/app/static/app-plus/index-push/upload.png",
          "title": "发起电子合同",
          "text": "上传电子合同，生成合同",
          "finish": "去完成",
          "video": "视频"
        },
        {
          "id": 3,
          "imgsrc": "https://oss2.1dq.com/app/static/app-plus/index-push/signed.png",
          "title": "签署电子合同",
          "text": "对电子合同进行签字或盖章",
          "finish": "去完成",
          "video": "视频"
        }
      ],
      // 个人用户
      people: [
        {
          "id": 0,
          "imgsrc": "https://oss2.1dq.com/app/static/app-plus/index-push/user.png",
          "title": "注册账户",
          "text": "使用手机号快速注册",
          "finish": "去完成",
          "video": "视频"
        },
        {
          "id": 1,
          "imgsrc": "https://oss2.1dq.com/app/static/app-plus/index-push/safe.png",
          "title": "经办人实名认证",
          "text": "签署合同需实名认证",
          "finish": "去完成",
          "video": "视频"
        },
        {
          "id": 2,
          "imgsrc": "https://oss2.1dq.com/app/static/app-plus/index-push/createCompany.png",
          "title": "创建企业",
          "text": "可创建多个企业",
          "finish": "去完成",
          "video": "视频"
        },
        {
          "id": 3,
          "imgsrc": "https://oss2.1dq.com/app/static/app-plus/index-push/companyCert.png",
          "title": "企业认证",
          "text": "认证后签署才具备法律效力",
          "finish": "去完成",
          "video": "视频"
        },
        {
          "id": 4,
          "imgsrc": "https://oss2.1dq.com/app/static/app-plus/index-push/upload.png",
          "title": "企业名义发起合同",
          "text": "用企业名义上传合同文件，发送给客户",
          "finish": "去完成",
          "video": "视频"
        },
        {
          "id": 5,
          "imgsrc": "https://oss2.1dq.com/app/static/app-plus/index-push/signed.png",
          "title": "签合同->盖公章",
          "text": "对合同进行签字或盖章",
          "finish": "去完成",
          "video": "视频"
        }
      ]
    },
    // 保存企业用户和个人用户
    "text": "我是企业用户",
    // 企业用户和个人用户的显示与隐藏
    "film": true,
    "people": false

  },
  // 点击常用服务
  redirect(e) {
    let url = e.currentTarget.dataset.url;
    if (url == "上传") {
      wx.switchTab({
        url: '../uploading/uploading',
      })
    } else if (url == "全部合同") {
      wx.switchTab({
        url: '../contract/constract',
      })
    } else if (url == "模板") {
      let token = wx.getStorageSync('token')
      if (token.length > 0) {
        wx.navigateTo({
          url: '../../pakA/pages/Mymodel/mymodel',
        })
      } else {
        wx.navigateTo({
          url: '../login/login?type=homepage',
        })
      }
    } else if (url == "帮助中心") {
      wx.navigateTo({
        url: '../../pakA/pages/help/help',
      })
    } else if (url == "企业管理") {
      let token = wx.getStorageSync('token')
      if (token.length > 0) {
        wx.navigateTo({
          url: '../../pakB/pages/bm/bm',
        })
      } else {
        wx.navigateTo({
          url: '../login/login?type=homepage',
        })
      }

    } else {
      wx.navigateTo({
        url: '../../pakB/pages/usersetting/usersetting',
      })
    }
  },
  // 点击轮播图
  jumpSwiper(e) {
    let index = e.currentTarget.dataset.index;
    if (index == 0) {
      wx.navigateTo({
        url: '../eContract/eContract',
      })
    } else if (index == 1) {
      let token = wx.getStorageSync('token')
      if (token.length > 0) {
        wx.switchTab({
          url: '../uploading/uploading',
        })
      } else {
        wx.navigateTo({
          url: '../login/login?type=homepage',
        })
      }
    } else if (index == 2) {
      wx.switchTab({
        url: '../contract/constract',
      })
    }
  },

  // 点击选择一份文件
  selectWenjian() {
    wx.switchTab({
      url: '../uploading/uploading',
    })
  },

  // 点击系统模板右边的小图标
  showModel() {
    wx.navigateTo({
      url: '../../pakA/pages/systemModel/systemModel',
    })
  },
  // 点击系统模板中的内容
  detailContract(e) {
    let imgsrc = e.currentTarget.dataset.imgsrc;
    wx.navigateTo({
      url: '../fillContract/fillContract?imgsrc=' + imgsrc,
    })
  },

  // 点击切换企业用户和个人用户
  changeTitle(e) {
    let text = e.currentTarget.dataset.text;
    if (text == "我是企业用户") {
      this.setData({
        text: "个人用户",
        film: false,
        people: true
      })
    } else {
      this.setData({
        text: "我是企业用户",
        film: true,
        people: false
      })
    }
  },
  onClose() {
    this.setData({ show: false });
  },
  // 去视频页面
  toVideoPage(e) {
    let title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: '../videoPage/videoPage?title=' + title,
    })
  },
  // 点击去完成按钮
  tofinish(e) {
    let title = e.currentTarget.dataset.title;
    if (title == "注册账户") {
      wx.navigateTo({
        url: '../login/login?type=homepage',
      })
    } else if (title == "实名认证" || title == "经办人实名认证") {
      wx.navigateTo({
        url: '../../pakB/pages / shimingrenzheng / shimingrenzheng',
      })
    } else if (title == "发起电子合同" || title == "企业名义发起合同") {
      wx.switchTab({
        url: '../uploading/uploading',
      })
    } else if (title == "签署电子合同" || title == "签合同->盖公章") {
      wx.switchTab({
        url: '../contract/constract',
      })
    } else if (title == "创建企业") {
      wx.navigateTo({
        url: '../../pakB/pages/addCompany/addCompany',
      })
    } else if (title == "企业认证") {
      wx.navigateTo({
        url: '../../pakB/pages/bm/bm',
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.token) {
      let token = options.token;
      if (token.length > 0) {
        this.setData({
          show: true
        })
      } else {
        this.setData({
          show: false
        })
      }
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