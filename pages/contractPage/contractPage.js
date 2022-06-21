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
        keep: false,//点击保存时的提示文字
        inputValue: "",//在input框中输入的内容
        inputContent: "",//保存在input框中输入的内容
        type: null, //判断是从哪个页面跳转来的
        sealShow: false, //控制印章弹出层的显示和隐藏
        signature: [],
        time: false,//控制日期弹出层的显示和隐藏
        year: "",
        month: "",
        day: "",
        hour: "",
        minute: "",
        confirmSign: false //控制确定签署弹出层的显示和隐藏
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
            keep: true,
        })
        setTimeout(function () {
            that.setData({
                keep: false
            })
        }, 1200)

        wx.setStorageSync('value', this.data.inputContent)
    },
    changeInput(e) {
        this.setData({
            inputContent: e.detail.value
        })
    },
    // 点击签署合同页面的印章
    seal(e) {
        this.setData({
            sealShow: true
        })
    },
    // 改变印章弹出层
    closeSeal() {
        this.setData({
            sealShow: false
        })
    },
    // 跳转到印章管理页面
    jumpSealManage() {
        wx.navigateTo({
            url: '../sealManage/sealManage',
        })
    },
    // 点击签署合同页面的签字
    signature() {
        wx.navigateTo({
            url: '../signatureDetailPage/signatureDetailPage?type=addSignature'
        })
    },
    // 点击签署合同页面的日期
    date() {
        this.setData({
            time: true
        })
    },
    closeTime() {
        this.setData({
            time: false
        })
    },
    // 点击签署合同页面的确定签署按钮
    confirm() {
        this.setData({
            confirmSign: true
        })
    },
    closeSign() {
        this.setData({
            confirmSign: false
        })
    },
    // 点击确定签署弹出层的确定签署
    confirmSign() {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let index = options.index;
        let type = options.type;
        let value = wx.getStorageSync('value')

        // 和日期弹出层有关的数据
        let time = new Date();
        let year = time.getFullYear();
        let month = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
        let day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
        let hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
        let minute = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
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
        this.setData({
            inputValue: value,
            type,
            signature: wx.getStorageSync('sealArr'),
            sealShow: options.sealShow,
            year,
            month,
            day,
            hour,
            minute
        })


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