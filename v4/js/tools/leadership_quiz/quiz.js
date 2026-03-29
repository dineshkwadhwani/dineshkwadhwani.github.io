window.LeadershipQuiz = {
  currentQuestionIndex: 0,
  userAnswers: {},
  questions: [],

  init(containerId) {
    this.container = document.getElementById(containerId);
    this.questions = typeof quizQuestions !== 'undefined' ? quizQuestions : [];
    this.currentQuestionIndex = 0;
    this.userAnswers = {};
    this.render();
  },

  render() {
    if (this.questions.length === 0) {
      this.container.innerHTML = Ui.renderError("Question data not found.");
      return;
    }

    const question = this.questions[this.currentQuestionIndex];
    const savedAnswer = this.userAnswers[question.id] || null;

    this.container.innerHTML = Ui.renderQuizContainer(
      this.currentQuestionIndex,
      this.questions.length,
      question,
      savedAnswer
    );
  },

  selectOption(answer) {
    const question = this.questions[this.currentQuestionIndex];

    // ✅ FIXED: only store style string
    this.userAnswers[question.id] = answer;

    // UI highlight
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => {
      if (opt.textContent.trim() === answer) {
        opt.classList.add('border-olive', 'bg-olive/10', 'ring-2', 'ring-olive/20');
      } else {
        opt.classList.remove('border-olive', 'bg-olive/10', 'ring-2', 'ring-olive/20');
      }
    });

    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) nextBtn.disabled = false;
  },

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.submit();
    }
  },

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  async submit() {
    this.container.innerHTML = Ui.renderLoading();

    try {
      const result = await Api.submitQuiz(this.userAnswers);

      this.container.innerHTML = Ui.renderResult(result);
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error) {
      this.container.innerHTML = Ui.renderError(
        "Server unreachable. Please try again."
      );
    }
  },

  restart() {
    this.currentQuestionIndex = 0;
    this.userAnswers = {};
    this.render();
  }
};