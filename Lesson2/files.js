const fs = require('fs'); //file system

// //reading
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// console.log("last line");


// //writing
// fs.writeFile("./docs/blog2.txt", "hello, world", () => {
//     console.log("file was written");
// })


// //directories
if (!fs.existsSync("./assets")) {
    fs.mkdir("./assets", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("folder created");
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
    })
    console.log("folder deleted");
}

// //deleting
if (fs.existsSync("./docs/deleteMe.txt")) {
    fs.unlink('./docs/deleteMe.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("file deleted");
    })
}