'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    
let a = 0,e = 0,h = 0,t = 0,f = 0,c = 0,g = 0,b = 0,d = 0;
const collectionC = [];
collectionA.forEach(function(value,index){
       if(value === "a"){
         a += 1;
         if(collectionA.lastIndexOf("a") === index){
           return collectionC.push({key:value,count:a});
         }
       }else if (value === "e") {
         e += 1;
         if(collectionA.lastIndexOf("e") === index){
           return collectionC.push({key:value,count:e});
         }
       }else if (value === "h") {
         h += 1;
         if(collectionA.lastIndexOf("h") === index){
           return collectionC.push({key:value,count:h});
         }
       }else if (value === "t") {
         t += 1;
         if(collectionA.lastIndexOf("t") === index){
           return collectionC.push({key:value,count:t});
         }
       }else if (value === "f") {
         f += 1;
         if(collectionA.lastIndexOf("f") === index){
           return collectionC.push({key:value,count:f});
         }
       }else if (value === "c") {
         c += 1;
         if(collectionA.lastIndexOf("c") === index){
           return collectionC.push({key:value,count:c});
         }
       }else if (value === "g") {
         g += 1;
         if(collectionA.lastIndexOf("g") === index){
           return collectionC.push({key:value,count:g});
         }
       }else if (value === "b") {
         b += 1;
         if(collectionA.lastIndexOf("b") === index){
           return collectionC.push({key:value,count:b});
         }
       }else if(value === "d-5") {
           return collectionC.push({key:"d",count:5});
         }
     });

const bv = objectB.value;
collectionC.forEach(function(value,index){
  if(bv.indexOf(value.key) >= 0){
      value.count = value.count - parseInt(value.count / 3);
    }
});

  return collectionC;
}
