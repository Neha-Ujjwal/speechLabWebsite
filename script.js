const header=document.querySelector("nav");
const sectionOne=document.querySelector("#carouselExampleIndicators");
const sectionOneOptions={};
const sectionOneObserver=new IntersectionObserver(function(
  entries,
  sectionOneObserver
){
  entries.forEach(entry=>{
    console.log(entry.target);
    if(!entry.isIntersecting){
      header.classList.add("navbar-scrolled");
    }
    else{
      header.classList.remove("navbar-scrolled")
    }
  })
},sectionOneOptions);

sectionOneObserver.observe(sectionOne);