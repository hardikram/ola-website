gsap.from(".head", { duration: 3.5, y: "-100%", ease: "bounce.out" });
gsap.from(".navbar", { duretion: 1.5, opacity: 0, delay: 1 });
gsap.to(".footer", { y: 0, ease: "bounce.out" });

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entery) => {
    entery.target.classList.toggle("show", entery.isIntersecting);
  });
});
cards.forEach((card) => {
  observer.observe(card);
});

function changeImage(fileName) {
  var img = document.querySelector("#bannerImage");
  img.setAttribute("src", fileName);
  img.style.width = `${100}%`;
}

function changeImage(olaName) {
  var img = document.querySelector("#olaImage");
  img.setAttribute("src", olaName);
  img.style.width = `${100}%`;
}
