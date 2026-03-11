import { useState } from 'react';
import { Star, CheckCircle, Shield, Calendar, Clock, Users, ChevronDown } from 'lucide-react';
import { COMPANY, ARRANGEMENTS } from '../lib/constants';

interface HeroProps {
  onBookingSubmit: (data: BookingData) => void;
}

export interface BookingData {
  date: string;
  time: string;
  people: string;
  arrangement: string;
}

export function Hero({ onBookingSubmit }: HeroProps) {
  const [formData, setFormData] = useState<BookingData>({
    date: '',
    time: '',
    people: '',
    arrangement: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBookingSubmit(formData);
  };

  // Calculate min date (3 days from now)
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 3);
  const minDateString = minDate.toISOString().split('T')[0];

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://production-bha.b-cdn.net//uploads/page_section/photo/1216/slideshow_2x_Diner_op_een_boot_in_Amsterdam.jpg"
          alt="Amsterdamse grachten met boot"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/90 via-[#1a365d]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Het perfecte bedrijfsuitje
              <br />
              <span className="text-[#f6e05e]">op de Amsterdamse grachten</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
              Van informele borrel tot uitgebreid diner.
              <br />
              <span className="font-semibold">{COMPANY.boatCount} luxe boten</span> • 
              <span className="font-semibold">2-200 personen</span> • 
              <span className="font-semibold">Professionele schippers</span>
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-[#f6e05e] fill-current" />
                <span className="text-sm font-medium">{COMPANY.rating} uit {COMPANY.reviewCount.toLocaleString()} beoordelingen</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">Meeste keuze in Amsterdam</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-[#3182ce]" />
                <span className="text-sm font-medium">GRATIS annuleren tot 5 dagen</span>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Widget */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-6">
              Bekijk beschikbaarheid
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Date */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Datum
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    required
                    min={minDateString}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3182ce] focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Time */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tijd
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3182ce] focus:border-transparent outline-none appearance-none bg-white"
                  >
                    <option value="">Kies een tijd</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* People */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Aantal personen
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    required
                    value={formData.people}
                    onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                    className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3182ce] focus:border-transparent outline-none appearance-none bg-white"
                  >
                    <option value="">Kies aantal personen</option>
                    <option value="2-10">2-10 personen</option>
                    <option value="11-25">11-25 personen</option>
                    <option value="26-50">26-50 personen</option>
                    <option value="51-100">51-100 personen</option>
                    <option value="100+">100+ personen</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Arrangement */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type evenement
                </label>
                <div className="relative">
                  <select
                    required
                    value={formData.arrangement}
                    onChange={(e) => setFormData({ ...formData, arrangement: e.target.value })}
                    className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3182ce] focus:border-transparent outline-none appearance-none bg-white"
                  >
                    <option value="">Kies uw arrangement</option>
                    {ARRANGEMENTS.map((arr) => (
                      <option key={arr.id} value={arr.id}>
                        {arr.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#3182ce] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#2c5aa0] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Bekijk beschikbaarheid
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
