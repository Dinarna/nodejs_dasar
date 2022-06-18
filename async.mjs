function samplePromise() {
    return Promise.resolve("Dinar")
}

const name = await samplePromise();
console.info(name);