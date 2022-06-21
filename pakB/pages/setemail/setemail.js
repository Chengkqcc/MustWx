// pakB/pages/setemail/setemail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      phone:'填写手机号',
      name:'',
      show:false,
      url:'',//跳转 的路径
    },
    // methods
    getcode_fn(){
      console.log('获取验证码');
      let name = this.data.name;
      let url = this.data.url;
      console.log(name);
      this.setData({show:true})
      if(name=='email'){
        url = '/pakB/pages/emailandphone/emailandphone?name=email'
      }else if(name=='phone'){
        url = '/pakB/pages/emailandphone/emailandphone?name=phone'
      }
      this.setData({url})
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log(options);
      this.setData({name:options.name})
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