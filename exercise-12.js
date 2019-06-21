function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    // you can only write your code here!

    // console.log(listBarang[1][0]);
    
    // var amount = shoppers[i].amount;
    var countProfit = [];
    for (var i=0; i<listBarang.length; i++){
      var obj ={
        product: listBarang[i][0],
        shoppers:[],
        leftOver:listBarang[i][2],
        totalProfit:0
      };
      countProfit.push(obj)
    }

    if (shoppers.length === 0){
      countProfit = []
    }

    for (var i=0; i<shoppers.length; i++){
      var product = shoppers[i].product;
        for (var j=0; j<listBarang.length; j++){
          if (product === listBarang[j][0]){
            var leftOver = countProfit[j].leftOver;
            var arrShoppers = countProfit[j].shoppers;
            var totalProfit = countProfit[j].totalProfit;
            // console.log(shoppers[i].amount)
           
            if (leftOver > shoppers[i].amount){
              leftOver -= shoppers[i].amount;
              arrShoppers.push(shoppers[i].name)
              totalProfit = totalProfit + (shoppers[i].amount*listBarang[j][1]);
  
              var obj = {
                product: listBarang[j][0],
                shoppers:arrShoppers,
                leftOver: leftOver,
                totalProfit: totalProfit
              }
              countProfit[j] = obj;
            }
          }
        }
    }

    return countProfit
}
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]

  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]