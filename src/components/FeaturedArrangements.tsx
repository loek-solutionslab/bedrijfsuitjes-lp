import { Link } from 'react-router-dom';
import { Utensils, Soup, Wine, Flame, Presentation, ArrowRight } from 'lucide-react';
import { ARRANGEMENTS } from '../lib/constants';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  utensils: Utensils,
  soup: Soup,
  wine: Wine,
  flame: Flame,
  presentation: Presentation,
};

export function FeaturedArrangements() {
  const featured = ARRANGEMENTS.slice(0, 4);

  return (
    <section id="arrangementen" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
            Populaire Arrangementen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Van intiem diner tot groot netwerkevent - wij regelen alles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((arrangement) => {
            const IconComponent = iconMap[arrangement.icon] || Wine;
            
            return (
              <Link
                key={arrangement.id}
                to={`/arrangementen/${arrangement.id}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#3182ce]/30 transform hover:-translate-y-1"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src="https://production-bha.b-cdn.net//uploads/page_section/photo/1216/slideshow_2x_Diner_op_een_boot_in_Amsterdam.jpg"
                    alt={arrangement.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {arrangement.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#f6e05e] text-[#1a365d]">
                        {arrangement.badge}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <IconComponent className="w-4 h-4 text-[#3182ce]" />
                    <h3 className="font-bold text-[#1a365d]">{arrangement.name}</h3>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">
                    {arrangement.description.slice(0, 60)}...
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#1a365d]">{arrangement.price} p.p.</span>
                    <ArrowRight className="w-4 h-4 text-[#3182ce] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/arrangementen"
            className="inline-flex items-center gap-2 bg-[#3182ce] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2c5aa0] transition-colors"
          >
            Bekijk alle arrangementen
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
