// pakB/pages/bm.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      hasData: false, // 是否有企业数据 
      imageURL: "/images/nav/my-off.png",
      companiesList: [], // 公司列表
   },

   // 点击申请加入企业
   joinBtn() {
      wx.showModal({
         title: '提示',
         content: '如果您是企业管理员，请点击添加新企业创建企业账户，创建后员工才可以申请加入该企业',
         confirmText: '申请加入',
         confirmColor: '#5B6A92',
         cancelText: '创建企业',
         cancelColor: '#000',
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

   // 页面初始化
   initPage() {
      let companiesList = wx.getStorageSync('companiesList');
      if (companiesList.length > 0) {
         wx.setStorageSync('hasData', true);
      } else {
         wx.setStorageSync('hasData', false);
      }
      let hasData = wx.getStorageSync('hasData');
      this.setData({
         hasData,
         companiesList
      })
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad(options) {
      // 页面初始化
      this.initPage()
   },

   onRefresh: function () {
      //导航条加载动画
      wx.showNavigationBarLoading()
      //loading 提示框
      wx.showLoading({
         title: '加载中...',
      })
      console.log("下拉刷新啦");
      setTimeout(() =>{
         wx.hideLoading();
         wx.hideNavigationBarLoading();
         //停止下拉刷新
         wx.stopPullDownRefresh();
         // 更新页面数据
         this.initPage();
      }, 1500)
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
      this.onRefresh();
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