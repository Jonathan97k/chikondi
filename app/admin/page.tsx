import { Suspense } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminInbox from "@/components/admin/AdminInbox";

const PROJECT_ID = "6b08286d00341553344a";
const ENDPOINT = "https://fra.cloud.appwrite.io/v1";
const COOKIE_NAME = "tokha_admin_session";
const MFA_COOKIE_NAME = "tokha_admin_mfa_verified";

export default function AdminPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[#F6F5F0] px-5 py-20 text-center text-[#5B6259]">Loading secure admin workspace…</main>}>
      <AdminDashboard />
    </Suspense>
  );
}

async function AdminDashboard() {
  const cookieStore = await cookies();
  const sessionSecret = cookieStore.get(COOKIE_NAME)?.value;
  if (!sessionSecret) redirect("/admin/login");

  const accountResponse = await fetch(`${ENDPOINT}/account`, {
    headers: { "X-Appwrite-Project": PROJECT_ID, "X-Appwrite-Session": sessionSecret },
    cache: "no-store",
  });
  const account = accountResponse.ok ? await accountResponse.json() : null;
  const email = String(account?.email ?? "").toLowerCase();
  const developer = email === "kaphirikwikwete97@gmail.com";
  const owner = email === "simplechicco864@gmail.com";

  if (!developer && !owner) redirect("/admin/login");
  if (account.mfa !== true) redirect("/admin/security/setup");
  if (cookieStore.get(MFA_COOKIE_NAME)?.value !== "1") redirect("/admin/login");

  const sections = [
    ["Music catalogue", "Manage releases, artwork and approved streaming links."],
    ["Photography & media", "Upload and organise approved images and artwork."],
    ["Creative projects", "Publish films, writing, galleries and announcements."],
    ["YouTube videos", "Manage featured videos and channel content."],
    ["Website settings", "Update approved contact and website information."],
  ];

  return (
    <main className="min-h-screen bg-[#F6F5F0] px-5 py-12 text-[#20251F]">
      <div className="mx-auto max-w-6xl space-y-9">
        <header className="flex flex-col gap-5 border-b border-[#D6D9D1] pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18B35]">TOKHA CREATIONS · Administration</p>
            <h1 className="text-3xl font-extrabold sm:text-4xl">Admin dashboard</h1>
            <p className="text-sm text-[#5B6259]">Signed in as {email}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-[#D6D9D1] bg-white px-3 py-2 text-xs font-bold">{developer ? "Developer · Super Admin" : "Owner · Admin"}</span>
            <form action="/api/admin/logout" method="post"><button className="rounded-lg border border-[#C9CEC4] px-4 py-2 text-sm font-semibold hover:bg-white">Sign out</button></form>
          </div>
        </header>

        <section className="rounded-2xl bg-[#20251F] p-7 text-white sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8B85F]">Welcome to the control room</p>
          <h2 className="mt-3 text-2xl font-bold">Manage TOKHA enquiries and prepare the creative catalogue.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#E2E4DC]">Administrator access is protected by an emailed sign-in link and Google Authenticator. Enquiries are private to the approved owner and developer accounts.</p>
        </section>

        <AdminInbox />

        <section className="space-y-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A17D2F]">Next content tools</p>
            <h2 className="mt-2 text-2xl font-extrabold">Website content management</h2>
            <p className="mt-1 text-sm text-[#687064]">These sections are not enabled yet; do not rely on them for publishing changes.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map(([name, description]) => (
              <article key={name} className="rounded-xl border border-[#D6D9D1] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#687064]">{description}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#A17D2F]">Not enabled</p>
              </article>
            ))}
          </div>
        </section>

        <p className="text-xs leading-5 text-[#777D73]">No sample content or invented activity figures are shown. Developer access is separate from the owner account and can be withdrawn after handover.</p>
      </div>
    </main>
  );
}
