import { Users } from 'lucide-react';

export function GroupSizes() {
  const sizes = [
    { range: '2-12', label: 'Intieme salonboten', percentage: 25 },
    { range: '12-30', label: 'Middelgrote boten', percentage: 45 },
    { range: '30-60', label: 'Grote salonboten', percentage: 70 },
    { range: '60-200', label: 'Rondvaartboten & combinaties', percentage: 100 },
  ];

  return (
    <section className="py-20 bg-[#1a365d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Van klein tot groot - wij regelen het
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Of u nu met 2 of 200 personen bent, wij hebben de perfecte boot voor uw gezelschap
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {sizes.map((size, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#f6e05e] rounded-full">
                  <Users className="w-6 h-6 text-[#1a365d]" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {size.range}
              </div>
              <div className="text-white/80 text-sm">
                personen
              </div>
              <div className="mt-4 text-[#f6e05e] font-medium">
                {size.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#f6e05e] text-[#1a365d] px-8 py-3 rounded-lg font-bold hover:bg-[#f6e05e]/90 transition-all">
            Bekijk alle boten per groepsgrootte
          </button>
        </div>
      </div>
    </section>
  );
}
