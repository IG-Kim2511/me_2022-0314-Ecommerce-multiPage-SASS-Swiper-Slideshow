document.querySelector('.heading').innerHTML =`hi ig`;


// 🍀js0211. fetch

const url = `https://fakestoreapi.com/products/`;
let dataProductOver100 = [];

let dataProductAll =[];

// let loading = false;

console.log(dataProductAll)

getFakeStore();
function getFakeStore() {
    fetch(url)
    .then((res) => res.json())
    .then((a_datas) => {

        // loading=true;

        console.log(a_datas);
        /*🍉 ~~~coding~~~ */
     
        // dataProductAll.push(a_datas);
        // console.log(dataProductAll[0])
        
        // a_datas.forEach((a_data) => {
        //     if (a_data.price > 100) {
        //         dataProductOver100.push(a_data)            
        //     }  
        // });
        
        // console.log(dataProductOver100)

        
        const boxContainer = document.querySelector('.products .box-container');

        // console.log(dataProductAll)


        renderProducts();
        function renderProducts() {
            a_datas.forEach((p_product)=>{        
                boxContainer.innerHTML += `    
                    <div class="box">
                        <div class="icons">
                            <button href="#" class="fas fa-heart"></button>             
                            <button href="#" class="fas fa-shopping-cart"  onclick="addToCart(${p_product.id})"></button>
                        </div>
                        <img src="${p_product.imgSrc}" alt="">
                        <div class="content">
                            <h3>${p_product.name}</h3>
                            <div class="price">$${p_product.price} <span>$60</span></div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                            <div class="price">inventory: ${p_product.instock}</div>
                            <a class="btn" onclick="addToCart(${p_product.id})">add to cart</a>
                        </div>
                    </div>
                `  
            });  
        }

    });    
}




//🍀 js0237. rendering data products

/* 
  dataProducts  : products.js 에서 가져온 variable
    innerHTML += 사용
  
  🦄onClick 사용  - 🥒js13, addToCart
    JS로 rendering한 element에 variable할 수 없을 때..
    rendering할때, onClick 넣으면 간단함!!    
*/
            


// loading
// window.addEventListener('load', () => {    
//     if (loading) {
//         boxContainer.innerHTML =`loading`;
//         console.log('loading')
//     }else{
//         renderProducts();
//     }
// });






