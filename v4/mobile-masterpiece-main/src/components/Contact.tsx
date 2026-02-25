import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const contactInfo = [
    { label: "Email", value: "contact@dineshwadhwani.com" },
    { label: "Phone", value: "+91 • Available on request" },
    { label: "Location", value: "India · Global Engagements" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:4000/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.text();
      alert(result);

      // reset
      setForm({
        name: "",
        email: "",
        organization: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to submit enquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="pt-12 pb-20 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 bg-gradient-to-br from-beige to-beige-warm scroll-mt-12 md:scroll-mt-26 lg:scroll-mt-22"
    >
      <div className="container">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-medium mb-7 md:mb-10 text-foreground text-center md:text-left">
          Initiate a Strategic Conversation
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-10 lg:gap-14">
          {/* Enquiry Form */}
          <div className="bg-card border border-border rounded-xl md:rounded-2xl shadow-executive order-2 lg:order-1">
            {/* Header */}
            <div className="px-6 md:px-8 py-5 border-b border-border font-semibold text-sm md:text-base text-foreground">
              Executive Enquiry
            </div>

            {/* Form */}
            <div className="p-6 md:p-8">
              <div className="flex flex-col gap-5 md:gap-6">

                {/* Row 1 - Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="text-xs md:text-sm text-muted-foreground block mb-1.5">
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-transparent text-foreground focus:outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs md:text-sm text-muted-foreground block mb-1.5">
                      Email Address
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-transparent text-foreground focus:outline-none"
                    />
                  </div>
                </div>

                {/* Organization */}
                <div>
                  <label className="text-xs md:text-sm text-muted-foreground block mb-1.5">
                    Organization
                  </label>
                  <input
                    name="organization"
                    value={form.organization}
                    onChange={handleChange}
                    type="text"
                    placeholder="Company / Institution"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-transparent text-foreground focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs md:text-sm text-muted-foreground block mb-1.5">
                    Your Enquiry
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Describe your leadership or advisory requirement..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-transparent text-foreground focus:outline-none resize-none"
                  />
                </div>

                {/* Button */}
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full py-3.5 bg-accent hover:bg-sage-hover text-cream font-semibold rounded-lg transition-colors disabled:opacity-60 mt-2"
                >
                  {loading ? "Sending..." : "Submit Enquiry"}
                </button>

              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 md:space-y-5 order-1 lg:order-2">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg md:rounded-xl p-4 md:p-5 lg:p-6 shadow-executive-sm"
              >
                <h4 className="text-xs md:text-sm text-muted-foreground mb-1 md:mb-1.5">
                  {info.label}
                </h4>
                <strong className="text-foreground text-sm md:text-base">
                  {info.value}
                </strong>
              </div>
            ))}

            <div className="bg-gradient-card border border-border rounded-lg md:rounded-xl p-4 md:p-5 lg:p-6 mt-6 md:mt-8">
              <strong className="text-foreground text-sm md:text-base block mb-1.5 md:mb-2">
                Open to strategic conversations
              </strong>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                Available for leadership roles, advisory engagements, and
                high-impact initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
