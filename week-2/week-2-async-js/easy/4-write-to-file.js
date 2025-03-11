// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs')

fs.readFile("./easy/a.txt", "utf-8", function(data){
    data = "Changed the text in a.txt file"
    fs.writeFile("./easy/a.txt",data, function(){
        console.log("data changed succesfully")
    })
})