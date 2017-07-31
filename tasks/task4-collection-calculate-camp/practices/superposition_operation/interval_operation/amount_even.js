'use strict';

function amount_even(collection) {

  //在这里写入代码
  const arr = [];
  let num = 0;
  collection.forEach((value) =>{
      if(value%2 == 0){
          arr.push(value);
      }
  });
  for(let item of arr){
      num += item;
  }
  return num;
}

module.exports = amount_even;
