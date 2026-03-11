import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { COMPANY } from '../lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a202c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Contact */}
          <div className="md:col-span-2">
            <img
              src={COMPANY.logoLong}
              alt={COMPANY.name}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            
            <div className="space-y-3 text-gray-300">
              <p>{COMPANY.address}</p>
              <p>
                <a href={`tel:${COMPANY.phoneIntl}`} className="hover:text-white transition-colors">
                  {COMPANY.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
                  {COMPANY.email}
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Snelmenu</h3>
            <ul className="space-y-2">
              <li><Link to="/arrangementen" className="text-gray-300 hover:text-white transition-colors">Arrangementen</Link></li>
              <li><Link to="/boten" className="text-gray-300 hover:text-white transition-colors">Boten</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-white transition-colors">Reviews</Link></li>
              <li><Link to="/over-ons" className="text-gray-300 hover:text-white transition-colors">Over ons</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Juridisch</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacybeleid</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Algemene voorwaarden</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cookiebeleid</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} {COMPANY.name}. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
