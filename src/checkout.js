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
        
                  
  <table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Product name</th>
      <th scope="col">Price</th>
      <th scope="col">Column £</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <th scope="row" id="itemName">${name}</th>
      <td >${price}</td>
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




