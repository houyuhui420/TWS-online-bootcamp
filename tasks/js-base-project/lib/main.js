function beerSong (n) {
  const str1 = 'Take one down and pass it around, ';
  const str2 = ' bottles of beer on the wall.';
  const str3 = ' bottles of beer.';
  const str4 = ' bottles of beer on the wall, ';
  let str5 = '';

  for(let i = n;i>0;i--){
    str5 += i + str4 + i + str3 + '\n' + str1 + (i-1) + str2 + '\n';
    }

  str5 = str5.replace(/ 1 bottles /g,' 1 bottle ');
  str5 = str5.replace(/ 0 bottles /g,' no more bottles ');
  str5 = str5.replace(/1 bottles of beer on the wall, 1 bottle/g,'1 bottle of beer on the wall, 1 bottle');

  const resultStr = str5 + 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.'

 return resultStr;
}

module.exports = beerSong;

var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);

rl.setPrompt('<---------------输入不同的数字会出现不同的歌词--------------->\n请输入一个数字：');
rl.prompt();
rl.on('line',(line)=>{
  if(line == "e"){
    rl.close();
  }else{
    console.log("歌词为：" + beerSong(line) + "\n退出请按E,继续请输入数字：");
  }
});

rl.on('close',function(){
 console.log('<---------------欢迎下次再来!--------------->');
 process.exit(0);
});
<<<<<<< HEAD
=======

>>>>>>> 9f3cc562fc5ae9b4b8dbbe4ad38fa14e740f7b1e
