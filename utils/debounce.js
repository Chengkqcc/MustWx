function debounce(ff,wait) {
    var timer = null
    return function() {
    clearTimeout(timer) 
    timer = setTimeout(function(){
         ff()
     },wait)
   }
}
export default debounce