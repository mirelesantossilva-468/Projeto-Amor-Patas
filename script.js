// mobile menu toggle (simple)
    function toggleMenu(){
      const nav = document.querySelector('nav.main-nav');
      if(!nav) return;
      if(nav.style.display === 'flex'){
        nav.style.display = '';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.background = '#fff';
        nav.style.position = 'absolute';
        nav.style.top = '72px';
        nav.style.right = '20px';
        nav.style.padding = '12px';
        nav.style.borderRadius = '12px';
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
      }
    }

    // smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        const href = this.getAttribute('href');
        if(href === '#' || href === '') return;
        const target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
        }
      });
    });

    // accessibility: keyboard toggle for hamburger
    const hamb = document.querySelector('.hamburger');
    if(hamb){
      hamb.addEventListener('keydown', (e)=>{
        if(e.key === 'Enter' || e.key === ' ') toggleMenu();
      });
    }

   

  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  // Troca automática a cada 5 segundos (opcional)
  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 5000);

const form = document.querySelector(".contato-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
  form.reset();
});

