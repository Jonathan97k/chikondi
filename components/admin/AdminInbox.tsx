"use client";

import { useCallback, useEffect, useState } from "react";

type InquiryStatus = "new" | "contacted" | "in_discussion" | "confirmed" | "declined" | "closed";
type Inquiry = {
  $id: string;
  $createdAt?: string;
  name?: string;
  email?: string;
  phone?: string;
  service_type?: string;
  message?: string;
  status?: InquiryStatus;
};

const statusLabels: Record<InquiryStatus, string> = {
  new: "New",
  contacted: "Contacted",
  in_discussion: "In discussion",
  confirmed: "Confirmed",
  declined: "Declined",
  closed: "Closed",
};

const statuses = Object.keys(statusLabels) as InquiryStatus[];

export default function AdminInbox() {
  const [rows, setRows] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [savingId, setSavingId] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/inquiries", { cache: "no-store" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "The inbox could not be loaded.");
      setRows(Array.isArray(data.rows) ? data.rows : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "The inbox could not be loaded.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { void load(); }, [load]);

  async function changeStatus(rowId: string, status: InquiryStatus) {
    setSavingId(rowId);
    setError("");
    try {
      const response = await fetch("/api/inquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rowId, status }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "The enquiry could not be updated.");
      setRows((current) => current.map((row) => row.$id === rowId ? { ...row, status } : row));
    } catch (err) {
      setError(err instanceof Error ? err.message : "The enquiry could not be updated.");
    } finally {
      setSavingId("");
    }
  }

  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A17D2F]">Website enquiries</p>
          <h2 className="mt-2 text-2xl font-extrabold">Messages from visitors</h2>
          <p className="mt-1 text-sm text-[#687064]">Private enquiries submitted through the TOKHA booking form.</p>
        </div>
        <button onClick={() => void load()} disabled={loading} className="rounded-lg border border-[#C9CEC4] bg-white px-4 py-2 text-sm font-semibold hover:bg-[#F7F6F1] disabled:opacity-50">
          {loading ? "Refreshing…" : "Refresh inbox"}
        </button>
      </div>

      {error && <p role="alert" className="rounded-lg border border-[#E2C8C1] bg-[#FBF1EE] p-3 text-sm leading-6 text-[#8B3D31]">{error}</p>}

      {loading ? (
        <div className="rounded-xl border border-[#D6D9D1] bg-white p-6 text-sm text-[#687064]">Loading enquiries…</div>
      ) : rows.length === 0 ? (
        <div className="rounded-xl border border-[#D6D9D1] bg-white p-6">
          <h3 className="font-bold">No enquiries yet</h3>
          <p className="mt-2 text-sm leading-6 text-[#687064]">New booking and partnership enquiries will appear here after the server-side Appwrite key is configured and the form is live.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {rows.map((row) => {
            const status = statuses.includes(row.status as InquiryStatus) ? row.status as InquiryStatus : "new";
            return (
              <article key={row.$id} className="rounded-xl border border-[#D6D9D1] bg-white p-5 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-[#20251F]">{row.name || "Unnamed visitor"}</h3>
                      <span className="rounded-full bg-[#F2F0E8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#6D6043]">{statusLabels[status]}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#687064]">
                      {row.email && <a className="underline underline-offset-2 hover:text-[#8A6A25]" href={`mailto:${row.email}`}>{row.email}</a>}
                      {row.phone && <a className="underline underline-offset-2 hover:text-[#8A6A25]" href={`tel:${row.phone}`}>{row.phone}</a>}
                      {row.service_type && <span className="capitalize">{row.service_type.replace(/_/g, " ")}</span>}
                    </div>
                    {row.$createdAt && <p className="mt-2 text-xs text-[#8A8F84]">{new Date(row.$createdAt).toLocaleString()}</p>}
                    <p className="mt-4 whitespace-pre-wrap break-words text-sm leading-6 text-[#3F473D]">{row.message || "No message supplied."}</p>
                  </div>
                  <label className="block shrink-0 text-xs font-semibold text-[#687064]">
                    Update status
                    <select
                      value={status}
                      disabled={savingId === row.$id}
                      onChange={(event) => void changeStatus(row.$id, event.target.value as InquiryStatus)}
                      className="mt-2 block min-w-40 rounded-lg border border-[#D6D9D1] bg-[#FAFAF7] px-3 py-2 text-sm text-[#20251F] disabled:opacity-50"
                    >
                      {statuses.map((item) => <option key={item} value={item}>{statusLabels[item]}</option>)}
                    </select>
                    {savingId === row.$id && <span className="mt-1 block text-[10px]">Saving…</span>}
                  </label>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
