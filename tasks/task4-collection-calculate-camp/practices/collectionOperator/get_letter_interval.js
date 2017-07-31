'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var collection_a = ['a', 'b', 'c', 'd', 'e'];
  var collection_b = ['e', 'd', 'c', 'b', 'a'];
  var arr = [];
  if(number_a < number_b){
      return collection_a;
  }else if (number_a > number_b){
      return collection_b;
  }else if (number_a === number_b) {
      arr.push("e");
      return arr;
  }
}

module.exports = get_letter_interval;
