'use strict';

function compute_average(collection) {
  //在这里写入代码
  let num = 0;
  for(let item of collection){
      num += item
  }
  return num/collection.length;
}

module.exports = compute_average;

