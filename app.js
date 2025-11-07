const fs=require('fs').promises;

fs.appendFile('data.txt','Hello World','utf8')
.then(()=>{
    console.log('appended data created successfully');
})
.catch((err)=>{
    console.error('error appending data:',err);
});

async function writeFileExample(){
    try{
        await fs.writeFile('mydata.txt','Hello World','utf8');
        console.log('File created successfully');
    }catch(err){
        console.error('error creating file:',err);
    }
}
writeFileExample();

async function deleteFile() {
  try {
    // Attempt to delete 'mydata.txt'.
    // The fs.access check is removed as it's an anti-pattern due to race conditions.
    // fs.unlink will throw 'ENOENT' if the file doesn't exist, which is handled below.
    await fs.unlink('mydata.txt');
    console.log('File deleted successfully');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File does not exist');
    } else {
      console.error('Error deleting file:', err);
    }
  }
}

deleteFile();

// The original call to `readFileExample()` was undefined, so it's removed.
// A new `readFileExample` function is added using `fs.promises.readFile`
// for consistency with other async file operations in this script.

async function readFileExample() {
  try {
    // Attempt to read 'mydata.txt', which is created by writeFileExample()
    const data = await fs.readFile('mydata.txt', 'utf8');
    console.log('Content of mydata.txt:', data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File "mydata.txt" does not exist, cannot read.');
    } else {
      console.error('Error reading file:', err);
    }
  }
}

readFileExample();