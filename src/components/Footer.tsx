import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Diseases', path: '/diseases' },
    { name: 'Drugs', path: '/drugs' },
    { name: 'Courses', path: '/courses' },
    { name: 'Jobs', path: '/jobs' },
  ];

  const support = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Help Center', path: '/help' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/share/1C31mTBaGz/' },
    { name: 'X', icon: Twitter, url: 'https://x.com/tena360' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/medicarepharmancy?igsh=MXIwdHAwcGFlZWlxNQ==' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://et.linkedin.com/in/getnet-melkamu-04712a288' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-primary-500" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Tena360</span>
                <span className="text-xs text-gray-400">ሙሉ ጤና በአንድ ቦታ</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Your trusted healthcare partner in Ethiopia. We provide comprehensive health solutions, 
              connecting patients with verified healthcare providers, medicines, and educational resources.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">+251-11-123-4567</p>
                  <p className="text-sm text-gray-300">+251-91-234-5678</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">medicarephar198@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Bole Atlas</p>
                  <p className="text-sm text-gray-300">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support & Legal</h3>
            <ul className="space-y-2">
              {support.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

           {/* Emergency Notice */}
        <div className="bg-red-900 border border-red-700 rounded-lg p-8 mt-0">
          <div className="flex items-center justify-center text-center">
            <div>
              <h4 className="font-semibold text-red-100 mb-1">Medical Emergency?</h4>
              <p className="text-red-200 text-sm mb-2">
                For immediate medical assistance, call emergency services
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <span className="bg-red-800 text-red-100 px-3 py-1 rounded text-sm font-medium">
                  Ambulance: 907
                </span>
                <span className="bg-red-800 text-red-100 px-3 py-1 rounded text-sm font-medium">
                  Police: 991
                </span>
                <span className="bg-red-800 text-red-100 px-3 py-1 rounded text-sm font-medium">
                  Fire: 939
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>

       
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Copyright */}
        <div className="text-center md:text-left">
          <p className="text-gray-400 text-sm">
            © {currentYear} Tena360. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Developed by{' '}
            <a
          href="https://mame-developer.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary-400"
            >
            Mohammed Abdurhaman
            </a>
          </p>
        </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">Language:</span>
              <select className="bg-gray-800 border border-gray-700 text-gray-300 text-sm rounded px-2 py-1 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="en">English</option>
                <option value="am">አማርኛ</option>
                <option value="or">Oromiffa</option>
                <option value="ti">ትግርኛ</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;