'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  const arr = [];
  let num = 0;
  for(let i = 0;i<26;i++){
      arr.push(String.fromCharCode(97+i));
  }
  for(let item of collection){
      num += item;
  }
  const result = arr[Math.ceil(num/collection.length)-1];
  return result;
  
}

module.exports = average_to_letter;

