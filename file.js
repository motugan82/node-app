const fs = require("fs")
const path = require("path")

let content = "This is an output text for testing purposes"

fs.readFile(path.join(__dirname, "files", "test.txt"), "utf-8", function(err, data){
    console.log(data);
});

fs.writeFile(path.join(__dirname, "files", "testoutput.txt"), content, function(err){
    console.log("File has been written");
});

console.log("Server is running");