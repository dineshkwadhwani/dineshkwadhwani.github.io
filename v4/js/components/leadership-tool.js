function renderLeadershipTool() {
  return `
    <div class="max-w-4xl mx-auto px-4 py-8">
      
      <!-- Header -->
      <div class="text-center mb-10">
        <h1 class="font-display text-4xl md:text-5xl text-foreground mb-4 font-bold tracking-tight">
          Leadership Style Analyzer
        </h1>
        <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
          Discover your natural leading tendencies and learn how to leverage them for team success.
        </p>
      </div>
      
      <!-- Quiz Injection Point -->
      <div id="leadership-quiz-root" class="min-h-[400px]">
        <!-- Quiz will load here -->
      </div>

    </div>
  `;
}

function initLeadershipTool() {
  const rootId = "leadership-quiz-root";

  // 🔥 Use Leadership-specific quiz (NOT global Quiz anymore)
  if (window.LeadershipQuiz) {
    window.LeadershipQuiz.init(rootId);
  } else {
    console.error("LeadershipQuiz not loaded. Check script order in index.html.");

    const root = document.getElementById(rootId);
    if (root) {
      root.innerHTML = `
        <div class="text-center py-20 text-muted-foreground">
          Unable to load the assessment. Please refresh the page.
        </div>
      `;
    }
  }
}