 var handleClick = function(item) {
     console.log('Hello1 ' + item);
 };
 var a = 4,
     b = 5,
     c = 0;
 let handleClick1 = (item, item2) => {
     c = a * b * item * item2;
 }
 handleClick('item1');
 handleClick1(3, 4);
 console.log(c);
 let array1 = [0, 1, 2, 3];
 let [index1, index2, index3, index4] = array1;
 console.log(index1, index2, index3, index4);
 let person = {
     name: "Thanh",
     age: 19,
     sex: "Male",
     hobby: "tennis",
     date: "12/01/2001"
 }
 let {
     name: index1,
     age: index2,
     sex: index3,
     hobby: index4,
     date: index5
 } = person;
 console.log(index1);
 console.log(index2);
 console.log(index3);
 console.log(index4);
 console.log(index5);
 // Defult parameter
 // Rest parameters
 let functionPeron = (name = "Thanh", age = 19, ...other) => {
     console.log(name);
     console.log(age);
     console.log(other);
 }
 functionPeron("Huong", 50, "Nam", "Cau long", "Nu", "table tennis", "Nhay cao");
 let arrayNumber = [6, 8, 10, 13, 20, 21];
 let myFunction = (value, index, array) => {
     return value > 20;
 }
 var number = arrayNumber.find(myFunction)
 var number2 = arrayNumber.findIndex(myFunction)
 console.log(number);
 console.log(number2);
 for (let i = 0; i < arrayNumber.length; i++) {
     console.log("i = " + i);
     console.log(arrayNumber[i]);
     if (arrayNumber[i] > 9) {
         console.log(arrayNumber[i]);
         break;
     }
 }