'use strict';

function get_integer_interval_2(number_a, number_b) {
     var collection_a = [2, 4, 6, 8, 10];
  var collection_b = [10, 8, 6, 4, 2];
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

module.exports = get_integer_interval_2;
