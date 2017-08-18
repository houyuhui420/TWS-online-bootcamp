'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    let result = collectionA.filter((value) => {
        return collectionB.indexOf(value) >= 0;
    });
   
    return result;
}
