import PRODUCTS from "../data.json" assert {type:'json'}

let id = window.location.href.slice(-1)
let product = PRODUCTS.filter(item=> item.id == id)

class ProductDetail {
    constructor(){
        this.selected = document.querySelector(".productDeatil__left__selectedProdcut")
        this.products = document.querySelector(".productDetail__left__products")
    }
    
    // byId(product){
    //    let pr = document.createElement("div")
    //    pr.innerHTML = `
    // //    <div class="productImage">
    // //           <img src="../assets/images/product photo.png" alt="">
    // //     </div>
    //    `
    //    this.selected.append(pr)
    // }
    
}

const productDetail = new ProductDetail()
productDetail.byId(product)

