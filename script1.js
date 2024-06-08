var btn=document.querySelector(".button1")
var input1=document.getElementById("input1")
var input2=document.getElementById("input2")

btn.addEventListener("click",function(){
    var a=input1.value
    var b=input2.value
    if ( a == "sankar" && b == "1234"){
        window.location="home.html"
    }else{
        alert("please check password & username")
    }
})