document.addEventListener("DOMContentLoaded", () => {
  
  
  const tl = gsap.timeline({ repeat: -1 });

  tl.to(".wavy-text span", {
    y: -16,               // Ketinggian puncak ombak
    scaleY: 1.05,         // Sedikit meregang seperti air naik
    duration: 2,        // Kecepatan alir ombak
    ease: "sine.inOut",   // Kurva halus khas fluida/air
    stagger: {
      each: 0.50,         // Jeda waktu aliran dari N -> M -> L
      from: "start",
      repeat: -1,         // Loop kontinyu untuk tiap huruf
      yoyo: true
    }
  });

});

const glow = document.getElementById('glow');

window.addEventListener('pointermove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  glow.style.transform= `translate(${x - 100}px, ${y - 100}px)`;

})

const textElement = document.getElementById("TextSec");
const words = ["Let's create something that lasts forever!","It's time we make something unforgettable!","A developer that learn by doing!"]


let wordsIndex = 0;
let charIndex = 0;
let IsDeleting = false;

function typeEffect() {
  const currentWord = words[wordsIndex]
  const currentText = currentWord.substring(0, charIndex);

  textElement.innerHTML = `${currentText}<span class="cursor">&nbsp;</span>`;

  if (IsDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  let typeSpeed = IsDeleting ? 20 : 60;

  if (!IsDeleting && charIndex > currentWord.length) {
    typeSpeed = 2000;
    IsDeleting = true;
  } else if (IsDeleting && charIndex < 0) {
    IsDeleting = false;
    wordsIndex = (wordsIndex + 1) % words.length;
    typeSpeed = 500;
  }

  setTimeout(typeEffect, typeSpeed)
}

document.addEventListener("DOMContentLoaded", typeEffect)

