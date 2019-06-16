var num = "a".charCodeAt(0);
console.log(num)


function ubahHuruf(kata) {
    // you can only write your code here!
    splitWord = kata.split("");
    for (var i=0; i < splitWord.length; i++){
        var code = splitWord[i].charCodeAt(0);
        if (code === 122){
            code = 97;
        } else {
            code = code +1;
        }
        var newChar = String.fromCharCode(code);
        splitWord[i]=newChar;
    }
    return splitWord.join("");
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu