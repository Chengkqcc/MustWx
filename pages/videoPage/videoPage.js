// pages/videoPage/videoPage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        "text": "", //控制页面的标题内容
        "videoSrc": "", //视频路径
        "register": true,//账户注册


    },
    // 返回上一级
    back() {
        wx.navigateBack({
            delta: 1
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let title = options.title;
        if (title == "注册账户") {
            this.setData({
                text: "账户注册",
                videoSrc: "https://oss2.1dq.com/app/video/%E8%B4%A6%E6%88%B7%E6%B3%A8%E5%86%8C.mp4"
            })
        } else if (title == "实名认证") {
            this.setData({
                text: "使用APP进行实名认证",
                videoSrc: "https://oss2.1dq.com/app/video/%E4%BD%BF%E7%94%A8APP%E8%BF%9B%E8%A1%8C%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81.mp4"
            })
        } else if (title == "发起电子合同") {
            this.setData({
                text: "创建电子合同",
                videoSrc: "https://oss2.1dq.com/app/video/%E5%88%9B%E5%BB%BA%E7%94%B5%E5%AD%90%E5%90%88%E5%90%8C.mp4"
            })
        } else if (title == "签署电子合同") {
            this.setData({
                text: "签署电子合同",
                videoSrc: "https://oss2.1dq.com/app/video/%E7%AD%BE%E7%BD%B2%E7%94%B5%E5%AD%90%E5%90%88%E5%90%8C.mp4"
            })
        } else if (title == "经办人实名认证") {
            this.setData({
                text: "使用APP进行实名认证",
                videoSrc: "https://oss2.1dq.com/app/video/%E4%BD%BF%E7%94%A8APP%E8%BF%9B%E8%A1%8C%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81.mp4"
            })
        } else if (title == "创建企业") {
            this.setData({
                text: "创建企业",
                videoSrc: "https://oss2.1dq.com/app/video/%E5%88%9B%E5%BB%BA%E4%BC%81%E4%B8%9A.mp4"
            })
        } else if (title == "企业认证") {
            this.setData({
                text: "创建企业",
                videoSrc: "https://oss2.1dq.com/app/video/%E5%88%9B%E5%BB%BA%E4%BC%81%E4%B8%9A.mp4"
            })
        } else if (title == "企业名义发起合同") {
            this.setData({
                text: "创建电子合同",
                videoSrc: "https://oss2.1dq.com/app/video/%E5%88%9B%E5%BB%BA%E7%94%B5%E5%AD%90%E5%90%88%E5%90%8C.mp4"
            })
        } else if (title == "签合同->盖公章") {
            this.setData({
                text: "签署电子合同",
                videoSrc: "https://oss2.1dq.com/app/video/%E7%AD%BE%E7%BD%B2%E7%94%B5%E5%AD%90%E5%90%88%E5%90%8C.mp4"
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