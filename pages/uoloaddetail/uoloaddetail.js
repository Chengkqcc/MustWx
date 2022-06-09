// pages/uoloaddetail/uoloaddetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        choose_files: null,
        contractName: "",
        show: false,
        choosetype:"签署人",
        actions: [{
                name: '签署人',
            },
            {
                name: '抄送人',
            },
        ],
        messArr:[
            '假设本合同需要您和张三签字，需要在签署人中填写张三的手机号和姓名，在发起合同之后，张三可以收到短信，张三点击短信即可对合同签字。',
            '抄送方为选填项，即本合同哪些人可以查看，抄送方只有查看的权限，无签署的权限'
        ]
    },
    //弹框判定内容
    alertExplain(){
        let index = 0
        if(this.data.choosetype == '签署人'){
            index=0
        }else{
            index = 1
        }
        wx.showModal({
            content: this.data.messArr[index],
            showCancel:false,
            success (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
    },

    //选择签署人的业务 
    chooseP(){
        this.setData({show:true})
    },
    //选择签署人后关闭以及选择后的回调
    onClose() {
        this.setData({ show: false });
      },
    onSelect(event) {
        console.log(event.detail);
        let choosetype = event.detail.name
        this.setData({
            choosetype
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let obj = decodeURIComponent
        let choose_files = JSON.parse(decodeURIComponent(options.choose_files))
        console.log(choose_files)
        this.setData({
            choose_files
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