import fs from "fs";

const writer = fs.createWriteStream("target.log")
writer.write("Dinar\n")
writer.write("Nur\n")
writer.write("Aziz\n")
writer.close();

const reader = fs.createReadStream("target.log")
reader.on("data",(data) => {
    console.info((data.toString()))
    reader.close()
})