const buffer = Buffer.from("Dinar Nur Aziz")

console.info(buffer.toString("base64"))
console.info(buffer.toString("hex"))


const buffer2 = Buffer.from("RGluYXIgTnVyIEF6aXo=","base64url")

console.info(buffer2.toString("utf8"))