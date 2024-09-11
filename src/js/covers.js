const coversSection = document.querySelector('.covers');
const marqueeInner = document.querySelectorAll('.marquee__line');

function startAnimation() {
  marqueeInner.forEach(item => {
    item.style.animationPlayState = 'running'; 
  });
}

function stopAnimation() {
  marqueeInner.forEach(item => {
    item.style.animationPlayState = 'paused'; 
  });
}


 const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startAnimation(); 
    } else {
      stopAnimation(); 
      }
    
      });
}, {
    threshold: 0.1,
});


observer.observe(coversSection);


stopAnimation();

