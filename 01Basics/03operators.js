var num1 = 10;
var num2 = 40;

console.log(num1 + num2);
console.log(num1 * num2);

var sellingPrice = 80;
var listingPrice = 100;
var discountPercentage =((listingPrice - sellingPrice) / listingPrice) *100;
console.log(`DISCOUNT PERCENTAGE IS:${discountPercentage}`);

displayDiscountPercentage = Math.round(discountPercentage);
console.log(displayDiscountPercentage + "% off"); 