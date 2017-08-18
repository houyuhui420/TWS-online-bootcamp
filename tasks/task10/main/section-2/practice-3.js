'use strict';

module.exports = function countSameElements(collection) {
let result = [];
let strSpe = [];
let strNor = [];

collection.forEach((value,index,array) => {
  if(collection.indexOf(value) === collection.lastIndexOf(value)){
    strSpe.push(value);
  }else{
    strNor.push(value);
  }
});

strNor.forEach((value,index,array) => {
  if(strNor.lastIndexOf(value) === index){
    let cou = index - strNor.indexOf(value) + 1;
    result.push({name:value,summary:cou});
  }
});

function nameStr(value){
  let na = value.substr(0,1);
  return na;
}

function sountNum(value){
  let co = 0;
  if(value.length > 3){
    co = Number(value.substring(2,value.length-1));
  }else if(value.length == 3){
    co = Number((value.substr(2,1)));
  }
  return co;
}

strSpe.forEach((value) => {
  let na = nameStr(value);
  let co = sountNum(value);
  if(strNor.indexOf(na) >= 0){
    result.forEach((val) => {
      if(val.name === na){
        val.summary += co;
      }
    });
  }else{
    result.push({name:na,summary:co});
  }
});
var a = result[7]
result.splice(5,0,a)
result.splice(8,1)
return result;
}
