'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
let a= collection;  
var result = [];
a = a.sort((a,b) => {
  return  a-b;
})

for(var i=0;i<a.length;i+=3){
   result.push(a.slice(i,i+3));
}

for(let item of result){
  if(item.length ==3){
    const n = item.shift();
    item.push(n);
  }
}

result = (result + "").split(",");
result = result.map((value) =>{
  return Number(value);
});
return result;
}
module.exports = rank_by_two_large_one_small;
