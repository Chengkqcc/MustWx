// pages/agreement/agreement.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        index: null,
        text: ""
    },
    back() {
        wx.navigateBack({
            delta: 1
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            index: options.index
        })
        if (options.index == "0") {
            this.setData({
                text: "注册协议"
            })
        } else if (options.index == "1") {
            this.setData({
                text: "用户隐私协议"
            })
        } else {
            this.setData({
                text: "数字证书申领协议"
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