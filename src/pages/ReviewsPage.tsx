import { Reviews } from '../components/Reviews';

export function ReviewsPage() {
  return (
    <div className="pt-20">
      <section className="bg-[#1a365d] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Klantreviews
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Zie wat andere bedrijven van hun ervaring met Boot Huren Amsterdam vonden.
            </p>
          </div>
        </div>
      </section>
      
      <Reviews />
    </div>
  );
}
