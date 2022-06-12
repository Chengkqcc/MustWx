// pages/contract/constract.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        nav: [
            {
                "id": 0,
                "text": "全部文件"
            },
            {
                "id": 1,
                "text": "待我签署"
            },
            {
                "id": 2,
                "text": "待他人签署"
            },
            {
                "id": 3,
                "text": "待我填写"
            },
            {
                "id": 4,
                "text": "待他人填写"
            },
            {
                "id": 5,
                "text": "已完成"
            },
            {
                "id": 6,
                "text": "已拒签"
            },
            {
                "id": 7,
                "text": "已过期"
            },
            {
                "id": 8,
                "text": "已撤回"
            },
            {
                "id": 9,
                "text": "草稿箱"
            },
            {
                "id": 10,
                "text": "待设置签署区"
            },
            {
                "id": 11,
                "text": "已作废"
            },
        ],
        show: false,
        spaceShow: false,
        timeShow: false,
        FinishTimeShow: false,
        currentDate: new Date().getTime(),
        minDate: new Date().getTime(),
        beginTime: null,
        finishTime: null,
        formatter(type, value) {
            if (type === 'year') {
                return `${value}年`;
            }
            if (type === 'month') {
                return `${value - 0}月`;
            }
            if (type === 'day') {
                return `${value - 1}日`
            }
            return value;
        },
    },
    // 点击输入框旁边的图片，出现需要录入的信息
    showPopup() {
        this.setData({ show: true });
    },
    onClose() {
        this.setData({ show: false });
    },
    // 出现切换企业空间
    changeSpace() {
        this.setData({
            show: false,
            spaceShow: true
        });
    },
    closeSpace() {
        this.setData({ spaceShow: false });
    },
    // 出现发起时间
    changeTime() {
        this.setData({
            timeShow: true
        })
    },
    closeTime() {
        this.setData({
            timeShow: false
        })
    },
    onInput(event) {
        this.setData({
            currentDate: event.detail,
        });
    },
    // 点击发起时间完成按钮
    confirm(value) {
        this.setData({
            timeShow: false
        })
        let time = new Date(value.detail)
        let Year = time.getFullYear();
        let Month = time.getMonth() + 1;
        let day = time.getDate() - 1;
        this.setData({
            beginTime: "" + Year + "年" + Month + "月" + day + "日",
            // finishTime: "" + Year + "年" + Month + "月" + day + "日",
        })
    },

    // 出现截止时间
    changeFinishTime() {
        this.setData({
            FinishTimeShow: true
        })
    },
    closeFinish() {
        this.setData({
            FinishTimeShow: false
        })
        console.log(1)
    },
    finish(value) {
        this.setData({
            FinishTimeShow: false
        })
        let time = new Date(value.detail)
        let Year = time.getFullYear();
        let Month = time.getMonth() + 1;
        let day = time.getDate() - 1;
        this.setData({
            finishTime: "" + Year + "年" + Month + "月" + day + "日",
        })
    },

    // 登录用户
    login() {
        wx.navigateTo({
          url: "../login/login",
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