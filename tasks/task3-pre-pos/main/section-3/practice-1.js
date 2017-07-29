'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  
  const a = collectionA;
  const b = objectB.value;
  a.forEach(function(value,index){
      if(b.indexOf(value.key) >= 0){
        value.count = value.count - 1;
      }
    });
  return a;
}
