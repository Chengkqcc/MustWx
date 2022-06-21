// pages/operateContract/operateContract.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        detailContract: false,
        qrCode: false,
        show: false,
        fileShow: false,//控制文件信息弹出层的显示和隐藏
        commentShow: false, //控制合同备注弹出层的显示和隐藏
        comment: ""//备注的内容
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
    // 跳转到合同操作的具体页面
    jumpContracePage(e) {
        let index = e.currentTarget.dataset.index;
        let type = e.currentTarget.dataset.type;
        wx.navigateTo({
            url: '../contractPage/contractPage?index=' + index + "&type=" + type,
        })
    },

    // 点文件信息右边的小图标
    fileInfo() {
        this.setData({
            fileShow: true
        })
    },

    // 改变文件信息弹出层的状态
    closeFile() {
        this.setData({
            fileShow: false
        })
    },
    // 点击文件弹出层的确定
    sure() {
        this.setData({
            fileShow: false
        })
    },
    // 改变文件备注弹出层的状态
    comment() {
        this.setData({
            commentShow: true
        })
    },
    // 关闭文件备注弹出层
    closeComment() {
        this.setData({
            commentShow: false
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
        let value = wx.getStorageSync('value')
        this.setData({
            comment: value
        })
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