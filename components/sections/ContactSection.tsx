"use client";

import React, { FormEvent, useState } from "react";
import { Mail, Loader2 } from "lucide-react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (!res.ok) throw new Error("Failed to send");
      
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full max-w-[1920px] mx-auto bg-surface flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:py-24"
    >
      {/* Center Container */}
      <div className="w-full max-w-[1160px] mx-auto">
        {/* Header Area */}
        <div className="max-w-[560px] mx-auto flex flex-col items-center text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-brand font-[var(--font-dm-sans,_'DM_Sans',_sans-serif)] text-[13px] font-bold tracking-widest uppercase"
            style={{
              borderColor: "rgba(232, 57, 58, 0.2)",
              backgroundColor: "rgba(232, 57, 58, 0.05)",
            }}
          >
            <Mail size={14} strokeWidth={2.5} />
            CONTACT
          </div>

          {/* Heading */}
          <h2 className="mt-5 font-[var(--font-sans,_sans-serif)] font-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-tight text-[#1A1A1A] tracking-tight">
            We'd Love to Hear From You
          </h2>

          {/* Description */}
          <p className="mt-4 font-[var(--font-dm-sans,_'DM_Sans',_sans-serif)] text-sm sm:text-base leading-relaxed text-[#666666]">
            Have a question, partnership opportunity, feedback, or media
            inquiry? Get in touch.
          </p>
        </div>

        {/* Content Area */}
        <div className="mt-10 lg:mt-14 flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Card (Contact Form) */}
          <form onSubmit={handleSubmit} className="w-full lg:w-1/2 rounded-3xl border border-[#E8E6E1] bg-white p-6 sm:p-8 lg:p-10 shadow-[0px_4px_24px_rgba(0,0,0,0.02)] flex flex-col">
            <h3 className="font-[var(--font-sans,_sans-serif)] font-bold text-lg sm:text-[22px] text-[#1A1A1A] mb-6 sm:mb-8">
              Send a Message
            </h3>

            {/* Name & Email Row */}
            <div className="flex flex-col sm:flex-row gap-4 mb-5">
              <div className="flex-1">
                <label className="block font-[var(--font-dm-sans,_'DM_Sans',_sans-serif)] text-[13px] font-semibold text-[#1A1A1A] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full h-12 rounded-xl bg-[#F6F5F3] border border-transparent px-4 font-[var(--font-dm-sans,_'DM_Sans',_sans-serif)] text-sm outline-none focus:border-brand"
                />
              </div>
              <div className="flex-1">
                <label className="block font-[var(--font-dm-sans,_'DM_Sans',_sans-serif)] text-[13px] font-semibold text-[#1A1A1A] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full h-12 rounded-xl bg-[#F6F5F3] border border-transparent px-4 font-[var(--font-dm-sans,_'DM_Sans',_sans-serif)] text-sm outline-none focus:border-brand"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mb-5">
              <label className="block font-[var(--font-dm-sans,_'DM_Sans',_sans-serif)] text-[13px] font-semibold text-[#1A1A1A] mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                className="w-full h-12 rounded-xl bg-[#F6F5F3] border border-transparent px-4 font-[var(--font-dm-sans,_'DM_Sans',_sans-serif)] text-sm outline-none focus:border-brand"
              />
            </div>

            {/* Message */}
            <div className="flex-1 mb-0">
              <label className="block font-[var(--font-dm-sans,_'DM_Sans',_sans-serif)] text-[13px] font-semibold text-[#1A1A1A] mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                className="w-full h-[120px] rounded-xl bg-[#F6F5F3] border border-transparent p-4 font-[var(--font-dm-sans,_'DM_Sans',_sans-serif)] text-sm outline-none resize-none focus:border-brand"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 mt-6 rounded-full bg-brand text-white font-[var(--font-dm-sans,_'DM_Sans',_sans-serif)] font-semibold text-base border-none flex items-center justify-center gap-2.5 transition-opacity duration-200 hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5" />
                  Sending...
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                  Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="mt-4 text-sm font-medium text-emerald-600 text-center">
                Message sent successfully! We'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-sm font-medium text-red-600 text-center">
                Failed to send message. Please try again or email us directly.
              </p>
            )}
          </form>

          {/* Right Information Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {/* Card 1 — General Inquiries */}
            <div className="rounded-2xl border border-[#E8E6E1] bg-white p-5 sm:p-6 flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(232, 57, 58, 0.1)", color: "#e8393a" }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-[var(--font-sans,_sans-serif)] font-bold text-base text-[#1A1A1A] mb-1">
                  General Inquiries
                </h4>
                <p className="font-[var(--font-dm-sans,_'DM_Sans',_sans-serif)] text-sm text-brand">
                  rupeeletter@gmail.com
                </p>
              </div>
            </div>

            {/* Card 2 — Business & Partnerships */}
            <div className="rounded-2xl border border-[#E8E6E1] bg-white p-5 sm:p-6 flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(0, 196, 181, 0.1)", color: "#00C4B5" }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72l5 2.73 5-2.73v3.72z" />
                </svg>
              </div>
              <div>
                <h4 className="font-[var(--font-sans,_sans-serif)] font-bold text-base text-[#1A1A1A] mb-1.5">
                  Business &amp; Partnerships
                </h4>
                <p className="font-[var(--font-dm-sans,_'DM_Sans',_sans-serif)] text-sm text-[#666666] leading-[22px] mb-1.5">
                  For partnerships, collaborations, media inquiries, and business
                  opportunities:
                </p>
                <p className="font-[var(--font-dm-sans,_'DM_Sans',_sans-serif)] text-sm text-brand">
                  rupeeletter@gmail.com
                </p>
              </div>
            </div>

            {/* Card 3 — Product Feedback */}
            <div className="rounded-2xl border border-[#E8E6E1] bg-white p-5 sm:p-6 flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(255, 176, 32, 0.1)", color: "#FFB020" }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-[var(--font-sans,_sans-serif)] font-bold text-base text-[#1A1A1A] mb-1.5">
                  Product Feedback
                </h4>
                <p className="font-[var(--font-dm-sans,_'DM_Sans',_sans-serif)] text-sm text-[#666666] leading-[22px]">
                  We're constantly improving RupeeLetter AI and value feedback from
                  our users. If you have suggestions or feature requests, we'd love
                  to hear from you.
                </p>
              </div>
            </div>

            {/* Card 4 — Download the App */}
            <div
              className="rounded-2xl border p-5 sm:p-6 flex items-start gap-4 flex-1"
              style={{
                borderColor: "rgba(232, 57, 58, 0.1)",
                backgroundColor: "#FFF5F5",
              }}
            >
              <div className="w-11 h-11 rounded-xl bg-[#e8393a] flex items-center justify-center text-white shrink-0">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z" />
                </svg>
              </div>
              <div>
                <h4 className="font-[var(--font-sans,_sans-serif)] font-bold text-base text-brand mb-1.5">
                  Download the App
                </h4>
                <p className="font-[var(--font-dm-sans,_'DM_Sans',_sans-serif)] text-sm text-[#666666] leading-[22px]">
                  Experience RupeeLetter AI on your phone. Available soon on iOS
                  and Android.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
