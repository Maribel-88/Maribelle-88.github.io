let checkOutDiv = document.getElementById("checkoutDiv");
let checkAmount = document.getElementById("checkOutAmount");
let subCheckOut = document.getElementById("subCheckout");  
let shoppingCart = document.getElementById("shopping-cart");
    console.log(shoppingCart);
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
    <h5>Total Amount: £ ${amount}.00</h5>
    
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
        
                
  <table class="table">
  
    <tr>
      <th scope="col">Product name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Subtotal</th>
    </tr>
 
  <tbody>
    <tr >
      <td >${name}</td>
      <td >${price}</td>
      <td >${item}</td>
      <td>${item * search.price}</td>
      

      
    </tr>
  </tbody>
</table>
                   
    `
       
       })
       .join(""));
    }
   };

   generateItems();

  function checkoutItems() {
    let amount1 = basket.map((x) =>{
      let { item, id} = x;
      let search = shopItemsData.find((y)=> y.id === id) || [];
      return item ;
      }).reduce((x,y)=>x+y, 0);

      subCheckOut.innerHTML = `Total Item(s): (${amount1})`
    };
    
  checkoutItems(); 





