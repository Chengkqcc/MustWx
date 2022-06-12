// pakB/pages/rengong/rengong.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      fileList: [{ //图片存放的数组
         url: '/images/auth/yingyezhizhao.png',
         name: '营业执照',
         deletable: false,
      }],
   },
   // 删除照片
   deleteClick(event) {
      var imgData = this.data.fileList;
      // 通过splice方法删除图片
      imgData.splice(event.detail.index, 1);
      // 更新图片数组
      this.setData({
         fileList: imgData
      })
   },
   // 上传图片
   afterRead(event) {
      // loading加载
      wx.showLoading({
         title: '上传中...'
      });
      const file = event.detail.file;//获取图片详细信息
      console.log(file)
      
      let that = this;//防止this指向问题
        // 设置请求头，根据项目需求变换
        let Authorization = wx.getStorageSync('key')
        let headers = {
            'content-type': '',
            'client_id': 'webApp',
            'client_secret': '123456',
        }
        if (Authorization) {
            headers.Authorization = 'Bearer ' + Authorization
        }
        // 调用wx.uploadFile上传图片方法
        wx.uploadFile({
            url: "https://mock.presstime.cn/mock/6231d826560ad300225857e7/example/uploader",// 模拟上传图片接口
            method: 'POST',
            header: headers,
            filePath: file.url,
            name: 'file',
            // formData: {
            //     user: 'test'
            // },
            // 成功回调
            success(res) {
              console.log(res)
              // JSON.parse()方法是将JSON格式字符串转换为js对象
               var result = JSON.parse(res.data);
               // 上传完成需要更新 fileList
               const {fileList = []} = that.data;
               // 将图片信息添加到fileList数字中
               fileList.push({
                   ...file,
                   url: result.data
               });
               // 更新存放图片的数组
               that.setData({
                   fileList
               });
               wx.hideLoading();//停止loading
           },
       });
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad(options) {

   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady() {

   },

   /**
    * 生命周期函数--监听页面显示
    */
   onShow() {

   },

   /**
    * 生命周期函数--监听页面隐藏
    */
   onHide() {

   },

   /**
    * 生命周期函数--监听页面卸载
    */
   onUnload() {

   },

   /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
   onPullDownRefresh() {

   },

   /**
    * 页面上拉触底事件的处理函数
    */
   onReachBottom() {

   },

   /**
    * 用户点击右上角分享
    */
   onShareAppMessage() {

   }
})