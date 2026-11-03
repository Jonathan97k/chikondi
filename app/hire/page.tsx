"use client";

import { useState } from "react";

type FormFields = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  inquiryType: string;
  eventDate: string;
  venue: string;
  message: string;
};

const initialForm: FormFields = {
  name: "", email: "", phone: "", organization: "", inquiryType: "booking",
  eventDate: "", venue: "", message: "",
};

export default function HirePage() {
  const [form, setForm] = useState<FormFields>(initialForm);
  const [notice, setNotice] = useState("");

  function update<K extends keyof FormFields>(key: K, value: FormFields[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setNotice("");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const inquiry = [
      "CHIKONDI WEBSITE — INQUIRY",
      `Type: ${form.inquiryType}`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not supplied"}`,
      `Organization: ${form.organization || "Not supplied"}`,
      `Event date: ${form.eventDate || "Not supplied"}`,
      `Venue: ${form.venue || "Not supplied"}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(inquiry);
      setNotice("Inquiry copied to your clipboard. It has NOT been sent or received by Chikondi. Please paste it into your email or messaging app and send it using his confirmed contact details.");
    } catch {
      setNotice("Your device did not allow clipboard access. No inquiry was sent. Please copy your details manually and use Chikondi’s confirmed contact channel.");
    }
  }

  return (
    <div className="bg-[#eee9dd] text-[#20251f]">
      <section className="bg-[#171d18] px-6 py-20 text-[#f4efe4] sm:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-5xl"><p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#c9a96c]">Bookings · Commissions · Partnerships</p><h1 className="mt-5 font-serif text-5xl leading-[.98] sm:text-7xl">Start a meaningful<br /><em className="text-[#c9a96c]">conversation.</em></h1><p className="mt-7 max-w-2xl text-sm leading-7 text-[#d7d3c8]">Share the details of your performance booking, writing commission, production brief or community partnership.</p></div>
      </section>
      <section className="mx-auto grid max-w-5xl gap-12 px-6 py-16 sm:px-12 lg:grid-cols-[.7fr_1.3fr] lg:px-20">
        <aside><p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#92713d]">Before you begin</p><h2 className="mt-4 font-serif text-3xl">Tell us what you have in mind.</h2><p className="mt-4 text-sm leading-7 text-[#686b61]">Provide enough detail to understand your request. This form currently prepares a message on your device; it does not transmit data to a server.</p><p className="mt-6 border-l-2 border-[#c9a96c] pl-4 text-xs leading-6 text-[#686b61]">Your information is not submitted or stored by this page. The copied inquiry must be sent separately through a verified contact channel.</p></aside>
        <form onSubmit={handleSubmit} className="space-y-6 border border-[#d2cbbb] bg-[#f7f3ea] p-6 sm:p-9">
          <div><label htmlFor="inquiryType" className="mb-2 block text-[10px] font-bold uppercase tracking-[.2em]">What is your inquiry about?</label><select id="inquiryType" value={form.inquiryType} onChange={(e) => update("inquiryType", e.target.value)} className="w-full border border-[#d2cbbb] bg-white p-3 text-sm"><option value="booking">Music booking / performance</option><option value="writing">Scriptwriting / film</option><option value="production">Music / video production</option><option value="partnership">Community partnership / support</option><option value="general">General professional inquiry</option></select></div>
          <div className="grid gap-5 sm:grid-cols-2"><div><label htmlFor="name" className="mb-2 block text-[10px] font-bold uppercase tracking-[.2em]">Full name *</label><input id="name" required value={form.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" className="w-full border border-[#d2cbbb] bg-white p-3 text-sm" /></div><div><label htmlFor="email" className="mb-2 block text-[10px] font-bold uppercase tracking-[.2em]">Email address *</label><input id="email" required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" className="w-full border border-[#d2cbbb] bg-white p-3 text-sm" /></div></div>
          <div className="grid gap-5 sm:grid-cols-2"><div><label htmlFor="phone" className="mb-2 block text-[10px] font-bold uppercase tracking-[.2em]">Phone (optional)</label><input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" className="w-full border border-[#d2cbbb] bg-white p-3 text-sm" /></div><div><label htmlFor="organization" className="mb-2 block text-[10px] font-bold uppercase tracking-[.2em]">Organization (optional)</label><input id="organization" value={form.organization} onChange={(e) => update("organization", e.target.value)} autoComplete="organization" className="w-full border border-[#d2cbbb] bg-white p-3 text-sm" /></div></div>
          {form.inquiryType === "booking" && <div className="grid gap-5 sm:grid-cols-2"><div><label htmlFor="eventDate" className="mb-2 block text-[10px] font-bold uppercase tracking-[.2em]">Event date</label><input id="eventDate" type="date" value={form.eventDate} onChange={(e) => update("eventDate", e.target.value)} className="w-full border border-[#d2cbbb] bg-white p-3 text-sm" /></div><div><label htmlFor="venue" className="mb-2 block text-[10px] font-bold uppercase tracking-[.2em]">Venue / location</label><input id="venue" value={form.venue} onChange={(e) => update("venue", e.target.value)} className="w-full border border-[#d2cbbb] bg-white p-3 text-sm" /></div></div>}
          <div><label htmlFor="message" className="mb-2 block text-[10px] font-bold uppercase tracking-[.2em]">Project brief / message *</label><textarea id="message" required rows={6} value={form.message} onChange={(e) => update("message", e.target.value)} className="w-full border border-[#d2cbbb] bg-white p-3 text-sm" placeholder="Tell us about the project, date, scope and what you need..." /></div>
          <button type="submit" className="w-full bg-[#20271f] px-6 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-[#f1eee5] transition hover:bg-[#92713d]">Copy inquiry details</button>
          {notice && <p role="status" aria-live="polite" className="border-l-2 border-[#92713d] bg-[#e3ddcf] p-4 text-sm leading-6 text-[#45483f]">{notice}</p>}
        </form>
      </section>
    </div>
  );
}
