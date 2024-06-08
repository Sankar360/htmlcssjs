var sidenavsymbol=document.querySelector(".sidenavsymbol")
var headersymbol=document.querySelector(".headersymbol")
var sidenavbar=document.querySelector(".sidenavbar")


headersymbol.addEventListener("click",function(){
    sidenavbar.style.left="0"
})

sidenavsymbol.addEventListener("click",function(){
    sidenavbar.style.left="-50%"
})

var a=document.querySelector(".product-section")
var b=document.getElementById("search")
var c=a.querySelectorAll("div")

b.addEventListener("keyup",function(){
    var entervalue=event.target.value.toUpperCase()

    for (count=0;count<c.length;count=count+1){
        var productname=c[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(entervalue)<0){
            c[count].style.display="none"
        }
        else{
            c[count].style.display="block"
        }
    }
})