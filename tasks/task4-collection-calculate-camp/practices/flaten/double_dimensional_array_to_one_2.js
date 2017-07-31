'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var arr = (collection + "").split(",").map( value => Number(value));
  var arr2 = [];
  for(var item of arr){
      if(arr2.indexOf(item) == -1){
          arr2.push(item);
      }
  }
  return arr2;

}

module.exports = double_to_one;
