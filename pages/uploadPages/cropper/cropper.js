//获取应用实例
const app = getApp()
Page({
    data: {
        id: null,
        src: '',
        width: 250,//宽度
        height: 250,//高度
    },
    onLoad: function (options) {
        //获取到image-cropper实例
        wx.showLoading({
            title: '加载中'
        })
        this.cropper = this.selectComponent("#image-cropper");
        //开始裁剪
        this.setData({
            src: options.imgSrc,
            id: options.id
        });
        if (!options.imgSrc) {
            this.cropper.upload(); //上传图片
        }
        
    },
    cancels(){
        wx.navigateBack({
            delta: -1
        })
    },
    submit() {
        wx.showLoading({
            title: '加载中'
          })
        this.cropper.getImg((obj) => {
            let url = obj.url;
            let pages = getCurrentPages(); //获取当前页面pages里的所有信息。
            let prevPage = pages[pages.length - 2]; //prevPage 是获取上一个页面的js里面的pages的所有信息。 -2 是上一个页面，-3是上上个页面以此类推。
            prevPage.setData({  // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
                newurl:url
            })
            wx.navigateBack({
                delta: -1
            })
        });
    },
    rotate() {
        //在用户旋转的基础上旋转90°
        this.cropper.setAngle(this.cropper.data.angle += 90);
    },
    cropperload(e) {
        console.log("cropper初始化完成");
    },
    loadimage(e) {
        console.log("图片加载完成", e.detail);
        wx.hideLoading();
        //重置图片角度、缩放、位置
        this.cropper.imgReset();
    },
    clickcut(e) {
        console.log(e.detail);
        //点击裁剪框阅览图片
        wx.previewImage({
            current: e.detail.url, // 当前显示图片的http链接
            urls: [e.detail.url] // 需要预览的图片http链接列表
        })
    },
    end(e) {
        clearInterval(this.data[e.currentTarget.dataset.type]);
    },
})