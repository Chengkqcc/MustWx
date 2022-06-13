// pakB/pages/tongzhishezhi/tongzhishezhi.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      tz_data:[
        {id:0,title:'短信通知',flag:false},
        {id:1,title:'邮箱通知',flag:false},
        {id:2,title:'签署截止通知',flag:false},
        {id:3,title:'文件到期通知',flag:false},
        {id:4,title:'签署成功邮件推送文件',flag:false},
      ]
    },
    // methods
    onORoff_fn(event){
      // console.log(event);
      let item = event.currentTarget.dataset.item
      let detail = event.detail
      let tz_data = this.data.tz_data
      tz_data[item.id].flag = detail
      console.log(item,detail,tz_data);
      this.setData({
        tz_data
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