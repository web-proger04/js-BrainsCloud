const myName = "Marsel";
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".header__link")
const testBtn = document.getElementById("testBtn");

console.log(testBtn);

function sayHello() {
   let message = "Hello " + myName;
   // console.log(message);
};
sayHello();

function simpleMath(a, b) {
   let result = a + b;
   return result;
};
let sum = simpleMath(111, 222);





// Событие при скролле
window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);

function checkScroll() {
   let scrollPos = window.scrollY;

   if(scrollPos > 0) {
      header.classList.add('red');
   } else {
      header.classList.remove('red');
   };
};





testBtn.addEventListener("click", function() {
   console.log("click");
});


// Пробегаемся по элементам через цикл for чтобы навесить на них обработчик событий
for(let navItem of navLinks) {
   navItem.addEventListener("click", function() {
      console.log(navItem.text);
   });
};