
export default function StatusCard({ data }) {
  const { isDanger, rainAmount } = data;

  return (
    <div className="max-w-md w-full bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl text-center transform transition-all hover:scale-105">
      <h1 className="text-6xl mb-4 animate-bounce">
        {isDanger ? "⚠️" : "☀️"}
      </h1>
      
      <h2 className={`text-4xl font-black mb-2 tracking-tight ${isDanger ? 'text-red-700' : 'text-emerald-700'}`}>
        {isDanger ? "PUT THE WOOD IN!" : "BOCA CANGREJO SAFE"}
      </h2>

      <div className="space-y-2 border-t pt-6 mt-6 border-gray-200/50">
        <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">
          El Rosario Precipitation
        </p>
        <p className="text-6xl font-mono font-bold text-gray-800">
          {rainAmount.toFixed(1)}
          <span className="text-xl ml-1 text-gray-400">mm/h</span>
        </p>
      </div>
      
      {isDanger && (
        <p className="mt-4 text-sm font-bold text-red-500 animate-pulse">
          High risk of barranco flow detected.
        </p>
      )}
    </div>
  );
}