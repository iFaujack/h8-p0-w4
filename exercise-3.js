function cariMedian(arr) {
    // you can only write your code here!
    var print = 0;

    if (arr.length%2===0){
        var index1 = Math.ceil((arr.length-1)/2)
        var index2 = Math.floor((arr.length-1)/2)
        print = (arr[index1] + arr[index2])/2;
    } else {
        var index1 = Math.ceil((arr.length-1)/2)
        print = arr[index1]
    }

    return print;
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5