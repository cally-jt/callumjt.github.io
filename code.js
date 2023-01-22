function Opennav() {
    document.getElementById("mysidebar").style.width = "100%";
    document.getElementById("open").style.opacity = "0%";
	document.getElementById("close").style.opacity = "100%";
}
    
function Close() {
    document.getElementById("mysidebar").style.width = "0";
    document.getElementById("open").style.opacity = "100%";
	document.getElementById("close").style.opacity = "0%";
}

 //Selectors
 const text = document.querySelector(".text");
 const image = document.querySelector(".image");
 
 window.addEventListener("scroll",appearOnScroll);
 
 
 function appearOnScroll(){
     let textPosition = text.getBoundingClientRect().top ;
     let windowHeight = window.innerHeight/1;
     if(windowHeight>textPosition){
         text.classList.remove("push-left");
         image.classList.remove("push-right");
     }else{
         text.classList.add("push-left");
         image.classList.add("push-right");
     }
 
 } 