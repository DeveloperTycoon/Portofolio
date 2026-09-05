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