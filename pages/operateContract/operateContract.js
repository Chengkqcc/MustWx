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
        comment: "",//备注的内容
        refusal: false,
        title: "系统提示",
        text: "该合同已经被签署人拒签，无法再签署",
        btnText: "确定",
        signContract: true,
        backContract: false,
        toSign: false,
        state: "待我签署",
        revocation: false,//控制撤回弹出层的显示和隐藏
        confirmRevocation: false,//控制撤回弹出层中系统提示的显示和隐藏
        delContract: false,//控制删除合同的显示和隐藏
        number: "",
        del: false,//控制删除弹出层的显示和隐藏
        signHint: false,
        email: false,//控制邮箱提示信息的显示和隐藏
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
        this.setData({
            show: false,
            refusal: true
        })
    },
    closeRefusal() {
        this.setData({
            refusal: false
        })
    },
    // 点击拒签的取消
    cancel() {
        this.setData({
            show: false
        })
    },
    // 点击拒签弹出层的去掉按钮
    hintConfirm() {

        let text = wx.getStorageSync('text')
        if (text == "已拒签") {
            this.setData({
                refusal: false,
            })
        } else {
            wx.reLaunch({
                url: '../contract/constract',
            })
            wx.setStorageSync('text', "已拒签")
        }
    },
    // 点击返回文件管理
    backContract() {
        wx.reLaunch({
            url: '../contract/constract',
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
    // 撤回
    revocation() {
        this.setData({
            revocation: true
        })
    },
    closeRevocation() {
        this.setData({
            revocation: false
        })
    },
    // 点击撤回弹出层的确定按钮
    confirmRevocation() {
        this.setData({
            revocation: false,
            confirmRevocation: true
        })
        wx.setStorageSync("newText", "已撤回")
    },
    closeConfirmRevocation() {
        this.setData({
            confirmRevocation: false
        })
        let arr = wx.getStorageSync('constractList')
        let number = this.data.number;
        let time = new Date();
        let year = time.getFullYear();
        let month = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
        let day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
        arr[number].text = year + "-" + month + "-" + day + "." + "已撤回";
        wx.setStorageSync('constractList', arr)
        wx.reLaunch({
            url: '../contract/constract?text=已撤回',
        })
    },

    // 点击删除按钮
    delContract() {

        this.setData({
            del: true
        })
    },
    closeDel() {
        this.setData({
            del: false
        })
    },
    confirmDel() {
        let arr = wx.getStorageSync('constractList')
        let number = this.data.number;
        arr.splice(number, 1);
        wx.setStorageSync('constractList', arr)
        this.setData({
            del: false
        })
        wx.reLaunch({
            url: '../contract/constract',
        })
    },
    // 关闭签署提示
    closeSignHint() {
        this.setData({
            signHint: false
        })
    },
    // 关闭邮箱提示信息
    closeEmail() {
        this.setData({
            email: false
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 0代表合同详情页，1代表二维码页面
        let index = options.index;
        let title = options.title;
        this.setData({
            number: options.number
        })
        let text = wx.getStorageSync('text');

        if (index == "0") {
            this.setData({
                detailContract: true,
                qrCode: false,
                // signContract: true
            })
            if (text == "已拒签" && title == "undefined") {
                this.setData({
                    refusal: true,
                    title: "签署提示",
                    text: "本合同已拒签，不能再签署",
                    btnText: "我知道了",
                    state: text,
                    signContract: false,
                    backContract: true,
                })
            } else if (title == "体验签署") {
                this.setData({
                    signContract: true,
                    backContract: false,
                    toSign: false,
                    delContract: false
                })
            } else if (options.newText == "已撤回") {
                this.setData({
                    signContract: false,
                    backContract: false,
                    toSign: false,
                    delContract: true,
                    signHint: true,
                    email: true
                })
            } else {
                this.setData({
                    signContract: false,
                    backContract: false,
                    toSign: true
                })
            }
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