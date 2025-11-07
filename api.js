//const sm=require('./sum');
//const smnew=require('./divide');
//let c=sm.total(10,20);
//let d=sm.minus(10,20);
//let e=smnew.divide(10,20);
//console.log("sum is"+c);
//console.log("minus is"+d);
//console.log("divide is"+e);
//let arr=sm.array;
//console.log("array is"+arr);
const st=require('./student') // Assuming 'student' is a local module in the same directory
console.log(st.arr);
console.log(__dirname); // __dirname is a global variable for the current module's directory, not a property of 'st'