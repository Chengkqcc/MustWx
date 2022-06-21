// pages/sealManage/sealManage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        filmSeal: false, //控制企业印章弹出层的显示和隐藏
        addSignature: false, //控制添加签名弹出层的显示和隐藏
        sealArr: "",//从设置徽章参数页面传过来的徽章数组
        canvasImg: "",//从手写签名页传过来的手写签名数组
        sealProp: false, //控制自定义印章弹出层的显示和隐藏
        photoAlbum: false,//控制从相册选取图片弹出层的显示和隐藏
        delSeal: false,//删除印章弹出层
        systemPrompt: false,//控制系统提示弹出层的显示和隐藏
        index: "",
    },
    // 返回上一级
    back() {
        wx.redirectTo({
            url: '../contractPage/contractPage?sealShow=true',
        })
    },
    // 点击添加签名
    addSignature() {
        this.setData({
            addSignature: true
        })
    },
    // 关闭添加签名弹出层
    signatureClose() {
        this.setData({
            addSignature: false
        })
    },

    // 点击签名弹出层的添加手写签名
    addSignaturePopup() {
        this.setData({
            addSignature: false
        })
        wx.navigateTo({
            url: '../signatureDetailPage/signatureDetailPage?type=addSignature'
        })
    },
    // 点击签名弹出层的拍摄签字图片
    chooseImage(e) {
        let that = this;
        let type = e.currentTarget.dataset.type;
        if (type == "photoAlbum") {
            this.setData({
                photoAlbum: true,
                addSignature: false
            })
        } else if (type == "shoot") {
            this.setData({
                addSignature: false
            })
            wx.chooseImage({
                count: 1,
                sizeType: ['original', 'compressed'],
                sourceType: ['album', 'camera'],
                success(res) {
                    that.setData({
                        addSignature: false
                    })
                    // tempFilePath可以作为 img 标签的 src 属性显示图片
                    let imgsrc = res.tempFilePaths
                    wx.navigateTo({
                        url: '../signatureDetailPage/signatureDetailPage?imgsrc=' + imgsrc + "&type=selectImage",
                    })
                }
            })
        }

    },
    // 关闭从相册选取图片弹出层
    photoAlbumClose() {
        this.setData({
            photoAlbum: false
        })
        let that = this;
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success(res) {
                that.setData({
                    addSignature: false
                })
                // tempFilePath可以作为 img 标签的 src 属性显示图片
                let imgsrc = res.tempFilePaths
                wx.navigateTo({
                    url: '../signatureDetailPage/signatureDetailPage?imgsrc=' + imgsrc + "&type=selectImage",
                })
            }
        })
    },
    // 点击签名弹出层的从模板添加印章
    sealModel() {
        this.setData({
            addSignature: false
        })
        wx.navigateTo({
            url: '../signatureDetailPage/signatureDetailPage?type=sealModel'
        })
    },

    // 点击查看企业印章
    filmSeal() {
        this.setData({
            filmSeal: true
        })
    },
    // 关闭企业印章弹出层
    filmClose() {
        this.setData({
            filmSeal: false
        })
    },

    // 点击自定义印章 或者是自定义手写签名
    seal(e) {
        this.setData({
            sealProp: true,
            index: e.currentTarget.dataset.index
        })
    },
    // 关闭自定义印章弹出层
    sealClose() {
        this.setData({
            sealProp: false
        })
    },
    // 点击自定义印章弹出层的设置
    setSeal() {
        this.setData({
            sealProp: false,
        })
        wx.navigateTo({
            url: '../signatureDetailPage/signatureDetailPage?type=sealSet'
        })
    },
    // 点击自定义印章弹出层的删除印章
    delSeal() {
        this.setData({
            delSeal: true,
            sealProp: false
        })
    },
    // 关闭删除印章弹出层
    delsealClose() {
        this.setData({
            delSeal: false
        })
    },
    // 点击删除印章弹出层的确定按钮
    confirm() {
        let arr = this.data.sealArr;
        let index = this.data.index;
        arr.splice(index, 1)
        this.setData({
            sealArr: arr,
            delSeal: false
        })
        wx.setStorageSync('sealArr', arr)
    },

    // 点击个人印章右边的图标
    prompt() {
        this.setData({
            systemPrompt: true
        })
    },
    // 改变系统提示
    closePrompt() {
        this.setData({
            systemPrompt: false
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            sealArr: wx.getStorageSync('sealArr') || JSON.parse(options.sealArr),
            // canvasImg: wx.getStorageSync('canvasImg') || JSON.parse(options.canvasImg),
            // from: options.from
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.setData({
            canvasImg: wx.getStorageSync('canvasImg')
        })
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