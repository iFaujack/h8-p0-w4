function changeMe(arr) {
    // you can only write your code here!
    var obj = {}
    for (var i=0; i<arr.length; i++){
        var key = `${i+1}. ${arr[i][0]} ${arr[i][1]} :`
        var firstName = arr[i][0];
        var lastName = arr[i][1];
        var gender = arr[i][2];
        var age = 0
        if (arr[i][3] == null){
            age = 'Invalid Birth Year'
        } else {
            age = 0;
            age = 2019 - arr[i][3]
        }
        obj[key] = {
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            age: age
        }
        console.log(key+" :",obj[key])
    }
    
    if (arr.length === 0 ){
        console.log("")
    }
    
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']
    ]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""