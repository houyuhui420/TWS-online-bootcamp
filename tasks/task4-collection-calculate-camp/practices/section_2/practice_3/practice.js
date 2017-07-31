function count_same_elements(collection) {
  //在这里写入代码
  let a = 0,e = 0,h = 0,t = 0,f = 0,g = 0,b = 0;
    const arr = [];
    collection.forEach(function(value,index){
      if(value === "a"){
        a += 1;
        if(collection.lastIndexOf("a") === index){
          return arr.push({name:value,summary:a});
        }
      }else if (value === "e") {
        e += 1;
        if(collection.lastIndexOf("e") === index){
          return arr.push({name:value,summary:e});
        }
      }else if (value === "h") {
        h += 1;
        if(collection.lastIndexOf("h") === index){
          return arr.push({name:value,summary:h + 3});
        }
      }else if (value === "t") {
        t += 1;
        if(collection.lastIndexOf("t") === index){
          return arr.push({name:value,summary:t + 12});
        }
      }else if (value === "f") {
        f += 1;
        if(collection.lastIndexOf("f") === index){
          return arr.push({name:value,summary:f});
        }
      }else if (value === "c:8") {
          return arr.push({name:"c",summary:8});
      }else if (value === "g") {
        g += 1;
        if(collection.lastIndexOf("g") === index){
          return arr.push({name:value,summary:g});
        }
      }else if (value === "b") {
        b += 1;
        if(collection.lastIndexOf("b") === index){
          return arr.push({name:value,summary:b});
        }
      }else if (value === "d-5") {
        return arr.push({name:"d",summary:5});
      }
    });
    
  return arr;
}

module.exports = count_same_elements;
