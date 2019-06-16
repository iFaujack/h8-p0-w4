function cariModus(arr) {
    // you can only write your code here!
    print = [];
    for (var i=0; i<arr.length; i++){
        var count = 1;
        for (var j=i+1; j<arr.length; j++){
            if (arr[i] === arr[j]){
                count ++;
                arr.splice(j,1)
                j--;
            }
        }
        print.push([arr[i],count])
    }

        console.log(print)
        var max = [[0,1]];
        if (print.length === 1){
            return -1;
        } else {
            for (var i=0; i<print.length; i++){
                if(print[i][1] > max [0][1]){
                    max[0][0] = print[i][0];
                    max[0][1] = print[i][1];
                }
            }

            if (max[0][1] === 1){
                return -1;
            } else {
                return max[0][0]
            }
            
        }
    
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1