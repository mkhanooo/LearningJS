const fs = require("fs");

fs.writeFile("notes.txt", "This file was  created by Node.js ", (err) => {
    if (err) {
        console.log("Error in writing file");
    } else {
        console.log("File created successfully");
    }
})

// we pass function as an argument - a callback function  it calls when task completed.
// the callback has an argument which tell us operation is success or not.