// pakB/pages/falvfuwu/falvfuwu.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      fl_data:[
        {
          id:0,
          title:'律师代写合同',
          desc:'由资深律师为您代写合同，有效防范法律风险，购买前请与客服联系，2个工作日内完成',
          price:'798'
        },
        {
          id:0,
          title:'律师加急代写合同',
          desc:'由资深律师为您加急代写合同，有效防范法律风险，购买前请与客服联系，1个工作日内完成',
          price:'1498'
        }
      ]
    },
    // methods
    // 购买
    pay_fn(event){
      let item = event.currentTarget.dataset.item
      let {id,title,price} = item
      console.log(event);
      wx.navigateTo({
        url: '/pakB/pages/order/order?'+JSON.stringify({id,title,price}),
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