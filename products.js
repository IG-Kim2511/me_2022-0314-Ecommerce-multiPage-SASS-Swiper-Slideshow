
// 🍀js0211. fetch

const url = `https://fakestoreapi.com/products/`;

// 🥒js417, fetched dataProducts + inStock, numberOfUnit, ...object에 추가  
//🥒 addToCart
let dataProducts =[];
console.log(dataProducts);



// cart 
let cart =[];
// let cart = JSON.parse(localStorage.getItem("CART")) || [];


function getFakeStore() {
    fetch(url)
    .then((res) => res.json())
    .then((a_datas) => {

        //🍀js518 loading화면 만들기 👉products.html
        /* 
         10. html 기본.."loading" 메시지
        
         20. fetch 완료하면, innerHTML로 새로운 텍스트 넣음
        */
        document.querySelector('.products .heading').innerHTML =`products `;        
      
        console.log(a_datas);

        /*🍉 ~~~coding~~~ */


        // 🍀js417. fetched datas에 inStock 넣기
        a_datas.forEach((p_data)=>{

            dataProducts.push(
                {
                    ...p_data,
                    inStock:10,                    
                });
        });


        // 🥒js315. 
        // 🦄 실행 코드는 fetch 함수안에 넣어야 에러없이 작동함. 밖에 있으면 fetch data되기전에 그 함수가 실행되서 rendering이 안됨

        renderProducts();
    });    
}
getFakeStore();


//🍀js315. rendering Products

/* 
  🦄onClick 사용  - 🥒js13, addToCart
    JS로 rendering한 element에 variable할 수 없을 때..
    rendering할때, onClick 넣으면 간단함!!    

    🦄innerHTML += 사용 
*/
const boxContainer = document.querySelector('.products .box-container');
        
function renderProducts() {
    dataProducts.forEach((p_product)=>{          
        boxContainer.innerHTML += `
            <div class="box">
                <div class="image">
                    <img src="${p_product.image}"  class="main-img" alt="${p_product.title}">                    
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
                    <div class="price">inventory: ${p_product.inStock}</div>
                    <a class="btn" onclick="addToCart(${p_product.id})">add to cart</a>
                </div>
            </div>
        `  
    });  
}



// 🍀js13. addToCart, 새로운 항목 numberOfUnit...object에 추가하기

/* 
    🦄object....ID 찾아서 전체 목록 불러오기

    object.find((~)=>{~})
*/

/* 
    🦄array 문법... objectArray에 사용 가능함

    Ok : objectArray.find((~)=> ~ === ~ )

    x : objectArray.find((~)=> { ~ === ~ } )
*/

/* 🍄js13
    10. 빈 array ...variable 만듬 ->  let cart 

    20. click한 아이템id !== products.js파일의 id 다르면, cart화면에 추가
    array.find() : array에서 조건에 맞는것을 찾음

    find..찾아낸 object ->  const item
    ...spread operator
    products.js의 오브젝트 목록에 numberOfUnits:1 추가 (첫번째 아이템...)

    30. click한 아이템id === products.js파일의 id 같으면, cart화면에 추가 x... 수량 up & down
    ->🥒js28. changeNumberOfUnits함수 실행

    array.some() : array에 조건에 맞는게 있으면 true..return함
    ->🥒js09. onClick

    40. -> updateCart -> renderCartItems : cart에 아이템 render
*/



// function addToCart(p_id) {

//     // 🍉js13-30
//     if (cart.some((pp_item) => pp_item.id === p_id)) {      

//         alert(`This item is already on the cart`);

//         changeNumberOfUnits('plus',p_id)                    
//     } 
//     // 🍉js13-20
//     else {
//         const item = productsData.find((pp_product) => pp_product.id === p_id);

//         // cart.push(item);
//         cart.push(
//             {
//                 ...item,
//                 numberOfUnits: 1,
//             }
//         );
//     }
//     console.log(cart)
//     updateCart();         
// }

function addToCart(p_id) {
    // 🍉js13-30

    if (cart.some(pp_item => pp_item.id ===p_id)) {

        console.log('already')
        changeNumberOfUnits('plus',p_id);
        
    } else {
        const item = dataProducts.find( pp_product => pp_product.id === p_id);

        // cart.push(item);
        cart.push(
            {
                ...item,
                numberOfUnits : 1,
            }
        )
        
    }
    updateCart();
    
}















// 🍀js13-40.update Cart
// 🍀js45. localStorage. save cart to local  storage
/* 🍄js45. 

    10. localStorage.setItem : update할때마다 local에 저장 

    20. JSON.stringify(): array -> json으로 저장

    30. localStorage.getItem : local에서 pull

    40. json.parse.. : array로 만듬

    50 updadeCart호출... -> renderCartItems에 적용

    60.  || []; 추가 : 첫 화면의 empty array에서도 실행되게...
*/


function updateCart() {
    // renderCartItems();
    // renderSubtotal();

    // js 45-10, js45-20
    localStorage.setItem('CART',cart);
    // localStorage.setItem('CART',JSON.stringify(cart));    
}
updateCart();




// 🍀js28. + - 버튼 클릭한때, change Number Of Units, 
/* 🦄
return { ~ } 형식 가능함

action, id...2개의 parameter 가져와서 사용하는 알고리즘
*/

/* 🍄
10. cart 안의 item.id === onclick으로 넘어온 id가 같다면...함수실행

 10-10. minus + 1보다 큰때에만 적용

 10-20. plus + instock보다 작을때에만 적용

20. cart 안의 item.id !== onclick으로 넘어온 id가 다르면... return : 바뀌지않은 이전 numberOfUnit 넣음. = 그대로 유지 (새 item... cart 칸에 추가)
*/

function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {
      let numberOfUnits = item.numberOfUnits;
  
      if (item.id === id) {
        if (action === "minus" && numberOfUnits > 1) {
          numberOfUnits--;
        } else if (action === "plus" && numberOfUnits < item.instock) {
          numberOfUnits++;          
        }         
        else if (action === "plus" && numberOfUnits === item.instock) {
            alert('out of stock');            
          }  
      }
  
      return {
        ...item,
  
        numberOfUnits: numberOfUnits, /* 🥒js3510. */
      //   numberOfUnits,
      };
    });
  
    updateCart();
  }

  







