// pakB/pages/xinwenzixun/xinwenzixun.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      news:[
        {id:0,title:'所有',children:[
          {text:'发包人依据合同约定将部分工程分包的是否构成违法分包?发包人依据合同约定将部分工程分包的是否构成违法分包?',time:'2021-05-05',num:6009},
          {text:'发包人依据合同约定将部分工程分包的是否构成违法分包?',time:'2021-05-05',num:6009},
        ]},
        {id:1,title:'企业',children:[]},
        {id:2,title:'行业',children:[]},
        {id:3,title:'合同',children:[]},
        {id:4,title:'支持',children:[]},
        {id:5,title:'帮助',children:[]},
        {id:6,title:'管理',children:[]},
        {id:7,title:'其他',children:[]},
      ]
    },
    //methods
    click_fn(e){
      console.log(e.currentTarget.dataset.item);
      let item = e.currentTarget.dataset.item
      wx.navigateTo({
        url: '/pakB/pages/newsdetail/newsdetail',
        success(res){
          res.eventChannel.emit('new-detail',{data:item})
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