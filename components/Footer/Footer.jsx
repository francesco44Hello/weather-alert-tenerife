export default function Footer() {
    return (
      <footer className="mt-12 flex flex-col items-center gap-4 py-6">
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-8 bg-white/20" />
          <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em]">
            Boca Cangrejo Sentinel
          </p>
          <div className="h-[1px] w-8 bg-white/20" />
        </div>
        
        <p className="text-white/40 text-[9px] max-w-[200px] text-center leading-relaxed font-medium uppercase italic">
          Real-time microclimate monitoring for mountain runoff safety
        </p>
      </footer>
    );
  }