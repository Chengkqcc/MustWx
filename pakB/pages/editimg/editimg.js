// pakB/pages/editimg/editimg.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      img:'',//要编辑的图片
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log(options);
      this.setData({img:options.img})
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
      let path = this.data.img;
      this.cropper = this.selectComponent("#yeyouzi-cropper");
      this.cropper.init({
          imgPath: path,  //imgPath是需要裁剪图片的图片路径，只支持本地或临时路径
          success(res){
              console.log(res) //res即裁剪成功后的图片临时路径
              console.log('把剪切的图片保存，跳转 到 设置印章参数 页面');
              wx.navigateTo({
                url: '/pakB/pages/setarguments/setarguments?img='+res,
              })
          },
          fail(error){
              console.log(error) //有两种:cancel代表点击了叉，fail代表wx.canvasToTempFilePath生成图片失败
              wx.navigateBack({
                delta: 0,
              })
          }        
      });
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