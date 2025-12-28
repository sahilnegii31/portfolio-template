const btn=document.getElementById("btn");
const bd=document.body;

btn.addEventListener(("click"),()=>{
    bd.classList.toggle("light");
    console.log("button was clicked");
    if (bd.classList.contains("light")){
        btn.innerHTML="Dark Mode";
    }
    else {
        btn.innerHTML="Light mode";
    }
});