//Footer date
const year=document.querySelector(".copyright span");
year.textContent=new Date().getFullYear();


const toggle=document.querySelector(".nav-btn");
const list=document.querySelector(".nav-links");
const navLink= document.querySelectorAll(".nav-link");
const bar=document.querySelectorAll(".bar");

toggle.addEventListener("click",function(){
    list.classList.toggle("show-list");
    toggle.classList.toggle("change");
});

navLink.forEach(function(item){ 
        item.addEventListener("click",function(){
        list.classList.remove("show-list");
        toggle.classList.remove("change");
})});
// scroll up behavior
const scrollUp=document.querySelector('.hero');
const target=document.querySelector('.intro');
const options={
    rootMargin:"-20px 0px 0px 0px"
};
const observer=new IntersectionObserver(function(entries,observer){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            scrollUp.classList.remove('hide-element');
        }else{
            scrollUp.classList.add('hide-element');
        }
    })

}, options);
observer.observe(target);
