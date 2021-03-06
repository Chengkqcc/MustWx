// pakB/pages/mine/mine.js
Page({
    /**
     * 页面的初始数据
     */
    data: {        
        login:false,//是否登录，true登录，false 为登录
        function_data:[
          {id:0,text:'认证中心',page:'login',icon:''},
          {id:1,text:'产品购买',page:'login',icon:''},
          {id:2,text:'优惠券',page:'login',icon:''},
          {id:3,text:'费用中心',page:'login',icon:''},
        ],
        manage_data:[
          {id:0,text:'我的模板',page:'login',icon:''},
          {id:1,text:'草稿箱',page:'login',icon:''},
          {id:2,text:'待审模板',page:'login',icon:''}
        ],
        user_set_data:[
          {id:0,text:'账户设置',page:'/pakB/pages/usersetting/usersetting',icon:''},
          {id:1,text:'安全设置',page:'login',icon:''},
          {id:2,text:'通知设置',page:'login',icon:''},
          {id:3,text:'消息中心',page:'login',icon:''},
          {id:4,text:'帮助中心',page:'login',icon:''},
          {id:5,text:'意见反馈',page:'/pakB/pages/yijianfankui/yijianfankui',icon:''},
          {id:6,text:'关于我们',page:'/pakB/pages/guanyuwomen/guanyuwomen',icon:''},
        ]
    },
    //methods
    loginfn(){
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
   * 页面的初始数据
   */
  data: {        
      login:false,//是否登录，true登录，false 为登录
      rzshow:true,//认证框是否显示
      show:false,//是否展示底部 切换框
      function_data:[
        {id:0,text:'认证中心',page:'/pakB/pages/renzhengzhongxin/renzhengzhongxin',icon:'/images/mine/pingtairenzheng.png'},
        {id:1,text:'产品购买',page:'/pakB/pages/chanpingoumai/chanpingoumai',icon:'/images/mine/gouwu.png'},
        {id:2,text:'优惠券',page:'/pakB/pages/youhuiquan/youhuiquan',icon:'/images/mine/libao.png'},
        {id:3,text:'费用中心',page:'/pakB/pages/dingdanguanli/dingdanguanli',icon:'/images/mine/feiyong.png'},
        {id:4,text:'签名管理',page:'/pakB/pages/qianmingguanli/qianmingguanli',icon:'/images/mine/pen.png'},
        {id:5,text:'企业管理',page:'/pakB/pages/bm/bm',icon:'/images/mine/zhengjian.png'},
      ],
      function_nologin_data:[
        {id:0,text:'认证中心',page:'/pages/login/login',icon:'/images/mine/pingtairenzheng.png'},
        {id:1,text:'产品购买',page:'/pages/login/login',icon:'/images/mine/gouwu.png'},
        {id:2,text:'优惠券',page:'/pages/login/login',icon:'/images/mine/libao.png'},
        {id:3,text:'费用中心',page:'/pages/login/login',icon:'/images/mine/feiyong.png'},
      ],
      manage_data:[
        {id:0,text:'我的模板',page:'/pakA/pages/Mymodel/mymodel',icon:'/images/mine/wenjianjia.png'},
        {id:1,text:'草稿箱',page:'/pakA/pages/Mymodel/mymodel',icon:'/images/mine/zhongmingming.png'},
        {id:2,text:'待审模板',page:'/pakA/pages/Mymodel/mymodel',icon:'/images/mine/shenfenrenzheng_tianjiashenfenrenzheng.png'}
      ],
      user_set_data:[
        {id:0,text:'账户设置',page:'/pakB/pages/usersetting/usersetting',icon:'/images/mine/shezhi.png'},
        {id:1,text:'安全设置',page:'/pakB/pages/anquanshezhi/anquanshezhi',icon:'/images/mine/anquanzhongxin.png'},
        {id:2,text:'通知设置',page:'/pakB/pages/tongzhishezhi/tongzhishezhi',icon:'/images/mine/tongzhi.png'},
        {id:3,text:'消息中心',page:'/pakB/pages/xiaoxizhongxin/xiaoxizhongxin',icon:'/images/mine/xiaoxi.png'},
        {id:4,text:'帮助中心',page:'/pakA/pages/help/help',icon:'/images/mine/bangzhu.png'},
        {id:5,text:'意见反馈',page:'/pakB/pages/yijianfankui/yijianfankui',icon:'/images/mine/yunongtongyijianfankui.png'},//pakA/pages/problem/problem  也可以用这个  /pakB/pages/yijianfankui/yijianfankui
        {id:6,text:'关于我们',page:'/pakB/pages/guanyuwomen/guanyuwomen',icon:'/images/mine/'},
      ],
  },
  //methods
  // 登录 点击 头部 跳转
  to_usersetting_fn(){
    wx.navigateTo({
      url: '/pakB/pages/usersetting/usersetting',
    })
  },
  // 登录
  loginfn(){
    wx.navigateTo({
      url: '/pages/login/login?type=mine',
    })
  },
  // 展示底部切换
  bottom_qiehuan(){
    wx.hideTabBar({
      animation: true,
    })
    this.setData({show:true})
  },
  // 关闭 底部切换
  close_qiehuan(){
    this.setData({ show: false });
    wx.showTabBar({
      animation: true,
    })
  },
  // 切换用户
  qiehuan_fn(){
    console.log('切换用户');
  },
  // 跳转到电子合同标准版
  hetong_fn(){
    wx.navigateTo({
      url:'/pakB/pages/dianzihetong/dianzihetong'
    })
  },
  // 关闭认证
  close_renzheng(){
    this.setData({rzshow:false})
  },
  // 点击认证
  renzheng_fn(){
    console.log('认证');
    wx.navigateTo({
      url:'/pakB/pages/shimingrenzheng/shimingrenzheng'
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