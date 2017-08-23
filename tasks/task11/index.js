

function mesInput(str){                //处理输入字符串
  let mesArray = str.split(",");
  return mesArray;
}

//姓名, 学号, 民族, 班级, 学科: 成绩,
function studentsMes(str){               //解析信息
  let mesArray = mesInput(str);

  function subjectObj (str){
    let subArray = str.split(":")
    let subObj = {};
    subObj.name = subArray[0];
    subObj.value = Number(subArray[1]);
    return subObj;
  }

  let mesObj = {};
  let subject = [];
  mesArray.forEach((item,index) => {
    if(index === 0){
      mesObj.name = item;
    }else if(index === 1){
      mesObj.id = item;
    }else if(index === 2){
      mesObj.nation = item;
    }else if(index === 3){
      mesObj.Class = item;
    }else{
      subject.push(subjectObj(item));
    }
  });
  mesObj.subjects = subject;
  let totalNum = 0;
  subject.forEach((item) => {
    totalNum += item.value;
  });
  mesObj.totalNum = totalNum;
  return mesObj;
}

/*
//选出同一个班的学生
function chooseOneClass(data,Class){
  let oneClass = [];
  data.forEach((value) => {
    if(value.Class === Class){
      oneClass.push(value);
    }
  });
  return oneClass;
}

//一个班的总分
function classTotalNum(oneClass){
  let totalClassNum = 0;
  oneClass.forEach((item) => {
    totalClassNum += item.totalNum;
  });
  return totalClassNum;
}  */

//平均数
function mean(inputData){
  let all = 0;
  for(let item of inputData){
    all += item.totalNum;
  }
  let middle = all/inputData.length;
  return middle;
}

//中位数
function median(inputData){
  let totalArray = inputData.map((value) => {
    return value.totalNum;
  });
  totalArray.sort((a,b) => a-b);
  let result = 0;
  if(totalArray.length%2 === 0){
    result = (totalArray[totalArray.length/2] + totalArray[totalArray.length/2 - 1])/2;
  }else if(totalArray.length%2 !== 0){
    result = totalArray[parseInt(totalArray.length/2)];
  }
  return result;
}

//检查输入信息
function inspextMes(line){
  let ary = mesInput(line);
  for(let item of ary){
    if(!isNaN(Number(ary[1])) && ary.length >=5 && !isNaN(Number(ary[3]))){
      return true;
    }
  }
return false;
}

//检查输入学号
function inspectId(line){
  let ary =mesInput(line);
  for(let item of ary){
    if(!isNaN(Number(item)) && ary.length >= 1 && item.length >=1 && !isNaN(Number(sureId(line))) ){
      return true;
    }
  }
  return false;
}

//确定输入为id
function sureId(line){
  let ary = mesInput(line).join("");
}

//从id 提取信息
function idToMes(idArray,inputData){
  let idMesArray = [];
  for(let i=0;i<idArray.length;i++){
    for(let item of inputData){
      if(idArray[i] === item.id){
        idMesArray.push(item);
      }
    }
  }
  return idMesArray;
}

//打印成绩
function printSubject(subjects){
  function findSubject(name,subjects){
    let soure = 0;
    for(let item of subjects){
      if(name === item.name){
        soure = item.value;
      }
    }
    return soure;
  }

  let subjectsType = "数学|语文|英语|编程";
  subjectsTypeArray = subjectsType.split("|");
  let subjectsStr = '';
  for(let item of subjects){
    subjectsStr += findSubject(item.name,subjects) + "|";
  }
  return subjectsStr;
}
//打印信息
function grade(idMesArray){
  let str = ""
  for(let item of idMesArray){
    str += item.name + "|" + printSubject(item.subjects) + item.totalNum/item.subjects.length + "|" + item.totalNum + "\n";
  }
  return str;
}


let getNumber = require('cli-interact').getNumber;
let question = require('cli-interact').question;
function main(){
  let inputData = [];
  while(true){
    console.log('1.添加学生\n2.生成成绩单\n3.退出');
    let choice = getNumber('请输入你的选择（1～3）：');
    switch(choice){
      case 1:
      let studentsMesInput = question('请输入学生信息（格式：姓名, 学号, 班级, 学科: 成绩, ...），按回车提交：');
      while(true){
        if(inspextMes(studentsMesInput)){
          let studentMesArry = studentsMes(studentsMesInput);
          inputData.push(studentMesArry);
          console.log(inputData);
          console.log("成绩被添加");
          break;
        }
        studentsMesInput = question('请按正确的格式输入要添加学生的信息（格式：姓名, 学号, 班级, 学科: 成绩, ...）按回车提交：');
      }
      break;
      case 2:
      while(true){
        let inputId = question('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
        let idArray = mesInput(inputId);
        if(inspectId(inputId)){
          let idArray = mesInput(inputId);
          console.log("成绩单\n姓名|数学|语文|英语|编程|平均分|总分\n==================================");
          let idToMes = idToMes(idArray,inputData);
          console.log(grade(idToMes) + "\n==================================");
          console.log("全班总分平均数：" + mean(inputData) + "\n全班总分中位数：" + median(inputData));
          break;
        }
        inputId = question('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
      }
      break;
      case 3:
      console.log("<---------------程序退出！--------------->");
      return;
      default:
      console.log("1.添加学生\n2.生成成绩单\n3.退出");
      break;
    }
    //console.log();
  }
}

main();
