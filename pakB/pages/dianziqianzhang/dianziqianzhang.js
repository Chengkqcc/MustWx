// pakB/pages/dianziqianzhang/dianziqianzhang.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      show:false,// 底部切换
      ts_show:false,//? 弹窗
      title:'个人签章包年版',
      id:0,
      ht_data:[
        {id:0,title:'个人签章包年版',price:198,desc1:'适用于个人用户，合同仅限单人签署',desc2:'您当前是电子合同标准版',type:[
          ['团队成员数',''],
          ['可签署合同份数','10万份/年'],
          ['同一份合同签署人数量','1人','icon1'],
          ['有效期','365天'],
          ['文件容量','不限'],
          ['合同存证','区块链存证'],
          ['CA数字证书签署','支持'],
          ['可信时间戳','支持'],
          ['法律效力','支持'],
          ['印章数量','不限'],
          ['数据安全','金融级'],
          ['合同管理方式','全平台'],
          ['合同拒签','支持'],
          ['合同撤回','支持'],
          ['企业印章',''],
          ['合同加密','AES256'],
          ['文件到期提醒','支持'],
          ['签名校验','支持'],
          ['合同完整性效验','支持'],
          ['API接口',''],
          ['客服支持','5*8小时在线客服'],
          ['合同出证','支持']
        ]},
        {id:1,title:'企业签章包年版',price:898,desc1:'适用于企业用户，合同仅限单人签署',desc2:'您当前是电子合同标准版',type:[
          ['团队成员数','3人','icon2'],
          ['可签署合同份数','10万份/年'],
          ['同一份合同签署人数量','1人','icon1'],
          ['有效期','365天'],
          ['文件容量','不限'],
          ['合同存证','区块链存证'],
          ['CA数字证书签署','支持'],
          ['可信时间戳','支持'],
          ['法律效力','支持'],
          ['印章数量','不限'],
          ['数据安全','金融级'],
          ['合同管理方式','全平台'],
          ['合同拒签','支持'],
          ['合同撤回','支持'],
          ['企业印章','支持'],
          ['合同加密','AES256'],
          ['文件到期提醒','支持'],
          ['签名校验','支持'],
          ['合同完整性效验','支持'],
          ['API接口','支持'],
          ['客服支持','5*8小时在线客服'],
          ['合同出证','支持']
        ]},
      ]
    },
    // methods
    // tabs
    onClick(event){
      console.log(event.detail);
      this.setData({title:event.detail.title,id:event.detail.index})
    },
    // 关闭弹窗
    close_popup(){
      this.setData({ts_show:false})
    },
    // 打开弹窗
    popup_fn(){
      console.log('打开弹窗');
      this.setData({ts_show:true})
    },
    // 点击 popup时  动画
    onClose(){},
    // 开通
    pay_fn(){
      // 选择账户
      this.setData({show:true})     
    },
    // 关闭 选择账户
    close_qiehuan(){
      this.setData({show:false}) 
    },
    // 
    qiehuan_fn(){
      let index = this.data.id
      let item = this.data.ht_data
      console.log(index,item[index]);
      let {id,title,price} = item[index]
      let obj = {id,title,price,time:'365天'}
      // 个人签章包年版 跳转订单
      if(index==0){
        wx.navigateTo({
          url: '/pakB/pages/order/order?'+JSON.stringify(obj),
        })
      }else{
        console.log('企业签章包年版');
      }
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