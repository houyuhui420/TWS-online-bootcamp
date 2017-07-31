'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  const arr = [];
  for(const item of collection){
      if(arr.indexOf(item) === -1){
          arr.push(item);
      }
  }
  return arr;

}

module.exports = choose_no_repeat_number;
