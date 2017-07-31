'use strict';

function get_integer_interval(number_a, number_b) {
 var collection_a = [1, 2, 3, 4, 5];
  var collection_b = [5, 4, 3, 2, 1];
  var arr = [];
  if(number_a < number_b){
      return collection_a;
  }else if (number_a > number_b){
      return collection_b;
  }else if (number_a === number_b) {
      arr.push(number_a);
      return arr;
  }
 
}

module.exports = get_integer_interval;

