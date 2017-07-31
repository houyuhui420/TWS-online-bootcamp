'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
   for(var i = 0;i<collection_a.length;i++){
       if(collection_a[i] === collection_b[i]){
           return true;
       }
   }
}

module.exports = compare_collections;


