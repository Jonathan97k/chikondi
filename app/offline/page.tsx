export default function OfflinePage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-20 bg-[#20251F] text-[#E8E4D9]">
      <div className="max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#C9A54D]">Chikondi Official</p>
        <h1 className="mt-5 text-4xl sm:text-5xl font-semibold">You’re offline.</h1>
        <p className="mt-5 text-base leading-7 text-[#E8E4D9]/75">
          Your connection is unavailable right now. Reconnect to the internet and try again.
          Pages you have already visited may still be available from your browser cache.
        </p>
        <a href="/" className="inline-flex mt-8 px-6 py-3 bg-[#C9A54D] text-[#20251F] font-semibold">
          Try again
        </a>
      </div>
    </section>
  );
}
