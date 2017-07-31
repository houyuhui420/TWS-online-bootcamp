'use strict';

function average_uneven(collection) {

  //在这里写入代码
  const arr = [];
  let num = 0;
  collection.forEach((value) =>{
      if(value%2 != 0){
          arr.push(value);
      }
  });
  for(let item of arr){
      num += item;
  }
  return num/arr.length;
}

module.exports = average_uneven;
