'use strict';
var is_exist_element = function(collection,element){
    const arr = [];
    let result = null;
    collection.forEach((value,index) => {
        if(index%2 == 0){
            arr.push(value);
        }
    });
   
        if(arr.indexOf(element) >= 0){
            result = true;
        }else if(arr.indexOf(element) < 0 ){
            result = false;
        }
    
    return result;
};
module.exports = is_exist_element;
