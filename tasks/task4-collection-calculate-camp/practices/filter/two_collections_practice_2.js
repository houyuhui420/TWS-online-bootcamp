'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var arr = collection_a.filter( (value) => {
      return collection_b.indexOf(value) < 0;
  });
  return arr;
}

module.exports = choose_no_common_elements;
