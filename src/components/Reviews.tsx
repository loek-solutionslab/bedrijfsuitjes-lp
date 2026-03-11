import { Star, Quote } from 'lucide-react';
import { COMPANY, REVIEWS } from '../lib/constants';

export function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
            Wat andere bedrijven zeggen
          </h2>
          <p className="text-lg text-gray-600">
            Gemiddelde beoordeling: <span className="font-bold text-[#1a365d]">{COMPANY.rating}/10</span> op basis van {COMPANY.reviewCount.toLocaleString()} reviews
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {REVIEWS.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f6e05e] fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#3182ce]/20" />
                <p className="text-gray-700 text-lg italic mb-6 pl-6">
                  {review.text}
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#3182ce]/10 rounded-full flex items-center justify-center">
                  <span className="font-bold text-[#3182ce]">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-[#1a365d]">
                    {review.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {review.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-[#1a365d] mb-1">9.07</div>
            <div className="text-sm text-gray-500">Totaalscore</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-[#1a365d] mb-1">9.18</div>
            <div className="text-sm text-gray-500">Reserveringsproces</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-[#1a365d] mb-1">9.38</div>
            <div className="text-sm text-gray-500">Service aan boord</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-[#1a365d] mb-1">{COMPANY.reviewCount.toLocaleString()}</div>
            <div className="text-sm text-gray-500">Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
