import Image from "next/image";
import Link from "next/link";

const pillars = [
  { number: "01", title: "Music", detail: "Music production, promotion and the stories behind the sound.", href: "/music", action: "Explore music", image: "/images/simple-chicco-dzinia-lanu-cover.webp", alt: "Simple Chicco — Dzinia Lanu music artwork", imageClass: "object-cover" },
  { number: "02", title: "Films & Writing", detail: "Scriptwriting, acting, directing and visual storytelling.", href: "/writing", action: "Explore stories", image: "/images/nzotheka-film-poster.webp", alt: "N'zotheka film poster", imageClass: "object-cover" },
  { number: "03", title: "Production", detail: "Creative production and collaboration across music and film.", href: "/production", action: "View production", image: "/images/tokha-creative-team-wide.webp", alt: "TOKHA CREATIONS team working together", imageClass: "object-contain bg-[#101710] p-4 sm:p-6" },
  { number: "04", title: "About TOKHA", detail: "The people, purpose and creative movement behind the work.", href: "/about", action: "Meet the team", image: "/images/tokha-creative-team-portrait.webp", alt: "TOKHA CREATIONS team portrait", imageClass: "object-contain bg-[#101710] p-4 sm:p-6" },
  { number: "05", title: "Community", detail: "Art, culture and youth empowerment through creative work.", href: "/community", action: "Learn more", community: true, image: "", alt: "Malawian village life and cultural celebrations", imageClass: "" },
  { number: "06", title: "Bookings", detail: "Performances, commissions and creative collaborations.", href: "/hire", action: "Make an inquiry", image: "/images/tokha-creations-logo.webp", alt: "TOKHA CREATIONS official logo", imageClass: "object-contain p-10 sm:p-12" },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#090f0b] text-[#f4efe4]">
      <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden">
        <Image src="/images/tokha-creative-team-wide.webp" alt="The TOKHA CREATIONS creative team" fill priority sizes="100vw" className="object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080e09]/95 via-[#080e09]/75 to-[#080e09]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080e09] via-transparent to-black/20" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1600px] flex-col justify-between px-5 pb-7 pt-8 sm:px-10 sm:pb-9 lg:px-16 xl:px-20">
          <div className="flex items-center justify-between gap-3 text-[9px] font-bold uppercase tracking-[.2em] text-white/85 sm:text-xs sm:tracking-[.3em]">
            <span>Art · Talent · Culture</span><span className="hidden sm:block">A creative movement from Malawi</span>
          </div>
          <div className="max-w-4xl py-20">
            <p className="mb-3 font-serif text-3xl italic text-[#f5c400] sm:text-5xl">Welcome to</p>
            <h1 className="font-serif text-[clamp(4rem,12vw,10rem)] font-black leading-[.8] tracking-[-.07em] text-[#fffaf0] drop-shadow-[0_8px_35px_rgba(0,0,0,.55)]">TOKHA<br />CREATIONS</h1>
            <div className="mt-7 h-[5px] w-64 max-w-full bg-gradient-to-r from-[#e31b23] via-[#f5c400] to-[#168b42]" />
            <p className="mt-7 max-w-2xl font-serif text-xl italic leading-relaxed text-[#f5c400] sm:text-3xl">A movement focusing on art, talent, culture and youth empowerment.</p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base">Music production and promotion, scriptwriting, acting, movie directing and film production — brought together through creativity and storytelling.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/play" className="inline-flex items-center gap-3 rounded-full bg-[#f5c400] px-7 py-4 text-xs font-black uppercase tracking-wider text-[#11170f] shadow-xl transition hover:-translate-y-1 hover:bg-[#ffe05a]">▶ <span>Listen & watch</span></Link>
              <Link href="/about" className="inline-flex items-center gap-3 rounded-full border border-white/80 bg-black/25 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white backdrop-blur transition hover:border-[#f5c400] hover:bg-white/10">Meet TOKHA ↗</Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/25 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[9px] font-semibold uppercase tracking-[.24em] text-white/75">Music · Film · Creative Arts</span>
            <Link href="/music" className="flex items-center gap-4 rounded-full border border-white/25 bg-black/50 px-4 py-3 backdrop-blur-md transition hover:border-[#f5c400] sm:min-w-[300px]">
              <Image src="/images/simple-chicco-dzinia-lanu-cover.webp" alt="" width={48} height={48} className="h-12 w-12 rounded-md object-cover" />
              <span className="flex-1"><span className="block text-xs font-bold text-white">Featured artwork</span><span className="block text-[10px] text-white/60">Simple Chicco · Dzinia Lanu</span></span><span className="text-[#f5c400]">↗</span>
            </Link>
            <span className="text-[9px] font-semibold uppercase tracking-[.24em] text-white/75">Malawi · Beyond</span>
          </div>
        </div>
      </section>

      <section className="bg-[#090f0b] px-5 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto mb-9 flex max-w-[1440px] flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p className="text-[10px] font-black uppercase tracking-[.3em] text-[#f5c400]">Explore the movement</p><h2 className="mt-3 font-serif text-4xl sm:text-5xl">Creative work. Shared purpose.</h2></div>
          <p className="max-w-lg text-sm leading-6 text-white/60">Discover the different disciplines and ways to connect with TOKHA CREATIONS.</p>
        </div>
        <div className="mx-auto grid max-w-[1440px] gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {pillars.map((item) => (
            <Link key={item.number} href={item.href} className="group relative isolate flex min-h-[330px] flex-col justify-end overflow-hidden rounded-2xl border border-white/15 bg-[#172018] transition duration-300 hover:-translate-y-1 hover:border-[#f5c400]/70 sm:min-h-[370px]">
              {item.community ? (
                <div className="tokha-community-card-slideshow absolute inset-0 z-0" role="img" aria-label="Malawian village life, traditional drumming and cultural celebrations">
                  <img src="https://images.pexels.com/photos/36884525/pexels-photo-36884525/free-photo-of-aerial-view-of-rural-village-in-malawi.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="" className="tokha-community-card-photo tokha-community-card-photo-one" />
                  <img src="https://thenewsmongers.wordpress.com/wp-content/uploads/2022/07/ingoma-dance-during-the-coronation-pic-by-gracian-jeke-mana.jpg?w=1400" alt="" className="tokha-community-card-photo tokha-community-card-photo-two" />
                  <img src="https://mafrsouthernafrica.files.wordpress.com/2016/06/open-day-2008-28.jpg" alt="" className="tokha-community-card-photo tokha-community-card-photo-three" />
                </div>
              ) : (
                <Image src={item.image} alt={item.alt} fill sizes="(min-width: 1280px) 32vw, (min-width: 640px) 48vw, 100vw" className={`z-0 ${item.imageClass} transition duration-700 group-hover:scale-105`} />
              )}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#070c08] via-[#070c08]/55 to-[#070c08]/5" />
              <div className="absolute inset-0 z-10 bg-[#090f0b]/10 transition group-hover:bg-transparent" />
              <div className="relative z-20 p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[.25em] text-[#f5c400]">{item.number}</span>
                  <span className="rounded-full border border-white/35 bg-black/25 px-3 py-1 text-[9px] font-bold uppercase tracking-[.18em] text-white/80 backdrop-blur">TOKHA</span>
                </div>
                <h3 className="mt-7 font-serif text-3xl text-white sm:text-4xl">{item.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-white/75">{item.detail}</p>
                <span className="mt-5 flex items-center justify-between border-t border-white/25 pt-4 text-[10px] font-bold uppercase tracking-[.2em] text-[#f5c400]">{item.action}<span className="text-lg transition group-hover:translate-x-2">↗</span></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#f0eadc] px-5 py-16 text-[#1b241b] sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative overflow-hidden"><Image src="/images/tokha-creative-team-portrait.webp" alt="TOKHA CREATIONS team portrait" width={1200} height={1500} sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[4/5] w-full object-cover" /></div>
          <div className="py-4"><p className="text-[10px] font-black uppercase tracking-[.3em] text-[#98752e]">The people behind the work</p><h2 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">Rooted in culture.<br/><em className="text-[#98752e]">Moving forward.</em></h2><p className="mt-6 max-w-xl text-base leading-8 text-[#55594f]">TOKHA CREATIONS brings creative disciplines together around art, talent, culture and youth empowerment. Meet the team and explore the work taking shape.</p><Link href="/about" className="mt-7 inline-flex border-b border-[#98752e] pb-2 text-[10px] font-black uppercase tracking-[.2em]">Discover TOKHA ↗</Link></div>
        </div>
      </section>
    </main>
  );
}
