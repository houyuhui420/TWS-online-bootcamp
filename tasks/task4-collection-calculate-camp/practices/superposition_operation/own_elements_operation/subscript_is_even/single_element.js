'use strict';
var single_element = function(collection){
    const arr = [];
    collection.forEach((value,index) => {
        if(index%2 != 0){
            arr.push(value);
        }
    });
    
    let result = []
    arr.forEach((value) => {
        if(arr.indexOf(value) == arr.lastIndexOf(value)){
            result.push(value);
        }        
    });
    
    if(arr.toString() == result.toString){
        result = [];
        return result;
    }else{
        return result;
    }


};
module.exports = single_element;
