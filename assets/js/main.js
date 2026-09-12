gsap.registerPlugin(ScrollTrigger);

// NML Animation

document.addEventListener("DOMContentLoaded", () => {
  
  
  const tl = gsap.timeline({ repeat: -1 });

  tl.to(".wavy-text span", {
    y: -16,               
    scaleY: 1.05,         
    duration: 2,        
    ease: "sine.inOut",   
    stagger: {
      each: 0.50,         
      from: "start",
      repeat: -1,        
      yoyo: true
    }
  });

});



// Cursor Glow

const glow = document.getElementById('glow');

window.addEventListener('pointermove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  glow.style.transform= `translate(${x - 100}px, ${y - 100}px)`;

})



// P Writer

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


// Star Effect

const jumlahBintang = 300; 

    for (let i = 0; i < jumlahBintang; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      const fullWidth = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth
      );
      const fullHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      
      const x = Math.random() * fullWidth;
      const y = Math.random() * fullHeight;

      
      const size = Math.random() * 2 + 1;

      
      const duration = Math.random() * 2 + 1; 
      const delay = Math.random() * 3; 

      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.setProperty('--duration', `${duration}s`);
      star.style.animationDelay = `${delay}s`;
      star.style.zIndex = -100;
      document.body.appendChild(star);
}


// Audio

const audio = document.getElementById('myAudio');

if (audio) {
  audio.volume = 0.3;

  const enableAudio = () => {
    audio.muted = false;
    audio.play().catch(() => {});
  };
  
  window.addEventListener('click', enableAudio, { once: true });
  window.addEventListener('mousemove', enableAudio, { once: true });
}



// Testing begin
const sections = document.querySelectorAll("section.section[id]");
const navItems = document.querySelectorAll(".nav-item");
const observerOption = {
  root : null,
  rootMargin : "-55% 0px -55% 0px",
  threshold: 0
}
const observer = new IntersectionObserver((e) => {
  e.forEach((en) => {
    if (en.isIntersecting) {
      const activeId = en.target.getAttribute("id");
      navItems.forEach((item) => item.classList.remove("active"));
      const activeNav = document.querySelector(`.nav-item[href="#${activeId}"]`);
      if (activeNav) {
        activeNav.classList.add("active");
      }
    }
  });
}, observerOption)

sections.forEach((section) => observer.observe(section))
// Tesing end

const sect = document.querySelectorAll('.section:not(.Footer), .card, .StatusMe');
sect.forEach((el) => {
  gsap.fromTo(el, 
    { 
      opacity: 0, // Keliatannya berapa persen
      y: 50  // dari bawah sekitar 50
    }, 
    { 
      opacity: 1, // ke keliatannya penuh
      y: 0, // kembali ke posisi awal
      duration: 1, // durasi nya berapa
      ease: "power2.out", // easing stylenya
      scrollTrigger: {
        trigger: el, // ke trigger ketika ke scroll sebuah section (mirip intersection)
        start: "top 55%", // Kalau keliatan 65% dari atas, maka akan ke trigger
        toggleActions: "play none none reverse" // onEnter onLeave onEnterBack onLeaveBack
      }
    }
  );
});

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});