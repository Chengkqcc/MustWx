// pages/eContract/eContract.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 产品介绍
        introduce: [
            {
                "id": 0,
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/img/3.0/pingtai.png",
                "title": "多终端支持",
                "text": "多终端签署管理电子合同、完美适配Web、H5、App、微信小程序。"
            },
            {
                "id": 1,
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/img/3.0/jisu-copy.png",
                "title": "高效便捷",
                "text": "异地合同在线签署，随时随地轻松管理合同文件，最快几分钟签署一份合同。"
            },
            {
                "id": 2,
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/img/3.0/jieru_1.png",
                "title": "区块链存证",
                "text": "司法权威节点见证，保证合同真实有效且不可篡改，确保合同证据效力。"
            },
            {
                "id": 3,
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/img/3.0/heguibeian.png",
                "title": "数据安全",
                "text": "金融交易级数据加密，云端同存，保障每一次签署、每一份合同的安全。"
            },
            {
                "id": 4,
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/img/3.0/shouyiwending.png",
                "title": "合法有效",
                "text": "所有通过一定签签署完成的电子合同，均与纸质合同具有同等法律效力。"
            },
            {
                "id": 5,
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/img/3.0/chengben.png",
                "title": "成本可控",
                "text": "电子合同相比传统纸质合同，省去了纸质合同在管理、快递中的时间和人力物力的成本。"
            }
        ],
        // 产品服务
        serve: [
            {
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/img/3.0/zidonghua.png",
                "title": "意愿认证",
                "text": "基于短信验证码、签署密码、指纹、录制视频等形式验证签署者的真实意愿。"
            },
            {
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/img/3.0/zhongcaiguanli.png",
                "title": "数字证书",
                "text": "颁发个人、企业数字证书，对接权威数字证书机构，实现数字证书全生命周期管理。"
            },
            {
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/img/3.0/renzheng.png",
                "title": "实名认证",
                "text": "依托公安、运营商、银联等高权威数据源对签署人进行身份交叉验证，确保每次签署均真实有效。"
            },
            {
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/img/3.0/hegui.png",
                "title": "签名验签",
                "text": "通过一定签签署的合同文件，可以在官网、福昕阅读器、Adobe验证签名盖章的真实性"
            }
        ],
        // 应用场景
        scene: [
            {
                "id": 0,
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/img/3.0/jj-03.jpg",
                "title": "电子商务",
                "text": "用户同意签署后，开始合同签订，签署电子合同前进行身份验证、指纹验证或刷脸认证，保证签署人本人的真实意愿 "
            },
            {
                "id": 1,
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/img/3.0/jj-02.jpg",
                "title": "物流行业",
                "text": "物流服务平台采用电子签名服务进行用户的实名认证，认证成功后可在物流平台中实现注册、隐私等相关协议的电子签署 "
            },
            {
                "id": 2,
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/img/3.0/jj-01-1.jpg",
                "title": "教育培训",
                "text": "学员确认学习的课程后，需要登录到平台的APP或官网上进行注册并实名认证，完成后可进行合同签署和课程购买 "
            }
        ],
        // 客户案例
        case: [
            {
                "id": 0,
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/hz/1.jpg"
            },
            {
                "id": 1,
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/hz/17.jpg"
            },
            {
                "id": 2,
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/hz/18.jpg"
            },
            {
                "id": 3,
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/hz/24.jpg"
            },
            {
                "id": 4,
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/hz/3.jpg"
            },
            {
                "id": 5,
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/hz/19.jpg"
            },
            {
                "id": 6,
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/hz/5.jpg"
            },
            {
                "id": 7,
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/hz/20.jpg"
            },
            {
                "id": 8,
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/hz/7.jpg"
            },
            {
                "id": 9,
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/hz/8.jpg"
            },
            {
                "id": 10,
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/hz/21.jpg"
            },
            {
                "id": 11,
                "imgsrc": "https://oss2.1dq.com/static/Version.2.9.0/hz/22.jpg"
            },
        ],
        // 常见问题
        question: [
            {
                "id": 0,
                "name": 1,
                "title": "电子签约和传统签约的区别",
                "text": ["一定签电子合同比普通纸质合同签约效率更高，签约成本更低，更易于存管。"]
            },
            {
                "id": 1,
                "name": 2,
                "title": "个人或者企业用户的认证流程 ？ ",
                "text": ["注册账户成功之后，系统会要求您提交个人或者企业的实名认证，", "如您不提交个人或者企业认证，将无法使用任何服务。"]
            },
            {
                "id": 2,
                "name": 3,
                "title": "产品是否支持APP对接 ？ ",
                "text": ["我们支持网页版、APP版本或者API接口对接。", "提供 Restfull API接口，可以兼容各类Android 、IOS、网站、微信公众号的对接，详情请参阅开放平台。"]
            },
            {
                "id": 3,
                "name": 4,
                "title": "API对接需要多久 ？ ",
                "text": ["拥有成熟的产品服务经验,完善的开发文档，一般产品对接1-5个小时可以完成。"]
            },
        ],
        activeNames: ['1'],

    },
    // 返回上一级
    back() {
        wx.navigateBack({
            delta: 1
        })
    },
    onChange(event) {
        this.setData({
            activeNames: event.detail,
        });
    },
    fn() {
        console.log(1)
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