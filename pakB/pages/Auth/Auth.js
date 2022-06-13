// pakB/pages/Auth/Auth.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      company:''
   },
   //   删除该企业
   deletefn() {
      let companiesList = wx.getStorageSync('companiesList');
      let arr = companiesList.filter((item)=>{
         if(item !== this.data.company) return item
      })
      console.log(arr)
      wx.setStorageSync('companiesList',arr)
      wx.showModal({
         content: '企业删除成功',
         showCancel: false,
         success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
              wx.navigateTo({
                 url: '/pakB/pages/bm/bm'
              });
            }
          }
      })
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad(options) {
      this.setData({
         company:options.name
      })
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