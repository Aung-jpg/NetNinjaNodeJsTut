const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {encoding: "utf-8"});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

readStream.on("data", (chunk) => { //listening for data, every time the bucket fills
    console.log("---------------------new chunk---------------------")
    console.log(chunk)
    writeStream.write("\nNEW CHUNK\n")
    writeStream.write(chunk);
})

//pipe is from readable stream to writeable stream
//piping
readStream.pipe(writeStream)


