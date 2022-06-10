let myrequest = (options)=>{
    let url = "http://127.0.0.1:2000" + options.url
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