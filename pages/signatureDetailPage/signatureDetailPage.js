// pages/signatureDetailPage/signatureDetailPage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        writeSignature: false, //控制手写签名的显示和隐藏
        selectImage: false, //控制裁剪图片的显示和隐藏
        sealSet: false, //控制印章设置的显示和隐藏
        sealModel: false, //控制印章模板的显示和隐藏
        setSealParams: true,//控制设置印章参数的显示和隐藏
        text: "",//页面头部的标题内容
        angle: 0,

        // 裁剪图片
        imgsrc: "",//图片路径
        width: 250,//宽度
        height: 250,//高度
        number: 1,


        icon1: true,
        icon2: false,
        icon3: false,
        icon4: false,
        imageList: [
            {
                "id": 0,
                "imgsrc": "https://api.1dq.com/static/sealdemo/square-3.png"
            },
            {
                "id": 1,
                "imgsrc": "https://api.1dq.com/static/sealdemo/square-4.png"
            },
            {
                "id": 2,
                "imgsrc": "https://api.1dq.com/static/sealdemo/square-1.png"
            },
            {
                "id": 3,
                "imgsrc": "https://api.1dq.com/static/sealdemo/square-2.png"
            },
            {
                "id": 4,
                "imgsrc": "https://api.1dq.com/static/sealdemo/rectangle-1.png"
            },
            {
                "id": 5,
                "imgsrc": "https://api.1dq.com/static/sealdemo/rectangle-2.png"
            },
            {
                "id": 6,
                "imgsrc": "https://api.1dq.com/static/sealdemo/rectangle-3.png"
            },
            {
                "id": 7,
                "imgsrc": "https://api.1dq.com/static/sealdemo/rectangle-4.png"
            },
        ],
        inputValue: '',
        value: "",
        sealSrc: '',
        saveProp: false,//控制保存弹出层的显示和隐藏
        sealArr: [],
        sealObj: {
            imgsrc: "",
            time: "",
            text: "",
        },
        type: "",//跳转类型
        sealReminder: false, //控制印章设置的显示和隐藏

        // 手写签名
        id: null,
        canvasName: 'handWriting',
        ctx: '',
        canvasWidth: 0,
        canvasHeight: 0,
        transparent: 1, // 透明度
        selectColor: 'black',
        lineColor: '#1A1A1A', // 颜色
        lineSize: 0.4, // 笔记倍数
        lineMin: 0.5, // 最小笔画半径
        lineMax: 4, // 最大笔画半径
        pressure: 1, // 默认压力
        smoothness: 60, //顺滑度，用60的距离来计算速度
        currentPoint: {},
        currentLine: [], // 当前线条
        firstTouch: true, // 第一次触发
        radius: 1, //画圆的半径
        cutArea: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, //裁剪区域
        bethelPoint: [], //保存所有线条 生成的贝塞尔点；
        lastPoint: 0,
        chirography: [], //笔迹
        currentChirography: {}, //当前笔迹
        linePrack: [], //划线轨迹 , 生成线条的实际点

        // 控制手写签名画笔的颜色选中状态
        color: true,
        color2: false,

        // 画笔尺寸
        brushSize: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        brushSizeShow: false,
        active: 2,
        canvasImg: []//存放手写签名的数组

    },
    // 返回上一级
    back() {
        wx.navigateBack({
            delta: 1
        })
    },
    changeIcon(e) {
        let index = e.currentTarget.dataset.index;
        if (index == "0") {
            this.setData({
                icon1: true,
                icon2: false,
                icon3: false,
                icon4: false
            })
        } else if (index == "1") {
            this.setData({
                icon1: false,
                icon2: true,
                icon3: false,
                icon4: false
            })
        } else if (index == "2") {
            this.setData({
                icon1: false,
                icon2: false,
                icon3: true,
                icon4: false
            })
        } else if (index == "3") {
            this.setData({
                icon1: false,
                icon2: false,
                icon3: false,
                icon4: true
            })
        }
    },
    bindkeyInput(e) {
        this.setData({
            inputValue: e.detail.value
        })
    },
    clickcut(e) {
        //点击裁剪框阅览图片
        wx.previewImage({
            current: e.detail.url, // 当前显示图片的http链接
            urls: [e.detail.url] // 需要预览的图片http链接列表
        })
    },
    // 点击取消
    cancel() {
        wx.navigateBack({
            delta: 1
        })
    },
    // 点击完成
    finish() {
        let that = this;
        this.cropper.getImg((obj) => {
            let url = obj.url;
            that.setData({
                writeSignature: false,
                selectImage: false,
                sealSet: false,
                sealModel: false,
                setSealParams: true,
                sealSrc: url,
                text: "设置印章参数"
            })
        })
    },
    // 旋转图片
    angle() {
        let index = this.data.number++;
        this.setData({
            angle: index * 90
        })
        if (index > 4) {
            index = 1;
        }
    },
    // 点击保存按钮,显示保存弹出层
    save() {
        this.setData({
            saveProp: true
        })
    },
    // 关闭保存弹出层
    closeSave() {
        this.setData({
            saveProp: false
        })
    },
    // 点击保存弹出层的确定按钮
    ensure() {
        this.setData({
            saveProp: false,
        })
        let item = this.data.sealObj;
        let sealArr = wx.getStorageSync('sealArr') || this.data.sealArr;
        item.imgsrc = this.data.sealSrc;
        item.time = this.data.value;
        item.text = "待审核";
        sealArr.unshift(item);
        wx.setStorageSync('sealArr', sealArr);
        wx.redirectTo({
            url: '../sealManage/sealManage?sealArr=' + JSON.stringify(sealArr)
        })
    },
    sealReminder() {
        this.setData({
            sealReminder: true
        })
    },
    closeReminder() {
        this.setData({
            sealReminder: false
        })
    },

    // 手写签名
    // 笔迹开始
    uploadScaleStart(e) {
        if (e.type != 'touchstart') return false;
        let ctx = this.data.ctx;
        ctx.setFillStyle(this.data.lineColor); // 初始线条设置颜色
        ctx.setGlobalAlpha(this.data.transparent); // 设置半透明
        let currentPoint = {
            x: e.touches[0].x,
            y: e.touches[0].y
        }
        let currentLine = this.data.currentLine;
        currentLine.unshift({
            time: new Date().getTime(),
            dis: 0,
            x: currentPoint.x,
            y: currentPoint.y
        })
        this.setData({
            currentPoint,
            // currentLine
        })
        if (this.data.firstTouch) {
            this.setData({
                cutArea: {
                    top: currentPoint.y,
                    right: currentPoint.x,
                    bottom: currentPoint.y,
                    left: currentPoint.x
                },
                firstTouch: false
            })
        }
        this.pointToLine(currentLine);
    },
    // 笔迹移动
    uploadScaleMove(e) {
        if (e.type != 'touchmove') return false;
        if (e.cancelable) {
            // 判断默认行为是否已经被禁用
            if (!e.defaultPrevented) {
                e.preventDefault();
            }
        }
        let point = {
            x: e.touches[0].x,
            y: e.touches[0].y

        }
        //测试裁剪
        if (point.y < this.data.cutArea.top) {
            this.data.cutArea.top = point.y;
        }
        if (point.y < 0) this.data.cutArea.top = 0;
        if (point.x > this.data.cutArea.right) {
            this.data.cutArea.right = point.x;
        }
        if (this.data.canvasWidth - point.x <= 0) {
            this.data.cutArea.right = this.data.canvasWidth;
        }
        if (point.y > this.data.cutArea.bottom) {
            this.data.cutArea.bottom = point.y;
        }
        if (this.data.canvasHeight - point.y <= 0) {
            this.data.cutArea.bottom = this.data.canvasHeight;
        }
        if (point.x < this.data.cutArea.left) {
            this.data.cutArea.left = point.x;
        }
        if (point.x < 0) this.data.cutArea.left = 0;
        this.setData({
            lastPoint: this.data.currentPoint,
            currentPoint: point
        })
        let currentLine = this.data.currentLine
        currentLine.unshift({
            time: new Date().getTime(),
            dis: this.distance(this.data.currentPoint, this.data.lastPoint),
            x: point.x,
            y: point.y
        })
        // this.setData({
        //   currentLine
        // })
        this.pointToLine(currentLine);
    },
    // 笔迹结束
    uploadScaleEnd(e) {
        if (e.type != 'touchend') return 0;
        let point = {
            x: e.changedTouches[0].x,
            y: e.changedTouches[0].y
        }
        this.setData({
            lastPoint: this.data.currentPoint,
            currentPoint: point
        })
        let currentLine = this.data.currentLine
        currentLine.unshift({
            time: new Date().getTime(),
            dis: this.distance(this.data.currentPoint, this.data.lastPoint),
            x: point.x,
            y: point.y
        })
        // this.setData({
        //   currentLine
        // })
        if (currentLine.length > 2) {
            var info = (currentLine[0].time - currentLine[currentLine.length - 1].time) / currentLine.length;
            //$("#info").text(info.toFixed(2));
        }
        //一笔结束，保存笔迹的坐标点，清空，当前笔迹
        //增加判断是否在手写区域；
        this.pointToLine(currentLine);
        var currentChirography = {
            lineSize: this.data.lineSize,
            lineColor: this.data.lineColor
        };
        var chirography = this.data.chirography
        chirography.unshift(currentChirography);
        this.setData({
            chirography
        })
        var linePrack = this.data.linePrack
        linePrack.unshift(this.data.currentLine);
        this.setData({
            linePrack,
            currentLine: []
        })
    },
    // 重写
    retDraw() {
        this.data.ctx.clearRect(0, 0, 700, 730)
        this.data.ctx.draw();
        //设置canvas背景
        this.setCanvasBg("#fff");

    },
    //画两点之间的线条；参数为:line，会绘制最近的开始的两个点；
    pointToLine(line) {
        this.calcBethelLine(line);
        return;
    },
    //计算插值的方式；
    calcBethelLine(line) {
        if (line.length <= 1) {
            line[0].r = this.data.radius;
            return;
        }
        let x0, x1, x2, y0, y1, y2, r0, r1, r2, len, lastRadius, dis = 0,
            time = 0,
            curveValue = 0.5;
        if (line.length <= 2) {
            x0 = line[1].x
            y0 = line[1].y
            x2 = line[1].x + (line[0].x - line[1].x) * curveValue;
            y2 = line[1].y + (line[0].y - line[1].y) * curveValue;
            //x2 = line[1].x;
            //y2 = line[1].y;
            x1 = x0 + (x2 - x0) * curveValue;
            y1 = y0 + (y2 - y0) * curveValue;;

        } else {
            x0 = line[2].x + (line[1].x - line[2].x) * curveValue;
            y0 = line[2].y + (line[1].y - line[2].y) * curveValue;
            x1 = line[1].x;
            y1 = line[1].y;
            x2 = x1 + (line[0].x - x1) * curveValue;
            y2 = y1 + (line[0].y - y1) * curveValue;
        }
        //从计算公式看，三个点分别是(x0,y0),(x1,y1),(x2,y2) ；(x1,y1)这个是控制点，控制点不会落在曲线上；实际上，这个点还会手写获取的实际点，却落在曲线上
        len = this.distance({
            x: x2,
            y: y2
        }, {
            x: x0,
            y: y0
        });
        lastRadius = this.data.radius;
        for (let n = 0; n < line.length - 1; n++) {
            dis += line[n].dis;
            time += line[n].time - line[n + 1].time;
            if (dis > this.data.smoothness) break;
        }
        this.setData({
            radius: Math.min(time / len * this.data.pressure + this.data.lineMin, this.data.lineMax) * this.data.lineSize
        });
        line[0].r = this.data.radius;
        //计算笔迹半径；
        if (line.length <= 2) {
            r0 = (lastRadius + this.data.radius) / 2;
            r1 = r0;
            r2 = r1;
            //return;
        } else {
            r0 = (line[2].r + line[1].r) / 2;
            r1 = line[1].r;
            r2 = (line[1].r + line[0].r) / 2;
        }
        let n = 5;
        let point = [];
        for (let i = 0; i < n; i++) {
            let t = i / (n - 1);
            let x = (1 - t) * (1 - t) * x0 + 2 * t * (1 - t) * x1 + t * t * x2;
            let y = (1 - t) * (1 - t) * y0 + 2 * t * (1 - t) * y1 + t * t * y2;
            let r = lastRadius + (this.data.radius - lastRadius) / n * i;
            point.push({
                x: x,
                y: y,
                r: r
            });
            if (point.length == 3) {
                let a = this.ctaCalc(point[0].x, point[0].y, point[0].r, point[1].x, point[1].y, point[1].r, point[2].x, point[2].y, point[2].r);
                a[0].color = this.data.lineColor;
                // let bethelPoint = this.data.bethelPoint;
                // console.log(a)
                // console.log(this.data.bethelPoint)
                // bethelPoint = bethelPoint.push(a);
                this.bethelDraw(a, 1);
                point = [{
                    x: x,
                    y: y,
                    r: r
                }];
            }
        }
        this.setData({
            currentLine: line
        })
    },
    //求两点之间距离
    distance(a, b) {
        let x = b.x - a.x;
        let y = b.y - a.y;
        return Math.sqrt(x * x + y * y);
    },
    ctaCalc(x0, y0, r0, x1, y1, r1, x2, y2, r2) {
        let a = [],
            vx01, vy01, norm, n_x0, n_y0, vx21, vy21, n_x2, n_y2;
        vx01 = x1 - x0;
        vy01 = y1 - y0;
        norm = Math.sqrt(vx01 * vx01 + vy01 * vy01 + 0.0001) * 2;
        vx01 = vx01 / norm * r0;
        vy01 = vy01 / norm * r0;
        n_x0 = vy01;
        n_y0 = -vx01;
        vx21 = x1 - x2;
        vy21 = y1 - y2;
        norm = Math.sqrt(vx21 * vx21 + vy21 * vy21 + 0.0001) * 2;
        vx21 = vx21 / norm * r2;
        vy21 = vy21 / norm * r2;
        n_x2 = -vy21;
        n_y2 = vx21;
        a.push({
            mx: x0 + n_x0,
            my: y0 + n_y0,
            color: "#1A1A1A"
        });
        a.push({
            c1x: x1 + n_x0,
            c1y: y1 + n_y0,
            c2x: x1 + n_x2,
            c2y: y1 + n_y2,
            ex: x2 + n_x2,
            ey: y2 + n_y2
        });
        a.push({
            c1x: x2 + n_x2 - vx21,
            c1y: y2 + n_y2 - vy21,
            c2x: x2 - n_x2 - vx21,
            c2y: y2 - n_y2 - vy21,
            ex: x2 - n_x2,
            ey: y2 - n_y2
        });
        a.push({
            c1x: x1 - n_x2,
            c1y: y1 - n_y2,
            c2x: x1 - n_x0,
            c2y: y1 - n_y0,
            ex: x0 - n_x0,
            ey: y0 - n_y0
        });

        a.push({
            c1x: x0 - n_x0 - vx01,
            c1y: y0 - n_y0 - vy01,
            c2x: x0 + n_x0 - vx01,
            c2y: y0 + n_y0 - vy01,
            ex: x0 + n_x0,
            ey: y0 + n_y0
        });
        a[0].mx = a[0].mx.toFixed(1);
        a[0].mx = parseFloat(a[0].mx);
        a[0].my = a[0].my.toFixed(1);
        a[0].my = parseFloat(a[0].my);
        for (let i = 1; i < a.length; i++) {
            a[i].c1x = a[i].c1x.toFixed(1);
            a[i].c1x = parseFloat(a[i].c1x);
            a[i].c1y = a[i].c1y.toFixed(1);
            a[i].c1y = parseFloat(a[i].c1y);
            a[i].c2x = a[i].c2x.toFixed(1);
            a[i].c2x = parseFloat(a[i].c2x);
            a[i].c2y = a[i].c2y.toFixed(1);
            a[i].c2y = parseFloat(a[i].c2y);
            a[i].ex = a[i].ex.toFixed(1);
            a[i].ex = parseFloat(a[i].ex);
            a[i].ey = a[i].ey.toFixed(1);
            a[i].ey = parseFloat(a[i].ey);
        }
        return a;
    },
    bethelDraw(point, is_fill, color) {
        let ctx = this.data.ctx;
        ctx.beginPath();
        ctx.moveTo(point[0].mx, point[0].my);
        if (undefined != color) {
            ctx.setFillStyle(color);
            ctx.setStrokeStyle(color);
        } else {
            ctx.setFillStyle(point[0].color);
            ctx.setStrokeStyle(point[0].color);
        }
        for (let i = 1; i < point.length; i++) {
            ctx.bezierCurveTo(point[i].c1x, point[i].c1y, point[i].c2x, point[i].c2y, point[i].ex, point[i].ey);
        }
        ctx.stroke();
        if (undefined != is_fill) {
            ctx.fill(); //填充图形 ( 后绘制的图形会覆盖前面的图形, 绘制时注意先后顺序 )
        }
        ctx.draw(true)

    },
    selectColorEvent(event) {
        console.log(event)
        var color = event.currentTarget.dataset.colorValue;
        var colorSelected = event.currentTarget.dataset.color;
        this.setData({
            selectColor: colorSelected,
            lineColor: color
        })
    },
    //将Canvas内容转成 临时图片 --> cb 为回调函数 形参 tempImgPath 为 生成的图片临时路径
    canvasToImg(cb) { //这种写法移动端 出不来
        this.data.ctx.draw(true, () => {
            wx.canvasToTempFilePath({
                canvasId: 'handWriting',
                fileType: 'png',
                quality: 1, //图片质量
                success(res) {
                    cb(res.tempFilePath);
                }
            })
        });
    },
    //上传
    uploadCanvasImg() {
        let that = this;
        wx.canvasToTempFilePath({
            canvasId: 'handWriting',
            fileType: 'png',
            quality: 1, //图片质量
            success(res) {
                let item = that.data.sealObj;
                let sealArr = wx.getStorageSync('sealArr') || that.data.sealArr;
                item.imgsrc = res.tempFilePath;
                item.time = "自定义手写签名";
                item.type = "handWrite"
                sealArr.unshift(item);
                wx.setStorageSync('sealArr', sealArr);
                wx.redirectTo({
                    url: '../sealManage/sealManage?sealArr=' + JSON.stringify(sealArr)
                })
            }
        })
    },
    setCanvasBg(color) {
        this.data.ctx.rect(0, 0, this.data.canvasWidth, this.data.canvasHeight - 4);
        this.data.ctx.setFillStyle(color)
        this.data.ctx.fill() //设置填充
        this.data.ctx.draw() //开画
    },
    // 改变画笔颜色
    changeColor(e) {
        let index = e.currentTarget.dataset.index;
        if (index == 0) {
            this.setData({
                color: true,
                color2: false,
                lineColor: "#1A1A1A"
            })
        } else if (index == 1) {
            this.setData({
                color: false,
                color2: true,
                lineColor: "#FF0000"
            })
        }
    },
    // 控制画笔尺寸的显示和隐藏
    setBrushSize() {
        let flag = this.data.brushSizeShow;
        if (flag == false) {
            this.setData({
                brushSizeShow: true
            })
        } else {
            this.setData({
                brushSizeShow: false
            })
        }
    },

    onChange(e) {
        console.log(e)
        let number = e.detail.title / 10;
        let index = e.detail.index;
        this.setData({
            lineSize: number,
            active: index
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let type = options.type; //获取跳转类型
        let imgsrc = options.imgsrc; //获取图片路径
        console.log(imgsrc)
        this.setData({
            type
        })
        if (type == "selectImage") {
            this.setData({
                writeSignature: false,
                selectImage: true,
                sealSet: false,
                sealModel: false,
                setSealParams: false,
                text: "图片裁剪",
                imgsrc
            })
        } else if (type == "addSignature") {
            this.setData({
                writeSignature: true,
                selectImage: false,
                sealSet: false,
                sealModel: false,
                setSealParams: false,
                text: "添加手写签名",
            })
        } else if (type == "sealModel") {
            this.setData({
                writeSignature: false,
                selectImage: false,
                sealSet: false,
                sealModel: true,
                setSealParams: false,
                text: "生成模板印章",
            })
        } else if (type == "sealSet") {
            this.setData({
                writeSignature: false,
                selectImage: false,
                sealSet: true,
                sealModel: false,
                setSealParams: false,
                text: "印章设置",
            })
        }
        // value
        this.cropper = this.selectComponent("#image-cropper");

        let time = new Date();
        let year = time.getFullYear();
        let month = time.getMonth() + 1;
        let day = time.getDate();
        this.setData({
            value: "自定义印章" + year + "年" + month + "月" + day + "日"
        })

        // 手写签名
        let canvasName = this.data.canvasName
        let ctx = wx.createCanvasContext(canvasName)
        this.setData({
            id: options.id,
            ctx: ctx
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