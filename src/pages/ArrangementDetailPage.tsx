import { useParams, Link } from 'react-router-dom';
import { Star, Check, Clock, Users, MapPin, ArrowLeft, Calendar, Phone } from 'lucide-react';
import { ARRANGEMENTS, COMPANY } from '../lib/constants';

export function ArrangementDetailPage() {
  const { id } = useParams<{ id: string }>();
  const arrangement = ARRANGEMENTS.find(a => a.id === id);

  if (!arrangement) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-3xl font-bold text-[#1a365d] mb-4">Arrangement niet gevonden</h1>
        <Link to="/arrangementen" className="text-[#3182ce] hover:underline">
          Terug naar arrangementen
        </Link>
      </div>
    );
  }

  // Get related arrangements
  const relatedArrangements = ARRANGEMENTS
    .filter(a => a.id !== id)
    .slice(0, 3);

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#3182ce]">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/arrangementen" className="text-gray-500 hover:text-[#3182ce]">Arrangementen</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#1a365d] font-medium">{arrangement.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[500px]">
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
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <Link
              to="/arrangementen"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Terug naar arrangementen
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {arrangement.name}
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl">
              {arrangement.description}
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
                  Wat is {arrangement.name}?
                </h2>
                
                <p className="text-gray-600 mb-6">
                  {arrangement.name} is het perfecte arrangement voor uw bedrijfsuitje op de Amsterdamse grachten. 
                  Samen met onze ervaren schippers en cateraars zorgen wij voor een onvergetelijke ervaring.
                </p>

                <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Wat is inclusief?</h3>
                
                <ul className="space-y-3 mb-8">
                  {[
                    'Privé boot met ervaren schipper',
                    arrangement.name.includes('Diner') || arrangement.name.includes('Buffet') || arrangement.name.includes('BBQ') 
                      ? 'Uitgebreide catering' 
                      : 'Drankjes en hapjes',
                    'Vaart van 2 tot 4 uur door Amsterdam',
                    'Keuze uit 120+ opstaplocaties',
                    'Flexibele annulering tot 5 dagen van tevoren',
                    'Mogelijkheid tot aanpassingen aan uw wensen'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Geschikt voor</h3>
                
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Users className="w-5 h-5 text-[#3182ce]" />
                    <span className="text-gray-700">2-200 personen</span>
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

                <div className="bg-[#f6e05e]/10 border-l-4 border-[#f6e05e] p-6 rounded-r-lg mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-[#f6e05e] fill-current" />
                    <span className="font-bold text-[#1a365d]">Tip van onze specialisten</span>
                  </div>
                  <p className="text-gray-700">
                    Voor de beste ervaring adviseren wij een vaart van minimaal 3 uur. 
                    Zo heeft u genoeg tijd om te genieten van het eten en de mooie grachten van Amsterdam.
                  </p>
                </div>

                {/* Atmosphere Photos */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-[#1a365d] mb-6">Sfeerimpressie</h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      {
                        src: 'https://production-bha.b-cdn.net//uploads/page_section/photo/1216/slideshow_2x_Diner_op_een_boot_in_Amsterdam.jpg',
                        alt: 'Diner aan boord'
                      },
                      {
                        src: 'https://production-bha.b-cdn.net//uploads/page_section/photo/1116/slideshow_2x_Borrel_op_boot_in_Amsterdam.jpg',
                        alt: 'Borrel op boot'
                      },
                      {
                        src: 'https://production-bha.b-cdn.net//uploads/page_section/photo/1142/slideshow_2x_Buffet_op_een_boot_in_Amsterdam.jpg',
                        alt: 'Buffet op boot'
                      },
                      {
                        src: 'https://production-bha.b-cdn.net//uploads/page_section/photo/1158/slideshow_2x_11406636_832146906841301_831726696146516709_n.png',
                        alt: 'Gezellige sfeer aan boord'
                      },
                      {
                        src: 'https://production-bha.b-cdn.net//uploads/page_section/photo/1216/slideshow_2x_Diner_op_een_boot_in_Amsterdam.jpg',
                        alt: 'Amsterdamse grachten'
                      },
                      {
                        src: 'https://production-bha.b-cdn.net//uploads/page_section/photo/1116/slideshow_2x_Borrel_op_boot_in_Amsterdam.jpg',
                        alt: 'Bedrijfsuitje op boot'
                      }
                    ].map((photo, index) => (
                      <div key={index} className="group relative aspect-square overflow-hidden rounded-xl">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://production-bha.b-cdn.net//uploads/page_section/photo/1216/slideshow_2x_Diner_op_een_boot_in_Amsterdam.jpg';
                          }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Price Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="text-center mb-6">
                  <span className="text-gray-500">Vanaf prijs</span>
                  <div className="text-5xl font-bold text-[#1a365d]">
                    {arrangement.price}
                  </div>
                  <span className="text-gray-500">per persoon</span>
                </div>

                <Link
                  to={`/contact?arrangement=${arrangement.id}`}
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
                    <span className="text-gray-600">Geschikt voor groepen van 2-200 personen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Arrangements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-8">
            Bekijk ook deze arrangementen
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedArrangements.map((arr) => (
              <Link
                key={arr.id}
                to={`/arrangementen/${arr.id}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src="https://production-bha.b-cdn.net//uploads/page_section/photo/1216/slideshow_2x_Diner_op_een_boot_in_Amsterdam.jpg"
                    alt={arr.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#1a365d] mb-1">{arr.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{arr.description}</p>
                  <span className="text-[#3182ce] font-semibold">{arr.price} p.p.</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
