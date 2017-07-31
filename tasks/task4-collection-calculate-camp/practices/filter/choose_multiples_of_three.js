'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  var arr = collection.filter( (value) => {
      return value%3 === 0;
  });
  return arr;
}

module.exports = choose_multiples_of_three;
