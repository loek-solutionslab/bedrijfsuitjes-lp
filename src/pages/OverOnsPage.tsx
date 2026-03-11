import { Ship, Users, Award, MapPin } from 'lucide-react';
import { COMPANY, USP_ITEMS } from '../lib/constants';
import { Gallery } from '../components/Gallery';

export function OverOnsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#1a365d] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Over Boot Huren Amsterdam
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Al jaren dé specialist in bedrijfsuitjes op de Amsterdamse grachten. 
              Met {COMPANY.boatCount} luxe boten en {COMPANY.locationCount} opstaplocaties bent u bij ons aan het juiste adres.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#f6e05e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Ship, value: COMPANY.boatCount, label: 'Luxe boten' },
              { icon: Users, value: '2-200', label: 'Personen' },
              { icon: Award, value: COMPANY.rating, label: 'Beoordeling' },
              { icon: MapPin, value: COMPANY.locationCount, label: 'Opstaplocaties' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#1a365d]" />
                <div className="text-3xl md:text-4xl font-bold text-[#1a365d]">
                  {stat.value}
                </div>
                <div className="text-[#1a365d]/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
              Waarom kiezen voor ons?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {USP_ITEMS.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 bg-[#3182ce]/10 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-2xl">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <Gallery />
    </div>
  );
}
