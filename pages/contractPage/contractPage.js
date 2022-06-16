// pages/contractPage/contractPage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        inform: false,//通知对方签署合同  0
        file: false,//文件预览  1
        amend: false, //修改备注 2
        sign: false, //签署合同 3
        text: "",//页面头部的文字信息
        keep: false //点击保存时的提示文字
    },
    // 返回上一级
    back() {
        wx.navigateBack({
            delta: 1
        })
    },
    // 点击保存
    keep() {
        let that = this;
        this.setData({
            keep: true
        })
        setTimeout(function () {
            that.setData({
                keep: false
            })
        }, 1200)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let index = options.index;
        if (index == 0) {  // 通知对方签署合同
            this.setData({
                inform: true,
                file: false,
                amend: false,
                sign: false,
                text: "如何通知对方签署合同"
            })
        } else if (index == 1) { //文件预览
            this.setData({
                inform: false,
                file: true,
                amend: false,
                sign: false,
                text: "文件预览"
            })
        } else if (index == 2) { //修改备注
            this.setData({
                inform: false,
                file: false,
                amend: true,
                sign: false,
                text: "修改备注"
            })
        } else {
            this.setData({  //签署合同
                inform: false,
                file: false,
                amend: false,
                sign: true,
                text: "签署合同"
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