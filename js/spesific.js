import jacket from "./jacket.js"

const div = document.querySelector(".jacket")

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id")
const product = await jacket(id)
if(product) {
    div.innerHTML = ""
}
if(product.ok !== true) {
    div.insertAdjacentHTML("afterbegin", `server responded with status code ${product.status}
`)
}

div.insertAdjacentHTML("afterbegin", `
<div>
<h1 class="spesific-h1">${product.title}</h1>
<img src="${product.image.url}" alt="This is an image of the chosen jackete" />
<div class="spesific-description">${product.description}</h4></div>
<div class="buyprice">
<h3>${product.price}$</h3>
<button type="button"><a href="/cart.html">buy</a></button>
</div>
`)


