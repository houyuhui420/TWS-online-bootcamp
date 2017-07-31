function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
   const a = collection_a;
  const b = object_b.value;
  a.forEach(function(value,index){
      if(b.indexOf(value.key) >= 0){
        value.count = value.count - parseInt(value.count / 3);
      }
    });
  return a;
}

module.exports = create_updated_collection;
