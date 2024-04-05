async function jacket (id) {
    try {
        const res = await fetch("https://v2.api.noroff.dev/rainy-days/" + id)
        if(res.ok === false) return res
        const json = await res.json()
        return json.data
    } catch (error) {
        console.log("this error is logged from jacket() catch block")
        console.log(error)
    }
}

export default jacket