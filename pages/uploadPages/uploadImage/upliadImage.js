// pages/uploadPages/uploadImage/upliadImage.js
const app = getApp()
Page({
    
    /**
     * 页面的初始数据
     */
    data: {
        imgList: [],
        obj:null
    },
    updateImage(e) {
        console.log(e.detail)
    },
    //删除图片
    deleteImg(e) {
        const key = e.mark.key
        // 删除图片
        const list = this.data.dragImgList.filter((item) => item.key !== key)
        // 修改key值
        list.forEach((item) => item.key > key && item.key--)
        // 修改剩余图片位置
        this.getListPosition(list)
        // 修改上传图标位置
        this.setUploaPosition(list.length)
      },
    // 修改图标位置
    //图片上传
    // chooselocal() {
    //     wx.chooseImage({
    //         count: 9,
    //         sizeType: ['original', 'compressed'],
    //         sourceType: ['album', 'camera'],
    //         success: (res) => {
    //             // tempFilePath可以作为img标签的src属性显示图片
    //             let arr = []
    //             for (let i = 0; i < res.tempFiles.length; i++) {
    //                 let obj = {
    //                     url: res.tempFiles[i].path,
    //                     isImage: true,
    //                 }
    //                 arr.push(obj)
    //             }

    //             let imgarrs = this.data.imgarrs
    //             imgarrs = imgarrs.concat(arr)
    //             console.log(imgarrs)
    //             this.setData({
    //                 imgarrs
    //             })
    //         }
    //     })
    // },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let src = JSON.parse(decodeURIComponent(options.imgSrc))
        let obj = {
            src,
        }
        this.setData({
            obj
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
        // 计算图片宽度

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