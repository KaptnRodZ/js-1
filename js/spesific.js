const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get("id")
const div = document.querySelector(".jacket")
const button = document.createElement("button")
async function handleSpesific () {
	try {
        const res = await fetch("https://v2.api.noroff.dev/rainy-days/" + id)
		if(res.ok === false) {
			isError = true
			div.insertAdjacentHTML("afterbegin", `server responded with status code ${product.status}`)
		}
        const json = await res.json()
		const product = json.data
		if(product) {
			div.innerHTML = ""
			div.insertAdjacentElement("afterbegin", button)
			button.innerText = "Buy"
			button.addEventListener("click", () => {
				addJacketToCart(product)
			})
		}

		div.insertAdjacentHTML("afterbegin", `
<div>
<h1 class="spesific-h1">${product.title}</h1>
<img src="${product.image.url}" alt="This is an image of the chosen jackete" />
<div class="spesific-description">${product.description}</h4></div>
<div class="buyprice">
<h3>${product.price}$</h3>
</div>
`)

    } catch (error) {
        console.log("this error is logged from jacket() catch block")
        console.log(error)
    }
}
handleSpesific()






function addJacketToCart (product) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]")
    const productIndex = cart.findIndex(p => p.id === product.id)
    if (productIndex !== -1) {
        cart[productIndex].count += 1
    } else {
        cart.push({ id: product.id, count: 1 })
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    window.location.href = "/cart.html" 
}


