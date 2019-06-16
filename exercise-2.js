function fpb(angka1, angka2) {
    // you can only write your code here!
    faktor1 = [];
    faktor2 = [];

    for (var i=1; i <= angka1; i++){
        if (angka1%i === 0){
            faktor1.push(i)
        }
    }

    for (var i=1; i <= angka2; i++){
        if (angka2%i === 0){
            faktor2.push(i)
        }
    }
    // console.log(faktor2)

    for (var i = faktor1.length-1; i >= 0; i--){
        for (var j = faktor2.length-1; j >= 0; j--){
            // console.log(j)
            // console.log(faktor1[i],faktor2[j])
            if (faktor1[i] === faktor2[j]){
                return faktor1[i]
            }
        }
    }


  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1