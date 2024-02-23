let checkOutDiv = document.getElementById("checkoutDiv");
let checkAmount = document.getElementById("checkOutAmount");
let subCheckOut = document.getElementById("subCheckout");  
let shoppingCart = document.getElementById("shopping-cart");
let checkoutlabel = document.getElementById("checkoutLabel") ;
  
let basket1 = JSON.parse(localStorage.getItem("data")) || [];

let TotalAmount1 = () => {
    if(basket.length !==0)
    {
        let amount = basket.map((x) =>{
        let { item, id} = x;
        let search = shopItemsData.find((y)=> y.id === id) || [];
        return item * search.price;
    }).reduce((x,y)=>x+y, 0);
    // console.log(amount);
    checkAmount.innerHTML = `
    <h4>Total Amount: £ ${amount}.00</h4>
    
    `;
   
    } else return;
};

TotalAmount1();


let generateItems = () => {
    if(basket.length !==0){
       return (checkOutDiv.innerHTML = basket.map((x) => 
       {
        
        let { id, item } = x;
        let search = shopItemsData.find((y)=>y.id === id) || [];
       item * search.price;
        let {img, name, price}= search;
        return`
        
       
    
    
    <div class="checkoutItem" >
       <div class="checkoutItem-name">${name}</div>
       <div class="checkoutItem-price">${price}.00</div>
       <div class="checkoutItem-qty">${item}</div>
       <div class="checkoutItem-subtotal">${item * search.price}.00</div>
    </div>             
    `
       
       })
       .join(""));
    }
   };

   generateItems();

  function checkoutItems() {
    let amount1 = basket1.map((x) =>{
      let { item, id} = x;
      let search = shopItemsData.find((y)=> y.id === id) || [];
      return item ;
      }).reduce((x,y)=>x+y, 0);
      
      function numberItem() {
        if(amount1 <= 1) {
          amount1 = `<small>${amount1} item</small>`
         
        }
        else {
          amount1 = `<small>${amount1} items</small>`
         
        }
      };
      numberItem();
      
      checkoutlabel.innerHTML = `<h2>Checkout(<font color="#219ebc">${amount1}</font>)</h2>`
      subCheckout.innerHTML = `<small>   Total item: ${amount1}</small>`
    };
    
  checkoutItems(); 