// pages/register/register.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        show: false,
        checked: false,
        phone: "",
        psd: "",
        usanotice: false,
        pwdnotice: false,
        icon1: true,
        icon2: false,
        flag: true,
        navText: "",
        btnText: "",
        checkShow: null,
        forget: null,
        class: null,
        pwdHint: "密码不能少于8位",
        systemHint: false
    },
    // 返回上一级
    back() {
        wx.navigateBack({
            delta: 1
        })
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
    // 点击注册
    register(e) {
        let text = e.currentTarget.dataset.text;
        if (text != "确认登录") {
            if (!this.data.checked) {
                this.setData({
                    show: true
                })
            } else if (this.data.phone.length < 11) {
                let that = this;
                this.setData({
                    usanotice: true,
                    pwdnotice: false
                })

                setTimeout(function () {
                    that.setData({
                        usanotice: false,
                        pwdnotice: false
                    })
                }, 1200)
            } else if (this.data.psd.length < 8) {
                let that = this;
                this.setData({
                    usanotice: false,
                    pwdnotice: true
                })
                setTimeout(function () {
                    that.setData({
                        usanotice: false,
                        pwdnotice: false
                    })
                }, 1200)
            } else {
                console.log("验证码")
            }
        } else {
            let phone = this.data.phone;
            let pwd = this.data.psd;
            let that = this;
            if (phone.length < 11) {
                this.setData({
                    usanotice: true,
                })
                setTimeout(function () {
                    that.setData({
                        usanotice: false
                    })
                }, 1200)
            } else if (pwd.length < 5) {
                this.setData({
                    pwdnotice: true,
                })
                setTimeout(function () {
                    that.setData({
                        pwdnotice: false
                    })
                }, 1200)

            } else if (this.data.psd.length >= 5 && this.data.psd.length <= 8) {
                this.setData({
                    systemHint: true
                })
            } else {
                wx.setStorageSync('token', "20010108");
                let token = wx.getStorageSync('token');
                wx.reLaunch({
                    url: '../contract/constract?token=' + token,
                })
            }
        }
    },

    // 关闭系统提示
    closeHint() {
        this.setData({
            systemHint: false
        })
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

    // 忘记登录密码
    forget() {
        wx.navigateTo({
            url: '../resetPassword/resetPassword',
        })

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let type = options.type;
        if (type == "useAccount") {
            this.setData({
                navText: "使用密码登录",
                btnText: "确认登录",
                checkShow: false,
                forget: true,
                class: "btnWrap",
                pwdHint: "密码不正确"
            })
        } else {
            this.setData({
                navText: "新用户注册",
                btnText: "现在注册",
                checkShow: true,
                forget: false
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