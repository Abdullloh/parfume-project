const productContainer = [...document.querySelectorAll('.productContainer')]
const nextButton = [...document.querySelectorAll('.nxt-button')]
const prevButton = [...document.querySelectorAll('.prev-button')]


productContainer.forEach((item,i)=> {
    let containerDimension = item.getBoundingClientRect()
    let containerWidth = containerDimension.width

    nextButton[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth
        console.log('clicked',productContainer);
    })
    prevButton[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth
    })
})