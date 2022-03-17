
// 🍀js0211. fetch

const url = `https://fakestoreapi.com/products/`;
let dataProductOver100 = [];

let dataProductAll =[];

// 🥒js417
let cart =[];

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
        // console.log(dataProductAll)



        // 🍀js417. fetched datas에 inStock  넣기
        a_datas.forEach((p_data)=>{

            cart.push(
                {
                    ...p_data,
                    inStock:10,                    
                });
        });

        console.log(cart);





        let boxContainer = document.querySelector('.products .box-container');
        
        function renderProducts() {
            a_datas.forEach((p_product)=>{        
                boxContainer.innerHTML += `    
                   

                    <div class="box">
                        <div class="image">
                            <img src="${p_product.image}"  class="main-img" alt="">                    
                            <div class="icons">
                                <a href="#" class="fas fa-shopping-cart" onclick="addToCart(${p_product.id})"></a>
                                <a href="#" class="fas fa-heart"></a>
                            </div>
                        </div>
                        <div class="content">
                            <h3>${p_product.title}</h3>
                            <div class="price">$${p_product.price}</div>
                            
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <div class="price">inventory: ${p_product.instock}</div>
                            <a class="btn" onclick="addToCart(${p_product.id})">add to cart</a>
                        </div>
                    </div>


                `  
            });  
        }
        renderProducts();

        
        function myFunction() {
            
          }

    });    
}




// function addToCart(p_id) {    
//     // 🍉js13-30
//     // if (cart.some((pp_item) => pp_item.id === p_id)) {      
  
//     //     alert(`This item is already on the cart`);

//     //     changeNumberOfUnits('plus',p_id)                    
//     // } 
//     // 🍉js13-20
//     // else {
//         const item = productsData.find((pp_product) => pp_product.id === p_id);

//         // cart.push(item);
//         cart.push(
//             {
//                 ...item,
//                 numberOfUnits: 1,
//             }
//         );
//     // }

// }




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
//         boxContainer.innerHTML =`<div>loading</div>`;
//         console.log('loading')
//     }else{
//         renderProducts();
//     }
// });









