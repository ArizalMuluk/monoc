import { Menu, X } from 'lucide-react';

const Navigation = ({
  currentPage,
  setCurrentPage,
  isMenuOpen,
  setIsMenuOpen,
  isScrolled
}: {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isScrolled: boolean;
}) => (
  <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-charcoal/95 backdrop-blur-md border-b border-medium-gray/20' : 'bg-transparent'
  }`}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-between h-20">
        <button 
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-2 text-2xl font-bold tracking-tight text-off-white hover:opacity-75 transition-opacity"
        >
          <img src="/icons/favicon.ico" alt="Logo" className="w-7 h-7" />
          Arizal Firdaus
        </button>
        <div className="hidden md:flex items-center space-x-8">
          {['home', 'work', 'about', 'contact'].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`text-sm tracking-wide uppercase transition-opacity hover:opacity-75 ${
                currentPage === page ? 'text-off-white opacity-100' : 'text-off-white/60'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-off-white"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
    {isMenuOpen && (
      <div className="md:hidden bg-charcoal border-t border-medium-gray/20">
        <div className="px-6 py-6 space-y-4">
          {['home', 'work', 'about', 'contact'].map((page) => (
            <button
              key={page}
              onClick={() => {
                setCurrentPage(page);
                setIsMenuOpen(false);
              }}
              className={`block text-lg uppercase tracking-wide transition-opacity hover:opacity-75 ${
                currentPage === page ? 'text-off-white' : 'text-off-white/60'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    )}
  </nav>
);

export default Navigation;