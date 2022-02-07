  let url='https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian';
  var cart=JSON.parse(localStorage.getItem("CardFood"))||[];
  var count=document.getElementById("count");
countCart(cart)
function countCart(cart){
    console.log(cart)
  let h3=document.createElement("h3");
  h3.innerHTML="Item in Cart:"+cart.length;
  count.innerHTML="" 
  count.append(h3)
}
  async function getfood(){
    try{
    let response= await geturl(url);
    let foods=response.meals;
    console.log(foods);
    creatmenu(foods)
    }
    catch(err){
      console.log(err);
    }
  }
  async function geturl(url){
    return fetch(url)
    .then(function (res){
      return res.json();
    })
    .then(function (res){
      return res;
    })
    .catch(function (err){
      console.log(err);
    })
  }
  getfood()
  function creatmenu(foods){
    var men=document.getElementById("menu");
    men.innerHTML="";

    foods.forEach(function (food){let div=document.createElement("div");

    let img=document.createElement("img");
    img.style="width:90%;hight:200px;"
    img.src=food.strMealThumb;

    let nam=document.createElement("h3");
    nam.innerHTML=food.strMeal;

    let price=document.createElement("h3");
    price.innerHTML='Price:INR'+Math.ceil(food.idMeal/800);

    let but=document.createElement("button");
    but.innerText="Add To Card";
    but.onclick=
    function() {
      AddToCard(food);
    }

      div.append(img,nam,price,but);
      men.append(div)
    })
  }
  function AddToCard(food){
      console.log(food)
    cart.push(food);
    localStorage.setItem("CardFood",JSON.stringify(cart));
    countCart(cart)
  }