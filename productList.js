
let  PRODUCTS = [
    {
        description:'Your Skin But Better CC+ Cream with SPF50 12ml',
        quality:'new'
    },
    {
        description:'Your Skin But Better CC+ Cream with SPF50 12ml',
        quality:'new'
    },
    {
        description:'Your Skin But Better CC+ Cream with SPF50 12ml',
        quality:'new'
    },
    {
        description:'Your Skin But Better CC+ Cream with SPF50 12ml',
        quality:'new'
    },
    {
        description:'Your Skin But Better CC+ Cream with SPF50 12ml',
        quality:'new'
    },
    {
        description:'Your Skin But Better CC+ Cream with SPF50 12ml',
        quality:'new'
    },
    {
        description:'Your Skin But Better CC+ Cream with SPF50 12ml',
        quality:'old'
    },
    {
        description:'Your Skin But Better CC+ Cream with SPF50 12ml',
        quality:'old'
    },
    {
        description:'Your Skin But Better CC+ Cream with SPF50 12ml',
        quality:'old'
    },
    {
        description:'Your Skin But Better CC+ Cream with SPF50 12ml',
        quality:'old'
    },
    {
        description:'Your Skin But Better CC+ Cream with SPF50 12ml',
        quality:'old'
    },
    {
        description:'Your Skin But Better CC+ Cream with SPF50 12ml',
        quality:'old'
    },
    {
        description:'Your Skin But Better CC+ Cream with SPF50 12ml',
        quality:'old'
    },
    {
        description:'Your Skin But Better CC+ Cream with SPF50 12ml',
        quality:'old'
    },
    {
        description:'Your Skin But Better CC+ Cream with SPF50 12ml',
        quality:'old'
    },
    {
        description:'Your Skin But Better CC+ Cream with SPF50 12ml',
        quality:'old'
    },
    {
        description:'Your Skin But Better CC+ Cream with SPF50 12ml',
        quality:'old'
    },
    {
        description:'Your Skin But Better CC+ Cream with SPF50 12ml',
        quality:'old'
    },
    {
        description:'Your Skin But Better CC+ Cream with SPF50 12ml',
        quality:'old'
    },
    {
        description:'Your Skin But Better CC+ Cream with SPF50 12ml',
        quality:'old'
    },
]

let loadBtn = document.querySelector("#loadMoreBtn")
let filterSelect = document.querySelector("#select")
class ProducList {
    constructor(){
        this.productContainer = document.querySelector('.productContainerSecond')
    }

    renderList(num1,num2){
        let fragment = document.createDocumentFragment()
        PRODUCTS.slice(num1,num2).forEach(item=>{
            let productCard = document.createElement("div")
            productCard.classList.add("productCard")
            productCard.innerHTML = 
            `<div class="productImage">
              <span  class="type">New</span>
              <img src="./assets/images/product photo.png" alt="">
              <button>+ quick shop</button>
            </div>
            <div class="productInfo">
              <p class="shortDecription">${item.description} </p>
              <span class="price">$28.00</span>
            </div>
            `
            fragment.append(productCard)
        })
        this.productContainer.append(fragment)
    }


    filterList(e,num1,num2){
        let fragment = document.createDocumentFragment()
        PRODUCTS.filter(item=> item.quality === e).slice(num1,num2).forEach(item=>{
            let productCard = document.createElement("div")
            productCard.classList.add("productCard")
            productCard.innerHTML = 
            `<div class="productImage">
              <span  class="type">New</span>
              <img src="./assets/images/product photo.png" alt="">
              <button>+ quick shop</button>
            </div>
            <div class="productInfo">
              <p class="shortDecription">${item.description} </p>
              <span class="price">$28.00</span>
            </div>
            `
            fragment.append(productCard)
        })
        this.productContainer.append(fragment)
    }
}
loadBtn.addEventListener("click",()=>{
    productList.renderList(0,21)
})
filterSelect.addEventListener("change",(e)=> {
   productList.filterList(e.target.value)
})
let productList = new ProducList()
productList.renderList(0,9)