'use strict';

function compute_chain_median(collection) {
  //在这里写入代码

let arr = collection.split("->");
arr.forEach((value,index) => {
  const item = parseInt(value);
  arr[index] = item;
});
arr = arr.sort((a,b) => {return a-b});
const num =(arr[(arr.length/2)-1] + arr[arr.length/2])/2;
return num;
}

module.exports = compute_chain_median;
