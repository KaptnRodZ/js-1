import jackets from "./jackets.js"
const main = document.querySelector(".jackets-element")

    const products = await jackets()
    const menJackets = products.filter((jacket) => jacket.gender === "Male")

    if(menJackets) {
      main.innerHTML = ""
    }
    for (let i = 0; i < menJackets.length; i++) {
        const jacket = menJackets[i];
        main.insertAdjacentHTML("afterbegin", 
        `
        <div class="jacket">
        <img src=${jacket.image.url} alt=${jacket.description} />
        <div class="buyprice">
          <h3>${jacket.price} $</h3>
          <button type="button"><a href="jacket.html?id=${jacket.id}">buy</a></button>
        </div>
      </div>
        `
)
}