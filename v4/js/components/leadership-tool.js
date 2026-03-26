function drawRadarCanvas(canvas, traits) {
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  const cx = width / 2;
  const cy = height / 2;
  const outerRadius = Math.min(width, height) * 0.35; // ~70% of half width

  ctx.clearRect(0, 0, width, height);

  const entries = Object.entries(traits);
  const numTraits = entries.length;
  if (numTraits === 0) return;

  const angleStep = (Math.PI * 2) / numTraits;

  // Draw Grid circles
  ctx.strokeStyle = '#e5e7eb'; // typical Tailwind border color or light gray for polar grid
  ctx.lineWidth = 1;

  for (let i = 1; i <= 5; i++) {
    const r = (outerRadius / 5) * i;
    ctx.beginPath();
    for (let j = 0; j < numTraits; j++) {
      const angle = j * angleStep - Math.PI / 2;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (j === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }

  // Draw Grid Lines (spokes)
  for (let j = 0; j < numTraits; j++) {
    const angle = j * angleStep - Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(angle) * outerRadius, cy + Math.sin(angle) * outerRadius);
    ctx.stroke();
  }

  // Draw Labels
  ctx.fillStyle = '#666'; // muted foreground
  ctx.font = '12px "Inter", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  for (let j = 0; j < numTraits; j++) {
    const angle = j * angleStep - Math.PI / 2;
    const rLabel = outerRadius + 20; 
    const x = cx + Math.cos(angle) * rLabel;
    const y = cy + Math.sin(angle) * rLabel;
    ctx.fillText(entries[j][0], x, y);
  }

  // Draw Data Polygon
  ctx.beginPath();
  for (let j = 0; j < numTraits; j++) {
    const angle = j * angleStep - Math.PI / 2;
    // Assuming trait values are normalized to 0-10 or 0-100? Assuming 0-10 for drawing logic or we scale max
    // Let's assume values are between 0 and 10 based on typical radar max
    // Wait, let's find the max value. Typical Recharts auto scales.
    const maxVal = Math.max(...entries.map(e => e[1])) || 10;
    const scale =  10; // Let's fix to out of 10 if we don't know, or use max
    // use a static out of 10 unless it exceeds
    const domainMax = Math.max(10, maxVal);

    const val = entries[j][1];
    const rData = (val / domainMax) * outerRadius;

    const x = cx + Math.cos(angle) * rData;
    const y = cy + Math.sin(angle) * rData;

    if (j === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();

  ctx.fillStyle = 'rgba(107, 142, 35, 0.5)'; // #6b8e23 opacity 0.5
  ctx.fill();
  ctx.strokeStyle = '#6b8e23';
  ctx.lineWidth = 2;
  ctx.stroke();
}

function renderLeadershipTool() {
  return `
    <div class="max-w-6xl mx-auto px-4">
      <h1 class="font-display text-3xl md:text-4xl text-foreground mb-8 text-center">
        Leadership Assessment
      </h1>
      
      <div id="leadership-grid" class="grid gap-8 grid-cols-1">
        
        <!-- Chat container -->
        <div id="leadership-chat-container" class="bg-white/60 backdrop-blur-xl rounded-3xl shadow-lg border border-border p-6 overflow-y-auto transition-all h-[460px]">
          <div id="leadership-msgs" class="space-y-4">
             <!-- msgs injected by js -->
          </div>
          <div id="leadership-bottom-anchor"></div>
        </div>

        <!-- Radar appears AFTER finish -->
        <div id="leadership-radar-container" class="hidden bg-white/60 backdrop-blur-xl rounded-3xl shadow-lg border border-border p-6">
          <h2 class="text-lg md:text-xl font-semibold mb-4 text-center">
            Leadership Trait Profile
          </h2>
          <div class="w-full flex justify-center items-center h-[320px] md:h-[420px]">
             <canvas id="leadership-radar-canvas" width="400" height="400" class="max-w-full h-auto"></canvas>
          </div>
        </div>

      </div>

      <!-- Input hidden after finish -->
      <div id="leadership-input-area" class="flex gap-3 mt-5">
        <input id="leadership-input" class="flex-1 px-4 py-3 rounded-xl border border-border bg-white outline-none" placeholder="Type your answer..." />
        <button id="leadership-send" class="px-6 py-3 rounded-xl bg-olive text-white font-medium hover:opacity-90 transition border-0">
          Send
        </button>
      </div>

    </div>
  `;
}

function initLeadershipTool() {
  const API = "http://127.0.0.1:5000";
  let sessionId = null;
  let finished = false;
  let traits = null;
  let messages = [];

  const grid = document.getElementById('leadership-grid');
  const chatCont = document.getElementById('leadership-chat-container');
  const radarCont = document.getElementById('leadership-radar-container');
  const inputEl = document.getElementById('leadership-input');
  const sendBtn = document.getElementById('leadership-send');
  const msgsEl = document.getElementById('leadership-msgs');
  const inputArea = document.getElementById('leadership-input-area');
  const canvas = document.getElementById('leadership-radar-canvas');

  function renderMessages() {
    msgsEl.innerHTML = messages.map(m => `
      <div class="flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}">
        <div class="max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-olive text-white' : 'bg-muted text-foreground'}">
          ${m.content}
        </div>
      </div>
    `).join('');
    
    // auto scroll
    const bottom = document.getElementById('leadership-bottom-anchor');
    bottom?.scrollIntoView({ behavior: 'smooth' });
  }

  async function startSession() {
    try {
      const res = await fetch(`${API}/start`, { method: "POST" });
      const data = await res.json();
      sessionId = data.session_id;

      if (data.question?.text) {
        messages = [{ role: "ai", content: data.question.text }];
        renderMessages();
      }
    } catch (err) {
      console.error("Failed to start session:", err);
    }
  }

  async function send() {
    const userMessage = inputEl.value.trim();
    if (!userMessage || !sessionId || finished) return;

    messages.push({ role: "user", content: userMessage });
    inputEl.value = "";
    renderMessages();

    try {
      const res = await fetch(`${API}/answer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, answer: userMessage })
      });
      const data = await res.json();

      if (data.done) {
        finished = true;
        traits = data.traits;
        
        messages.push({ role: "ai", content: "Assessment complete." });
        messages.push({ role: "ai", content: data.report.summary });
        renderMessages();

        // Reveal radar
        radarCont.classList.remove('hidden');
        inputArea.classList.add('hidden');
        chatCont.classList.replace('h-[460px]', 'h-[360px]');
        grid.classList.add('lg:grid-cols-2');

        // Draw radar
        if (canvas) {
           drawRadarCanvas(canvas, traits);
        }

        return;
      }

      if (data.reflection) {
        messages.push({ role: "ai", content: data.reflection });
      }

      if (data.next_question?.text) {
        messages.push({ role: "ai", content: data.next_question.text });
      }

      renderMessages();
    } catch (err) {
      console.error("Answer submission failed:", err);
    }
  }

  startSession();

  sendBtn.addEventListener('click', send);
  inputEl.addEventListener('keydown', e => {
    if (e.key === 'Enter') send();
  });
}
