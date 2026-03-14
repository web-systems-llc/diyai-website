import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img
                src="https://lsaapi-uploads.s3.amazonaws.com/1353/1750175758.png"
                alt="DIYAI Logo"
                className="h-8"
              />
            </div>
            <p className="text-gray-400">
              Every Call, Chat, Text & Email Answered in 30 Seconds—Or It's Free.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Pricing
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white cursor-pointer">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white cursor-pointer">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-400 hover:text-white cursor-pointer">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/gdpr-compliance" className="text-gray-400 hover:text-white cursor-pointer">
                  GDPR
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  HIPAA Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2025 DIYAI. All rights reserved.</p>
          <div className="flex space-x-4">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-visa-line ri-lg text-gray-400"></i>
            </div>
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-mastercard-line ri-lg text-gray-400"></i>
            </div>
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-paypal-line ri-lg text-gray-400"></i>
            </div>
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-apple-fill ri-lg text-gray-400"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;