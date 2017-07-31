'use strict';
var even_asc_odd_desc = function(collection){
    let a = [];
    let b = [];
    for(let item of collection){
        if(item%2 == 0){
            a.push(item);
        }else{
            b.push(item);
        }
    }
    
    a = a.sort((a,b) => {
        return a-b;
    });
    b = b.sort((a,b) =>{
        return b-a;
    });
    
    for(let item of b){
        a.push(item);
    }
    
    return a;

};
module.exports = even_asc_odd_desc;
