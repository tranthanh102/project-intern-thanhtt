// var a = [1, 3, 4, 6, 7, 8, 10, 11];
// var flag = true;

// for (let i = 0; i < a.length; i++) {
//   var flag = true;
//   for (k = 2; k < a[i]; k++) {
//     if (a[i] % k == 0)
//      flag = false;
//   }
//   if (flag) {
//     console.log(a[i]);
//   }
// }
function input(a,b,c){
  inputAB(1,2,4)
  delta = b^2  - (4*a*c);
  if(delta >  0){
    var can = Math.sqrt(delta);
    var x1 = (-b + can)/2*a
    var x2 = (-b - can)/2*a
    console.log("X = " + x1, "X = " + x2)
  }
  else if(delta < 0){
    console.log("Phuong trinh vo nghiem")
  }
  else(can ){
    
  }
};

 

