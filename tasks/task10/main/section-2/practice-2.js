'use strict';



module.exports = function countSameElements(collection) {
let result = [];
collection.forEach((value,index,array) => {
  if(value !== array[index+1] && index !== array.length - 1){
    let cou = index - collection.indexOf(value) + 1;
    result.push({key:value,count:cou});
  }else if(index === array.length - 1){
    let str = value.substr(0,1);
    let num = Number(value.substr(2,1));
    result.push({key:str,count:num});
  }
});
return result;
}
