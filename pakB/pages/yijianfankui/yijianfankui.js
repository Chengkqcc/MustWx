// pakB/pages/yijianfankui/yijianfankui.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
<<<<<<< HEAD
      message:'',//问题和意见
      fileList: [],//上传的文件
      email:'',//邮箱 选填
      star:0,//评分
      show:false,//动作面板是否展示 true 展示
      actions: [
        {
          name: '界面显示错乱',
        },
        {
          name: '启动缓慢，卡出翔了',
        },
        {
          name: 'UI无法直视',
        },
        {
          name: '偶发性崩溃',
        }
      ],
    },
    //methods
    // 开启动作面板
    actionSheet_fn(){
      this.setData({
        show:true
      })
    },
    // 关闭 动作面板
    onClose() {
      this.setData({ show: false });
    }, 
    // 问题和意见 选择  
    onSelect(event) {
      console.log(event.detail);
      this.setData({
        message:event.detail.name
      })
    },
    // 上传 验证
    afterRead(event) {
      console.log(event.detail);
      const { file } = event.detail;
      // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
      wx.uploadFile({
        url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
        filePath: file.url,
        name: 'file',
        formData: { user: 'test' },
        success(res) {
          console.log(res);
          // 上传完成需要更新 fileList
          const { fileList = [] } = this.data;
          fileList.push({ ...file, url: res.data });
          this.setData({ fileList });
        },
      });
    },
    // 确定按钮 提交
    submit_fn(){
      console.log('提交意见和问题');
      console.log(this.data);
    },
    // 评分变化
    onChange(event) {
      console.log(event.detail);
      this.setData({star:event.detail})
    },
=======

    },

>>>>>>> Chengkeqiang
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