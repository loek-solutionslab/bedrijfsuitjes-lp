import { Ship, Users, Star, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../lib/constants';

const BOATS = [
  {
    id: 1,
    name: 'Salonboot De Amsterdam',
    type: 'Salonboot',
    capacity: '20-40 personen',
    features: ['Overdekt', 'Verwarming', 'Bar aan boord', 'Geluidsinstallatie'],
    image: 'https://production-bha.b-cdn.net//uploads/page_section/photo/1216/slideshow_2x_Diner_op_een_boot_in_Amsterdam.jpg',
    popular: true
  },
  {
    id: 2,
    name: 'Rondvaartboot De IJ',
    type: 'Rondvaartboot',
    capacity: '60-100 personen',
    features: ['Overdekt', ' panoramadek', 'Catering mogelijk', 'A/V apparatuur'],
    image: 'https://production-bha.b-cdn.net//uploads/page_section/photo/1116/slideshow_2x_Borrel_op_boot_in_Amsterdam.jpg',
    popular: false
  },
  {
    id: 3,
    name: 'Sloep De Gracht',
    type: 'Sloep',
    capacity: '8-12 personen',
    features: ['Open', 'Gezellig', 'Intiem', 'Flexibel'],
    image: 'https://production-bha.b-cdn.net//uploads/page_section/photo/1142/slideshow_2x_Buffet_op_een_boot_in_Amsterdam.jpg',
    popular: false
  },
  {
    id: 4,
    name: 'Luxe Salonboot De Keizer',
    type: 'Luxury Salonboot',
    capacity: '30-50 personen',
    features: ['VIP ruimte', 'Volledig ingericht', 'Horeca aan boord', 'Airco'],
    image: 'https://production-bha.b-cdn.net//uploads/page_section/photo/1158/slideshow_2x_11406636_832146906841301_831726696146516709_n.png',
    popular: true
  },
  {
    id: 5,
    name: 'Partyboot De Dansvloer',
    type: 'Partyboot',
    capacity: '80-150 personen',
    features: ['Dansvloer', 'DJ booth', 'Lichtinstallatie', 'Bar'],
    image: 'https://production-bha.b-cdn.net//uploads/page_section/photo/1216/slideshow_2x_Diner_op_een_boot_in_Amsterdam.jpg',
    popular: true
  },
  {
    id: 6,
    name: 'Vergaderboot De Boardroom',
    type: 'Vergaderboot',
    capacity: '15-25 personen',
    features: ['Beamer', 'Scherm', 'Wifi', 'Catering'],
    image: 'https://production-bha.b-cdn.net//uploads/page_section/photo/1116/slideshow_2x_Borrel_op_boot_in_Amsterdam.jpg',
    popular: false
  }
];

export function BotenPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#1a365d] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Onze Boten
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Keuze uit {COMPANY.boatCount} luxe boten, van intieme sloepen tot grote rondvaartboten. 
              Voor elk gezelschap hebben wij de perfecte boot.
            </p>
          </div>
        </div>
      </section>

      {/* Filter/Info Bar */}
      <section className="bg-[#f6e05e] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              'Alle boten',
              '2-20 personen',
              '20-60 personen',
              '60+ personen',
              'Met catering',
              'Vergaderen'
            ].map((filter, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  index === 0 
                    ? 'bg-[#1a365d] text-white' 
                    : 'bg-white/50 text-[#1a365d] hover:bg-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Boats Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BOATS.map((boat) => (
              <div
                key={boat.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={boat.image}
                    alt={boat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {boat.popular && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#f6e05e] text-[#1a365d] px-3 py-1 rounded-full text-sm font-bold">
                        Populair
                      </span>
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-white/90 px-3 py-1 rounded-full">
                    <Users className="w-4 h-4 text-[#3182ce]" />
                    <span className="text-sm font-medium">{boat.capacity}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Ship className="w-5 h-5 text-[#3182ce]" />
                    <span className="text-sm text-gray-500">{boat.type}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1a365d] mb-4">
                    {boat.name}
                  </h3>

                  <div className="space-y-2 mb-6">
                    {boat.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="block w-full bg-[#3182ce] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#2c5aa0] transition-colors"
                  >
                    Offerte aanvragen
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a365d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-[#f6e05e] fill-current" />
              ))}
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Niet zeker welke boot het beste past?
          </h2>
          
          <p className="text-xl text-white/80 mb-8">
            Onze specialisten helpen u graag bij het kiezen van de perfecte boot voor uw gezelschap.
          </p>
          
          <Link
            to="/contact"
            className="inline-block bg-[#f6e05e] text-[#1a365d] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#f6e05e]/90 transition-all shadow-lg"
          >
            Vrijblijvend advies ontvangen
          </Link>
        </div>
      </section>
    </div>
  );
}
