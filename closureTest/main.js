/* function merhaba() {
  var selamlama = "Merhaba";
  function dunya() {
    var dunyayiSelamla = selamlama + " Dunya";
    console.log(dunyayiSelamla);
  }
  dunya();
}
merhaba(); */

function merhaba() {
  var selamlama = "Merhaba";
  var dunyayiSelamlaFonksiyonu = function () {
    var dunyayiSelamla = selamlama + "Dunya";
    console.log(dunyayiSelamla);
  }
  return dunyayiSelamlaFonksiyonu;
}

var selamlamaSonucu = merhaba();
selamlamaSonucu();