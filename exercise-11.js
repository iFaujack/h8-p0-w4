function shoppingTime(memberId, money) {
    // you can only write your code here!
    var obj = {}
    var listPurchased = [];
    if (memberId == null || memberId == ''){
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    } else {
        if (money < 50000){
            return "Mohon maaf, uang tidak cukup"
        } else {
            var changeMoney = money;
            if (changeMoney >= 1500000){
                changeMoney -= 1500000;
                listPurchased.push("Sepatu Stacattu")
            }

            if(changeMoney >= 500000){
                changeMoney -= 500000;
                listPurchased.push("Baju Zoro")
            }

            if(changeMoney >= 250000){
                changeMoney -= 250000;
                listPurchased.push("Baju H&N")
            }

            if(changeMoney >= 175000){
                changeMoney -= 175000;
                listPurchased.push("Sweater Uniklooh")
            }
            
            if (changeMoney >= 50000){
                changeMoney -= 50000;
                listPurchased.push('Casing Handphone')
            }

            obj = {
                memberId: memberId,
                money: money,
                listPurchased: listPurchased,
                changeMoney: changeMoney
            }

            return obj;
        }
    }
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja