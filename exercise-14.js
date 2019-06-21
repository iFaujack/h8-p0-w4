function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var print = [];

    for (var i=0; i<arrPenumpang.length; i++){
        
        var penumpang = arrPenumpang[i][0];
        var naikDari = arrPenumpang[i][1];
        var tujuan = arrPenumpang[i][2];
        var bayar = (rute.indexOf(tujuan)-rute.indexOf(naikDari))*2000;

        var obj = {
            penumpang: penumpang,
            naikDari: naikDari,
            tujuan: tujuan,
            bayar: bayar
        };
        print.push(obj)
    }

    return print;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]