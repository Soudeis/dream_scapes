let a=false;

 function view(){
    const heade=document.getElementById("header");
    const side=document.getElementById('side_bar');
    const main=document.getElementById("main");
    const footer=document.getElementById('footer');
    if(a==false){
    
    side.style.right="10px";
    heade.style.filter="blur(5px)";
    main.style.filter="blur(5px)";
    footer.style.filter="blur(5px)";
    a=true;
 }
    else{      
        side.style.right="-300px"; 
        heade.style.filter="none"; 
        main.style.filter="none";
        footer.style.filter="none";
        a=false;
    }
    
}
document.addEventListener("click",function(){
    const menu=document.getElementById("m");
    const heade=document.getElementById("header");
    const side=document.getElementById('side_bar');
    const main=document.getElementById("main");
const footer=document.getElementById('footer');
if(!menu.contains(event.target) && a==true && !side.contains(event.target)){
    
    side.style.right="-300px";
    heade.style.filter="none";
    heade.style.filter="none"; 
    main.style.filter="none";
    footer.style.filter="none";
    a=false;
 }
   
   
})

