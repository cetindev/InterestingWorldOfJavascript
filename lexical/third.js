function wrapElements(a) {
  var result = [], i, n;
  for (i = 0, n = a.length; i < n; i++) {
    result[i] = function () { return a[i]; };
  }
  return result;
}
var wrapped = wrapElements([10, 20, 30, 40, 50]);
var f = wrapped[0];
console.log(f());
//Bu kodta wrapElement'e bir dizi gönderiyoruz ve sonra bu dizinin 0.indesine ulaşmak istiyoruz.
//Ama burada for döngüsü döndüğü için son elementi döndürüyor ama bu da indexOfarray yani taşma hatasına denk geliyor.
//Ayrıca dizinin boyutu 5 ama bize undefined hatası verdi yani döngü her döndüğünde referans değeri/yeri değişiyor.
//Çözümü
function wrapElement(a) {
  var result = [], i, n;
  for (i = 0, n = a.length; i < n; i++) {
    (function (j) {
      result[i] = function () {
        return a[j];
      }
    })(i);
  }
  return result;
}
var wrapped = wrapElement([10, 20, 30, 40, 50]);
var f = wrapped[0];
console.log(f());
