import { Linkedin, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react';

type FooterProps = {
  setCurrentPage: (page: string) => void;
};

const Footer = ({ setCurrentPage }: FooterProps) => (
  <footer className="bg-dark-gray border-t border-medium-gray/20">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand & Description */}
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold text-off-white mb-4">Arizal Firdaus</h3>
          <p className="text-off-white/70 leading-relaxed mb-6 max-w-md">
            Machine Learning Engineer & AI Enthusiast. Building intelligent solutions for real-world challenges.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/arizalfirdausbaguspratama/" 
              className="text-off-white/60 hover:text-off-white transition-colors"
              aria-label="LinkedIn"
              target="_blank" rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://www.instagram.com/arzlfrds/" 
              className="text-off-white/60 hover:text-off-white transition-colors"
              aria-label="Instagram"
              target="_blank" rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://github.com/ArizalMuluk" 
              className="text-off-white/60 hover:text-off-white transition-colors"
              aria-label="GitHub"
              target="_blank" rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        {/* Navigation Links */}
        <div>
          <h4 className="text-sm uppercase tracking-wide text-off-white font-medium mb-6">
            Navigation
          </h4>
          <ul className="space-y-4">
            {['home', 'work', 'about', 'contact'].map((page) => (
              <li key={page}>
                <button
                  onClick={() => setCurrentPage(page)}
                  className="text-off-white/70 hover:text-off-white transition-colors capitalize"
                >
                  {page}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h4 className="text-sm uppercase tracking-wide text-off-white font-medium mb-6">
            Contact
          </h4>
          <ul className="space-y-4">
            <li>
              <a 
                href="mailto:bangmulukkeren@gmail.com"
                className="text-off-white/70 hover:text-off-white transition-colors flex items-center gap-2"
              >
                <Mail size={16} />
                bangmulukkeren@gmail.com
              </a>
            </li>
            <li>
              <a 
                href="tel:+6281548163365"
                className="text-off-white/70 hover:text-off-white transition-colors flex items-center gap-2"
              >
                <Phone size={16} />
                +62 815 4816 3365
              </a>
            </li>
            <li className="text-off-white/70 flex items-center gap-2">
              <MapPin size={16} />
              Sragen, Central Java, Indonesia
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="border-t border-medium-gray/20 mt-12 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-off-white/60 text-sm">
            © {new Date().getFullYear()} Arizal Firdaus. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <button className="text-off-white/60 hover:text-off-white transition-colors">
              Privacy Policy
            </button>
            <button className="text-off-white/60 hover:text-off-white transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;