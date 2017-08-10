function lastNum(num) {
  let lastN = 0;
  for(let i = 1;i<10000;i++){
    let count = i*10;
    if(count >= num){
      lastN = count - num;
      break
    }
  }
  return lastN;
}

const code = ["||:::",":::||","::|:|","::||:",":|::|",":|:|:",":||::","|:::|","|::|:","|:|::"];

function numTransition(nums){
  let num = nums.split("");
  num = num.map(value => ~~value);
  let numCount = 0;
  num.forEach((value) => {
    numCount += value
  });
  num.push(lastNum(numCount));
  let codeStr = "| ";
  num.forEach((value) => {
    codeStr += code[value] + " ";
  });
  codeStr += "|";
  return codeStr;
}

function codeTransition(codeInput){
  codeInput = codeInput.replace(/\s/g,"");
  let codeArray = [];
  for(let i = 1;i<codeInput.length;i += 5){
    let strCode = codeInput.substr(i,5);
    codeArray.push(strCode);
  }
  codeArray = codeArray.slice(0,-1);
  let numArray = [];
  for(let a = 0;a<codeArray.length;a++){
    for(let j = 0;j<code.length;j++){
      if(codeArray[a] == code[j]){
        numArray.push(j)
      }
    }
  }
  numArray = numArray.slice(0,-1);
  const numStr = numArray.join("");
  return numStr;
}

function postTransition(input){
  let output = null;
  if(input.indexOf("|") >= 0){
    output = codeTransition(input);
    if(output.length >= 9){
      let output2 = output + "-";
      return output2;
    }
    return output;
  }else if(input.indexOf("-") >= 0){
    input = input.replace(/-/,"");
    output = numTransition(input);
    return output;
  }else{
    output = numTransition(input);
    return output;
  }
}

module.exports = postTransition;

//以下代码为娱乐时使用
var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);

rl.setPrompt('<---------------邮编编码转换--------------->\n请输入邮编或者编码：');
rl.prompt();
rl.on('line',(line)=>{
  if(line == "e"){
    rl.close();
  }else{
    console.log("结果为：" + postTransition(line) + "\n退出请按E,继续请输入：");
  }
});

rl.on('close',function(){
 console.log('<---------------欢迎下次再来!--------------->');
 process.exit(0);
});
