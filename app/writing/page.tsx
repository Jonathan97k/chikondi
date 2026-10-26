import Link from "next/link";

export default function WritingPage() {
  const projects = [
    {
      slug: "voices-of-the-valley",
      title: "Voices of the Valley",
      format: "Feature Film Screenplay",
      genre: "Drama / Social Realism",
      logline: "A resilient community organizer champions local youth against corporate displacement.",
      status: "Completed Draft",
    },
    {
      slug: "roots-and-concrete",
      title: "Roots and Concrete",
      format: "Television Pilot",
      genre: "Drama / Cultural Series",
      logline: "Navigating identity, heritage, and artistic expression in a changing metropolitan landscape.",
      status: "In Development",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-[#20251F]">
      <div className="mb-12 border-b border-[#D6D9D1] pb-8">
        <span className="text-xs uppercase tracking-widest text-[#C9A54D] font-bold">Scriptwriting Portfolio</span>
        <h1 className="text-4xl font-extrabold mt-2 mb-4">Narrative Projects & Screenwriting</h1>
        <p className="text-lg text-[#5B6259] max-w-3xl">
          Explore approved scriptwriting projects, synopses, and storytelling deliverables. Unpublished scripts remain private.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {projects.map((project) => (
          <div key={project.slug} className="bg-white rounded-xl p-8 border border-[#D6D9D1] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="py-1 px-3 rounded-full bg-[#20251F] text-[#C9A54D] text-xs font-semibold uppercase">
                  {project.format}
                </span>
                <span className="text-xs text-[#5B6259] font-medium">{project.status}</span>
              </div>
              <h2 className="text-2xl font-bold mb-1 text-[#20251F]">{project.title}</h2>
              <p className="text-xs text-[#C9A54D] font-semibold mb-4 uppercase tracking-wider">{project.genre}</p>
              <p className="text-[#5B6259] text-sm leading-relaxed mb-6 italic">
                "{project.logline}"
              </p>
            </div>
            <div className="pt-4 border-t border-[#D6D9D1] flex justify-between items-center text-xs text-[#5B6259]">
              <span>Confidential / Rights Protected</span>
              <span>Inquiry Required for Access</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#20251F] text-[#E8E4D9] rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-3 text-[#C9A54D]">Commission a Scriptwriting Project</h3>
        <p className="text-sm text-[#E8E4D9]/80 max-w-xl mx-auto mb-6">
          Submit your project format, premise, timeline, and collaboration brief for scriptwriting services.
        </p>
        <Link
          href="/hire"
          className="inline-block py-3 px-6 rounded bg-[#C9A54D] text-[#20251F] font-bold text-sm hover:bg-[#b8933e] transition-all"
        >
          Submit Scriptwriting Brief
        </Link>
      </div>
    </div>
  );
}
