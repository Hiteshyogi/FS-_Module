// Synchronous File in {Create, Read, Delete}

const fs = require('fs');
fs.writeFileSync("first.txt", "Hello")  // Create a File txt

const data = fs.readFileSync("first.txt", 'Utf8') // File in Read a data
console.log(data)

fs.unlinkSync('first.txt');                      // File in delete
console.log("File deleted successfully!")


// Asynchronous File in {Create, Read, Delete}
const fs = require('fs');
fs.writeFile('Async.txt', 'Hello, Async World!', (err) => {
    if (err) 
        throw err;
    console.log("File written successfully!")
})

fs.readFile('Async.txt', 'utf-8', (err, data) => {
    if (err)
        throw err;
    console.log(data)
})

console.log("This runs immediately.");

fs.unlink('Async.txt', (err) => {
    if (err)
        throw err;
    console.log("File deleted successfullly!")
})



