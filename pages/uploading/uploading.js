// pages/uploading/uploading.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        banners:[
            "https://oss2.1dq.com/app/static/app-plus/images/qrcode-online.jpg",
            "https://oss2.1dq.com/app/static/app-plus/images/tpl-02.jpg"
        ],
        swiperHeight:0,
        show:false
    },
    //弹窗选择合同发起方
    // showPopup() {
    //     this.setData({ show: true });
    //   },
    jumpcontract(){
      wx.navigateTo({
        url: '/pakA/pages/Mymodel/mymodel',
      })
    },
    jumpedit(){
      wx.navigateTo({
        url: '/pakA/pages/Mymodel/mymodel',
      })
    },
    onClose() {
        this.setData({ show: false });
    },
    choosePhonefile(){
        wx.showActionSheet({
            itemList: [ '相册照片', '拍摄照片', '文件选择器'], //文字数组
            itemColor: '#000000', //文字颜色
            success: (res) => {
              switch (res.tapIndex) {
                case 0:
                  wx.chooseImage({
                    count: 1,
                    sizeType: ['compressed'],
                    sourceType: ['album'],
                    success: (res) => {
                      let imgSrc = encodeURIComponent(JSON.stringify(res.tempFilePaths[0]))
                      wx.navigateTo({
                        url: '/pages/uploadPages/uploadImage/upliadImage?imgSrc='+imgSrc,
                      })
                    },
                    fail:()=>{
                      wx.showToast({
                        title: '未选择文件',
                        icon: 'none',
                        duration: 1000
                      })
                    }
                  })
                  break;
                case 1:
                  // wx.chooseMedia({
                  //     count:1,
                  //     mediaType:"image",
                  //     sourceType:'camera',
                  //     camera:'back',
                  //     success(res){
                  //         console.log(res)
                  //     }
                  // })
                  wx.chooseImage({
                    count: 1,
                    sizeType: ['compressed'],
                    sourceType: ['camera'],
                    success: (res) => {
                      // tempFilePath可以作为 img 标签的 src 属性显示图片
                      console.log(res)
                      wx.showToast({
                        title: '处理中...',
                        icon: 'loading',
                        duration: 500,
                        success: () => {
                          let files = res.tempFiles[0]
                          console.log(res)
                          let FuFilesArr = this.data.FuFilesArr
                          FuFilesArr.push(files)
                          console.log(FuFilesArr)
                          this.setData({
                            FuFilesArr
                          })
                        }
                      })
                    },
                    fail() {
                      wx.showToast({
                        title: '您取消了拍照',
                        icon: 'none',
                        duration: 1000
                      })
                    }
                  })
                  break;
                case 2:
                  console.log('用户点击了文件选择')
                  wx.navigateTo({
                    url: '/pages/uploadPages/uploadfiles/uploadfiles',
                  })
                  break;
              }
            }
          })
    },
    //从微信聊天选择文件 
    chooseWxFile(){
        //判断是否有合同发起方
        // let key = wx.getStorageSync("token")
        // console.log(key)
        // if(key){
            wx.chooseMessageFile({
                count: 1,
                success(res){
                    console.log(res)
                    const files = encodeURIComponent(JSON.stringify(res.tempFiles[0]))
                    wx.showToast({
                        title: '处理中...',
                        icon: 'loading',
                        duration: 1500,
                        complete(){
                            wx.navigateTo({
                              url: '../uoloaddetail/uoloaddetail?choose_files='+files,
                            })
                        }
                    })
                },
                fail(){
                    wx.showToast({
                        title: '文件上传失败，请重试！',
                        icon: 'none',
                        duration: 1500
                    })
                }
            })
        // }else{
        //     this.showPopup()
        // }
        
    },

    //轮播图片加载完成的事件
    handleSwiperImageLoaded(){
        const query = wx.createSelectorQuery();
        query.select("#swiper-item").boundingClientRect().exec((res)=>{
            // const imageInfo = res[0]
            // console.log(imageInfo)
            this.setData({swiperHeight : 100 + "px"})
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