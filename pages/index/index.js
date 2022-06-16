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
          "imgsrc": "https://safe-storage-cos2.1dq.com/template/a8f9571df21f4f8e4fbf93a41506abff/png/13d9eb0e-1.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKID1oUyEJ7WEjzIJ2cuSt4ybw0mgJfjIC5s%26q-sign-time%3D1655107979%3B1655108639%26q-key-time%3D1655107979%3B1655108639%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D85e4031d9d921471f131defd6be1bda0a457da0d&&imageMogr2/thumbnail/400x",
          "text": "通用合同"
        },
        {
          "id": 1,
          "imgsrc": "https://safe-storage-cos2.1dq.com/template/85705283361de94062a17b7fbd3e8636/png/0f4de9b3-1.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKID1oUyEJ7WEjzIJ2cuSt4ybw0mgJfjIC5s%26q-sign-time%3D1655107979%3B1655108639%26q-key-time%3D1655107979%3B1655108639%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3Ddd4f0c745c72f44e7a54414ba8b8fc93fb95efe3&&imageMogr2/thumbnail/400x",
          "text": "房屋租赁合同"
        },
        {
          "id": 2,
          "imgsrc": "https://safe-storage-cos2.1dq.com/template/f77ae3689bf9efd79a5b0ed052eedd6f/png/d790e428-1.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKID1oUyEJ7WEjzIJ2cuSt4ybw0mgJfjIC5s%26q-sign-time%3D1655107979%3B1655108639%26q-key-time%3D1655107979%3B1655108639%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3Db886b21ed429768cf5361804cefe1898d15f42e7&&imageMogr2/thumbnail/400x",
          "text": "劳动合同"
        },
        {
          "id": 3,
          "imgsrc": "https://safe-storage-cos2.1dq.com/template/c63cb0fa4e2b9ec2c912a0866045531d/png/54df436d-1.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKID1oUyEJ7WEjzIJ2cuSt4ybw0mgJfjIC5s%26q-sign-time%3D1655107979%3B1655108639%26q-key-time%3D1655107979%3B1655108639%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D7aa48f47070a2d9befe8f6e88b92d582f636c0db&&imageMogr2/thumbnail/400x",
          "text": "安全承诺书"
        },
        {
          "id": 4,
          "imgsrc": "https://safe-storage-cos2.1dq.com/template/75ddbdfb32db6bbb3b18f95047e6abb2/png/72d9cf03-1.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKID1oUyEJ7WEjzIJ2cuSt4ybw0mgJfjIC5s%26q-sign-time%3D1655107979%3B1655108639%26q-key-time%3D1655107979%3B1655108639%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3Da79c852db656cac0a575037c4eae86f0347bf757&&imageMogr2/thumbnail/400x",
          "text": "公司劳动合同"
        },
        {
          "id": 5,
          "imgsrc": "https://safe-storage-cos2.1dq.com/template/d17d3a78f00a3450dbd51cf90821b2e2/png/f7a012bb-1.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKID1oUyEJ7WEjzIJ2cuSt4ybw0mgJfjIC5s%26q-sign-time%3D1655107979%3B1655108639%26q-key-time%3D1655107979%3B1655108639%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D3105b3de5af7c53bb980afb5796a3f24f318f303&&imageMogr2/thumbnail/400x",
          "text": "广告合同范本"
        }
      ]
    }
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
      wx.navigateTo({
        url: '../login/login',
      })
    } else if (url == "帮助中心") {
      wx.navigateTo({
        url: '../../pakA/pages/help/help',
      })
    } else if (url == "企业管理") {
      // wx.navigateTo({
      //   url: '../login/login',
      // })
      wx.navigateTo({
        url: '../../pakB/pages/bm/bm',
      })
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
      console.log(1)
    } else if (index == 1) {
      wx.navigateTo({
        url: '../login/login',
      })
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
  // 点击合同
  detailContract() {
    wx.navigateTo({
      url: '../login/login',
    })
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