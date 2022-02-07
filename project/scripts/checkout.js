function submit(){
    console.log("Neeraj")
    alert("Your order is accepted")
    setTimeout(function(){
      alert("Your Order is being cooked")
    },3000)
    setTimeout(function(){
      alert("Your order is ready")
    },8000)
    setTimeout(function(){
      alert("order out for delivery")
    },10000)
    setTimeout(function(){
      alert("Order delivered")
      window.open("index.html")
    },12000)
  }