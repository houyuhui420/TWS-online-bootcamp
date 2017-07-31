function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  const arr = new Array();
   collection_a.forEach(function(value,index,array){
      if( collection_b[0].indexOf(array[index]) >= 0){
      arr.push(value);
    }
  });
    
  return arr;
}

module.exports = collect_same_elements;
