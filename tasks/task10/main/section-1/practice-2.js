'use strict';



module.exports = function collectSameElements(collectionA, collectionB) {
    let result = collectionA.filter((value) => {
        return collectionB[0].indexOf(value) >= 0;
    });
   
    return result;
}
