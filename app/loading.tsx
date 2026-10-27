export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#E8E4D9] text-[#20251F] px-4">
      <div className="flex flex-col items-center space-y-4 animate-pulse">
        <div className="w-16 h-16 rounded-xl bg-[#20251F] p-2 flex items-center justify-center shadow-lg border border-[#C9A54D]/30">
          <img src="/logo.webp" alt="Chikondi Logo" className="w-12 h-12 object-contain filter brightness-110" />
        </div>
        <div className="text-center">
          <h2 className="text-lg font-bold tracking-tight text-[#20251F]">Chikondi Official</h2>
          <p className="text-xs text-[#5B6259] tracking-widest uppercase mt-1">Loading experience...</p>
        </div>
        <div className="w-32 h-1 bg-[#D6D9D1] rounded-full overflow-hidden mt-2">
          <div className="w-full h-full bg-[#C9A54D] animate-[shimmer_1.5s_infinite]"></div>
        </div>
      </div>
    </div>
  );
}
