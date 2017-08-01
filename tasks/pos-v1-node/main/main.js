
module.exports = function printInventory(inputs){
    
    function loadAllItems() {
    return [
        {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
        },
        {
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.50
        }
    ];
}

function loadPromotions() {
return [
    {
        type: 'BUY_TWO_GET_ONE_FREE',
        barcodes: [
            'ITEM000000',
            'ITEM000001',
            'ITEM000005'
        ]
    }
];
}
    
    
    
  var arrt = inputs.filter((value,index) => {
    return inputs.lastIndexOf(value) == index;
  });
  var arrn = [];
  arrt.forEach((value) => {
    let n = inputs.lastIndexOf(value) - inputs.indexOf(value) + 1;
    arrn.push(n);
  });
  for(let i = 0;i<arrt.length;i++){
    if(arrt[i].indexOf("-") >= 0){
    arrn[i] = Number(arrt[i].substr(arrt[i].indexOf("-")+1,1));
    arrt[i] = arrt[i].replace(/-[0-9]/,"");
    }
  }

  const allItems = loadAllItems();
  const promotions = loadPromotions();

  //提取message
  function message(arrt){
    const mesg = {};
    for(let item of allItems){
      if(item.barcode === arrt){
        mesg.name = item.name;
        mesg.nuit = item.unit;
        mesg.price = item.price;
      }
    }
    return mesg;
  }

  //每一类商品的总价
  function countN(arrt,arrn){
    let cn = 0;
    if(promotions[0].barcodes.indexOf(arrt) >= 0 && arrn >2){
       cn = (arrn-1)*message(arrt).price;
       return cn.toFixed(2);
    }else{
      cn = arrn*message(arrt).price;
      return cn.toFixed(2);
    }
  }

  let printHead = '***<没钱赚商店>购物清单***\n';
  let total = 0;
  for(let i = 0;i<arrt.length;i++){
    let t = arrt[i];
    let n = arrn[i];
    total += Number(countN(t,n));
    printHead += '名称：' + message(t).name + '，数量：' + n + message(t).nuit + '，单价：' + message(t).price.toFixed(2) +  '(元)，小计：'+ countN(t,n) + '(元)\n'
  }

  let printbody ='----------------------\n' +
            '挥泪赠送商品：\n';
  let save = 0;
  for(let item of arrt){
    if(promotions[0].barcodes.indexOf(item) >= 0){
      save += message(item).price;
      printbody += '名称：' + message(item).name + '，数量：1' + message(item).nuit + '\n';
    }
  }

  const printresult = printHead + printbody + '----------------------\n' + '总计：' + total.toFixed(2) + '(元)\n' + '节省：' + save.toFixed(2) + '(元)\n' + '**********************'
  console.log(printresult);
}