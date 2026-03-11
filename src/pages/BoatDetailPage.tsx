import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Check, Users, Clock, MapPin, ArrowLeft, Phone, Calendar } from 'lucide-react';
import { BOATS, COMPANY } from '../lib/constants';
import { Lightbox } from '../components/Lightbox';

export function BoatDetailPage() {
  const { id } = useParams<{ id: string }>();
  const boat = BOATS.find(b => b.id === id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!boat) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-3xl font-bold text-[#1a365d] mb-4">Boot niet gevonden</h1>
        <Link to="/boten" className="text-[#3182ce] hover:underline">
          Terug naar boten
        </Link>
      </div>
    );
  }

  // Get related boats (same type or similar capacity)
  const relatedBoats = BOATS
    .filter(b => b.id !== id)
    .slice(0, 3);

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#3182ce]">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/boten" className="text-gray-500 hover:text-[#3182ce]">Boten</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#1a365d] font-medium">{boat.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[500px]">
        <img
          src={boat.images[0]}
          alt={boat.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <Link
              to="/boten"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Terug naar boten
            </Link>
            
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-[#3182ce] text-white text-sm rounded-full">
                {boat.type}
              </span>
              {boat.popular && (
                <span className="px-3 py-1 bg-[#f6e05e] text-[#1a365d] text-sm rounded-full font-medium">
                  Populair
                </span>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {boat.name}
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl">
              {boat.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-[#1a365d] mb-6">
                  Over de {boat.name}
                </h2>
                
                <p className="text-gray-600 mb-6">
                  De {boat.name} is een {boat.type.toLowerCase()} met plaats voor maximaal {boat.capacity} personen. 
                  Deze boot is perfect voor {boat.capacity <= 20 ? 'intiemere gezelschappen' : 'grotere gezelschappen'} en biedt 
                  alle faciliteiten voor een onvergetelijke vaartocht door Amsterdam.
                </p>

                <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Faciliteiten</h3>
                
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {boat.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Geschikt voor</h3>
                
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Users className="w-5 h-5 text-[#3182ce]" />
                    <span className="text-gray-700">{boat.minCapacity}-{boat.capacity} personen</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Clock className="w-5 h-5 text-[#3182ce]" />
                    <span className="text-gray-700">2-4 uur</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-[#3182ce]" />
                    <span className="text-gray-700">Amsterdam</span>
                  </div>
                </div>

                {/* Photo Gallery */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-[#1a365d] mb-6">Foto's</h3>
                  <p className="text-gray-600 mb-4">Klik op een foto om deze groter te bekijken</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {boat.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setLightboxIndex(index);
                          setLightboxOpen(true);
                        }}
                        className="group relative aspect-video overflow-hidden rounded-xl cursor-pointer"
                      >
                        <img
                          src={image}
                          alt={`${boat.name} foto ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = boat.images[0];
                          }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                            Vergroot
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Lightbox */}
                <Lightbox
                  images={boat.images.map(img => ({ src: img, alt: boat.name }))}
                  initialIndex={lightboxIndex}
                  isOpen={lightboxOpen}
                  onClose={() => setLightboxOpen(false)}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Price Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 text-[#f6e05e] fill-current" />
                  <span className="font-bold">{boat.rating}</span>
                  <span className="text-gray-500">({boat.reviewCount} reviews)</span>
                </div>

                <div className="text-center mb-6">
                  <span className="text-gray-500">Vanaf prijs per uur</span>
                  <div className="text-5xl font-bold text-[#1a365d]">
                    €{boat.pricePerHour.toFixed(2)}
                  </div>
                  <span className="text-gray-500">per uur</span>
                </div>

                <Link
                  to={`/contact?boot=${boat.id}`}
                  className="block w-full bg-[#3182ce] text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-[#2c5aa0] transition-all shadow-lg mb-3"
                >
                  Offerte aanvragen
                </Link>

                <a
                  href={`tel:${COMPANY.phoneIntl}`}
                  className="flex items-center justify-center gap-2 w-full bg-[#f6e05e] text-[#1a365d] py-4 rounded-xl font-bold hover:bg-[#f6e05e]/90 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  {COMPANY.phone}
                </a>
              </div>

              {/* Info Cards */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-bold text-[#1a365d] mb-4">Belangrijke informatie</h4>
                
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-[#3182ce] shrink-0 mt-0.5" />
                    <span className="text-gray-600">Minimaal 3 dagen van tevoren boeken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Gratis annuleren tot 5 dagen vooraf</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-[#3182ce] shrink-0 mt-0.5" />
                    <span className="text-gray-600">Minimaal {boat.minCapacity} personen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Boats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-8">
            Bekijk ook deze boten
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedBoats.map((relatedBoat) => (
              <Link
                key={relatedBoat.id}
                to={`/boten/${relatedBoat.id}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={relatedBoat.images[0]}
                    alt={relatedBoat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-[#1a365d]">{relatedBoat.name}</h3>
                    <span className="text-xs text-gray-500">{relatedBoat.type}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{relatedBoat.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#3182ce] font-semibold">€{relatedBoat.pricePerHour}/uur</span>
                    <span className="text-xs text-gray-500">Max {relatedBoat.capacity} pers.</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
