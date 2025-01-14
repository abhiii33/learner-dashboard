const closebtn= document.querySelector(".close-icon");
const openbtn= document.querySelector(".open-icon");
const sidebar= document.querySelector(".sidebar");
const  sidemenutext =document.querySelectorAll(".sidemenu-text");

const footer = document.querySelector('footer');
const main = document.querySelector('main')
closebtn.addEventListener("click", ()=>{
    main.classList.add("close");
    sidebar.classList.add("sideclose");
       footer.classList.add("footerclose");
       closebtn.classList.add("hidden");
       openbtn.classList.add("show")
    sidemenutext.forEach((item) => {
        item.classList.add("hidden");
       
 });
   
      
})
openbtn.addEventListener("click", ()=>{
    main.classList.remove("close");
    openbtn.classList.remove("show")
    closebtn.classList.remove("hidden");
    sidebar.classList.remove("sideclose");
       footer.classList.remove("footerclose");
    sidemenutext.forEach((item) => {
        item.classList.remove("hidden");
       
 });
   
      
})
const array = ["a", "fd"]