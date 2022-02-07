var cart=JSON.parse(localStorage.getItem("CardFood"))||[];
creatmenu(cart);
function creatmenu(foods){
  var men=document.getElementById("cart");
  men.innerHTML="";
  var total=document.getElementById("total");
  var t=0;
  foods.forEach(function (food){let div=document.createElement("div");

  let img=document.createElement("img");
  img.style="width:90%;hight:200px;"
  img.src=food.strMealThumb;

  let nam=document.createElement("h3");
  nam.innerHTML=food.strMeal;

  let price=document.createElement("h3");
  price.innerHTML='Price:INR'+Math.ceil(food.idMeal/800);
  t+=Math.ceil(food.idMeal/800);
  total.innerHTML="Total Cart Value: INR"+t
  let but=document.createElement("button");
  but.innerText="remove To Card";
  but.onclick=
  function() {
    RemoveToCard(food);
  }

    div.append(img,nam,price,but);
    men.append(div)
  })
}
function RemoveToCard(food){
  for(let i=0;i<cart.length;i++)
  {
    if(cart[i].idMeal==food.idMeal)
    {
      cart.splice(i,1);
      creatmenu(cart);
      localStorage.setItem("CardFood",JSON.stringify(cart))
      break;
    }
  }
}
