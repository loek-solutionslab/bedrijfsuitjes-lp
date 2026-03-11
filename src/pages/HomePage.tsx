import { useNavigate } from 'react-router-dom';
import { Hero, type BookingData } from '../components/Hero';
import { WhyUs } from '../components/WhyUs';
import { GroupSizes } from '../components/GroupSizes';
import { Reviews } from '../components/Reviews';
import { Gallery } from '../components/Gallery';
import { FAQ } from '../components/FAQ';
import { FeaturedArrangements } from '../components/FeaturedArrangements';

export function HomePage() {
  const navigate = useNavigate();

  const handleBookingSubmit = (data: BookingData) => {
    const params = new URLSearchParams();
    if (data.arrangement) params.set('arrangement', data.arrangement);
    if (data.date) params.set('datum', data.date);
    if (data.people) params.set('personen', data.people);
    navigate(`/contact?${params.toString()}`);
  };

  return (
    <div>
      <Hero onBookingSubmit={handleBookingSubmit} />
      <FeaturedArrangements />
      <WhyUs />
      <GroupSizes />
      <Reviews />
      <Gallery />
      <FAQ />
    </div>
  );
}
