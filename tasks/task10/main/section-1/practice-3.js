'use strict';



module.exports = function collectSameElements(collectionA, objectB) {
   let result = collectionA.filter((value) => {
        return objectB.value.indexOf(value) >= 0;
    });
    return result;
}
