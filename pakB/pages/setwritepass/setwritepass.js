// pakB/pages/setwritepass/setwritepass.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      pass:'',
      eyes_flag:false,
      yzm_show:false, // 验证码弹窗
    },
    // methods
    pass_fn(event){
      console.log(event);
      let detail = event.detail
      this.setData({pass:detail})
    },
    eyes_fn(event){
      console.log(event);
      let eyes_flag = this.data.eyes_flag
      this.setData({eyes_flag:!eyes_flag})
    },
    // 验证码弹窗
    setpass_fn(){
      console.log('要验证新密码');
      console.log('向手机***发送验证码');
      this.setData({yzm_show:true})
    },
    close_tip(){
      this.setData({yzm_show:false})
    },
    // 重新发送验证码
    send_yzm_fn(){
      console.log('重新发送验证码');
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