const credentials = [
  { title: "MBA — Systems & Marketing", subtitle: "Indore University, 1998", type: "education", highlight: "Strategic leadership and systems thinking for complex organisations." },
  { title: "Bachelor of Science", subtitle: "Indore University, 1995", type: "education", highlight: "Analytical foundations for technology, data and decision‑making." },
  { title: "Honors Diploma in Systems Management", subtitle: "NIIT, Indore, 1997", type: "education", highlight: "Specialised focus on enterprise systems and technology management." },
  { title: "Project Management Professional (PMP)", subtitle: "Certified", type: "certification", highlight: "Global benchmark for leading large, cross‑functional initiatives." },
  { title: "Certified SAFe Practitioner", subtitle: "Scaled Agile Framework", type: "certification", highlight: "Applying agile principles at scale across distributed teams." },
  { title: "Certified Agile Coach & Scrum Master", subtitle: "Professional Certification", type: "certification", highlight: "Coaching leaders and teams through agile transformation." },
  { title: "Sun Certified Architect", subtitle: "Sun Microsystems", type: "certification", highlight: "Enterprise‑grade architecture for robust, scalable systems." },
  { title: "Sun Certified Developer", subtitle: "Sun Microsystems", type: "certification", highlight: "Hands‑on engineering depth in production‑ready software." }
];

function renderCredentials() {
  const education = credentials.filter(c => c.type === 'education');
  const certifications = credentials.filter(c => c.type === 'certification');

  const eduHtml = education.map((c, i) => `
    <div class="cred-item relative flex gap-4 opacity-0 translate-x-3 transition-all duration-500 ease-out" style="transition-delay: ${i * 90}ms">
      <div class="relative mt-2 flex flex-col items-center">
        <div class="w-3 h-3 rounded-full border border-border bg-gradient-soft shadow-sm"></div>
      </div>
      <div class="flex-1 pb-5 md:pb-6 border-b border-border/60">
        <h4 class="font-body text-sm md:text-base font-semibold mb-1 md:mb-1.5 text-foreground">${c.title}</h4>
        <span class="block text-muted-foreground text-sm md:text-[15px]">${c.subtitle}</span>
        <span class="block text-muted-foreground text-[11px] md:text-xs mt-1.5 leading-snug">${c.highlight}</span>
      </div>
    </div>
  `).join('');

  const certBadges = certifications.map((c, i) => `
    <button type="button" data-index="${i}" class="cert-tab inline-flex items-center rounded-full border px-3 py-1 text-[11px] md:text-xs font-medium uppercase tracking-wide transition-all duration-200 hover:-translate-y-[1px] hover:shadow-sm ${i === 0 ? 'border-border text-foreground bg-background' : 'border-border/70 text-foreground/80 bg-gradient-soft'}">
      ${c.title}
    </button>
  `).join('');

  return `
    <section id="credentials" class="py-20 md:py-28 lg:py-36 bg-gradient-soft border-y border-border opacity-0 translate-y-2 transition-all duration-[800ms] ease-out">
      <div class="container">
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-medium mb-3 md:mb-4 text-foreground text-center md:text-left">
          Education & Professional Distinctions
        </h2>
        <p class="text-muted-foreground text-base md:text-lg max-w-2xl text-center md:text-left">
          Academic foundations and professional certifications reflecting long-term commitment to leadership and technical excellence.
        </p>

        <div class="mt-10 md:mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          <!-- Education -->
          <div>
            <h3 class="font-display text-lg md:text-xl font-medium mb-5 text-foreground">Education</h3>
            <div class="relative pl-5">
              <div id="cred-timeline" class="absolute left-2 top-1 bottom-1 w-px bg-border origin-top scale-y-0 transition-transform duration-700"></div>
              <div class="space-y-6 md:space-y-8">
                ${eduHtml}
              </div>
            </div>
          </div>

          <!-- Certifications -->
          <div>
            <h3 class="font-display text-lg md:text-xl font-medium mb-5 text-foreground">Certifications</h3>
            <div class="rounded-2xl border border-border bg-gradient-soft/40 px-4 py-3 md:px-5 md:py-4 mb-5">
              <div class="flex flex-wrap gap-2 md:gap-2.5" id="cert-tabs">
                ${certBadges}
              </div>
            </div>
            
            <div id="active-cert-detail" class="pb-5 md:pb-6 border-b border-border/60 transition-all duration-400">
               <!-- content injected via js -->
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function initCredentials() {
  const section = document.getElementById('credentials');
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      // reveal
      section.classList.remove('opacity-0', 'translate-y-2');
      section.classList.add('opacity-100', 'translate-y-0');
      document.getElementById('cred-timeline').classList.add('scale-y-100');
      document.getElementById('active-cert-detail').classList.add('opacity-100', 'translate-y-0');
      document.getElementById('active-cert-detail').classList.remove('opacity-0', 'translate-y-3');
      
      document.querySelectorAll('.cred-item').forEach(el => {
        el.classList.remove('opacity-0', 'translate-x-3');
        el.classList.add('opacity-100', 'translate-x-0');
      });
      observer.disconnect();
    }
  }, { threshold: 0.3 });
  
  if (section) observer.observe(section);

  const certifications = credentials.filter(c => c.type === 'certification');
  const tabs = document.querySelectorAll('.cert-tab');
  const detail = document.getElementById('active-cert-detail');
  
  function renderDetail(index) {
    const cert = certifications[index];
    detail.innerHTML = `
      <h4 class="font-body text-sm md:text-base font-semibold mb-1 md:mb-1.5 text-foreground">${cert.title}</h4>
      <span class="block text-muted-foreground text-sm md:text-[15px]">${cert.subtitle}</span>
      <span class="block text-muted-foreground text-[11px] md:text-xs mt-1.5 leading-snug">${cert.highlight}</span>
    `;
    detail.classList.remove('opacity-0', 'translate-y-3');
  }

  // default render
  detail.classList.add('opacity-0', 'translate-y-3'); // to be revealed by observer
  renderDetail(0);

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // remove old active styles
      document.querySelector('.cert-tab.border-border.bg-background')?.classList.replace('border-border', 'border-border/70');
      document.querySelector('.cert-tab.text-foreground.bg-background')?.classList.replace('text-foreground', 'text-foreground/80');
      document.querySelector('.cert-tab.bg-background')?.classList.replace('bg-background', 'bg-gradient-soft');
      
      // set new active styles
      tab.classList.replace('border-border/70', 'border-border');
      tab.classList.replace('text-foreground/80', 'text-foreground');
      tab.classList.replace('bg-gradient-soft', 'bg-background');
      
      const idx = parseInt(tab.getAttribute('data-index'));
      renderDetail(idx);
    });
  });
}
