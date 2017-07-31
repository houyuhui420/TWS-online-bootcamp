'use strict';

function compute_median(collection) {
  //在这里写入代码
  let num = 0;
  if (collection.length%2 === 0){
      const arr = collection.sort((a,b) => {
          return a-b;
      });
      num =(arr[(arr.length/2)-1] + arr[arr.length/2])/2;
      
  }else{
      num = collection[Math.floor((collection.length/2))];
  }
  return num;
}

module.exports = compute_median;


