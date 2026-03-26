function renderContact() {
  return `
    <section id="contact" class="pt-12 pb-20 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 bg-gradient-to-br from-beige to-beige-warm scroll-mt-12 md:scroll-mt-26 lg:scroll-mt-22">
      <div class="container">
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-medium mb-7 md:mb-10 text-foreground text-center md:text-left">
          Initiate a Strategic Conversation
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-10 lg:gap-14">
          
          <div class="bg-card border border-border rounded-xl md:rounded-2xl shadow-executive order-2 lg:order-1">
            <div class="px-6 md:px-8 py-5 border-b border-border font-semibold text-sm md:text-base text-foreground">
              Executive Enquiry
            </div>
            <div class="p-6 md:p-8 flex flex-col gap-5 md:gap-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input id="contact-name" name="name" placeholder="Your name" class="w-full px-4 py-3 rounded-lg border border-border bg-transparent" />
                <input id="contact-email" name="email" placeholder="your@email.com" class="w-full px-4 py-3 rounded-lg border border-border bg-transparent" />
              </div>
              <input id="contact-org" name="organization" placeholder="Company / Institution" class="w-full px-4 py-3 rounded-lg border border-border bg-transparent" />
              <textarea id="contact-msg" name="message" rows="2" placeholder="Describe your leadership or advisory requirement..." class="w-full px-4 py-3 rounded-lg border border-border bg-transparent resize-none"></textarea>
              <button id="contact-submit" class="w-full py-3.5 bg-accent hover:bg-sage-hover text-cream font-semibold rounded-lg transition-colors disabled:opacity-60">
                Submit Enquiry
              </button>
            </div>
          </div>

          <div class="space-y-4 md:space-y-5 order-1 lg:order-2">
            <div class="bg-card border border-border rounded-lg p-5 shadow-executive-sm">
              <h4 class="text-xs text-muted-foreground mb-1">Email</h4>
              <strong class="text-foreground">contact@dineshwadhwani.com</strong>
            </div>
            <div class="bg-card border border-border rounded-lg p-5 shadow-executive-sm">
              <h4 class="text-xs text-muted-foreground mb-1">Phone</h4>
              <strong class="text-foreground">+91 • Available on request</strong>
            </div>
            <div class="bg-card border border-border rounded-lg p-5 shadow-executive-sm">
              <h4 class="text-xs text-muted-foreground mb-1">Location</h4>
              <strong class="text-foreground">India · Global Engagements</strong>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

function initContact() {
  const nameEl = document.getElementById('contact-name');
  const emailEl = document.getElementById('contact-email');
  const orgEl = document.getElementById('contact-org');
  const msgEl = document.getElementById('contact-msg');
  const btn = document.getElementById('contact-submit');

  const applyPrefill = () => {
    const saved = localStorage.getItem('contact_prefill');
    if (saved) {
      msgEl.value = saved;
      setTimeout(() => msgEl.focus(), 200);
      localStorage.removeItem('contact_prefill');
    }
  };

  applyPrefill();
  window.addEventListener('contact_prefill_event', applyPrefill);

  btn.addEventListener('click', async () => {
    const form = {
      name: nameEl.value,
      email: emailEl.value,
      organization: orgEl.value,
      message: msgEl.value,
    };

    try {
      btn.disabled = true;
      btn.textContent = "Sending...";

      const res = await fetch("http://localhost:4000/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const result = await res.text();
      alert(result);

      // reset
      nameEl.value = '';
      emailEl.value = '';
      orgEl.value = '';
      msgEl.value = '';
    } catch (err) {
      console.error(err);
      alert("Failed to submit enquiry");
    } finally {
      btn.disabled = false;
      btn.textContent = "Submit Enquiry";
    }
  });
}
