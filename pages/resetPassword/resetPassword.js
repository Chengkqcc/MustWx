// pages/resetPassword/resetPassword.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        phone: "",
        pwd: "",
        icon1: true,
        icon2: false,
        flag: true,
        usanotice: false,
        pwdnotice: false,
        show: false
    },
    // 返回上一级
    back() {
        wx.navigateBack({
            delta: 1
        })
    },
    // 控制密码能不能看到
    eye(e) {
        let index = e.currentTarget.dataset.index
        // 0展示密码，1隐藏密码
        if (index == "0") {
            this.setData({
                icon1: false,
                icon2: true,
                flag: false
            })

        } else if (index == "1") {
            this.setData({
                icon1: true,
                icon2: false,
                flag: true
            })
        }
    },
    // 点击下一步
    next() {
        let phone = this.data.phone;
        let pwd = this.data.pwd;
        let that = this;
        if (phone < 11) {
            this.setData({
                usanotice: true,
            })
            setTimeout(function () {
                that.setData({
                    usanotice: false,
                })
            }, 1200)
        } else if (pwd < 8) {
            this.setData({
                pwdnotice: true,
            })
            setTimeout(function () {
                that.setData({
                    pwdnotice: false,
                })
            }, 1200)
        } else {
            this.setData({
                show: true
            })
        }
    },
    onClose() {
        this.setData({
            show: false
        })
        wx.navigateTo({
            url: '../login/login',
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