function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var minDigit = `${angka}*${angka}`.length;
    for (var i=1; i <= angka; i++){
        for (var j=angka; j > 0; j--){
            if ( (i*j) === angka){
                var temp = `${i}*${j}`.length
                if (temp < minDigit){
                    minDigit = temp;
                }
            }
        }
    }
    return minDigit-1;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2