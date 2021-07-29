const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".next-btn");
const secNextBtn = document.querySelector(".next2");
const firstBackBtn = document.querySelector(".back2");
const secBackBtn = document.querySelector(".back3");

firstNextBtn.addEventListener('click',function(e){
    e.preventDefault();
    slidePage.style.marginLeft = '-25%';
});

secNextBtn.addEventListener('click',function(e){
    e.preventDefault();
    slidePage.style.marginLeft = '-50%';
});

firstBackBtn.addEventListener('click',function(e){
    e.preventDefault();
    slidePage.style.marginLeft = '0%';
});

secBackBtn.addEventListener('click',function(e){
    e.preventDefault();
    slidePage.style.marginLeft = '-25%';
});