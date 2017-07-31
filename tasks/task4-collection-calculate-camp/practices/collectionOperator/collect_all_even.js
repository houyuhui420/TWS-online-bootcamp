'use strict';

function collect_all_even(collection) {
  const arr = [];
  for(const item of collection){
      if(item%2 === 0){
          arr.push(item);
      }
  }
  return arr;
}

module.exports = collect_all_even;
