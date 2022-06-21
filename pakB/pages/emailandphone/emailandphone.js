// pakB/pages/emailandphone/emailandphone.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      name:'',//判断是那个页面跳转过来的  email 、 phone
      value:'',//输入框的值
      email:'2973353245@qq.com',//原邮箱号
      phone:'15633713372',//原手机号
      show:false,//
      url:'',//验证成功后跳转路径
      number:'',//将验证码发送到那个号码
    },
    // methods
    // 输入框 
    onChange(event) {
      // event.detail 为当前输入的值
      console.log(event.detail);
      this.setData({value:event.detail})
    },
    // 设置
    set_fn(){
      let name = this.data.name;
      let value = this.data.value;
      let email = this.data.email;
      let phone = this.data.phone;
      console.log(name,value);
      if(value){
        // 验证
        if(name=='email'){
          // email 验证
          if(value==email){
            // 输入的是原 email
            wx.showToast({
              title: '邮箱已存在，请更换',
              icon:'none'
            })
          }else{
            // 新邮箱验证
            console.log('使用正则，对新邮箱进行验证');
            // 符合邮箱 格式
            this.setData({show:true,number:value,url:'/pakB/pages/usersetting/usersetting?title=邮箱修改成功'})
          }
        }else{
          // 手机验证
          if(value==phone){
            // 输入的是原 phone
            wx.showToast({
              title: '手机号已存在，请更换',
              icon:'none'
            })
          }else{
            // 新手机号验证
            console.log('使用正则，对新手机号进行验证');
            // 符合手机号 格式
            this.setData({show:true,number:value,url:'/pakB/pages/usersetting/usersetting?title=手机号修改成功'})
          }
        }
      }else{
        // 空
        wx.showToast({
          title: '手机号或邮箱号不正确',
          icon:'none'
        })
      }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log(options);
      let name = options.name;
      this.setData({name})
      if(name=='email'){
        wx.setNavigationBarTitle({
          title: '邮箱设置',
        })
      }else if(name=='phone'){
        wx.setNavigationBarTitle({
          title: '手机号设置',
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