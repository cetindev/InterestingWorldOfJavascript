//JS de class'lardan object oluştumuyoruz ama objectlerden object oluşturuyoruz.Ama sınınflardan da olabilir çalışmam gerekiyor
//Burda aşağıdan yukarıya olaşmak istediğiniz şeylere this. kelimesiyle ulaşabiliriz this yapmazsanız undefined hatası verir.
/* var Mars = function () {
  this.name = "Mars";
  this.getName = function () {
    return this.name;
  }
  this.merhaba = "Dunya";
}
var mars = new Mars();
console.log(mars.getName());
mars.merhaba = "Dunya Nasılsınız ?"//Ama farklı olan bişey var oda func. 
//içinde tanımladık aşağıda ona değer verebiliriz ve değiştirebiliriz bu satırda olduğu gibi
console.log(mars.merhaba); */


var Mars = function () {
  this.name = "Mars";
  this.getName = function () {
    var that = this;
    return function () {
      return that.name;
    }
  }
  this.merhaba = "Dunya";
}
var mars = new Mars();
console.log(mars.getName()());
