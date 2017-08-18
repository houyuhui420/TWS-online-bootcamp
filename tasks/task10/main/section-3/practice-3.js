'use strict';


module.exports = function createUpdatedCollection(collectionA, objectB) {
   let result = [];
   collectionA.forEach((value,index,array) => {
   if(value !== array[index+1]){
    let cou = index - collectionA.indexOf(value) + 1;
    result.push({key:value,count:cou});
  }
});

   result.forEach((value) => {
  if(objectB.value.indexOf(value.key) >=0){
    value.count =  value.count - parseInt(value.count / 3);;
  }
});

return result;
}
