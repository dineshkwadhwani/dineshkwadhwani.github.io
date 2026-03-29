const Api = {
  endpoint: "http://127.0.0.1:5000/leadership/analyze", 

  async submitQuiz(answers) {
    try {
      const response = await fetch(this.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ answers })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Failed to submit quiz:", error);
      throw error;
    }
  }
};