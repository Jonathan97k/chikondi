"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate secure admin authentication
    router.push("/admin/dashboard");
  };

  return (
    <div className="max-w-md mx-auto px-4 py-24 text-[#20251F]">
      <div className="bg-white rounded-xl p-8 border border-[#D6D9D1] shadow-sm space-y-6">
        <div className="text-center">
          <span className="text-xs uppercase tracking-widest text-[#C9A54D] font-bold">Restricted Area</span>
          <h1 className="text-2xl font-extrabold mt-1">Admin CMS Login</h1>
          <p className="text-xs text-[#5B6259] mt-1">Authorized personnel only. No public registration.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-1 text-[#20251F]">Admin Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg border border-[#D6D9D1] text-sm focus:outline-none focus:border-[#C9A54D]"
              placeholder="admin@chikondi.official"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-1 text-[#20251F]">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg border border-[#D6D9D1] text-sm focus:outline-none focus:border-[#C9A54D]"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#20251F] text-[#E8E4D9] font-bold text-sm hover:bg-[#C9A54D] hover:text-[#20251F] transition-all shadow"
          >
            Sign In to CMS
          </button>
        </form>
      </div>
    </div>
  );
}
