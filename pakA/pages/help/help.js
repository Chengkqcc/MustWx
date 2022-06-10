// pakA/pages/help/help.js
import myrequest from '../../../utils/myrequest.js'
import Dialog from '../../../miniprogram_npm/@vant/weapp/dialog/dialog';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    helpList:[],
    allData:false,//是否显示全部数据
  },
  //中间内容
  toAnswer(){
    wx.navigateTo({
      url: '/pakA/pages/hotProblem/hotProblem',
    })
  },



  //footer事件
  //跳转到问题反馈页面
  toProblem(){
    wx.navigateTo({
      url: '/pakA/pages/problem/problem?title="问题反馈" ',
    })
  },

  //客服电话
  serverTel(){
    Dialog.alert({
      message: '如您在使用中有疑问，请致电\n021-61984561转1',
    })
  },



  //点击获取更多
  lookMorefn(e){
    this.setData({
      allData:true
    })
  },
  

  
  //获取数据
  async getHelpListData(){
    const {data} = await myrequest({
      url:"/help"
    })
    console.log(data)
    this.setData({
      helpList:data.data
    })
  },
  //隐藏返回首页按钮
  hideHome(){
    wx.hideHomeButton()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getHelpListData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.hideHome()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})