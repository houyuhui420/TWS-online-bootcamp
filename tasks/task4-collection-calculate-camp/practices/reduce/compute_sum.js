'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  let num = 0;
  for(let item of collection){
      num += item;
     
  }
  return num;
}

module.exports = calculate_elements_sum;

