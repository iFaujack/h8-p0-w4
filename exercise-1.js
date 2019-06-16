function angkaPrima(angka) {
    // you can only write your code here!
    if (angka > 1){
        var print = true;
        for (var i=2; i < angka; i++){
            // console.log(`${angka}%${i}`)
            if (angka%i === 0){
                i = angka;
                print = false;
            } else {
                print = true;
            }
        }
    } else {
        print = false;
    }
    return print;
    
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false