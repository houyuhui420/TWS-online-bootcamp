'use strict';
var calculate_average = function(collection){
    const arr = [];
    let num = 0;
    collection.forEach((value) =>{
        if(value%2 == 0){
            arr.push(value);
        }
    });
    for(let item of arr){
        num += item;
    }
    return num/arr.length;

};
module.exports = calculate_average;
