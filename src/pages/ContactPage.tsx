import { useSearchParams } from 'react-router-dom';
import { Contact } from '../components/Contact';

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const arrangementId = searchParams.get('arrangement') || '';

  return (
    <div className="pt-20">
      <section className="bg-[#1a365d] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Heeft u vragen of wilt u een vrijblijvende offerte aanvragen? 
              Wij staan voor u klaar.
            </p>
          </div>
        </div>
      </section>
      
      <Contact preselectedArrangement={arrangementId} />
    </div>
  );
}
