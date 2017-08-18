'use strict';



module.exports = function collectSameElements(collectionA, objectB) {
    let result = [];
    collectionA.map((value) => {
       if(objectB.value.indexOf(value.key) >= 0){
           result.push(value.key)
       }
    });
    return result;
}
