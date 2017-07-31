'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  let num = 0;
  const arr = collection.map( (value) => {
      return value*3+2;
  });
  for(let item of arr){
      num += item;
  }
  return num;

}

module.exports = hybrid_operation;

