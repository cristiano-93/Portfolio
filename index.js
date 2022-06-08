// function to warn that the feature is not yet properly implemented
function alertFunction() {
  alert("This is not yet properly implemented");
}
// Restting the contact form
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

//Go back up button script:
mybutton = document.querySelector(".myBtn");
console.log(mybutton);
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0;
}

// script for the popup projects

const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", (e) => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

// hamburger menu
function openDropdown() {
  var nl = document.getElementById("nav_links");
  var hb = document.getElementById("hamBtn");
  var state = [
    '<img src="assets/icons8-menu1.png" style="height: 22px;" alt="open menu">',
    '<img src="assets/icons8-menu2.png" style="height: 22px;" alt="close menu">',
  ];
  if (hb.innerHTML == state[0]) {
    hb.innerHTML = state[1];
    nl.classList.add("responsive");
  } else {
    hb.innerHTML = state[0];
    nl.classList.remove("responsive");
  }
}