'use strict';



module.exports = function countSameElements(collection) {
   let result = [];
   collection.forEach((value,index,array) => {
   if(value !== array[index+1]){
    let cou = index - collection.indexOf(value) + 1;
    result.push({key:value,count:cou});
  }
});
    return result;
}
