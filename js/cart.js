import jackets from "./jackets.js";
const cartList = document.querySelector("section")
const totalDiv = document.querySelector(".total")

const productsInCart = []

document.addEventListener("DOMContentLoaded", async () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    const main = document.querySelector("main")
    let sum = 0;
    if (!cart.length) {
        main.innerHTML = "<p>Din handlekurv er tom</p>"
        return
    }
    const jacketsApi = await jackets()
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const jacketMatch = jacketsApi.find((p) => p.id === item.id)
        jacketMatch.count = item.count
        productsInCart.push(jacketMatch)

        // ADD TO SUM VARIABLE
        sum += jacketMatch.price * item.count
    }
    productsInCart.forEach(element => {
        insertJacketsInCart(element)
    });

    totalDiv.textContent = "total: " +  sum + "$"
});

function insertJacketsInCart (product) {
    cartList.insertAdjacentHTML("afterbegin", `
    <div class="item-div">
        <img  src=${product.image.url} />
        <div>
            <h2>${product.title}</h2> 
            <p>${product.price} </p>
            <p>count: ${product.count} </p>
        </div>
    </div>
    `)
}