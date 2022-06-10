// pakB/pages/shimingrenzheng/shimingrenzheng.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      name:'',//真实姓名
      eid:'',//身份证号
      checked:false,//复选框
    },
    // methods
    // 更改认证方式
    set_eid_fn(){
      // 出现 底部弹窗
    },
    // 输入框 内容
    onnameChange(event) {
      // event.detail 为当前输入的值
      console.log(event.detail);
    },
    oneidChange(event) {
      // event.detail 为当前输入的值
      console.log(event.detail);
    },
    // 复选框
    onChange(event){
      console.log(event.detail);
      this.setData({checked:event.detail})
    },
    // 人工认证
    rgrz_fn(){
      // 跳转到人工认证页面
      wx.navigateTo({
        url: 'url',
      })
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