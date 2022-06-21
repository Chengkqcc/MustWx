// pakA/pages/sendModel/sendModel.js
import formatime from "../../../utils/formatime";
import Toast from '../../../miniprogram_npm/@vant/weapp/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: "",
    show: true,
    bzValue:"",
    obj: {
      minHeight: 50
    },
    fileList: []
  },
  afterRead(event) {
    const {
      file
    } = event.detail;
    console.log(file)
    const {
      fileList = []
    } = this.data;
    fileList.push({
      url: file.url,
      deletable: true,
    });
    this.setData({
      fileList
    });
  },
  delfile(e) {
    let index = e.detail.index;
    const {
      fileList = []
    } = this.data;
    fileList.splice(index, 1);
    this.setData({
      fileList
    });
  },
  onChange(e) {
    this.setData({
      value: e.detail
    })
  },
  submitfn() {
    let date = formatime(new Date())
    let index = 2
    let value = this.data.value;
    if (value.length < 2) {
      Toast("名称至少需要两个字符")
      return
    }
    if(this.data.fileList.length==0){
      Toast("请上传模板")
      return
    }
    wx.redirectTo({
      url: '/pakA/pages/Mymodel/mymodel?model=sendModel&activeIndex=' + index + '&value=' + value + '&date=' + date
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