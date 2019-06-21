function checkAB(num) {
    // you can only write your code here!
    num = num.split("");
    var print = false;
    for (var i=0; i<num.length; i++){
        if (num[i]==="a"||num[i]==="b"){
            // console.log(num[i],i)
            for(var j=i+i; j<num.length; j++){
                
                if (num[i] === "a"){
                    // console.log("Check A",num[j],j)
                    if (num[j] === "b"){
                        if (j-i >= 3){
                            // console.log("Berhasil check A di",i,j)
                            print = true;
                        } else {
                            j = num.length;
                        }
                    } 
                } else if (num[i] === "b"){
                    // console.log("Check B",num[j],j)
                    if (num[j] === "a"){
                        if (j-i >= 3){
                        // console.log("Berhasil check B di",i,j)
                        print = true;
                        } else {
                            j = num.length;
                        }
                    } 
                }
            }
        }
    }

    return print;

  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false