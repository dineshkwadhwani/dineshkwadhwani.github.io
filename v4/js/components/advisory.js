const advisoryGroups = [
  { groupTitle: "Individual Leadership", groupDescription: "Confidential partnerships that strengthen judgment and executive effectiveness.", panels: [ { tag: "PRIVATE ENGAGEMENT", title: "1:1 Executive Coaching", description: "A confidential partnership focused on strengthening executive judgment, leadership presence, and decision clarity.", points: [ "High-stakes decision support", "Executive presence refinement", "Strategic thinking discipline" ], cta: "Request a Private Conversation →" } ] },
  { groupTitle: "Team Leadership", groupDescription: "Interventions that improve alignment, trust, and execution discipline.", panels: [ { tag: "COLLECTIVE LEADERSHIP", title: "Group Coaching", description: "Peer-based leadership development with structured dialogue.", points: [ "Peer-driven growth", "Leadership dialogue", "Collaborative problem solving" ], cta: "Explore Group Formats →" }, { tag: "EXECUTIVE IMMERSION", title: "Offsites & Leadership Alignment", description: "High-impact offsite engagements enabling clarity and execution.", points: [ "Executive alignment", "Strategic reset", "Trust building" ], cta: "Plan an Offsite →" } ] },
  { groupTitle: "Organizational Strategy", groupDescription: "Enterprise initiatives enabling scale, capability, and performance.", panels: [ { tag: "ORGANIZATIONAL EXCELLENCE", title: "Leadership Capability Building", description: "Programs that strengthen pipelines and long-term readiness.", points: [ "Competency frameworks", "Succession readiness", "Performance culture" ], cta: "Design a Capability Program →" } ] }
];

function renderAdvisory() {
  const groupsHtml = advisoryGroups.map((group, index) => {
    const panelsHtml = group.panels.map((panel, i) => `
      <div class="border-t border-border pt-6 grid md:grid-cols-2 gap-8">
        <div class="bg-gradient-card rounded-lg min-h-[180px]"></div>
        <div>
          <span class="text-xs tracking-wider text-accent font-medium">${panel.tag}</span>
          <h4 class="text-lg font-semibold mt-2 text-foreground">${panel.title}</h4>
          <p class="text-muted-foreground text-sm mt-2">${panel.description}</p>
          <ul class="mt-3 pl-4 space-y-1 list-disc text-muted-foreground text-sm">
            ${panel.points.map(p => `<li>${p}</li>`).join('')}
          </ul>
          <a href="#contact" data-title="${panel.title}" data-desc="${panel.description}" class="advisory-cta inline-block mt-4 text-accent font-semibold text-sm hover:text-sage-hover">
            ${panel.cta}
          </a>
        </div>
      </div>
    `).join('');

    return `
      <div class="border border-border rounded-xl overflow-hidden bg-card">
        <button data-index="${index}" class="advisory-toggle w-full text-left p-6 md:p-8 flex justify-between items-center bg-transparent border-0 outline-none">
          <div>
            <h3 class="font-semibold text-lg md:text-xl text-foreground">${group.groupTitle}</h3>
            <p class="text-muted-foreground text-sm mt-1">${group.groupDescription}</p>
          </div>
          <span id="advisory-icon-${index}" class="text-accent transition-transform duration-300 ${index === 0 ? 'rotate-45' : ''}">+</span>
        </button>
        <div id="advisory-content-${index}" class="transition-all duration-500 ease-in-out ${index === 0 ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}">
          <div class="px-6 md:px-8 pb-8 space-y-8">
            ${panelsHtml}
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section id="advisory" class="py-20 md:py-28 lg:py-36">
      <div class="container">
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-medium mb-4 text-foreground">
          Executive Advisory
        </h2>
        <p class="text-muted-foreground max-w-3xl">
          High-impact engagements for leaders operating at scale.
        </p>
        <div class="mt-14 space-y-6">
          ${groupsHtml}
        </div>
      </div>
    </section>
  `;
}

function initAdvisory() {
  const toggles = document.querySelectorAll('.advisory-toggle');
  let openIndex = 0; // matching React default state

  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      const index = parseInt(btn.getAttribute('data-index'));
      const content = document.getElementById(`advisory-content-${index}`);
      const icon = document.getElementById(`advisory-icon-${index}`);

      if (openIndex === index) {
        // close it
        content.classList.replace('max-h-[2000px]', 'max-h-0');
        content.classList.replace('opacity-100', 'opacity-0');
        setTimeout(() => content.classList.add('overflow-hidden'), 500); // timing for animation
        icon.classList.remove('rotate-45');
        openIndex = null;
      } else {
        // open it
        // optionally close previously open
        if (openIndex !== null) {
          const oldContent = document.getElementById(`advisory-content-${openIndex}`);
          const oldIcon = document.getElementById(`advisory-icon-${openIndex}`);
          oldContent.classList.replace('max-h-[2000px]', 'max-h-0');
          oldContent.classList.replace('opacity-100', 'opacity-0');
          setTimeout(() => oldContent.classList.add('overflow-hidden'), 500);
          oldIcon.classList.remove('rotate-45');
        }

        content.classList.remove('overflow-hidden');
        content.classList.replace('max-h-0', 'max-h-[2000px]');
        content.classList.replace('opacity-0', 'opacity-100');
        icon.classList.add('rotate-45');
        openIndex = index;
      }
    });
  });

  const ctas = document.querySelectorAll('.advisory-cta');
  ctas.forEach(cta => {
    cta.addEventListener('click', () => {
      const title = cta.getAttribute('data-title');
      const desc = cta.getAttribute('data-desc');
      const msg = `I would like to enquire about: ${title}. ${desc}`;
      localStorage.setItem('contact_prefill', msg);
      window.dispatchEvent(new Event('contact_prefill_event'));
    });
  });
}
