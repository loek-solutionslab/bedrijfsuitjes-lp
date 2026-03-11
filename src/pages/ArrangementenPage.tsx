import { Link } from 'react-router-dom';
import { Utensils, Soup, Wine, Flame, Presentation, Handshake, Heart, Cake, PartyPopper, ArrowRight, Check } from 'lucide-react';
import { ARRANGEMENTS } from '../lib/constants';

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

export function ArrangementenPage() {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-[#1a365d] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Onze Arrangementen
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Van intiem diner tot groot netwerkevent - wij regelen alles. 
              Kies uit onze 10 verschillende arrangementen voor het perfecte bedrijfsuitje.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#f6e05e] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              '38 luxe boten',
              '2-200 personen',
              '120+ opstaplocaties',
              'Catering op maat',
              'Gratis annuleren tot 5 dagen'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#1a365d]" />
                <span className="font-semibold text-[#1a365d]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arrangements Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARRANGEMENTS.map((arrangement) => {
              const IconComponent = iconMap[arrangement.icon] || Wine;
              
              return (
                <Link
                  key={arrangement.id}
                  to={`/arrangementen/${arrangement.id}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#3182ce]/30 transform hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
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
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://production-bha.b-cdn.net//uploads/page_section/photo/1216/slideshow_2x_Diner_op_een_boot_in_Amsterdam.jpg';
                      }}
                    />
                    
                    {/* Badge */}
                    {arrangement.badge && (
                      <div className="absolute top-4 left-4">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${
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
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 bg-[#3182ce]/10 rounded-xl">
                        <IconComponent className="w-6 h-6 text-[#3182ce]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1a365d]">
                        {arrangement.name}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-6 text-lg">
                      {arrangement.description}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div>
                        <span className="text-sm text-gray-500">Vanaf</span>
                        <div className="text-3xl font-bold text-[#1a365d]">
                          {arrangement.price}
                          <span className="text-base font-normal text-gray-500"> p.p.</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-[#3182ce] font-bold group-hover:gap-4 transition-all">
                        Meer info
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a365d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Niet zeker welk arrangement het beste past?
          </h2>
          
          <p className="text-xl text-white/80 mb-8">
            Onze specialisten helpen u graag bij het kiezen van het perfecte arrangement voor uw gezelschap.
          </p>
          
          <Link
            to="/contact"
            className="inline-block bg-[#f6e05e] text-[#1a365d] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#f6e05e]/90 transition-all shadow-lg hover:shadow-xl"
          >
            Vrijblijvend advies ontvangen
          </Link>
        </div>
      </section>
    </div>
  );
}
