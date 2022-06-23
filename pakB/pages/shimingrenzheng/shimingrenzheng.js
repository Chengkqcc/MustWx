// pakB/pages/shimingrenzheng/shimingrenzheng.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      rz_way:'Eid身份认证',//认证方式
      name:'',//真实姓名
      eid:'',//身份证号
      checked:false,//复选框
      show:false,//更换 弹窗
      ways:[
        {id:0,title:'Eid身份认证',desc:'使用微信快速完成人脸认证',page:''},
        {id:1,title:'人脸实名认证',desc:'通过刷脸快速完成认证',page:''},
        {id:2,title:'支付宝刷脸认证',desc:'推荐支付宝用户使用',page:''},
        {id:3,title:'人工审核认证',desc:'如果您无法完成自动验证，推荐使用',page:''},
      ]
    },
    // methods
    // 更改认证方式
    set_eid_fn(){
      // 出现 底部弹窗
      console.log('更改认证方式');
      this.setData({show:true})
    },
    // 关闭 更换 弹窗
    close_popup(){
      this.setData({show:false})
    },
    // 切换 认证方式
    qiehuan_fn(event){
      let item = event.currentTarget.dataset.item
      console.log(34,item);
      wx.showToast({
        title: '已更换为'+item.title,
        icon:'none'
      })
      if(item.id<=2){
        this.setData({rz_way:item.title})
      }else{
        // 人工审核认证
        // 跳转页面
        console.log('跳转 人工审核认证 页面');
        wx.navigateTo({
          url:'/pakB/pages/porsenSGS/porsenSGS'
        })
      }
      this.setData({show:false})
    },
    // 输入框 内容
    onnameChange(event) {
      // event.detail 为当前输入的值
      console.log(event.detail);
    },
    oneidChange(event) {
      // event.detail 为当前输入的值
      console.log(event.detail);
    },
    // 复选框
    onChange(event){
      console.log(event.detail);
      this.setData({checked:event.detail})
    },
    // 下一步
    next_fn(){
      console.log('下一步');
      let checked = this.data.checked;
      let name = this.data.name;
      let eid = this.data.eid;
      console.log(checked,name,eid);
      if(checked){
        // 验证名字
        if(name){

          // 验证身份证
          if(eid){
            console.log(eid);
          }else{
            wx.showToast({
              title: '身份证号码不正确',
              duration: 1500,
              icon: 'none'
            })
          }
        }else{
          wx.showToast({
            title: '姓名不能小于两个汉字',
            duration: 1500,
            icon: 'none'
          })
        }
      }else{
        wx.showToast({
          title: '请先阅读并勾选授权协议',
          duration: 1500,
          icon: 'none'
        })
      }
    },
    // 人工认证
    rgrz_fn(){
      // 跳转到人工认证页面
      console.log('人工认证');
      console.log('跳转 人工审核认证 页面');
      wx.navigateTo({
        url: '/pakB/pages/porsenSGS/porsenSGS',
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