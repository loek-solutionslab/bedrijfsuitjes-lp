import { useState } from 'react';
import { Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { COMPANY, ARRANGEMENTS } from '../lib/constants';

interface ContactProps {
  preselectedArrangement?: string;
}

export function Contact({ preselectedArrangement = '' }: ContactProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    people: '',
    date: '',
    arrangement: preselectedArrangement,
    contactName: '',
    email: '',
    phone: '',
    message: '',
    callBack: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would normally send the data to a server
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">
              Bedankt voor uw aanvraag!
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              We hebben uw offerte-aanvraag ontvangen. Onze specialisten nemen binnen 2 uur contact met u op.
            </p>
            
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-[#3182ce] font-semibold hover:underline"
            >
              Nieuwe aanvraag doen
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
            Vraag een vrijblijvende offerte aan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vertel ons uw wensen en ontvang binnen 2 uur een passend voorstel
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Naam bedrijf *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3182ce] focus:border-transparent outline-none"
                    placeholder="Uw bedrijfsnaam"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Aantal personen *
                  </label>
                  <select
                    required
                    value={formData.people}
                    onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3182ce] focus:border-transparent outline-none bg-white"
                  >
                    <option value="">Kies aantal</option>
                    <option value="2-10">2-10 personen</option>
                    <option value="11-25">11-25 personen</option>
                    <option value="26-50">26-50 personen</option>
                    <option value="51-100">51-100 personen</option>
                    <option value="100+">100+ personen</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gewenste datum *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3182ce] focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type arrangement
                  </label>
                  <select
                    value={formData.arrangement}
                    onChange={(e) => setFormData({ ...formData, arrangement: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3182ce] focus:border-transparent outline-none bg-white"
                  >
                    <option value="">Kies arrangement</option>
                    {ARRANGEMENTS.map((arr) => (
                      <option key={arr.id} value={arr.id}>{arr.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Naam contactpersoon *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3182ce] focus:border-transparent outline-none"
                    placeholder="Uw naam"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3182ce] focus:border-transparent outline-none"
                    placeholder="uw@email.nl"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3182ce] focus:border-transparent outline-none"
                    placeholder="06 12345678"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Opmerkingen / verzoeken
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3182ce] focus:border-transparent outline-none resize-none"
                    placeholder="Vertel ons meer over uw wensen..."
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.callBack}
                      onChange={(e) => setFormData({ ...formData, callBack: e.target.checked })}
                      className="w-5 h-5 text-[#3182ce] rounded focus:ring-[#3182ce]"
                    />
                    <span className="text-gray-700">Bel mij terug</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-[#f6e05e] text-[#1a365d] py-4 rounded-lg font-bold text-lg hover:bg-[#f6e05e]/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Offerte aanvragen
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-[#1a365d] rounded-2xl shadow-lg p-8 text-white h-fit">
              <h3 className="text-2xl font-bold mb-6">Direct contact?</h3>
              
              <div className="space-y-6">
                <a
                  href={`tel:${COMPANY.phoneIntl}`}
                  className="flex items-center gap-4 hover:text-[#f6e05e] transition-colors"
                >
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">Telefoon</div>
                    <div className="font-bold text-lg">{COMPANY.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-4 hover:text-[#f6e05e] transition-colors"
                >
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">E-mail</div>
                    <div className="font-bold">{COMPANY.email}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">Openingstijden</div>
                    <div className="font-bold">Werkdagen: 09:00 - 17:30</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="font-medium">Binnen 2 uur reactie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
