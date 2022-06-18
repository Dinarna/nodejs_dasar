function samplePromise() {
    return Promise.resolve("Dinar")
}

async function run() {
    const name = await  samplePromise();
    console.info(name)

}
run();