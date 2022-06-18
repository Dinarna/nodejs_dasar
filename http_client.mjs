import https from "https"

const url = "https://hookb.in/9XxyGnoLVBtWKedWM2zB"
const request = https.request(url,{
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept": "application/json"
    }
},(response)=>{
    response.addListener("data",(data)=>{
        console.info(`Receive: ${data.toString()}`)
    })
    })
const body = JSON.stringify({
    firstName : "Dinar",
    lastName : "Nur Aziz"
})

request.write(body)
request.end()