'use strict';
var calculate_median = function(collection){
    const arr = [];
    let num = 0;
    collection.forEach( (value) => {
        if(value%2 == 0){
            arr.push(value);
        }
    });
    if(arr.length%2 != 0){
        num = arr[Math.floor(arr.length/2)];
    }else if(arr.length%2 == 0){
        num = (arr[(arr.length/2)-1]+arr[arr.length/2])/2;
    }
    return num;

};
module.exports = calculate_median;
