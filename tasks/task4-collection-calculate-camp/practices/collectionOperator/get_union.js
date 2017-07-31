'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  const arr = collection_a;
  for(const item of collection_b){
      if(arr.indexOf(item) < 0){
          arr.push(item);
      }
  }
  return arr;
}

module.exports = get_union;

