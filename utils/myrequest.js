let myrequest = (options)=>{
    let url = "https://api-hmugo-web.itheima.net/api/public/v1" + options.url
    let method = options.method ? options.method : 'GET';
    return new Promise((resolve,reject)=>{
        wx.request({
          ...options,
          url,
          method,
          success(res){
              resolve(res)
          },
          fail(error){
              reject(error)
          }
        })
    })
}

export default myrequest