import jackets from "./jackets.js"
const main = document.querySelector(".jackets-element")

    const products = await jackets()
    const femaleJackets = products.filter((jacket) => jacket.gender === "Female")
    if(femaleJackets) {
      main.innerHTML = ""
    }

    for (let i = 0; i < femaleJackets.length; i++) {
        const jacket = femaleJackets[i];
        main.insertAdjacentHTML("afterbegin", 
        `
        <div class="jacket">
        <img src=${jacket.image.url} alt=${jacket.description} />
        <div class="buyprice">
          <h3>${jacket.price} $</h3>
          <a href="jacket.html?id=${jacket.id}">buy</a>
        </div>
      </div>
        `
)
    }
