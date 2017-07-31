'use strict';

function find_last_even(collection) {
  //在这里写入代码
  const arr = collection.filter( (value) => {
    return  value%2 == 0;
  });
  const num = arr[arr.length - 1];
return num;
}

module.exports = find_last_even;
