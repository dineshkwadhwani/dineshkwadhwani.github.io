function renderHeader() {
  return `
    <header id="site-header" class="sticky top-0 z-50 border-b border-border/50 glass animate-header-enter transition-all duration-300">
      <div class="container">
        <nav class="flex h-16 md:h-[72px] items-center justify-between">
          <!-- Logo -->
          <a href="#/" class="flex items-center">
            <img src="assets/logo.png" alt="Leadership Authority" class="h-[50px] md:h-[54px] lg:h-[58px] w-auto object-contain" onerror="this.src='/logo.png'" />
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-6 lg:gap-7">
            <a href="#journey" class="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Executive Journey</a>
            <a href="#advisory" class="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Executive Advisory</a>
            <a href="#ai" class="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">AI Intelligence</a>
            <a href="#contact" class="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Engage</a>
          </div>

          <!-- Mobile Menu Button -->
          <button id="mobile-menu-btn" class="md:hidden p-2 -mr-2 text-foreground" aria-label="Toggle menu" aria-expanded="false">
            <svg id="menu-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            <svg id="close-icon" class="hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </nav>

        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="hidden md:hidden border-t border-border/30 animate-mobile-menu">
          <div class="flex flex-col gap-1 py-4">
            <a href="#journey" class="mobile-nav-link text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors text-base py-3 px-4 rounded-lg">Executive Journey</a>
            <a href="#advisory" class="mobile-nav-link text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors text-base py-3 px-4 rounded-lg">Executive Advisory</a>
            <a href="#ai" class="mobile-nav-link text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors text-base py-3 px-4 rounded-lg">AI Intelligence</a>
            <a href="#contact" class="mobile-nav-link text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors text-base py-3 px-4 rounded-lg">Engage</a>
          </div>
        </div>
      </div>
    </header>
  `;
}

function initHeader() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const iconMenu = document.getElementById('menu-icon');
  const iconClose = document.getElementById('close-icon');
  const header = document.getElementById('site-header');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  let open = false;

  const toggle = () => {
    open = !open;
    if (open) {
      menu.classList.remove('hidden');
      iconMenu.classList.add('hidden');
      iconClose.classList.remove('hidden');
      header.classList.add('backdrop-blur-md');
    } else {
      menu.classList.add('hidden');
      iconMenu.classList.remove('hidden');
      iconClose.classList.add('hidden');
      header.classList.remove('backdrop-blur-md');
    }
  };

  btn.addEventListener('click', toggle);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (open) toggle();
    });
  });
}
