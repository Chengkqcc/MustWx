let getDate = date =>{
  var seperator1 = "-";
  var seperator2 = ":";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var hours = date.getHours()
  hours = hours >= 10 ? hours : "0" + hours
  var minutes = date.getMinutes()
  minutes = minutes >= 10 ? minutes : "0" + minutes
  var seconds = date.getSeconds();
  seconds = seconds >= 10 ? seconds : "0" + seconds
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " + hours + seperator2 + minutes + seperator2 + seconds;
  return currentdate;
}
export default getDate