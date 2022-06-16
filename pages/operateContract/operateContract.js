// pages/operateContract/operateContract.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        detailContract: false,
        qrCode: false,
        show: false,
    },
    showPopup() {
        this.setData({ show: true });
    },

    onClose() {
        this.setData({ show: false });
    },
    back() {
        wx.navigateBack({
            delta: 2
        })
    },
    // 点击拒签的确定
    confirm() {
        console.log("确定")
    },
    // 点击拒签的取消
    cancel() {
        this.setData({
            show: false
        })
    },
    // 点修改备注
    jumpContracePage(e) {
        let index = e.currentTarget.dataset.index;
        wx.navigateTo({
            url: '../contractPage/contractPage?index=' + index,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let index = options.index;
        if (index == "0") {
            this.setData({
                detailContract: true,
                qrCode: false
            })
        } else if (index == "1") {
            this.setData({
                detailContract: false,
                qrCode: true
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