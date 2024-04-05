async function jackets () {
try {
    const jackets = await fetch("https://v2.api.noroff.dev/rainy-days")
    const json = await jackets.json()
    return json.data
} catch (error) {
    console.log("this error is logged from jackets() catch block")
    console.log(error)
}
}

export default jackets