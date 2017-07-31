'use strict';

function choose_even(collection) {

  //在这里写入代码
  const arr = collection.filter( (value) => {
       return   value%2 === 0;    
  });
  
  return arr;
  

}

module.exports = choose_even;
