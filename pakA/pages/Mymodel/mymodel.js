// pakA/pages/Mymodel/mymodel.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    show: false,
    tabs: [{
        title: "我的模板",
      },
      {
        title: "草稿箱",
      },
      {
        title: "待审模板",
      },
      {
        title: "系统模板",
      },
      {
        title: "其他模板",
      }
    ],
    tab: "我的模板",
    tabArr: [], //我的模板
    waitArr: [], //待审模板
    isDel: false,
    arrIndex: 0,
    detail: "d0"
  },
  onClickLeft() {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  changeTab(e) {
    let tabs = this.data.tabs
    let index = e.currentTarget.dataset.index;
    if (index == 3) {
      wx.navigateTo({
        url: '/pakA/pages/systemModel/systemModel'
      })
      return
    }
    if (index == 4) {
      wx.navigateTo({
        url: '/pakA/pages/otherModel/otherModel'
      })
      return
    }
    this.setData({
      active: e.currentTarget.dataset.index,
      tab: tabs[index].title,
      detail: 'd' + (index - 1)
    })


  },
  addHd() {
    wx.navigateTo({
      url: '/pakA/pages/editTxt/editTxt'
    })
  },
  editfn() {

    wx.navigateTo({
      url: '/pakA/pages/editTxt/editTxt',
    })
  },
  swipefn(e) {
    if (e.detail == "cell") {
      wx.navigateTo({
        url: '/pakA/pages/editTxt/editTxt',
      })
    }
  },
  delfn(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      show: true,
      arrIndex: index
    });
  },
  onClose() {
    this.setData({
      show: false
    });
  },
  sureDel() {
    let active = this.data.active;
    let index = this.data.arrIndex;
    let tabarr = [];
    let waitarr = [];
    if (active == 0) {
      tabarr = this.data.tabArr;
      tabarr.splice(index, 1)
      wx.setStorageSync('editTxt',tabarr)
      this.setData({
        tabArr: tabarr,
      })
    } else if (active == 2) {
      waitarr = this.data.waitArr;
      waitarr.splice(index, 1)
      wx.setStorageSync('sendmodel',waitarr)
      this.setData({
        waitArr: waitarr,
      })
    }
    this.setData({
      show: false
    })
  },
  onloadmodel() {
    wx.navigateTo({
      url: '/pakA/pages/sendModel/sendModel',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.getStorageSync('sendmodel')) {
      this.setData({
        waitArr:wx.getStorageSync('sendmodel')
      })
    }
    if (wx.getStorageSync('editTxt')) {
      this.setData({
        tabArr:wx.getStorageSync('editTxt')
      })
    }
    if (options.model == "sendModel") {
      if (wx.getStorageSync('sendmodel') == "") {
        wx.setStorageSync('sendmodel', [])
      }
      let index = options.activeIndex
      let title = options.value;
      let date = options.date;
      let waitObj = {
        title,
        modelnum: "36456465466546",
        date,
        modelv: "v2"
      }
      let tabs = this.data.tabs
      let wArr = wx.getStorageSync('sendmodel')
      wArr.unshift(waitObj)
      wx.setStorageSync('sendmodel', wArr)
      this.setData({
        arrIndex: index,
        tab: tabs[index].title,
        active: index,
        waitArr:wArr
      })
    } else if (options.model == "editTxt") {
      // let arr = this.data.tabArr;
      if (wx.getStorageSync('editTxt') == "") {
        wx.setStorageSync('editTxt', [])
      }
      let modelObj = JSON.parse(options.modelArr)
      console.log(modelObj)
      let obj = {
        title: modelObj.title,
        modelnum: modelObj.modelnum,
        modeltime: modelObj.modeltime,
        modelv: modelObj.modelv
      }
      let eArr = wx.getStorageSync('editTxt')
      eArr.unshift(obj)
      wx.setStorageSync('editTxt',eArr)
      this.setData({
        tabArr: eArr
      })
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