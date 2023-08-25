var bxMenu=document.getElementById("bx-menu");
var navbar=document.querySelector(".navbar");
let bool=true;
bxMenu.onclick=()=>{
    bool=!bool;
    bxMenu.classList.toggle("bx-x");
    if(bool===false){
        navbar.classList.toggle(navbar.style.display="block")
    }
    else{
        navbar.classList.toggle(navbar.style.display="none")
    }
};
const sr=ScrollReveal({
    distance:"65px",
    duration:2600,
    delay:450,
    reset:true
});
sr.reveal(".main-body",{delay:200, origin:'top'});
sr.reveal(".icon",{delay:200, origin:'left'});
sr.reveal(".scrool",{delay:200, origin:'right'});
 