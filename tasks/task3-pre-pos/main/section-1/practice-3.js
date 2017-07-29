'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  const arr = new Array();
  const collection = objectB.value;
  
  collectionA.forEach(function(value,index,array){
    if( collection.indexOf(array[index]) >= 0){
    arr.push(array[index])
    }
  });
  
  return arr;
}
