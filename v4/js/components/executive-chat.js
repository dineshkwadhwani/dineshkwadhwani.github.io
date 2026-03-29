function renderExecutiveChat() {
  return `
    <div id="executive-chat-overlay" class="hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity"></div>
    <div class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      
      <!-- Open Button (Tooltip could be recreated natively, but a simple title attribute works) -->
      <button id="executive-chat-trigger" title="Chat With Dinesh" class="h-14 w-14 rounded-full bg-accent text-cream shadow-executive hover:scale-105 transition-all flex items-center justify-center border-0 outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
      </button>

      <!-- Chat Window -->
      <div id="executive-chat-window" class="hidden fixed bottom-4 right-4 w-[80vw] max-w-[380px] h-[65dvh] sm:relative sm:bottom-auto sm:right-auto sm:w-[380px] sm:h-[480px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-chat">
        
        <!-- Header -->
        <div class="flex items-center justify-between px-5 py-4 border-b border-border flex-shrink-0">
          <div>
            <p class="font-semibold text-foreground text-sm">Chat with Dinesh</p>
            <p class="text-xs text-muted-foreground">Executive advisory assistant</p>
          </div>
          <button id="executive-chat-close" class="text-muted-foreground hover:text-foreground bg-transparent border-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <!-- Messages -->
        <div id="executive-chat-msgs" class="flex-1 p-4 overflow-y-auto flex flex-col gap-3 text-sm">
          <!-- messages injected by JS -->
        </div>

        <!-- Input -->
        <div class="border-t border-border p-3 flex gap-2 flex-shrink-0 items-center">
          <input id="executive-chat-input" type="text" placeholder="Type your message..." class="flex-1 min-w-0 px-3 py-2 rounded-lg border border-border bg-transparent text-sm focus:outline-none" />
          <button id="executive-chat-send" class="flex-shrink-0 flex items-center justify-center rounded-lg bg-accent text-cream font-semibold hover:scale-105 transition w-10 h-10 sm:w-auto sm:h-auto px-0 sm:px-4 border-0">
            <span class="sm:hidden text-base">➤</span>
            <span class="hidden sm:inline">Send</span>
          </button>
        </div>

      </div>
    </div>
    <style>
      .animate-chat { animation: slideUp 0.25s ease-out; }
      @keyframes slideUp { from { transform: translateY(10px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    </style>
  `;
}

function initExecutiveChat() {
  const overlay = document.getElementById('executive-chat-overlay');
  const trigger = document.getElementById('executive-chat-trigger');
  const win = document.getElementById('executive-chat-window');
  const closeBtn = document.getElementById('executive-chat-close');
  const msgsEl = document.getElementById('executive-chat-msgs');
  const inputEl = document.getElementById('executive-chat-input');
  const sendBtn = document.getElementById('executive-chat-send');

  let open = false;
  let messages = [
    { text: "Welcome. Share your leadership context, and I will guide the conversation toward clarity.", isUser: false },
  ];

  function renderMessages() {
    msgsEl.innerHTML = messages.map(m => `
      <div class="px-3 py-2 rounded-lg max-w-[80%] ${m.isUser ? 'bg-accent text-cream self-end' : 'bg-muted text-foreground self-start'}">
        ${m.text}
      </div>
    `).join('');
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }

  function setOpen(val) {
    open = val;
    if (open) {
      overlay.classList.remove('hidden');
      trigger.classList.add('hidden');
      win.classList.remove('hidden');
      document.body.style.overflow = "hidden";
      renderMessages();
    } else {
      overlay.classList.add('hidden');
      trigger.classList.remove('hidden');
      win.classList.add('hidden');
      document.body.style.overflow = "auto";
    }
  }

  trigger.addEventListener('click', () => setOpen(true));
  closeBtn.addEventListener('click', () => setOpen(false));
  overlay.addEventListener('click', () => setOpen(false));

  const handleSend = () => {
    const val = inputEl.value.trim();
    if (!val) return;

    messages.push({ text: val, isUser: true });
    inputEl.value = "";
    renderMessages();

    setTimeout(() => {
      messages.push({ text: "Thank you. What outcome would make this situation successful for you?", isUser: false });
      if (open) renderMessages();
    }, 600);
  };

  sendBtn.addEventListener('click', handleSend);
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSend();
  });
}
