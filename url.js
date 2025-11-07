const url = require('url');

let a='https://www.w3schools.com/nodejs/trynodejs.asp?filename=demo_path_dirname';
let b=url.parse(a,true);

console.log(b.host);
console.log(b.pathname);
console.log(b.search);
console.log(b.protocol);

let qdata=b.query;
console.log(qdata.filename);
