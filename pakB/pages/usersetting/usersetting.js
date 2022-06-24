// pakB/pages/usersetting/usersetting.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      tip_show:false,// 退出登录 时 弹窗
      login:false,//是否登录，true 登录 false 未登录
      user_set_data:[
        {id:0,title:'账户充值',page:'/pakB/pages/order/order?wayname=chongzhi'},
        {id:1,title:'头像设置',page:'/pakB/pages/setheaderimg/setheaderimg'},
        {id:2,title:'资料设置',page:'/pakB/pages/setmaterial/setmaterial'},
        {id:3,title:'邮箱设置',page:'/pakB/pages/setemail/setemail?name=email'},
        {id:4,title:'手机号设置',page:'/pakB/pages/setemail/setemail?name=phone'},
        {id:5,title:'意见反馈',page:'/pakB/pages/yijianfankui/yijianfankui'},
        {id:6,title:'关于我们',page:'/pakB/pages/guanyuwomen/guanyuwomen'},
      ]
    },
    // methods
    logout_fn(){
      console.log('退出登录');
      // this.setData({login:false})
      this.setData({tip_show:true})
    },
    // 关闭 弹窗
    close_tip(){
      this.setData({tip_show:false})
    },
    // logout
    logout_close_tip(){
      this.setData({tip_show:false})
      wx.removeStorageSync('token')
      wx.navigateTo({
        url: '/pakB/pages/mine/mine',
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log(options);
      // title 有值 是从修改邮箱或手机号页面 跳转过来的
      if(options.title){
        wx.showToast({
          title: options.title,
        })
      }
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
      // 判断是否登录
      let token = wx.getStorageSync('token')
      console.log(token);
      if(token){
        this.setData({login:true})
      }
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