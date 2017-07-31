'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  const arr = collection_a.filter((value) => {
     return collection_b.indexOf(value) >= 0;
  });
  
  return arr;
  
}

module.exports = choose_common_elements;
