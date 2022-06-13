// components/uploader/uploader.js
Component({
   /**
    * 组件的属性列表
    */
   properties: {
      morenImg:String, // 默认图片
      name:String,
      fileList:Array
   },

   /**
    * 组件的初始数据
    */
   data: {
      // fileList: [{ //图片存放的数组
      //    url: "/images/auth/yingyezhizhao.png",
      //    name: '营业执照',
      //    deletable: false,
      // }],
   },

   /**
    * 组件的方法列表
    */
   methods: {
      // 删除照片
      deleteClick(event) {
         var imgData = this.data.fileList;
         // 通过splice方法删除图片
         imgData.splice(event.detail.index, 1);
         // 删除后放置默认图片
         imgData.push({
            url: this.data.morenImg,
            name: this.data.name,
            deletable: false,
         })
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
         const file = event.detail.file; //获取图片详细信息
         console.log(file)

         let that = this; //防止this指向问题
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
            url: "https://mock.presstime.cn/mock/6231d826560ad300225857e7/example/uploader", // 模拟上传图片接口
            method: 'POST',
            header: headers,
            filePath: file.url,
            name: 'file',
            // formData: {
            //     user: 'test'
            // },
            // 成功回调
            success(res) {
               // JSON.parse()方法是将JSON格式字符串转换为js对象
               var result = JSON.parse(res.data);
               // 上传完成需要更新 fileList
               const {
                  fileList = []
               } = that.data;
               // 将图片信息添加到fileList数字中
               fileList.push({
                  ...file,
                  url: result.data
               });
               fileList.splice(0, 1); // 删除默认图片
               // 更新存放图片的数组
               that.setData({
                  fileList
               });
               wx.hideLoading(); //停止loading
            },
         });
      },
   }
})