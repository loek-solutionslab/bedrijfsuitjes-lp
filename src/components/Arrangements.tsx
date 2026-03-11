import { Utensils, Soup, Wine, Flame, Presentation, Handshake, Heart, Cake, PartyPopper, ArrowRight } from 'lucide-react';
import { ARRANGEMENTS } from '../lib/constants';

interface ArrangementsProps {
  onArrangementClick: (arrangementId: string) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  utensils: Utensils,
  soup: Soup,
  wine: Wine,
  flame: Flame,
  presentation: Presentation,
  handshake: Handshake,
  heart: Heart,
  cake: Cake,
  party: PartyPopper,
};

export function Arrangements({ onArrangementClick }: ArrangementsProps) {
  return (
    <section id="arrangementen" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
            Kies uw arrangement
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Van intiem diner tot groot netwerkevent - wij regelen alles
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARRANGEMENTS.map((arrangement, index) => {
            const IconComponent = iconMap[arrangement.icon] || Wine;
            
            return (
              <div
                key={arrangement.id}
                onClick={() => onArrangementClick(arrangement.id)}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 hover:border-[#3182ce]/30 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`https://production-bha.b-cdn.net//uploads/page_section/photo/${
                      arrangement.id === 'diner' ? '1216' :
                      arrangement.id === 'borrel' ? '1116' :
                      arrangement.id === 'buffet' ? '1142' :
                      arrangement.id === 'bbq' ? '1158' :
                      '1216'
                    }/slideshow_2x_${
                      arrangement.id === 'diner' ? 'Diner_op_een_boot_in_Amsterdam' :
                      arrangement.id === 'borrel' ? 'Borrel_op_boot_in_Amsterdam' :
                      arrangement.id === 'buffet' ? 'Buffet_op_een_boot_in_Amsterdam' :
                      arrangement.id === 'bbq' ? '11406636_832146906841301_831726696146516709_n' :
                      'Diner_op_een_boot_in_Amsterdam'
                    }.jpg`}
                    alt={arrangement.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://production-bha.b-cdn.net//uploads/page_section/photo/1216/slideshow_2x_Diner_op_een_boot_in_Amsterdam.jpg';
                    }}
                  />
                  
                  {/* Badge */}
                  {arrangement.badge && (
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        arrangement.badge === 'Meest populair'
                          ? 'bg-[#f6e05e] text-[#1a365d]'
                          : arrangement.badge === 'Zomer favoriet'
                          ? 'bg-orange-500 text-white'
                          : arrangement.badge === 'Luxe'
                          ? 'bg-purple-600 text-white'
                          : 'bg-[#3182ce] text-white'
                      }`}>
                        {arrangement.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#3182ce]/10 rounded-lg">
                        <IconComponent className="w-5 h-5 text-[#3182ce]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#1a365d]">
                        {arrangement.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {arrangement.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">Vanaf</span>
                      <div className="text-2xl font-bold text-[#1a365d]">
                        {arrangement.price}
                        <span className="text-sm font-normal text-gray-500"> p.p.</span>
                      </div>
                    </div>

                    <button className="flex items-center gap-2 text-[#3182ce] font-semibold group-hover:gap-3 transition-all">
                      Meer info
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
