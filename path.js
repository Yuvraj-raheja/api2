const path= require('path');
const filename = path.basename('/uv.txt');
console.log(filename);

const filenameWithoutExt = path.basename('/uv.txt', '.txt');
console.log(filenameWithoutExt);