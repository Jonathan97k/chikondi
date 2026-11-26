import Image from "next/image";

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading TOKHA CREATIONS"
      className="flex min-h-screen flex-col items-center justify-center bg-[#20251F] px-5 text-[#E8E4D9]"
    >
      <div className="flex flex-col items-center gap-6">
        <Image
          src="/images/tokha-creations-logo.webp"
          alt="TOKHA CREATIONS"
          width={480}
          height={321}
          priority
          className="tokha-loading-logo h-auto max-h-56 w-64 object-contain sm:w-80"
        />
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C9A54D]">
            Loading your creative experience
          </p>
        </div>
        <div className="h-1 w-40 overflow-hidden rounded-full bg-white/15">
          <div className="tokha-loading-progress h-full w-1/2 rounded-full bg-[#C9A54D]" />
        </div>
      </div>
    </div>
  );
}
