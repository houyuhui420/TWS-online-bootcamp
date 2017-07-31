function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  const arr = new Array();
  const collection = object_b.value;
  
  collection_a.forEach(function(value,index,array){
    if( collection.indexOf(array[index].key) >= 0){
    arr.push(array[index].key)
    }
  });
  
  return arr;
}

module.exports = collect_same_elements;
