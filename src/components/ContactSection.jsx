import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { profileData } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  // Helper to construct WhatsApp message from form draft
  const getWhatsAppUrl = () => {
    const text = `Hi Rajat,\n\n*Name:* ${formData.name || 'Visitor'}\n*Email:* ${formData.email || 'Not provided'}\n*Subject:* ${formData.subject || 'Portfolio Inquiry'}\n\n*Message:*\n${formData.message || 'Hi Rajat, I would like to connect with you!'}`;
    return `https://wa.me/916388941510?text=${encodeURIComponent(text)}`;
  };

  // Helper to construct Mailto URL from form draft
  const getMailtoUrl = () => {
    const subject = formData.subject || `Portfolio Message from ${formData.name || 'Visitor'}`;
    const body = `Hi Rajat,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`;
    return `mailto:rajatsahu990@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert('Please fill in your Name and Message before sending.');
      return;
    }
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#22c55e', '#ffffff', '#ef4444']
    });
    window.open(getWhatsAppUrl(), '_blank');
    setSubmitted(true);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert('Please fill in your Name and Message before sending.');
      return;
    }
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#ef4444', '#ffffff', '#2f2e41']
    });
    window.location.href = getMailtoUrl();
    setSubmitted(true);
  };

  return (
    <section className="md:w-[75vw] w-[94vw] min-h-[85vh] p-4 sm:p-8 mx-auto pb-24">
      <h1 className="text-center text-white md:text-5xl text-3xl font-bold font-sans md:mb-4 mb-8">
        Contact Me:
      </h1>
      <p className="text-center text-neutral-400 font-mono text-xs sm:text-sm max-w-md mx-auto mb-10">
        Reach out via WhatsApp, phone call, or email. I look forward to connecting!
      </p>

      <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-10 w-full max-w-5xl mx-auto">
        {/* Left Column: Direct channels & WhatsApp link */}
        <div className="md:w-[45%] w-full flex flex-col justify-start space-y-6">
          {/* Direct WhatsApp Action Box */}
          <div className="p-6 bg-[#1b1b1b] border border-green-500/30 rounded-2xl text-center shadow-lg hover:border-green-500/60 transition">
            <div className="w-12 h-12 mx-auto rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-2xl mb-3">
              <i className="fa-brands fa-whatsapp" />
            </div>
            <h2 className="text-white text-xl font-bold mb-1 font-sans">
              Chat on WhatsApp
            </h2>
            <p className="text-xs text-neutral-400 font-mono mb-4">
              Direct chat on mobile: {profileData.phone}
            </p>
            <a
              href={profileData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-mono text-xs font-semibold transition shadow-lg shadow-green-600/25"
            >
              <i className="fa-brands fa-whatsapp text-base" />
              <span>Open WhatsApp Chat</span>
            </a>
          </div>

          {/* Mobile & Phone Box */}
          <div className="p-6 bg-[#1b1b1b] border border-neutral-800 rounded-2xl shadow-lg">
            <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
              Mobile Number
            </h3>
            <div className="flex items-center justify-between gap-3 bg-neutral-900 px-3.5 py-2.5 rounded-xl border border-neutral-700">
              <a
                href={`tel:${profileData.phone}`}
                className="text-xs sm:text-sm font-mono text-white hover:text-[#ef4444] transition flex items-center gap-2 truncate"
              >
                <i className="fa-solid fa-phone text-[#ef4444]" />
                <span>{profileData.phone}</span>
              </a>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="text-xs font-mono bg-neutral-800 hover:bg-[#ef4444] text-white px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 flex-shrink-0"
              >
                <i className={copiedPhone ? "fa-solid fa-check text-green-400" : "fa-regular fa-copy"} />
                <span>{copiedPhone ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Email Copy Box */}
          <div className="p-6 bg-[#1b1b1b] border border-neutral-800 rounded-2xl shadow-lg">
            <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
              Direct Email
            </h3>
            <div className="flex items-center justify-between gap-3 bg-neutral-900 px-3.5 py-2.5 rounded-xl border border-neutral-700">
              <a
                href={`mailto:${profileData.email}`}
                className="text-xs sm:text-sm font-mono text-white hover:text-[#ef4444] transition truncate"
              >
                {profileData.email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-xs font-mono bg-neutral-800 hover:bg-[#ef4444] text-white px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 flex-shrink-0"
              >
                <i className={copiedEmail ? "fa-solid fa-check text-green-400" : "fa-regular fa-copy"} />
                <span>{copiedEmail ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Education & LinkedIn Link */}
          <div className="p-5 bg-[#1b1b1b] border border-neutral-800 rounded-2xl shadow-lg space-y-2.5 font-mono text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <i className="fa-brands fa-linkedin text-[#0077b5] text-sm w-4" />
              <a
                href="https://www.linkedin.com/in/rajat-sahu-444272386"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline underline-offset-4 truncate"
              >
                linkedin.com/in/rajat-sahu-444272386
              </a>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-brands fa-github text-white text-sm w-4" />
              <a
                href="https://github.com/rajatsahu990-bit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline underline-offset-4 truncate"
              >
                github.com/rajatsahu990-bit
              </a>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-graduation-cap text-[#ef4444] text-sm w-4" />
              <span>GL Bajaj Institute of Tech & Mgt (2029)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Send A Message (with WhatsApp & Email sender options) */}
        <div className="md:w-[52%] w-full">
          <div className="bg-[#1b1b1b] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h2 className="text-white font-bold text-2xl mb-1 font-sans">
              Send A Message
            </h2>
            <p className="text-xs text-neutral-400 font-mono mb-6">
              Fill in your message below and choose to send it instantly via WhatsApp or Email.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-neutral-900 border border-green-500/30 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xl">
                  <i className="fa-solid fa-check" />
                </div>
                <h3 className="text-lg font-bold text-white font-mono">
                  Draft Prepared & Sent!
                </h3>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  Thank you, {formData.name || 'there'}! Your drafted message has been initiated. I'll get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-3 text-xs font-mono text-[#ef4444] hover:underline"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white shadow-sm placeholder-neutral-500 focus:outline-none focus:border-[#ef4444] focus:ring-1 focus:ring-[#ef4444] transition"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                      Your Email (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white shadow-sm placeholder-neutral-500 focus:outline-none focus:border-[#ef4444] focus:ring-1 focus:ring-[#ef4444] transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry / Job Opportunity / Greeting"
                    value={formData.subject}
                    onChange={handleChange}
                    className="block w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white shadow-sm placeholder-neutral-500 focus:outline-none focus:border-[#ef4444] focus:ring-1 focus:ring-[#ef4444] transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Hi Rajat, I would like to connect with you regarding..."
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white shadow-sm placeholder-neutral-500 focus:outline-none focus:border-[#ef4444] focus:ring-1 focus:ring-[#ef4444] transition resize-none"
                  />
                </div>

                {/* Dual Action Buttons requested by user: Send via WA or Send via Email */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="flex-1 py-3 px-4 bg-green-600 hover:bg-green-500 text-white font-mono text-xs font-semibold rounded-lg tracking-wider transition-all duration-200 shadow-lg shadow-green-600/20 flex items-center justify-center gap-2"
                  >
                    <i className="fa-brands fa-whatsapp text-base" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendEmail}
                    className="flex-1 py-3 px-4 bg-[#ef4444] hover:bg-red-600 text-white font-mono text-xs font-semibold rounded-lg tracking-wider transition-all duration-200 shadow-lg shadow-red-500/25 flex items-center justify-center gap-2"
                  >
                    <i className="fa-solid fa-envelope text-xs" />
                    <span>Send via Email</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
