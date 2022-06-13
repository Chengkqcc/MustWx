Page({

   /**
    * 页面的初始数据
    */
   data: {
      tip: '完成企业认证后，系统自动赠送8份电子合同，您将自动成为该企业管理员并为您创建企业电子公章；', // 提示信息
      hasSwitch: true, // 是否显示开关
      btnText: '下一步', // 按钮文字
      renzheng:false,// 认证提示
   },


   /**
    * 生命周期函数--监听页面加载
    */
   onLoad(options) {
      if (!this.data.renzheng) {
         wx.showModal({
            title: '认证提示',
            content: '完成企业认证后，系统自动赠送您8份电子合同，您将成为该企业管理元并为您创建企业公章；',
            showCancel: false,
         })
      }
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