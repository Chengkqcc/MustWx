// pages/uploadPages/PcUpload_tips/PcUpload_tips.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        urls:[
            "https://oss2.1dq.com/app/static/help/webCreateDoc/1.png",
            "https://oss2.1dq.com/app/static/help/webCreateDoc/2.png"
        ],
        texts:[
            {
                tits:"点击浏览，选择要签署的合同",
                detail:"或者将合同文件拖到方框内，系统会自动上传"
            },
            {
                tits:"点击底部，发起合同",
                detail:"一份电子合同就发起成功了，对方会收到一条短信，对方点击短信链接即可完成签字或盖章"
            }
        ]
    },
    previewImage(e){
        let current = e.target.dataset.src
        wx.previewImage({
          current,
          urls: this.data.urls,
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