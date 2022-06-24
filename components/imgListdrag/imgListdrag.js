Component({
  options: {
    multipleSlots: true
  },
  data: {
    ITEM_SIZE: 105, // 图片大小 单位px
    dragImgList: [], // 图片列表 { src: string, key: number, tranX: number, tranY: number }[]
    containerRes: {}, // 拖拽容器属性
    currentKey: -1, // 正在拖拽图片的key
    currentIndex: -1, // 正在拖拽图片的index
    tranX: 0, // 正在拖拽图片移动的x距离
    tranY: 0, // 正在拖拽图片移动的y距离
    uploadPosition: { // upload上传图标位移距离
      tranX: 0,
      tranY: 0,
    },
    _key:null     //存放截取的图片key值 这里截取的图片在父组件中
  },
  properties: {
    obj: {
      type: Object
    },
    newurl:{
      type:String,
      observer(a,b){
        if(a && (!b || a!=b)){
          let {_key,dragImgList} = this.data
          dragImgList.forEach((item)=>{
            if(item.key == _key){
              item.src = a
            }
          })
          this.setData({
            dragImgList
          })
        }
      }
    }
  },

  lifetimes: {
    ready() {
      console.log(this.properties.newurl)
      let { dragImgList, ITEM_SIZE } = this.data
      let obj = this.properties.obj
      obj.tranX = 0,
        obj.tranY = 0,
        obj.key = 0
      dragImgList.push(this.properties.obj)
      this.setData({
        dragImgList
      })
      console.log(dragImgList)
      this.setUploaPosition(1)
      this.createSelectorQuery()
        .select(".drag-container")
        .boundingClientRect((res) => {
          this.data.containerRes = res
        }).exec();
    },
  },

  methods: {
    caiImg(e){
      const key = e.mark.key
      this.setData({
        _key:key
      })
      // const item = this.data.dragImgList.filter((item) => item.key == key)
      let src = null
      this.data.dragImgList.forEach((item)=>{
        if(item.key == key){
          src = item.src
        }
      })
      wx.navigateTo({
        url: '/pages/uploadPages/cropper/cropper?imgSrc='+src+'&&id='+key
      })
    },
    todetail(){
      let {dragImgList} = this.data
      if(dragImgList.length==1){
        let obj = encodeURIComponent(JSON.stringify(dragImgList))
        wx.navigateTo({
          url: '/pages/uoloaddetail/uoloaddetail?choose_files='+obj,
        })
      }else{
        wx.setStorageSync('dragImgList', dragImgList)
        wx.navigateTo({
          url: '/pages/uploadPages/success/success?_index=1',
        })
      }
    },
    /**
     * 长按图片
     */
    longPress(e) {
      const index = e.mark.index
      const { pageX, pageY } = e.touches[0]
      const { top, left } = this.data.containerRes
      this.setData({
        currentIndex: index,
        tranX: pageX - 50 - left,
        tranY: pageY - 50 - top
      })
    },

    /**
     * touchMove
     */
    touchMove(e) {
      // 如果currentIndex < 0，说明并没有触发longPress
      if (this.data.currentIndex < 0) return
      const { pageX, pageY } = e.touches[0]
      const { top, left } = this.data.containerRes
      const tranX = pageX - 50 - left
      const tranY = pageY - 50 - top
      this.setData({
        tranX,
        tranY
      })
      // 对比当前移动的key和停放位置的key，如果不一样就修改位置
      const currentKey = e.mark.key
      const moveKey = this.getMoveKey(tranX, tranY)
      // console.log(currentKey, moveKey);
      if (currentKey === moveKey || this.data.currentKey === currentKey) return
      this.data.currentKey = currentKey
      this.insert(currentKey, moveKey)
    },

    /**
     * 获取移动中的key
     */
    getMoveKey(tranX, tranY) {
      const { dragImgList: list, ITEM_SIZE } = this.data
      const _getPositionNumber = (drag) => {
        const positionNumber = Math.round(drag / ITEM_SIZE)
        return positionNumber > 2 ? 2 : positionNumber < 0 ? 0 : positionNumber
      }
      const endKey = 3 * _getPositionNumber(tranY) + _getPositionNumber(tranX)
      return endKey >= list.length ? list.length - 1 : endKey
    },

    /**
     * 处理移动中key的变化
     */
    insert(origin, end) {
      const dragImgList = this.data.dragImgList
      dragImgList.forEach((item) => {
        if (origin < end) {
          if (item.key > origin && item.key <= end) item.key--
          else if (item.key === origin) item.key = end
        } else if (origin > end) {
          if (item.key >= end && item.key < origin) item.key++
          else if (item.key === origin) item.key = end
        }
      })
      this.getListPosition(dragImgList)
    },

    /**
     * 修改位置
     */
    getListPosition(list) {
      const ITEM_SIZE = this.data.ITEM_SIZE
      const dragImgList = list.map((item) => {
        item.tranX = ITEM_SIZE * (item.key % 3);
        item.tranY = Math.floor(item.key / 3) * ITEM_SIZE;
        return item
      })
      this.setData({
        dragImgList,
      })

      const srcList = [...dragImgList].sort((a, b) => a.key - b.key).map((item) => item.src)
      this.triggerEvent('updateImage', {
        list: srcList
      })
    },

    /**
     * touchEnd
     */
    touchEnd() {
      this.setData({
        tranX: 0,
        tranY: 0,
        currentIndex: -1,
      })
      this.data.currentKey = -1
    },

    /**
     * 上传图片
     */
    uploadImage() {
      let { dragImgList, ITEM_SIZE } = this.data
      wx.chooseImage({
        count: 9 - dragImgList.length,
        success: (res) => {
          console.log(res)
          const imgList = res.tempFilePaths.map((item, index) => ({
            tranX: ITEM_SIZE * ((dragImgList.length + index) % 3),
            tranY: Math.floor((dragImgList.length + index) / 3) * ITEM_SIZE,
            src: item,
            key: dragImgList.length + index
          }))
          dragImgList = dragImgList.concat(imgList)
          this.setUploaPosition(dragImgList.length)
          this.setData({
            dragImgList,
          })
        }
      })
      console.log(dragImgList)
    },

    /**
     * 修改上传图标位置
     */
    setUploaPosition(listLength) {
      const ITEM_SIZE = this.data.ITEM_SIZE
      const uploadPosition = {
        tranX: listLength % 3 * ITEM_SIZE,
        tranY: Math.floor(listLength / 3) * ITEM_SIZE,
      }
      this.setData({
        uploadPosition,
      })
    },

    /**
     * 删除图片
     */
    deleteImg(e) {
      const key = e.mark.key
      // console.log(key)
      const list = this.data.dragImgList.filter((item) => item.key !== key)
      list.forEach((item) => item.key > key && item.key--)
      this.getListPosition(list)
      this.setUploaPosition(list.length)
    }
  }
})