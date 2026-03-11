import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Ship, Users, Star, Check } from 'lucide-react';
import { BOATS, COMPANY } from '../lib/constants';
import { Lightbox } from '../components/Lightbox';

export function BotenPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<{ src: string; alt: string }[]>([]);

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
              '60+ personen'
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
                <div className="relative h-56 overflow-hidden"
                >
                  <img
                    src={boat.images[0]}
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
                  
                  <button
                    onClick={() => {
                      setLightboxImages(boat.images.map(img => ({ src: img, alt: boat.name })));
                      setLightboxIndex(0);
                      setLightboxOpen(true);
                    }}
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-colors"
                  >
                    <span className="text-sm">{boat.images.length} foto's</span>
                  </button>
                  
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-white/90 px-3 py-1 rounded-full">
                    <Users className="w-4 h-4 text-[#3182ce]" />
                    <span className="text-sm font-medium">Max {boat.capacity}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Ship className="w-5 h-5 text-[#3182ce]" />
                    <span className="text-sm text-gray-500">{boat.type}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 text-[#f6e05e] fill-current" />
                    <span className="text-sm font-medium">{boat.rating}</span>
                    <span className="text-sm text-gray-500">({boat.reviewCount})</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1a365d] mb-2">
                    {boat.name}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">{boat.description}</p>

                  <div className="space-y-2 mb-6">
                    {boat.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-sm text-gray-500">Vanaf</span>
                      <div className="text-2xl font-bold text-[#1a365d]">
                        €{boat.pricePerHour}
                        <span className="text-sm font-normal text-gray-500">/uur</span>
                      </div>
                    </div>
                    
                    <Link
                      to={`/boten/${boat.id}`}
                      className="bg-[#3182ce] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#2c5aa0] transition-colors"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

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
