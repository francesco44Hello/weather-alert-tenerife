import React from 'react';

export default function StatusCard({ data }) {
  const { isDanger, rainAmount } = data;

  return (
    <div className={`relative group transition-all duration-700 ease-in-out p-[2px] rounded-[2.5rem] w-full max-w-md
      ${isDanger 
        ? 'bg-gradient-to-br from-red-500 to-orange-600 shadow-[0_20px_50px_rgba(220,38,38,0.3)]' 
        : 'bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-[0_20px_50px_rgba(16,185,129,0.2)]'}`}>
      
      <div className="bg-white/90 backdrop-blur-xl rounded-[2.4rem] p-10 flex flex-col items-center text-center">
        
        {/* Status Indicator Badge */}
        <div className={`mb-8 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.15em] uppercase border transition-colors
          ${isDanger 
            ? 'bg-red-50 text-red-600 border-red-200' 
            : 'bg-emerald-50 text-emerald-600 border-emerald-200'}`}>
          {isDanger ? 'Critical Alert' : 'System Online'}
        </div>

        {/* Visual Icon */}
        <div className="relative mb-6">
          <div className={`absolute -inset-4 rounded-full blur-2xl opacity-30 animate-pulse transition-colors
            ${isDanger ? 'bg-red-500' : 'bg-emerald-400'}`} />
          <span className="relative text-7xl select-none">
            {isDanger ? "⚠️" : "☀️"}
          </span>
        </div>

        {/* Main Instruction */}
        <h2 className={`text-4xl font-black mb-4 tracking-tighter leading-none
          ${isDanger ? 'text-red-600' : 'text-slate-800'}`}>
          {isDanger ? "PUT THE WOOD IN" : "CANGREJO SAFE"}
        </h2>

        {/* Metric Section */}
        <div className="w-full mt-4 pt-8 border-t border-slate-100 flex flex-col items-center">
          <p className="text-slate-400 uppercase tracking-widest text-[9px] font-bold mb-2">
            El Rosario Precipitation
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-7xl font-light text-slate-900 tabular-nums tracking-tight">
              {rainAmount.toFixed(1)}
            </span>
            <span className="text-xl text-slate-400 font-medium">mm/h</span>
          </div>
        </div>

        {/* Action Message */}
        {isDanger && (
          <p className="mt-6 text-sm font-semibold text-red-500 animate-bounce">
            Barranco flow imminent
          </p>
        )}
      </div>
    </div>
  );
}