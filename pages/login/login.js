// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        show: false,
        checked: false,
        readyShow: false
    },

    showPopup() {
        this.setData({ show: true });
    },

    onClose() {
        this.setData({ show: false });
    },
    readyClose() {
        this.setData({ readyShow: false })
    },
    // 点击复选框
    onChange(event) {
        this.setData({
            checked: event.detail,
        });
    },

    // 跳转到验证码登录
    authcode() {
        wx.navigateTo({
            url: '../authCodeLogin/authcode',
        })
    },
    // 跳转到新用户注册
    register() {
        wx.navigateTo({
            url: '../register/register',
        })
    },
    // 微信一键登录
    wxLogin() {
        if (!this.data.checked) {
            this.setData({
                readyShow: true
            })
        }
    },
    // 点击同意
    consent() {
        this.setData({
            readyShow: false,
            checked: true
        })
    },
    // 点击不同意
    unconsent() {
        this.setData({
            readyShow: false
        })
    },
    // 已阅读
    ready() {
        this.setData({
            checked: !this.data.checked
        })
    },
    // 协议
    agreement(e) {
        let index = e.currentTarget.dataset.index
        wx.navigateTo({
            url: '../agreement/agreement?index=' + index,
        })
    },

    // 使用账户密码登录
    useAccount() {
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this;
        setTimeout(function () {
            that.showPopup()
        }, 500)
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