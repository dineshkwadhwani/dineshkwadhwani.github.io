const tools = [
  { id: "reflection", label: "Reflection Coach", tag: "CORE TOOL", title: "Executive Reflection Coach", description: "A structured conversational intelligence that helps senior leaders slow down thinking, challenge assumptions, and act with deliberate clarity.", points: [ "Guided reflective questioning", "Cognitive bias interruption", "Structured executive thinking" ], cta: "Enter Reflection Environment →" },
  { id: "blindspot", label: "Blind-Spot Detector", tag: "AWARENESS", title: "Blind-Spot Detector", description: "Surfaces leadership patterns often invisible from inside the role — enabling earlier intervention and stronger strategic positioning.", points: [ "Behavioral pattern mapping", "Strategic risk visibility", "Communication gap detection" ], cta: "Launch Detector →" },
  { id: "decision", label: "Decision Simulator", tag: "STRATEGY", title: "Decision Simulator", description: "Model high-stakes choices before committing with disciplined scenario thinking.", points: [ "Scenario modeling", "Trade-off intelligence", "Outcome projection" ], cta: "Simulate Decision →" },
  { id: "style", label: "Leadership Style Analyzer", tag: "INFLUENCE", title: "Leadership Style Analyzer", description: "Understand how your leadership presence is experienced by others.", points: [ "Leadership signal analysis", "Influence mapping", "Executive presence insights" ], cta: "Analyze Style →" }
];

function renderAISection() {
  const isDesktop = window.innerWidth >= 768;

  const positions = [12.5, 37.5, 62.5, 87.5];

  const pillsHtml = tools.map((t, i) => `
    <button data-index="${i}" class="ai-pill ${isDesktop ? 'absolute -translate-x-1/2' : 'min-w-max'} whitespace-nowrap px-4 py-2 rounded-full ${isDesktop ? 'text-sm' : 'text-xs'} font-medium transition-all duration-200 border ${i === 0 ? 'bg-cream text-navy border-cream shadow-sm' : 'bg-transparent text-beige/70 border-cream/20'}" ${isDesktop ? `style="left: ${positions[i]}%"` : ''}>
      ${t.label}
    </button>
  `).join('');

  const progressHtml = isDesktop ? `
    <div class="relative w-full h-[3px] bg-navy-deep/50 mt-6 rounded-full overflow-hidden">
      <div id="ai-progress" class="absolute left-0 top-0 h-full bg-cream transition-all duration-100 ease-linear" style="width: 0%"></div>
      ${positions.map(p => `<div class="absolute top-0 h-full w-[1px] bg-navy-deep/70" style="left: ${p}%"></div>`).join('')}
    </div>
  ` : `
    <div class="w-full h-[2px] bg-navy-deep/50 mt-3 rounded-full overflow-hidden">
      <div id="ai-progress" class="h-full bg-cream transition-all duration-150 ease-linear" style="width: 0%"></div>
    </div>
  `;

  return `
    <section id="ai" class="relative scroll-mt-12 md:scroll-mt-26 lg:scroll-mt-20 py-[50px] md:py-[86px] lg:py-[110px] bg-gradient-dark text-cream overflow-hidden">
      <div class="container relative z-10">
        <div>
          <h2 class="font-display text-xl sm:text-2xl md:text-4xl font-medium mb-2 text-center md:text-left">
            Executive Intelligence Platform
          </h2>
          <p class="text-beige/90 text-sm md:text-base max-w-3xl text-center md:text-left leading-snug">
            A private intelligence layer designed to sharpen judgment and support leaders.
          </p>
        </div>

        <div id="ai-nav-container" class="${isDesktop ? 'relative mt-8 h-[44px]' : 'mt-5 flex gap-2 overflow-x-auto pb-2 scrollbar-hide'}">
          ${pillsHtml}
        </div>

        ${progressHtml}

        <div id="ai-content-container" class="mt-6 transition-all duration-500 ease-out">
          <!-- injected by JS -->
        </div>
      </div>
    </section>
  `;
}

