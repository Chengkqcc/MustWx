// pages/uploadPages/addQian/addQian.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        titles:"签署",
        _index:null,
        choosetype:"需要实名",
        persontype:"",
        alert:"选填项，如只选择手写签名，该签署人签署合同时，必须要手写签名，如果都勾选，则该签署人需要盖您指定的印章才能签署合同",
        alert2:"您选择了无需实名认证，即代表一定签不会对该签署人的真实身份进行验证，仅验证手机号，该方式存在身份伪造的可能，在法院诉讼中，可能需要您提供相关的证据来证明该签署人的身份.",
        actions:[
            {
                name:"需要实名"
            },
            {
                name:"无需实名"
            }
        ],
        formData:{
            choosetype:'',  //选择是否需要实名
            shouxie:true,   //手写签名否
            muban:false,     //模板章
            gong:true       //企业公章是否
        },
        show:false,
        flag:true
    },
    alertExplain(){
        wx.showModal({
          content:this.data.alert,
          showCancel:false,
        })
    },
    onChange3(event) {
        let gong= 'formData.gong'
        this.setData({
          [[gong]]: event.detail,
        });
      },
    onChange2(event) {
        let muban = 'formData.muban'
        this.setData({
          [[muban]]: event.detail,
        });
      },
    onChange(event) {
        let shouxie = 'formData.shouxie'
        this.setData({
          [[shouxie]]: event.detail,
        });
      },
    chooseF(e){
        this.setData({
            show:true
        })
    },
    onClose() {
        this.setData({ show: false });
    },
    onSelect(event){
        let choosetype = 'formData.choosetype'
        let flag;
        if(event.detail.name == '需要实名'){
            flag=true
        }
        else{
            flag=false
            wx.showModal({
                content:this.data.alert2,
                showCancel:false,
              })
        }
        this.setData({
            choosetype:event.detail.name,
            [choosetype]:event.detail.name,
            flag
        })
        
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            _index:options._index,
            persontype:options.persontype
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