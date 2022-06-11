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
    tabArr: [{
      title: "新建空白模板",
      modelnum: "6549495949549544",
      modeltime: "2022-06-08 19:56:20",
      modelv: "v2"
    }],
    isDel: false,
    arrIndex: 0,
  },
  getDate(date) {
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var hours = date.getHours()
    hours = hours > 10 ? hours : "0" + hours
    var minutes = date.getMinutes()
    minutes = minutes > 10 ? minutes : "0" + minutes
    var seconds = date.getSeconds();
    seconds = seconds > 10 ? seconds : "0" + seconds
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " + hours + seperator2 + minutes + seperator2 + seconds;
    return currentdate;
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
    let date = this.getDate(new Date())
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
    let arr = this.data.tabArr;
    let index = this.data.arrIndex;

    arr.splice(index, 1)

    this.setData({
      tabArr: arr,
      show: false
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