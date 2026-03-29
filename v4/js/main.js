const appRoot = document.getElementById('app-root');
const chatRoot = document.getElementById('global-chat-root');

// Initialize Global Chat safely
if (chatRoot) {
chatRoot.innerHTML = renderExecutiveChat();
initExecutiveChat();
}

function renderIndexPage() {
appRoot.innerHTML = `     <div class="min-h-screen">
      ${renderHeader()}
      ${renderHero()}
      ${renderJourney()}
      ${renderCredentials()}
      ${renderTestimonials()}
      ${renderAdvisory()}
      ${renderAISection()}
      ${renderContact()}
      ${renderFooter()}     </div>
  `;

initHeader();
initHero();
initJourney();
initCredentials();
initTestimonials();
initAdvisory();
initAISection();
initContact();
}

function renderToolPage(toolId) {
let toolContent = '';

if (toolId === 'style') {
toolContent = renderLeadershipTool();
} else {
// ✅ FIXED LINE
toolContent = `<div class="text-center text-muted-foreground py-20">Tool not found.</div>`;
}

appRoot.innerHTML = `     <div class="min-h-screen hero-radial">       <div class="container py-16">
        ${toolContent}       </div>     </div>
  `;

if (toolId === 'style') {
initLeadershipTool();
}
}

function renderNotFoundPage() {
appRoot.innerHTML = `     <div class="flex min-h-screen items-center justify-center bg-muted">       <div class="text-center">         <h1 class="mb-4 text-4xl font-bold">404</h1>         <p class="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>         <a href="#/" class="text-primary underline hover:text-primary/90">
          Return to Home         </a>       </div>     </div>
  `;
}

const anchorHashes = ['#journey', '#advisory', '#ai', '#contact'];

function router() {
const hash = window.location.hash || '#/';

// Handle anchor links
if (anchorHashes.includes(hash)) {
const targetId = hash.replace('#', '');

```
if (!document.getElementById(targetId)) {
  renderIndexPage();
  setTimeout(() => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  }, 100);
}
return;
```

}

// Routes
if (hash === '#/' || hash === '#' || hash === '') {
renderIndexPage();
} else if (hash.startsWith('#/tool/')) {
const toolId = hash.split('/')[2]?.split('?')[0];
renderToolPage(toolId);
} else {
renderNotFoundPage();
}

window.scrollTo(0, 0);
}

// Ensure DOM is ready
window.addEventListener('DOMContentLoaded', () => {
router();
window.addEventListener('hashchange', router);
});
