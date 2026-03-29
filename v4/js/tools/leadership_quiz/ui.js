const Ui = {
  renderQuizContainer(currentQuestionIndex, totalQuestions, question, savedAnswer) {
    const progressText = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
    const progressWidth = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    return `
      <div id="quiz-card" class="bg-white/60 backdrop-blur-xl rounded-3xl shadow-lg border border-border p-8 transition-all animate-fadeIn">
        
        <!-- Progress -->
        <div class="mb-8">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm text-muted-foreground">${progressText}</span>
            <span class="text-sm text-muted-foreground">${Math.round(progressWidth)}%</span>
          </div>
          <div class="w-full bg-muted rounded-full h-2">
            <div class="bg-olive h-2 rounded-full transition-all duration-500" style="width: ${progressWidth}%"></div>
          </div>
        </div>

        <!-- Question -->
        <h2 class="text-xl md:text-2xl font-semibold mb-6 text-foreground">
          ${question.question}
        </h2>

        <!-- Options -->
<div class="space-y-3">
  ${question.options.map(option => `
    
    <label 
      class="flex items-center gap-4 px-6 py-4 rounded-xl border cursor-pointer transition-all
      ${savedAnswer === option.style ? 'border-blue-500 bg-blue-50' : 'border-border hover:border-blue-400'}
      "
    >

      <!-- REAL RADIO -->
      <input 
        type="radio"
        name="quiz-option-${question.id}"
        value="${option.style}"
        ${savedAnswer === option.style ? 'checked' : ''}
        class="accent-blue-500 w-5 h-5"
        onclick="LeadershipQuiz.selectOption('${option.style}')"
      />

      <!-- Text -->
      <span class="text-sm md:text-base">
        ${option.text}
      </span>

    </label>

  `).join('')}
</div>

        <!-- Navigation -->
        <div class="flex justify-between items-center mt-10">
          <button 
            class="px-6 py-3 rounded-xl border border-border text-muted-foreground 
            ${currentQuestionIndex === 0 ? 'invisible' : ''}" 
            onclick="LeadershipQuiz.previousQuestion()">
            Previous
          </button>

          <button 
            id="next-btn"
            class="px-8 py-3 rounded-xl bg-olive text-white 
            ${!savedAnswer ? 'opacity-40 cursor-not-allowed' : ''}"
            
            ${!savedAnswer ? 'disabled' : ''}
            onclick="LeadershipQuiz.nextQuestion()">
            
            ${currentQuestionIndex === totalQuestions - 1 ? 'Finish Assessment' : 'Next'}
          </button>
        </div>

      </div>
    `;
  },

  renderResult(result) {
    const traitScores = this.convertToTraits(result.scores);

    setTimeout(() => {
      const ctx = document.getElementById('radarChart');

      new Chart(ctx, {
        type: 'radar',
        data: {
          labels: Object.keys(traitScores),
          datasets: [{
            label: 'Leadership Traits',
            data: Object.values(traitScores),
            fill: true
          }]
        },
        options: {
          scales: {
            r: {
              beginAtZero: true,
              max: 10
            }
          }
        }
      });
    }, 100);

    return `
    <div class="bg-white/60 backdrop-blur-xl rounded-3xl shadow-lg border p-8 text-center">
      
      <h2 class="text-sm uppercase text-muted-foreground mb-2">
        Assessment Complete
      </h2>

      <h1 class="text-3xl font-bold mb-4">
        ${result.style}
      </h1>

      <p class="mb-6 text-foreground/80">
        ${result.description}
      </p>

      <!-- 🔥 HEXAGRAM CHART -->
      <div class="max-w-md mx-auto mb-8">
        <canvas id="radarChart"></canvas>
      </div>

      <!-- Score Breakdown -->
      <div class="space-y-3 mb-6">
        ${Object.entries(result.scores).map(([style, score]) => `
          <div>
            <div class="flex justify-between text-sm">
              <span>${style}</span>
              <span>${score}</span>
            </div>
            <div class="w-full bg-muted h-2 rounded-full">
              <div class="bg-olive h-2 rounded-full" style="width:${score * 20}%"></div>
            </div>
          </div>
        `).join('')}
      </div>

      <button 
        class="px-6 py-3 bg-olive text-white rounded-xl"
        onclick="LeadershipQuiz.restart()">
        Restart
      </button>
    </div>
  `;
  },

  renderLoading() {
    return `
      <div class="text-center py-20">
        <div class="loader mb-4"></div>
        <p>Analyzing...</p>
      </div>
    `;
  },
  convertToTraits(scores) {
    const traits = {
      Trust: 0,
      Communication: 0,
      Decision: 0,
      Delegation: 0,
      Vision: 0,
      Adaptability: 0
    };

    for (let style in scores) {
      const val = scores[style];

      if (style === "Democratic") {
        traits.Trust += val;
        traits.Communication += val;
      }

      if (style === "Autocratic") {
        traits.Decision += val;
      }

      if (style === "Laissez-faire") {
        traits.Delegation += val;
      }

      if (style === "Transformational") {
        traits.Vision += val;
        traits.Adaptability += val;
      }
    }

    return traits;
  },

  renderError(message) {
    return `
      <div class="text-center text-red-500 py-20">
        <p>${message}</p>
        <button onclick="LeadershipQuiz.restart()">Retry</button>
      </div>
    `;
  }
};