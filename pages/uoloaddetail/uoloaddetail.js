// pages/uoloaddetail/uoloaddetail.js
Page({


  /**
   * 页面的初始数据
   */
  data: {
    bottext:"高级",
    pagestate:false,
    state:false,
    chooseicon:"plus",
    switchChecked:false,
    switch1Checked:true,
    switch2Checked:false,
    switch3Checked:false,
    myDate:null,
    startdate1: null,
    startdate: null,
    value: 0,
    index: 0,
    index1: 0,
    index2: 0,
    array2: ['不自动添加', 'YYY|MM|DD', 'YYYY-MM-DD', 'YYYY年MM月DD日'],
    array1: ['蚂蚁金服区块链存证'],
    array: ['数字证书'],
    isAuth: false,   //摄像头权限
    FuFilesArr: [],
    choose_files: null,
    contractName: "",
    show: false,
    checked: true,
    _index: 0,   //判断底部隐藏弹窗是签署人部分还是添加部分
    choosetype: "签署人",    //签署人选择
    signlist: null,
    actions: [
      [{
        name: '签署人',
      },
      {
        name: '抄送人',
      }],
      [{
        name: '个人',
      },
      {
        name: '企业',
      }]
    ],
    messArr: [
      '假设本合同需要您和张三签字，需要在签署人中填写张三的手机号和姓名，在发起合同之后，张三可以收到短信，张三点击短信即可对合同签字。',
      '抄送方为选填项，即本合同哪些人可以查看，抄送方只有查看的权限，无签署的权限',
      '需要签署的文件，您可以添加多个附件，附件信息将合并到PDF文件中(附件无需盖章),附件和主合同具备同等的法律效力'
    ]
  },
  changePS(){
    let pagestate = !this.data.pagestate
    var str = "plus";
    let str2 = null
    if(pagestate){
      // str = "minus"
      str2 = "快速"
    }else{
      str = "plus"
      str2 = "高级"
      this.setData({
        state:false,
      })
    }
    this.setData({
      chooseicon:str,
      pagestate,
      bottext:str2
    })
  },
  changeS(){
    let state = !this.data.state
    if(state){
      this.setData({
        state,
        chooseicon:"minus"
      })
    }else{
      this.setData({
        state,
        chooseicon:"plus"
      })
    }
  },
  bindDateChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      startdate1: e.detail.value
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      startdate: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  //删除附件的业务
  delFu(options) {
    console.log(options)
  },
  alertFiles() {
    wx.showModal({
      content: this.data.messArr[2],
      showCancel: false,
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
        wx.previewImage({
          current: res.tempImagePath, // 当前显示图片的http链接
          urls: [res.tempImagePath] // 需要预览的图片http链接列表
        })
      }
    })
  },
  addFu() {
    wx.showActionSheet({
      itemList: ['微信聊天文件', '相册照片', '拍摄照片', '文件选择器'], //文字数组
      itemColor: '#000000', //文字颜色
      success: (res) => {
        switch (res.tapIndex) {
          case 0:
            console.log('用户点击了聊天文件')
            wx.chooseMessageFile({
              count: 1,
              success: (res) => {
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
                //选择的文件上传到服务器
                // const tempFilePaths = res.tempFilePaths
                //  wx.uploadFile({
                //     url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
                //     filePath: tempFilePaths[0],
                //     name: 'file',
                //     formData: {
                //     'user': 'test'
                //     },
                //     success (res){
                //         const data = res.data
                //     },
                //     fail(){
                //         wx.showModal({
                //             content: '上传文件失败，请稍后再试', //提示的内容
                //             success: function(res) {
                //               if(res.confirm) {
                //                 console.log('用户点击了确定')
                //               }
                //             }
                //           })
                //     }
                // })
              },
              fail(res) {
                wx.showToast({
                  title: '选择文件失败,请重试',
                  icon: 'none',
                  duration: 500
                })
              }
            })
            break;
          case 1:
            wx.chooseImage({
              count: 1,
              sizeType: 'original',
              sourceType: 'album',
              success: (res) => {
                let files = res.tempFiles[0]
                let FuFilesArr = this.data.FuFilesArr
                FuFilesArr.push(files)
                wx.showToast({
                  title: '处理中...',
                  icon: 'loading',
                  duration: 500,
                  success: () => {
                    this.setData({
                      FuFilesArr
                    })
                  }
                })

              },
            })
            break;
          case 2:
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
              sizeType: 'compressed',
              sourceType: 'camera',
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
          case 3:
            console.log('用户点击了文件选择')
            wx.navigateTo({
              url: '/pages/uploadPages/uploadfiles/uploadfiles',
            })
            break;
        }
      }
    })
  },
  onChange(event) {
    this.setData({
      checked: event.detail,
    });
  },
  delItem(options) {
    console.log(options)
    let ids = options.target.dataset.idx
    let name = options.target.dataset.name  //判断是从签署人删除还是抄送人
    if (name == "签署人") {
      var signlist = wx.getStorageSync('personArr')
    } else {
      var signlist = wx.getStorageSync('chaoArr')
    }

    wx.showModal({
      title: "提示",
      content: "您真的要删除该签署人吗",
      showCancel: true,
      success: (res) => {
        if (res.confirm) {
          signlist.forEach((item, index) => {
            if (item.ids == ids) {
              signlist.splice(index, 1)
            }
          })
          if (name == "签署人") {
            wx.setStorageSync('personArr', signlist)
          } else {
            wx.setStorageSync('chaoArr', signlist)
          }
          this.getState()
        }
      }
    })

  },
  //弹框判定内容
  alertExplain() {
    //模拟抄送人和签署人的信息

    let index = 0
    if (this.data.choosetype == '签署人') {
      index = 0
    } else {
      index = 1
    }
    wx.showModal({
      content: this.data.messArr[index],
      showCancel: false,
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  //选择签署人的业务 
  chooseP(e) {
    let _index = e.target.dataset.index
    console.log(e)
    this.setData({
      show: true,
      _index
    })
  },
  //选择签署人后关闭以及选择后的回调
  onClose() {
    this.setData({ show: false });
  },
  onSelect(event) {
    let choosetype = event.detail.name
    let chooseindex = null

    if (this.data._index == '1') {
      console.log(this.data.choosetype)
      if (choosetype == "个人") {
        chooseindex = 1
      } else {
        chooseindex = 2
      }
      if (this.data.choosetype == "签署人") {
        wx.navigateTo({
          url: '/pages/uploadPages/addQian/addQian?_index=' + chooseindex + '&&persontype=' + this.data.choosetype,
        })
        return
      } else {
        console.log(this.data.choosetype)
        wx.navigateTo({
          url: '/pages/uploadPages/addChao/addChao?_index=' + chooseindex + '&&persontype=' + this.data.choosetype,
        })
        return
      }
    }
    this.setData({
      choosetype,
    })
    this.getState()

  },
  //改变choosetype状态的封装函数
  getState() {
    let chaolist = wx.getStorageSync('chaoArr') || []
    let personArr = wx.getStorageSync('personArr') || []
    if (this.data.choosetype == '签署人') {
      this.setData({
        signlist: personArr
      })
    } else {
      this.setData({
        signlist: chaolist
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let choose_files = JSON.parse(decodeURIComponent(options.choose_files))
    console.log(choose_files)
    this.setData({
      choose_files
    })
    const _this = this

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var myDate = new Date();
    myDate = myDate.toLocaleDateString();
    myDate = myDate.replace(/\//g,'-')
    this.setData({
      myDate
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getState()
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