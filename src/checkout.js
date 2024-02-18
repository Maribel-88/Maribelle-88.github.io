let checkOutDiv = document.getElementById("checkoutDiv");
let checkAmount = document.getElementById("checkOutAmount");
let shoppingCart = document.getElementById("shopping-cart");

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
    <h2>Total Amount : £ ${amount}</h2>
    
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
        let {img, name, price}= search;
        return`
        
                   <div class="container text-start">
                       <div class="row row-cols-4">
                            <div class="row>
                                <div class="row" id="itemName">Product name ${name}</div>
                            </div>
                            <div class="row>
                            <div class="col-12" id="itemPrice">Price £ ${price} </div>
                            </div>
                            <div class="row>
                            <div class="col-12" id="totalPrice">Column £ ${item * search.price}</div>
                            </div>
                                
                       </div>
                   </div>
                   
    `
             
       })
       .join(""));
    }
   };

   generateItems();




