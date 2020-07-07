function getGreeeting(name) {
  //JavaScript'de blog spoce yoktur onun yerine function scope vardir buda functionda 
  //  tanımlanmış  içindeki bir değişkene func. içinde heryerden ulaşılabilir 
  if (name === "Jon") {
    greeting = "Hello, Mr.Jon";
  }
  if (name == "Jessica") {
    greeting = "Hello, Ms.Jessica"
  }
  if (true) {
    console.log("JavaScript, function scope old. için değişkene ulaşılabilir");
    console.log("Blok-scope yoktur functional spoce vardır");

  }
  return greeting;
}

console.log(getGreeeting("Jessica"));
