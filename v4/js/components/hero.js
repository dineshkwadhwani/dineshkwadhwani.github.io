function renderHero() {
  return `
    <section class="hero-radial py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">

          <!-- TEXT CONTENT -->
          <div class="order-2 lg:order-1 text-center lg:text-left">
            <div id="hero-measure" class="absolute invisible pointer-events-none h-auto"></div>

            <div id="hero-slider-wrap" class="relative transition-all duration-700">
              <div id="hero-slide" class="animate-fade-in">
                <h1 id="hero-headline" class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.15] mb-4 text-foreground">
                </h1>
                <p id="hero-desc" class="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                </p>
              </div>
            </div>

            <!-- Metrics -->
            <div class="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
              <div class="text-olive text-sm font-medium">
                <span class="text-foreground font-semibold"><span class="metric-val" data-target="27">0</span>+</span> Years
              </div>
              <div class="text-olive text-sm font-medium">
                <span class="text-foreground font-semibold"><span class="metric-val" data-target="2000">0</span>+</span> People Influenced
              </div>
              <div class="text-olive text-sm font-medium">
                <span class="text-foreground font-semibold"><span class="metric-val" data-target="100">0</span>+</span> Workshops
              </div>
            </div>
          </div>

          <!-- IMAGE -->
          <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div class="relative w-64 sm:w-72 md:w-80 lg:w-[420px] max-w-md">
              <img
                src="assets/sir1.png"
                alt="Coach Dinesh"
                class="w-full h-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.28)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

const slides = [
  { headline: "Hello — I am Coach Dinesh.", desc: "Technology and product executive with 27+ years leading global organizations, scaling engineering functions, and guiding enterprises through transformation." },
  { headline: "Lead With Clarity. Execute With Confidence.", desc: "I coach ambitious professionals and emerging leaders to think strategically, communicate decisively, and unlock their next level of performance." },
  { headline: "From Potential to Executive Presence.", desc: "I partner with high-performing professionals to sharpen decision-making, elevate leadership impact, and accelerate career progression." },
  { headline: "Think Like a Leader. Act Like an Owner.", desc: "Through structured, high-impact coaching, I help professionals develop strategic clarity, influence without authority, and deliver measurable business outcomes." },
  { headline: "Clarity. Confidence. Career Acceleration.", desc: "I coach professionals navigating complex workplaces to lead with conviction, manage stakeholders effectively, and build long-term influence." },
  { headline: "Executive Insight. Personal Transformation.", desc: "I now dedicate my 3 decades of expertise to coaching professionals who aspire to lead at higher levels with sharper thinking, stronger influence, and greater impact." },
];

function initHero() {
  const headlineEl = document.getElementById('hero-headline');
  const descEl = document.getElementById('hero-desc');
  const slideEl = document.getElementById('hero-slide');
  let activeIndex = 0;

  function updateSlide() {
    // retrigger animation
    slideEl.style.animation = 'none';
    slideEl.offsetHeight; // trigger reflow
    slideEl.style.animation = null;

    headlineEl.textContent = slides[activeIndex].headline;
    descEl.textContent = slides[activeIndex].desc;
  }
  
  updateSlide();
  
  const rotationTimer = setInterval(() => {
    activeIndex = (activeIndex + 1) % slides.length;
    updateSlide();
  }, 5000);

  // Metrics animation
  const metrics = document.querySelectorAll('.metric-val');
  metrics.forEach((el, index) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const delay = 240 + index * 120;
    
    setTimeout(() => {
      const duration = 2000;
      const steps = 30;
      const stepTime = duration / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep += 1;
        const progress = 1 - Math.pow(1 - currentStep / steps, 3);
        const current = Math.round(target * progress);
        el.textContent = current;

        if (currentStep >= steps) {
          el.textContent = target;
          clearInterval(interval);
        }
      }, stepTime);
    }, delay);
  });
  
  // Clean up
  window.heroTeardown = () => clearInterval(rotationTimer);
}
