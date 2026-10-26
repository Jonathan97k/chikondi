"use client";

import { useState } from "react";

export default function HirePage() {
  const [inquiryType, setInquiryType] = useState("booking");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
    eventDate: "",
    venue: "",
    projectType: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-[#20251F]">
      <div className="mb-12 border-b border-[#D6D9D1] pb-8">
        <span className="text-xs uppercase tracking-widest text-[#C9A54D] font-bold">Inquiries & Booking</span>
        <h1 className="text-4xl font-extrabold mt-2 mb-4">Hire & Collaboration</h1>
        <p className="text-lg text-[#5B6259]">
          Select an inquiry type and submit your project brief, booking details, or partnership proposal.
        </p>
      </div>

      {submitted ? (
        <div className="bg-white rounded-xl p-10 border border-[#C9A54D] shadow-sm text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#C9A54D]/20 text-[#C9A54D] flex items-center justify-center text-2xl mx-auto">
            ✓
          </div>
          <h2 className="text-2xl font-bold">Inquiry Successfully Submitted</h2>
          <p className="text-[#5B6259] max-w-md mx-auto">
            Thank you for reaching out. Your inquiry has been securely recorded and routed for review. We will get back to you shortly.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", phone: "", organization: "", message: "", eventDate: "", venue: "", projectType: "", budget: "" });
            }}
            className="mt-4 px-6 py-2.5 rounded bg-[#20251F] text-[#E8E4D9] font-semibold text-sm hover:bg-[#C9A54D] hover:text-[#20251F] transition-all"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 sm:p-10 border border-[#D6D9D1] shadow-sm space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-[#20251F]">
              Inquiry Type
            </label>
            <select
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
              className="w-full p-3 rounded-lg border border-[#D6D9D1] bg-[#E8E4D9]/30 text-[#20251F] font-medium focus:outline-none focus:border-[#C9A54D]"
            >
              <option value="booking">Music Booking & Performance</option>
              <option value="writing">Scriptwriting & Storytelling</option>
              <option value="production">Audio & Creative Production</option>
              <option value="partnership">Community Partnership / Support</option>
              <option value="general">General Professional Inquiry</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2 text-[#20251F]">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded-lg border border-[#D6D9D1] bg-white text-[#20251F] focus:outline-none focus:border-[#C9A54D]"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-[#20251F]">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 rounded-lg border border-[#D6D9D1] bg-white text-[#20251F] focus:outline-none focus:border-[#C9A54D]"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2 text-[#20251F]">Phone Number (Optional)</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3 rounded-lg border border-[#D6D9D1] bg-white text-[#20251F] focus:outline-none focus:border-[#C9A54D]"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-[#20251F]">Organization / Company (Optional)</label>
              <input
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full p-3 rounded-lg border border-[#D6D9D1] bg-white text-[#20251F] focus:outline-none focus:border-[#C9A54D]"
                placeholder="Organization name"
              />
            </div>
          </div>

          {inquiryType === "booking" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 bg-[#E8E4D9]/40 rounded-lg border border-[#D6D9D1]">
              <div>
                <label className="block text-sm font-bold mb-2 text-[#20251F]">Event Date</label>
                <input
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full p-3 rounded-lg border border-[#D6D9D1] bg-white text-[#20251F]"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-[#20251F]">Venue / Location</label>
                <input
                  type="text"
                  value={formData.venue}
                  onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                  className="w-full p-3 rounded-lg border border-[#D6D9D1] bg-white text-[#20251F]"
                  placeholder="City, Country or Venue"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-bold mb-2 text-[#20251F]">Project Brief / Message *</label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 rounded-lg border border-[#D6D9D1] bg-white text-[#20251F] focus:outline-none focus:border-[#C9A54D]"
              placeholder="Describe your inquiry, project scope, goals, or partnership details..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-lg bg-[#20251F] text-[#E8E4D9] font-bold text-base hover:bg-[#C9A54D] hover:text-[#20251F] transition-all shadow-md"
          >
            Submit Inquiry Securely
          </button>
        </form>
      )}
    </div>
  );
}
