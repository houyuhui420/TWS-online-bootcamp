'use strict';

function grouping_count(collection) {
    const arr1 = collection.sort((a,b)=>{
  return a-b;
})

let arr2 = collection.filter((value,index) =>{
  return collection.lastIndexOf(value) == index;
})



let arr3 = []
for(let item of arr2){
  let num = arr1.lastIndexOf(item) - arr1.indexOf(item) + 1;
  arr3.push(num);
}

let obj = {};
arr2 =(arr2 + "").split(",");

for(let i = 0;i<arr2.length;i++){
obj[arr2[i]]=arr3[i];
}
return obj;

}
module.exports = grouping_count;
