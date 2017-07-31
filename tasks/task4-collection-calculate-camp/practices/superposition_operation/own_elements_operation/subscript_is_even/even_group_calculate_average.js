'use strict';
var even_group_calculate_average = function(collection){
   const result = [];
   const arr1 = [];
   collection.forEach((value,index) => {
      if((index+1)%2 === 0){
        arr1.push(value);
      }
   });

   const arr2 = arr1.filter((value) => {
     return value%2 == 0;
   })

   if(arr2[0] == null){
     result.push(0);
   }else{
     const arr3 = [];
     arr2.forEach((value) => {
       if(value%2 == 0){
         return arr3.push(value);
       }
     });

     const a = [],b = [],c = [];
     for(let item of arr3){
       if(item<10){
         a.push(item);
       }else if(item>9 && item<100){
         b.push(item);
       }else{
         c.push(item);
       }
     }

     function count(arr){
       let num = 0;
       for(let item of arr){
         num += item;
       }
       num = num/arr.length;
       return num;
     }

   if(a[0] == null && b[0] == null){
       let num = 0;
       for(let item of c){
         num += item;
       }
       num = num/c.length;
       result.push(num);
     }else{
       result.push(count(a));
       result.push(count(b));
       result.push(count(c));
     }


   }

return result;

};
module.exports = even_group_calculate_average;
