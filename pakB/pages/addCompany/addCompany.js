// pakB/pages/addCompany/addCompany.js
import Toast from '../../../miniprogram_npm/@vant/weapp/toast/toast';
Page({

   /**
    * 页面的初始数据
    */
   data: {
      checked: true,
      tip: '完成企业认证后，系统自动赠送8份电子合同，您将自动成为该企业管理员并为您创建企业电子公章；', // 提示信息
   },

   onChange(event) {
      // 需要手动对 checked 状态进行更新
      this.setData({
         checked: event.detail
      });
      if(!event.detail){
         Toast('您关闭后，客服将不会主动联系您，第一次使用建议开启；');
         return
      }
   },

   // 下一步
   addBtn() {
      // console.log(this.data.companies.length)
      if (!this.data.companies || this.data.companies.length <= 0) {
         Toast('企业名称不正确');
         return
      }
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