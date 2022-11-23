var allproducts=document.querySelectorAll(".list li")
var contant=document.querySelector("#contant")
var btn=document.querySelector("#addtocart")
var totalprice=0;
var div=document.getElementById("#fiyat")

allproducts.forEach(function(item){
item.onclick=function(){
    totalprice=parseInt(item.getAttribute("price"))
    contant.innerHTML+=item.textContent+","
if(contant.innerHTML!=""){
    btn.style.display="block"
   btn.style.color="green"
  
   
}

}

})


    btn.onclick=function(){
        document.getElementById("fiyat").innerHTML+=totalprice}
        