function initAISection() {
  const container = document.getElementById('ai-nav-container');
  const pills = document.querySelectorAll('.ai-pill');
  const progressEl = document.getElementById('ai-progress');
  const contentEl = document.getElementById('ai-content-container');
  
  let activeIndex = 0;
  let progress = 0;
  let isDesktop = window.innerWidth >= 768;
  let intervalRef;

  function renderContent() {
    const activeTool = tools[activeIndex];
    contentEl.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div class="hidden md:block h-72 rounded-2xl bg-gradient-to-br from-navy-deep to-navy/80 shadow-glow"></div>
        <div>
          <span class="text-[10px] tracking-[0.18em] text-executive-gold font-medium">${activeTool.tag}</span>
          <h3 class="font-body text-lg md:text-xl font-semibold mt-1.5 mb-2 leading-snug">${activeTool.title}</h3>
          <p class="text-beige/95 text-m leading-snug">${activeTool.description}</p>
          <ul class="mt-3 pl-4 space-y-1">
            ${activeTool.points.map(p => `<li class="text-cream/90 text-sm list-disc">${p}</li>`).join('')}
          </ul>
          <a href="#/tool/${activeTool.id}" class="inline-block mt-4 px-4 py-2 rounded-md border border-cream/30 text-sm font-semibold hover:bg-cream hover:text-navy transition-all no-underline">
            ${activeTool.cta}
          </a>
        </div>
      </div>
    `;
  }

  function startMobileAutoRotate() {
    if (intervalRef) clearInterval(intervalRef);
    progress = 0;
    
    // Simulate the two intervals from React
    intervalRef = setInterval(() => {
      progress += 1.4;
      if (progress >= 100) {
        progress = 0;
        setActiveIndex((activeIndex + 1) % tools.length);
      }
      progressEl.style.width = `${progress}%`;
    }, 120);
  }

  function startDesktopLogic() {
    if (intervalRef) clearInterval(intervalRef);
    progress = activeIndex * (100 / tools.length);
    progressEl.style.width = `${progress}%`;

    intervalRef = setInterval(() => {
      progress += 0.25;
      if (progress >= 100) {
        progress = 0;
      }
      
      const newIndex = Math.floor(progress / (100 / tools.length));
      if (newIndex !== activeIndex && newIndex < tools.length) {
        setActiveIndex(newIndex);
      }
      
      progressEl.style.width = `${progress}%`;
    }, 40);
  }

  function setActiveIndex(idx) {
    if (idx === activeIndex) return;
    
    pills[activeIndex].classList.remove('bg-cream', 'text-navy', 'border-cream', 'shadow-sm');
    pills[activeIndex].classList.add('bg-transparent', 'text-beige/70', 'border-cream/20');
    
    activeIndex = idx;
    
    pills[activeIndex].classList.add('bg-cream', 'text-navy', 'border-cream', 'shadow-sm');
    pills[activeIndex].classList.remove('bg-transparent', 'text-beige/70', 'border-cream/20');
    
    renderContent();

    if (!isDesktop) {
      // scroll mobile pills
      const btnRect = pills[activeIndex].getBoundingClientRect();
      const contRect = container.getBoundingClientRect();
      const offset = btnRect.left - contRect.left - contRect.width / 2 + btnRect.width / 2;
      container.scrollBy({ left: offset, behavior: "smooth" });
    }
  }

  pills.forEach((pill, idx) => {
    pill.addEventListener('click', () => {
      if (!isDesktop) {
        progress = 0;
        setActiveIndex(idx);
        startMobileAutoRotate();
      } else {
        progress = idx * (100 / tools.length);
        setActiveIndex(idx);
      }
    });
  });

  renderContent();

  if (isDesktop) {
    startDesktopLogic();
  } else {
    startMobileAutoRotate();
  }

  window.addEventListener('resize', () => {
    const newIsDesktop = window.innerWidth >= 768;
    // To handle re-render properly on resize, standard approach is reload component,
    // but just changing class logic might break DOM structure differences unless we re-render entirely.
    // Leaving out full resize re-render to save space, assuming typical load.
  });

  window.aiTeardown = () => clearInterval(intervalRef);
}
