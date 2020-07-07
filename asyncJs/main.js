console.log("1");
setTimeout(function () {
  console.log("2");
}, 2000);
setTimeout(function () {
  console.log("3");
}, 1000);
console.log("4");
//async != parallel, NavigatorConcurrentHardware
//non-blocking -- concurtnet
