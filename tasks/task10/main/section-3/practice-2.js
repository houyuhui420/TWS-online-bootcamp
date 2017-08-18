'use strict';



module.exports = function createUpdatedCollection(collectionA, objectB) {
collectionA.forEach((value) => {
  if(objectB.value.indexOf(value.key) >=0){
    value.count =  value.count - parseInt(value.count / 3);;
  }
});
    return collectionA;
}
