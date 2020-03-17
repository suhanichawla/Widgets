
var update=document.querySelector("#price");
var btn=document.querySelector("#btn");

fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then((res)=>{
  if(res.status!=200){
    return;
  }
  return res.text();
}).then((dat)=>{
  var data=JSON.parse(dat);
  console.log(data);
  var text=document.createTextNode(data.bpi.USD.rate_float+"USD")
  update.appendChild(text);
})
btn.addEventListener("click",function(){ 
  var curr=document.querySelector('input[name="currency"]:checked').value;
  console.log(curr);
  update.innerHTML="";
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then((res)=>{
  if(res.status!=200){
    return;
  }
  return res.text();
}).then((dat)=>{
  var data=JSON.parse(dat);
   console.log(data);
    if(curr=="GBP"){
      var text=document.createTextNode(data.bpi.GBP.rate_float+"GBP")
    }else if(curr=="EUR"){
      var text=document.createTextNode(data.bpi.EUR.rate_float+"EUR")
    }else{
      var text=document.createTextNode(data.bpi.USD.rate_float+"USD")
    } 
  update.appendChild(text);
})           
})
