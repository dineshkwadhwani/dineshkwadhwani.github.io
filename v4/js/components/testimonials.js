const testimonials = [
  { name: "Rajesh Dankh", role: "Infra Architect", quote: "Dinesh is one of those rare managers who naturally serves as an inspiring mentor for the whole staff. He exhibits strong interpersonal skills and a unique capacity for empathy, motivating teams to care deeply about project success while becoming the go-to person for conflict resolution and complex problem solving." },
  { name: "Rommel Sharma", role: "Digital Transformation Leader", quote: "Technically very sound and always willing to share his knowledge, Dinesh creates an environment that is light, positive, and highly productive. With his technical expertise and good nature, he consistently contributes toward both project and team success." },
  { name: "Seema Kamble Nadkarni", role: "Flutter Developer", quote: "Dinesh is a very supportive manager who encourages team members to give their best while exploring different technologies and modules. He appreciates good work and fosters a culture where people genuinely enjoy what they do." },
  { name: "Sandeep Garud", role: "CEO", quote: "A sincere and meticulous planner, Dinesh sets clear goals and inspires confidence across the team. Broad-minded and encouraging, he demonstrates calm judgment under pressure and strong people management skills." },
  { name: "Anand Mitragotri", role: "Program Manager", quote: "An intelligent and motivated leader, Dinesh has the ability to guide multi-layered teams across client and corporate environments. He consistently provides solutions to complex problems from both technical and cultural perspectives while maintaining excellent communication." },
  { name: "Manisha Bathia", role: "Project Manager", quote: "A disciplined and enthusiastic manager, Dinesh drives projects exceptionally well while remaining cooperative and supportive. He creates a welcoming team culture and is someone people genuinely enjoy working with." }
];

function renderTestimonials() {
  const dots = testimonials.map((_, i) => `<button data-index="${i}" class="testimonial-dot w-2.5 h-2.5 rounded-full transition-colors ${i === 0 ? 'bg-accent' : 'bg-border hover:bg-muted-foreground/50'}"></button>`).join('');

  return `
    <section class="py-20 md:py-28 lg:py-36 bg-muted relative">
      <div class="container">
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-medium mb-10 text-foreground text-center md:text-left">
          Trusted by Senior Leaders
        </h2>

        <div class="w-full">
          <div class="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-sm min-h-[300px] flex flex-col justify-between" id="testimonial-card">
            <!-- content injected by JS -->
          </div>

          <div class="flex gap-2 mt-8 justify-center md:justify-start" id="testimonial-dots">
            ${dots}
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div id="testimonial-modal" class="hidden fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 z-[60] animate-fade-in">
        <div class="bg-card border border-border rounded-2xl p-8 max-w-2xl w-full shadow-xl relative">
          <button id="close-modal-btn" class="absolute top-4 right-4 text-muted-foreground hover:text-foreground text-sm">✕</button>
          
          <div class="flex items-center gap-4 mb-6">
            <div id="modal-initial" class="w-14 h-14 rounded-full bg-gradient-card flex items-center justify-center text-foreground font-semibold text-lg"></div>
            <div>
              <strong id="modal-name" class="text-foreground text-lg block"></strong>
              <span id="modal-role" class="text-muted-foreground text-sm"></span>
            </div>
          </div>
          <blockquote id="modal-quote" class="font-display text-lg md:text-xl leading-[1.6] text-foreground"></blockquote>
        </div>
      </div>
    </section>
  `;
}

function initTestimonials() {
  const card = document.getElementById('testimonial-card');
  const dots = document.querySelectorAll('.testimonial-dot');
  const modal = document.getElementById('testimonial-modal');
  let activeIndex = 0;
  
  function renderCard() {
    const active = testimonials[activeIndex];
    card.innerHTML = `
      <div class="flex items-center gap-4 mb-6">
        <div class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-card flex items-center justify-center text-foreground font-semibold text-lg">
          ${active.name.charAt(0)}
        </div>
        <div>
          <strong class="text-foreground text-base md:text-lg block">${active.name}</strong>
          <span class="text-muted-foreground text-sm md:text-[15px]">${active.role}</span>
        </div>
      </div>
      <blockquote class="font-display text-lg sm:text-xl md:text-[26px] leading-[1.5] text-foreground line-clamp-4">
        “${active.quote}”
      </blockquote>
      <button id="view-full-btn" class="mt-6 text-accent font-semibold text-sm hover:text-sage-hover transition-colors text-left">
        View Full →
      </button>
    `;

    document.getElementById('view-full-btn').addEventListener('click', () => {
      document.getElementById('modal-initial').textContent = active.name.charAt(0);
      document.getElementById('modal-name').textContent = active.name;
      document.getElementById('modal-role').textContent = active.role;
      document.getElementById('modal-quote').textContent = `“${active.quote}”`;
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }
  
  renderCard();

  document.getElementById('close-modal-btn').addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });

  const rotationTimer = setInterval(() => {
    if (modal.classList.contains('hidden')) {
      dots[activeIndex].classList.replace('bg-accent', 'bg-border');
      dots[activeIndex].classList.add('hover:bg-muted-foreground/50');
      
      activeIndex = (activeIndex + 1) % testimonials.length;
      
      dots[activeIndex].classList.replace('bg-border', 'bg-accent');
      dots[activeIndex].classList.remove('hover:bg-muted-foreground/50');
      renderCard();
    }
  }, 6000);

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      dots[activeIndex].classList.replace('bg-accent', 'bg-border');
      dots[activeIndex].classList.add('hover:bg-muted-foreground/50');
      
      activeIndex = parseInt(dot.getAttribute('data-index'));
      
      dots[activeIndex].classList.replace('bg-border', 'bg-accent');
      dots[activeIndex].classList.remove('hover:bg-muted-foreground/50');
      renderCard();
    });
  });

  window.testimonialsTeardown = () => clearInterval(rotationTimer);
}
