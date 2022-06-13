// pakB/pages/anquanshezhi/anquanshezhi.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      zw_checked:false,//指纹 解锁
      face_checked:false,// 面容 解锁
      tip_show:false,//注销弹窗
    },
    // methods
    // 指纹 解锁
    zw_fn(event){
      console.log(event.detail);
      let zw_checked = event.datail
      this.setData({zw_checked})
    },
    // 面容 解锁
    face_fn(event){
      console.log(event,event.detail);
      let face_checked = event.datail
      this.setData({face_checked})
    },
    // 注销弹窗
    zx_fn(){
      this.setData({tip_show:true})
    },
    onClose(){
      console.log('动画');
    },
    // 关闭 注销弹窗
    close_tip(){
      this.setData({
        tip_show:false
      })
    },
    // 注销 账户
    delete_fn(){
      console.log("注销 账户");
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