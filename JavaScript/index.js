
// modal for cart

let checkout = document.getElementById("checkout");
let checkdiv = document.getElementById("check-div");
let flag3 = false;
const checkoutHandler = () => {
    if (!flag3) {
        checkout.classList.add("translate-x-full");
        checkout.classList.remove("translate-x-0");
        setTimeout(function () {
            checkdiv.classList.add("hidden");
        }, 1000);
        flag3 = true;
    } else {
        setTimeout(function () {
            checkout.classList.remove("translate-x-full");
            checkout.classList.add("translate-x-0");
        }, 1000);
        checkdiv.classList.remove("hidden");
        flag3 = false;
    }
};

// hamburger

var burgerMenu = document.querySelector(".hamburgur")
var drawer = document.querySelector(".drawer")
var close = document.querySelector(".close")


burgerMenu.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("open")
    drawer.classList.remove("fadeOutAnimation");
    drawer.classList.add("fadeInAnimation");
})

close.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("close")
    drawer.classList.remove("fadeInAnimation");
    drawer.classList.add("fadeOutAnimation");
})