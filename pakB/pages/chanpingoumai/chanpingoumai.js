// pakB/pages/chanpingoumai/chanpingoumai.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      buyType_data:[
        {id:0,title:'电子签章包年版',desc:'同一份合同仅限单人签字或盖章',page:'/pakB/pages/dianziqianzhang/dianziqianzhang',img:''},
        {id:1,title:'电子合同标准版',desc:'同一份合同可多人签字或盖章',page:'/pakB/pages/dianzihetong/dianzihetong',img:''},
        {id:2,title:'法律服务',desc:'为企业提供全方位的法律服务',page:'/pakB/pages/falvfuwu/falvfuwu',img:''},
      ]
    },
    // methods
    type_fn(event){
      let item = event.currentTarget.dataset.item
      console.log(item);
      wx.navigateTo({
        url: item.page,
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