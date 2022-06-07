// pakB/pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {        
        login:false,//是否登录，true登录，false 为登录
        function_data:[
          {text:'认证中心',page:'',icon:''},
          {text:'产品购买',page:'',icon:''},
          {text:'优惠券',page:'',icon:''},
          {text:'费用中心',page:'',icon:''},
        ],
        manage_data:[
          {text:'我的模板',page:'',icon:''},
          {text:'草稿箱',page:'',icon:''},
          {text:'待审模板',page:'',icon:''}
        ],
        user_set_data:[
          {text:'账户设置',page:'pages/usersetting/usersetting',icon:''},
          {text:'安全设置',page:'',icon:''},
          {text:'通知设置',page:'',icon:''},
          {text:'消息中心',page:'',icon:''},
          {text:'帮助中心',page:'',icon:''},
          {text:'意见反馈',page:'',icon:''},
          {text:'关于我们',page:'',icon:''},
        ]
    },
    //methods
    loginfn(){
      wx.navigateTo({
        url: '登录页面',
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