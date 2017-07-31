'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  const arr = [];
  for(let i = 0;i<26;i++){
      arr.push(String.fromCharCode(97+i));
  }
  const result = [];
 collection.forEach( (value,index) => {
     if(value%2 == 0){
    result.push(arr[index])}
 });
  return result;
}

module.exports = even_to_letter;
