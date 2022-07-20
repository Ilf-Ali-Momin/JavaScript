var email = true;
var facebook = false;
var google = false;

/*if (email){
  console.log("Login Success");
}
if (facebook){
  console.log("Login Failed")

}
if(google) {
  console.log("Login failed");
  
}
*/
if (email || facebook || google){
  console.log("Login Success");
}