import Toast from '../../../miniprogram_npm/@vant/weapp/toast/toast';
import request from '../../../utils/myrequest'

Page({

   /**
    * 页面的初始数据
    */
   data: {
      company: '', // 输入的公司名
      companies:null, // 联想的公司数据
      closed:false, // 关闭联想
   },
   //   点击提示
   tip() {
      wx.showModal({
         title: '提示',
         content: '请填写您要加入的企业',
         showCancel: false
      })
   },

   // 输入内容时触发
   async changeValue(event) {
      let {data} = await request({url:'/goods/qsearch?query='+event.detail})
      console.log(data)
      this.setData({
         company: event.detail,
         companies: data.message
      })
   },

   // 申请加入
   joinBtn() {
      // console.log(this.data.companies.length)
      if (!this.data.companies || this.data.companies.length<=0 ) {
         Toast('企业名称不正确');
         return
      }
   },

   // 关闭联想
   closed(){
      this.setData({
         closed:true
      })
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad(options) {

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