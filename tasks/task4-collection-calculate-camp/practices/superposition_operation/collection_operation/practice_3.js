'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  const arr = [];
  let num = 0;
  collection.forEach((value) => {
      if(value%2 != 0){
         arr.push(value*3+5);
      }
  });
  for(let item of arr){
      num += item;
  }
  return num;
}

module.exports = hybrid_operation_to_uneven;

