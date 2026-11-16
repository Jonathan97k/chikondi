import Link from "next/link";

export default function CommunityPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 text-[#20251F] sm:px-6 lg:px-8">
      <header className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#98752E]">People & culture</p>
        <h1 className="text-4xl font-extrabold sm:text-5xl">Creative talent. Shared culture. Youth empowerment.</h1>
        <p className="mt-5 text-lg leading-relaxed text-[#62665D]">Youth empowerment is part of the focus of Tokha Creations. We believe creative expression and cultural storytelling can provide meaningful ways for young people to explore and share their talents.</p>
      </header>
      <div className="rounded-2xl border border-[#DED9CC] bg-white p-8 sm:p-10">
        <h2 className="text-2xl font-bold">Be part of the movement</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#62665D]">If you are a creative, artist, performer or potential collaborator, contact Tokha Creations to discuss an idea or project.</p>
        <Link href="/contact" className="mt-6 inline-flex rounded-md bg-[#17251F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#30473A]">Connect with Tokha Creations</Link>
      </div>
    </main>
  );
}