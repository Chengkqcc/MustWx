// pakB/pages/guanyuwomen/guanyuwomen.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      login:false, //是否登录 true 登录 false 为登录
      guanyuwomen_data:[
        {id:0,title:'新闻资讯',text:'',page:'/pakB/pages/xinwenzixun/xinwenzixun'},
        {id:1,title:'用户注册协议',text:'',page:'/pakB/pages/xieyi/xieyi?name=用户注册协议'},
        {id:2,title:'用户隐私协议',text:'',page:'/pakB/pages/xieyi/xieyi?name=用户隐私协议'},
        {id:3,title:'实名认证授权协议',text:'',page:'/pakB/pages/xieyi/xieyi?name=实名认证授权协议'},
        {id:4,title:'数字证书申领协议',text:'',page:'/pakB/pages/xieyi/xieyi?name=数字证书申领协议'},
        {id:5,title:'官方网站',text:'1DQ.COM',page:''},
        {id:6,title:'客服热线',text:'021-61984561',page:'login'},
        {id:7,title:'客服邮箱',text:'api@jiashudata.com',page:'login'},
        {id:8,title:'当前版本',text:'13.0.7',page:'login'},
      ]
    },
    // methods
    // 官方网站 点击事件
    copy_fn(){
      wx.setClipboardData({
        data: 'https://www.1dq.com',//data为点击后所复制内容
        success: function (res) {
          wx.getClipboardData({
            // 这个api是把拿到的数据放到电脑系统中的
            success: function(res) {
              console.log(res.data) // 打印复制后的内容
              wx.showToast({
                title: '小程序内不支持下载该文件，已将地址复制到剪切板，请粘贴到浏览器下载',
                icon:'none',
                duration:2000
              })
            }
          })
        }
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