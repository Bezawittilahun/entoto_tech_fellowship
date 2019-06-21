function iswether(num){
var weather=num ;
if (weather >="20" ) {
    console.log("sunny!");
} else if (weather <="20") {
    console.log("rainy!");
} else if (weather =="10 && 20") {
    console.log("nice!");
}  else {
    console.log("Not a valiweathertype!");
}
}
iswether("13")