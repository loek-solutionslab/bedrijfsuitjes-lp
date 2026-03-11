import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ArrangementenPage } from './pages/ArrangementenPage';
import { ArrangementDetailPage } from './pages/ArrangementDetailPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { OverOnsPage } from './pages/OverOnsPage';
import { BotenPage } from './pages/BotenPage';
import { BoatDetailPage } from './pages/BoatDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="arrangementen" element={<ArrangementenPage />} />
        <Route path="arrangementen/:id" element={<ArrangementDetailPage />} />
        <Route path="boten" element={<BotenPage />} />
        <Route path="boten/:id" element={<BoatDetailPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="over-ons" element={<OverOnsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
