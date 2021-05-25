const translate=  document.querySelectorAll(".translate");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const img_container = document.querySelector(".imgcontainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let section_height = section.offsetHeight;

window.addEventListener('scroll',() =>{
    let scroll  = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    
    translate.forEach(element =>{
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`; 
    })

    opacity.forEach(element =>{
        element.style.opacity = scroll / (sectionY.top + section_height); 
    })

shadow.style.height = `${scroll * 0.5 +300}px`;
content.style.transform = `translateY(${scroll / (section_height + sectionY.top)*50-50}px)`;
img_container.style.transform = `translateY(${scroll / (section_height + sectionY.top)*-50+50}px)`;
border.style.width = `${scroll/ (sectionY.top + section_height)*30}%`; 
    
})