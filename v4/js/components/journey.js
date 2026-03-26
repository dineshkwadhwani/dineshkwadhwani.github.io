const phases = [
  { company: "NICE", period: "Sept 2021 – Current", role: "AI-Driven Engineering Leader", summary: "Leads global R&D for CXone WEM/WFM across 8 product lines, driving AI adoption in workforce platforms while delivering secure multi-tenant SaaS services.", scope: "500+ global engineering professionals", revenue: "$400M+ revenue influence", scale: "99.9x availability platform", focus: "AI operationalization, platform modernization" },
  { company: "Capita", period: "May 2016 – Sept 2021", role: "Head of Product Development", summary: "Led India Product Development for education platforms serving 20k+ schools, owning roadmap, delivery, and cloud transition initiatives.", scope: "Distributed multi-product engineering org", revenue: "£125M revenue impact", focus: "Cloud-native transition, delivery excellence" },
  { company: "IBM", period: "Mar 2010 – May 2016", role: "Product Development Leader", summary: "Scaled from single-product leadership to managing three enterprise product lines following acquisition.", scope: "100+ engineers across 3 products", revenue: "$100M contribution", focus: "Roadmap execution, multi-product governance" },
  { company: "Xpanxion / CoreObjects", period: "Dec 2005 – Apr 2010", role: "Technical Delivery Leadership", summary: "Led enterprise service delivery across global accounts including AMEX, FedEx, Citi, Cisco, and GE.", scope: "10–40 engineers across engagements", focus: "Enterprise delivery, customer success" },
  { company: "Power Infosys / Diaspark / Zensar", period: "Jan 2000 – Dec 2005", role: "Software Engineering Leadership", summary: "Built deep enterprise engineering capability and progressed into leadership across multiple platforms.", scope: "Multi-product responsibilities", focus: "Engineering discipline, delivery maturity" }
];

function renderJourney() {
  const buttonsHtml = phases.map((phase, i) => `
    <button data-index="${i}" class="journey-tab min-w-[220px] lg:min-w-0 flex-shrink-0 text-left px-5 py-4 rounded-xl border transition-all duration-300 ${i === 0 ? 'border-accent bg-accent-soft/10 shadow-md' : 'border-border hover:border-accent-soft'}">
      <div class="flex items-center justify-between gap-4">
        <p class="text-sm font-medium text-foreground">${phase.company}</p>
        <span class="text-xs text-muted-foreground whitespace-nowrap">${phase.period}</span>
      </div>
    </button>
  `).join('');

  return `
    <section id="journey" class="py-16 md:py-24 lg:py-32">
      <div class="container">
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-medium mb-10 text-foreground">
          Executive Leadership Journey
        </h2>
        <div class="grid lg:grid-cols-[1.3fr_0.7fr] gap-8">
          <!-- BUTTON RAIL -->
          <div class="order-1 lg:order-2 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0" id="journey-tabs-container">
            ${buttonsHtml}
          </div>

          <!-- CARD -->
          <div id="journey-card" class="order-2 lg:order-1 relative bg-card border border-border rounded-2xl p-6 md:p-10 transition-all duration-500 animate-fade-in">
            <!-- Content gets injected by JS -->
          </div>
        </div>
      </div>
      <style>
        .animate-fade-in { animation: fadeIn 0.4s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      </style>
    </section>
  `;
}

function initJourney() {
  const tabs = document.querySelectorAll('.journey-tab');
  const card = document.getElementById('journey-card');
  let activeIndex = 0;
  let expanded = false;

  function renderCard() {
    const phase = phases[activeIndex];
    
    let expandedHtml = '';
    if (expanded) {
      let gridHtml = '';
      if (phase.scope) gridHtml += `<div class="border border-border rounded-lg p-4"><p class="text-xs text-muted-foreground">Leadership Scope</p><p class="text-sm font-medium text-foreground mt-1">${phase.scope}</p></div>`;
      if (phase.revenue) gridHtml += `<div class="border border-border rounded-lg p-4"><p class="text-xs text-muted-foreground">Revenue Influence</p><p class="text-sm font-medium text-foreground mt-1">${phase.revenue}</p></div>`;
      if (phase.scale) gridHtml += `<div class="border border-border rounded-lg p-4"><p class="text-xs text-muted-foreground">Operational Scale</p><p class="text-sm font-medium text-foreground mt-1">${phase.scale}</p></div>`;
      if (phase.focus) gridHtml += `<div class="border border-border rounded-lg p-4"><p class="text-xs text-muted-foreground">Strategic Focus</p><p class="text-sm font-medium text-foreground mt-1">${phase.focus}</p></div>`;
      
      expandedHtml = `<div class="mt-6 grid sm:grid-cols-2 gap-4 animate-fade-in">${gridHtml}</div>`;
    }

    card.innerHTML = `
      <div class="max-w-2xl">
        <span class="text-xs tracking-[0.2em] text-accent font-medium">${phase.period}</span>
        <h3 class="text-xl md:text-3xl font-semibold mt-3 text-foreground">${phase.role}</h3>
        <p class="text-muted-foreground text-sm mt-2">${phase.company}</p>
        <p class="mt-5 text-muted-foreground text-sm md:text-base leading-relaxed">${phase.summary}</p>
        <button id="journey-expand-btn" class="mt-4 text-accent font-semibold text-sm hover:text-sage-hover transition-colors">
          ${expanded ? "Show Less ↑" : "Read More →"}
        </button>
        ${expandedHtml}
      </div>
    `;

    document.getElementById('journey-expand-btn').addEventListener('click', () => {
      expanded = !expanded;
      renderCard();
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove styles from previous active tab
      tabs[activeIndex].classList.remove('border-accent', 'bg-accent-soft/10', 'shadow-md');
      tabs[activeIndex].classList.add('border-border', 'hover:border-accent-soft');
      
      // Add styles to new active tab
      activeIndex = parseInt(tab.getAttribute('data-index'));
      tabs[activeIndex].classList.add('border-accent', 'bg-accent-soft/10', 'shadow-md');
      tabs[activeIndex].classList.remove('border-border', 'hover:border-accent-soft');
      
      expanded = false;
      renderCard();
      
      // Retrigger animation
      card.style.animation = 'none';
      card.offsetHeight;
      card.style.animation = null;
    });
  });

  renderCard();
}
