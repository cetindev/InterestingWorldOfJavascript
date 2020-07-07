function receiptCalculator() {
  var totalCost = 0;
  return function (amount) {
    if (amount < 0) {
      console.error("Yapma hata");
      
    }
    totalCost += amount;
    return totalCost;
  }
}
var receiptAdd = receiptCalculator();
receiptAdd(1);
receiptAdd(2);
receiptAdd(-1);
var finalCost = receiptAdd(10);

console.log("Fİnal Cost: " + finalCost);
