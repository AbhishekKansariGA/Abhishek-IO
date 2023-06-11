const searchQuery = document.querySelector(".searchQuery");

const searchIcon = document.querySelector(".searchIcon");

const xSmallSearchQuery = document.querySelector(".x-SmallSearchQuery");

const menuClicked = document.querySelector(".MenuClicked");

const menuIcon = document.querySelector(".MenuIcon");

const xLargeMenu = document.querySelector(".x-LargeMenu");

const heroSection = document.querySelectorAll(".heroSection");

const menuAnchor = document.querySelectorAll(".MenuAnchor");


searchIcon.addEventListener("click",()=>{
  xSmallSearchQuery.style.display="block";
  searchIcon.style.display="none";
  searchQuery.style.display="block";
});

xSmallSearchQuery.addEventListener("click",()=>{
  searchIcon.style.display="block";
  xSmallSearchQuery.style.display="none";
  searchQuery.style.display="none";
})

menuIcon.addEventListener("click",()=>{
  menuClicked.style.display="block";
 for (var i = 0; i < heroSection.length; i++) {
   heroSection[i].style.display="none";
 }
})

xLargeMenu.addEventListener("click",()=>{
  menuClicked.style.display="none";
  for (var i = 0; i < heroSection.length; i++) {
   heroSection[i].style.display="flex";
 }
})

