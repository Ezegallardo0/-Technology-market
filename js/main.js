let burguer= document.getElementById("check")
let modal= document.getElementById("modal")
burguer.addEventListener("change",function(){
    if(burguer.checked){
        modal.style.visibility="visible";
    }else{
        modal.style.visibility="hidden"
    }
})
