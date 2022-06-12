// pakB/pages/renzhengzhongxin/renzhengzhongxin.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      personal:false,// 是否完成个人认证 
      show:false,//添加企业认证 判断 个人认证
    },
    // 个人认证
    personal_fn(){
      wx.navigateTo({
        url: '/pakB/pages/shimingrenzheng/shimingrenzheng',
      })
    },
    // 客服
    to_kefu_fn(){
      // 跳转到帮助中心
      console.log('to_kefu_fn() 填写 帮助中心 路径');
      wx.navigateTo({
        url:''
      })
    },
    // 添加企业认证
    add_b_authen_fn(){
      // 先判断 是否完成个人认证
      let personal = this.data.personal;
      if(personal){
        // 添加企业认证
      }else{
        // 弹窗
        this.setData({show:true})
      }
    },
    // 关闭弹窗
    close_popup(){
      this.setData({show:false})
    },
    // 
    onClose(){
      
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