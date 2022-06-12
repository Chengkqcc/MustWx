// pages/authCodeLogin/authcode.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        show: false,
        checked: false,
        notice: false,
        value: ""
    },
    onClose() {
        this.setData({ show: false });
    },
    // 点击复选框
    onChange(event) {
        this.setData({
            checked: event.detail,
        });
    },
    // 点击下一步
    next() {
        if (!this.data.checked) {
            let that = this;
            this.setData({
                show: true,
            })
            setTimeout(function () {
                that.setData({
                    notice: true
                })
            }, 1000)

            setTimeout(function () {
                that.setData({
                    notice: false
                })
            }, 2800)
        }
        else if (this.data.value.length < 11) {
            this.setData({
                notice: true
            })
        } else {
            console.log(1)
        }
    },

    // 同意
    consent() {
        this.setData({
            show: false,
            checked: true
        })
    },
    unconsent() {
        this.setData({
            show: false,
            checked: false
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