'use strict';

function get_intersection(collection_a, collection_b) {
    const arr = [];
    for(const item of collection_b){
        if(collection_a.indexOf(item) >= 0){
            arr.push(item);
        }
    }
    return arr;
  //在这里写入代码
}

module.exports = get_intersection;
