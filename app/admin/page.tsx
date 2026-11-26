import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const PROJECT_ID = "6b08286d00341553344a";
const ENDPOINT = "https://fra.cloud.appwrite.io/v1";
const COOKIE_NAME = "tokha_admin_session";

export default async function AdminPage() {
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

  const sections = [
    ["Music", "Add and organise music releases."],
    ["Photography", "Manage photo galleries and featured images."],
    ["Creative projects", "Publish and update TOKHA projects."],
    ["YouTube videos", "Manage video links and featured content."],
    ["Messages", "Review website enquiries."],
    ["Website settings", "Prepare the site for owner handover."],
  ];

  return (
    <main className="min-h-screen bg-[#F6F5F0] px-5 py-12 text-[#20251F]">
      <div className="mx-auto max-w-6xl space-y-9">
        <header className="flex flex-col gap-5 border-b border-[#D6D9D1] pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18B35]">TOKHA CREATIONS · Content management</p>
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
          <h2 className="mt-3 text-2xl font-bold">The website admin area is ready for configuration.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#E2E4DC]">Use this workspace to prepare TOKHA’s content and settings before handing administration to the owner. Content tools will be connected to private storage and the database before they are enabled.</p>
        </section>
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map(([name, description]) => (
            <article key={name} className="rounded-xl border border-[#D6D9D1] bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-[#687064]">{description}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#A17D2F]">Configuration pending</p>
            </article>
          ))}
        </section>
        <p className="text-xs leading-5 text-[#777D73]">No sample content or invented activity figures are shown. Developer access is separate from the owner account and can be withdrawn after handover.</p>
      </div>
    </main>
  );
}
