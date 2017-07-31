'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
const arr = [];
for(const itema of collection_a){
    for(const itemb of collection_b){
        if (itema%itemb == 0){
            arr.push(itema);
        }
    }
}
return arr;
}

module.exports = choose_divisible_integer;
