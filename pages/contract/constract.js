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
        constractShow: false,
        linkShow: false,
        empty: true,//控制空状态的显示和隐藏
        experience: false,//控制体验签署电子合同的显示和隐藏
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
        //体验签署电子合同
        experienceFile: {
            "imgsrc": "",
            "title": "",
            "text": "",
        },
        text: "",
        // 新加入的合同
        constractList: [
            {}
        ]
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

    // 显示合同操作的弹出层
    showConstract() {
        this.setData({
            constractShow: true
        })
    },
    // 关闭合同操作的弹出层
    constractClose() {
        this.setData({
            constractShow: false
        })
    },
    // 登录用户
    login() {
        wx.navigateTo({
            url: "../login/login?type=contract",
        })
    },
    // 点击详情和二维码
    operate(e) {
        this.setData({
            constractShow: false
        })
        let index = e.currentTarget.dataset.index;
        // let text = this.data.text;
        wx.navigateTo({
            url: '../operateContract/operateContract?index=' + index
        })
    },
    // 点击签署
    jumpContracePage(e) {
        this.setData({
            constractShow: false
        })
        let index = e.currentTarget.dataset.index;
        wx.navigateTo({
            url: '../contractPage/contractPage?index=' + index,
        })

    },
    // 点击复制链接
    cloneIink() {
        let that = this;
        this.setData({
            constractShow: false,
            linkShow: true
        })
        setTimeout(function () {
            that.setData({
                linkShow: false
            })
        }, 1200)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let token = options.token || wx.getStorageSync('token');
        let text = wx.getStorageSync('text') || "待我签署"
        if (token.length > 0) {
            this.setData({
                empty: false,
                experience: true
            })
        } else {
            this.setData({
                empty: true,
                experience: false
            })
        }
        this.setData({
            experienceFile: {
                "imgsrc": "https://safe-storage-cos2.1dq.com/signed/496f6fcb25874c7099fa9277a73ec09d/png/7b5344b9-1.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKID1oUyEJ7WEjzIJ2cuSt4ybw0mgJfjIC5s%26q-sign-time%3D1655091275%3B1655091935%26q-key-time%3D1655091275%3B1655091935%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3De48978a430b22e245d56d381e05efd061db64191&&imageMogr2/thumbnail/80x",
                "title": "体验签署电子合同（无需实名认证）",
                "text": "2022-06-07." + text + ".16650016402",
            },
        })

        let time = new Date();
        let year = time.getFullYear();
        let month = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
        let day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
        this.setData({
            constractList: [
                {
                    "imgsrc": "https://safe-storage-cos2.1dq.com/signed/496f6fcb25874c7099fa9277a73ec09d/png/7b5344b9-1.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKID1oUyEJ7WEjzIJ2cuSt4ybw0mgJfjIC5s%26q-sign-time%3D1655091275%3B1655091935%26q-key-time%3D1655091275%3B1655091935%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3De48978a430b22e245d56d381e05efd061db64191&&imageMogr2/thumbnail/80x",
                    "title": "123",
                    "text": year + "-" + month + "-" + day + "待我签署",
                }
            ]
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