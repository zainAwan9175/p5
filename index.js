let cross=document.querySelector(".cross")
let btn=document.querySelector(".btn")
let md=document.querySelector(".md")

btn.addEventListener("click",()=>{
    console.log("hi")
    md.style.display="block"
})
cross.addEventListener("click",()=>{
    console.log("hi")
    md.style.display="none"
})