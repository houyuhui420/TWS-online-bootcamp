const loadAllItems = require('./items.js');
const loadPromotions = require('./promotions.js');

module.exports = function bestCharge(selectedItems) {
   const items = loadAllItems();
   const promotions = loadPromotions();

   const arrt = [];
   selectedItems.forEach((value) => {
     let str = value.substring(0,value.indexOf("x")-1);
     return arrt.push(str);
   });
   const arrn = [];
   selectedItems.forEach((value) => {
     let num = Number(value.substr(value.indexOf("x")+2,1));
     return arrn.push(num);
   });


   function message(arrt){
     let obj = {};
     items.forEach((value) => {
       if(value.id == arrt){
         obj.name = value.name;
         obj.price = value.price;
       }
     });
     return obj;
   }

   let countPrint = '';
   let headPrint = '============= 订餐明细 =============\n';
   let bodyPrint = '-----------------------------------\n' + '使用优惠:\n'
   let totalN = 0;

//优惠菜的价格
   function promoCount(arrt){
     const arrpromo = promotions[1].items;
     const proItems = arrt.filter((value) => {
       return arrpromo.indexOf(value) >= 0;
     });
     const noPro = arrt.filter((value) => {
       return arrpromo.indexOf(value) < 0;
     });

     //查找对应的index
     function findNum (item){
       let n = 0;
       arrt.forEach((value,index) => {
         if(value == item){
           n = index;
         }
       });
       return n;
     }

     let proTotal = 0;
     let noTotal = 0;

     for(let i = 0;i<proItems.length;i++){
       proTotal += message(proItems[i]).price*arrn[findNum(proItems[i])]*0.5;
       countPrint += message(proItems[i]).name + '，';
     }
     countPrint = countPrint.substring(0,countPrint.lastIndexOf('，'));


    for(let j = 0;j<noPro.length;j++){
      noTotal += message(noPro[j]).price*arrn[findNum(noPro[j])]
    }

     let proC = proTotal + noTotal;
     return proC;
     }

   for(let i = 0;i<arrt.length;i++){
      headPrint += message(arrt[i]).name + ' x ' + arrn[i] + ' = ' +message(arrt[i]).price*arrn[i] + '元\n';
      totalN += message(arrt[i]).price*arrn[i];
    }

    if(totalN >= 30){
      let man = totalN - 6;
      let you = promoCount(arrt);
      if(man > you){
        bodyPrint += '指定菜品半价(' + countPrint + ')，省' + (totalN-you) + '元\n' + '-----------------------------------\n总计：' + you + '元\n===================================' ;
       }else{
          bodyPrint += '满30减6元，省6元\n-----------------------------------\n总计：' + man + '元\n===================================';
       }
     }else{
       const proStr = promotions[1].items.toString();
       arrt.forEach((value) => {
         if(proStr.indexOf(value) >= 0){
           let you =promoCount(arrt);
           bodyPrint += '指定菜品半价(' + countPrint + ')，省' + totalN-you + '元\n' + '-----------------------------------\n总计：' + you + '元\n===================================' ;
         }else{
           bodyPrint = '-----------------------------------\n' + '总计：' + totalN + '元\n===================================';
         }
       });
     }

     const resultPrint = headPrint + bodyPrint;
     return resultPrint;
}
