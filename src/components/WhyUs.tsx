import { Ship, UserCheck, MapPin, Utensils, RefreshCw, Star } from 'lucide-react';
import { COMPANY, USP_ITEMS } from '../lib/constants';

const iconMap = {
  ship: Ship,
  captain: UserCheck,
  mapPin: MapPin,
  utensils: Utensils,
  refresh: RefreshCw,
  star: Star,
};

export function WhyUs() {
  return (
    <section id="waarom-ons" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
            Waarom bedrijven voor ons kiezen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Al meer dan {COMPANY.reviewCount.toLocaleString()} tevreden gasten gingen u voor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {USP_ITEMS.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Star;
            
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="p-3 bg-[#3182ce]/10 rounded-lg shrink-0">
                  <IconComponent className="w-6 h-6 text-[#3182ce]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1a365d] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
