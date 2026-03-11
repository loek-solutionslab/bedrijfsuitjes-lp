import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { COMPANY } from '../lib/constants';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Arrangementen', path: '/arrangementen' },
    { label: 'Boten', path: '/boten' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Over ons', path: '/over-ons' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const headerBgClass = isHomePage && !isScrolled 
    ? 'bg-transparent' 
    : 'bg-white/95 backdrop-blur-md shadow-lg';
  
  const textColorClass = isHomePage && !isScrolled 
    ? 'text-white' 
    : 'text-[#1a365d]';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className={`flex items-center p-2 rounded-lg transition-all ${
              isHomePage && !isScrolled ? 'bg-white/90 backdrop-blur-sm' : ''
            }`}
          >
            <img
              src={COMPANY.logoShort}
              alt={COMPANY.name}
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-[#3182ce] ${textColorClass}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-[#f6e05e] text-[#1a365d] px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#f6e05e]/90 transition-all shadow-md hover:shadow-lg"
            >
              Offerte aanvragen
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${textColorClass}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white shadow-lg px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-[#1a365d] font-medium hover:text-[#3182ce] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full bg-[#f6e05e] text-[#1a365d] px-5 py-3 rounded-lg font-semibold text-sm hover:bg-[#f6e05e]/90 transition-all mt-4 text-center"
          >
            Offerte aanvragen
          </Link>
        </div>
      </div>
    </header>
  );
}
