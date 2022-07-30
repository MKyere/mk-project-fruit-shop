const fruits = {
      apple: 'Description: Granny smith apples',
      pear: 'Description: Mixed variety pears',
      oragne: 'Description: Valencia oranges'
    };
    
    let basket = {
    };
    
    let basketTotal = 0;
    
      const fruitNames = Object.keys(fruits);
      const fruitDescriptions = Object.values(fruits);
      let listItems = ``;
        for (let i = 0; i < fruitNames.length; i++) {
          listItems += `<dt>${fruitNames[i]}</dt>`;
          listItems += `<dd>${fruitDescriptions[i]} <button type="button" onclick="addToBasket('${fruitNames[i]}')">Add to Basket</button></dd>`;
        }
        
        document.getElementById("shop-list").innerHTML = listItems;
    
    function addToBasket(fruit) {
      if(basket[fruit]){
        basket[fruit]++;
      }else {
        basket[fruit] = 1;
      }
      updateBasket(fruit);
    }
    
    function removeOneFromBasket(fruit) {
      if(basket[fruit]){
        basket[fruit]--;
      }
      updateBasket(fruit);
    }
    
    function removeFromBasket(fruit) {
      delete basket[fruit];
      updateBasket(fruit);
    }
    
    function updateBasket(fruit) {
      const basketItems = Object.keys(basket);
      const basketCount = Object.values(basket);
    
      let basketList = ``;
      for (let i = 0; i < basketItems.length; i++) {
        basketList += `<li>${basketItems[i]} <button type="button" onclick="removeOneFromBasket('${basketItems[i]}')">-</button> ${basketCount[i]} <button type="button" onclick="addToBasket('${basketItems[i]}')">+</button> <button type="button" onclick="removeFromBasket('${basketItems[i]}')">Remove ${basketItems[i]}s</button> </li>`;
      }
    
      basketTotal = basketCount.reduce(function(acc, val) { return acc + val; }, 0);
      
      if (basketTotal < 1) {
        document.getElementById("your-basket").innerHTML = "";
        document.getElementById("total-items").innerHTML = "Basket Empty";
      } else{
        document.getElementById("your-basket").innerHTML = basketList;
        document.getElementById("total-items").innerHTML = `Total Items: ${basketTotal}`;
      }
    }