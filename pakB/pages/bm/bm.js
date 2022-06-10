// pakB/pages/bm.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      hasData: true, // 是否有企业数据
      imageURL:"/images/nav/my-off.png"
   },

   // 点击申请加入企业
   joinBtn() {
      wx.showModal({
         title: '提示',
         content: '如果您是企业管理员，请点击添加新企业创建企业账户，创建后员工才可以申请加入该企业',
         confirmText:'申请加入',
         confirmColor:'#5B6A92',
         cancelText:'创建企业',
         cancelColor:'#000',
         success(res) {
            if (res.confirm) {
               console.log('申请加入企业')
               wx.navigateTo({
                  url: '/pakB/pages/joinCompany/joinCompany'
               });
            } else if (res.cancel) {
               console.log('创建企业')
               wx.navigateTo({
                  url: '/pakB/pages/addCompany/addCompany'
               });
            }
         }
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