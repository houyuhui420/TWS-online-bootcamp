'use strict';

function collect_last_element(collection) {
  let lastNum = 0;
  collection.forEach( (value,index) => {
      if (index === collection.length - 1){
      lastNum = value;
    }
  });
  return lastNum;
}

module.exports = collect_last_element;
