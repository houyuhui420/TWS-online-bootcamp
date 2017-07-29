'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
   const arr = new Array();
   collectionA.forEach(function(value,index,array){
      if( collectionB[0].indexOf(array[index]) >= 0){
      arr.push(value);
    }
  });
    
  return arr;
};
