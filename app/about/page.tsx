import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 text-[#20251F] sm:px-6 lg:px-8">
      <header className="mb-14 max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#98752E]">About the movement</p>
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">Art, talent, culture and youth empowerment.</h1>
        <p className="mt-6 text-lg leading-relaxed text-[#62665D]">Tokha Creations is a movement focusing on art, talent, culture and youth empowerment.</p>
      </header>

      <section className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-7">
          <div>
            <h2 className="mb-3 text-2xl font-bold">Our creative focus</h2>
            <p className="leading-relaxed text-[#62665D]">Through music, storytelling, acting and film, Tokha Creations provides a platform for creative expression and the development of artistic talent.</p>
          </div>
          <div>
            <h2 className="mb-3 text-2xl font-bold">What we do</h2>
            <ul className="space-y-3 text-[#62665D]">
              <li><strong className="text-[#20251F]">Music production and promotion</strong> — developing and promoting music projects.</li>
              <li><strong className="text-[#20251F]">Scriptwriting</strong> — creating stories and scripts for screen and performance.</li>
              <li><strong className="text-[#20251F]">Acting</strong> — bringing stories and characters to life.</li>
              <li><strong className="text-[#20251F]">Movie directing and production</strong> — shaping film projects from creative vision to production.</li>
            </ul>
          </div>
        </div>
        <aside className="h-fit rounded-2xl border border-[#DED9CC] bg-white p-8 shadow-sm">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#98752E]">Founder</p>
          <h2 className="text-2xl font-extrabold">Chikondi Simple Chagoma</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#62665D]">Founder of Tokha Creations.</p>
          <Link href="/contact" className="mt-7 inline-flex rounded-md bg-[#17251F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#30473A]">Connect with us</Link>
        </aside>
      </section>
    </main>
  );
}