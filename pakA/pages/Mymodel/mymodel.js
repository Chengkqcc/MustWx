// pakA/pages/Mymodel/mymodel.js
import getDate from "../../../utils/formatime"


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
    tabArr: [{
      title: "新建空白模板",
      modelnum: "6549495949549544",
      modeltime: "2022-06-08 19:56:20",
      modelv: "v2"
    }], //我的模板
    waitArr: [], //待审模板
    isDel: false,
    arrIndex: 0,
  },
  onClickLeft() {
    wx.showToast({
      title: '返回主页',
      icon: 'none'
    });

  },
  changeTab(e) {
    let tabs = this.data.tabs
    let index = e.currentTarget.dataset.index;
    this.setData({
      active: e.currentTarget.dataset.index,
      tab: tabs[index].title
    })
    if (index == 3) {
      wx.navigateTo({
        url: '/pakA/pages/systemModel/systemModel'
      })
    }
    if (index == 4) {
      wx.navigateTo({
        url: '/pakA/pages/otherModel/otherModel'
      })
    }

  },
  addHd() {
    let date = getDate(new Date())
    console.log(date)
    let arr = this.data.tabArr;
    let obj = {
      title: "新建空白模板",
      modelnum: "654949594954954",
      modeltime: date,
      modelv: "v2"
    }
    arr.unshift(obj)
    this.setData({
      tabArr: arr
    })
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
    let tabarr=[];
    let waitarr=[];
    if (active == 0) {
      tabarr = this.data.tabArr;
      console.log(tabarr)
      tabarr.splice(index,1)
      this.setData({
        tabArr: tabarr,
      })
    } else if (active == 2) {
      waitarr = this.data.waitArr;
      waitarr.splice(index, 1)
      this.setData({
        waitArr:waitarr,
      })
    }
    this.setData({
      show: false
    })
  },
  onloadmodel(){
    wx.navigateTo({
      url: '/pakA/pages/sendModel/sendModel',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let tabs = this.data.tabs
    let index = this.options.activeIndex
    let title = options.value;
    let date = options.date;
    let waitObj = {
      title,
      modelnum: "36456465466546",
      date,
      modelv: "v2"
    }
    let waitArr = this.data.waitArr
    waitArr.unshift(waitObj)
    if (options) {
      this.setData({
        arrIndex: index,
        tab: tabs[index].title,
        active: index,
        waitArr
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