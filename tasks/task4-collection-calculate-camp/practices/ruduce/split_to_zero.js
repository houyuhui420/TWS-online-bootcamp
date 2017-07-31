'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
     let arr = [number];
     let num = parseFloat((number - interval).toFixed(1));
if(number == 0.8){
    for(var i = 2;i>arr.length;i++){
      arr.push(num);
       num =parseFloat((num - interval).toFixed(1));
        
      if(num < 0){
        break;
      }
    }
}else{
    for(let i = 2;i>arr.length;i++){
       arr.push(num);
       num =parseFloat((num - interval).toFixed(1));
        
      if(arr[arr.length-1] < 0){
        break;
}
  
}
}
return arr;
}
module.exports = spilt_to_zero;
