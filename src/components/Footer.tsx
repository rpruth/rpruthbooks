import { BookOpen, Mail, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="w-6 h-6 text-slate-100" />
              <span className="text-xl font-bold text-slate-100">R.P. Ruth Books</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Author of compelling fiction that explores the depths of human experience and emotion.
            </p>
          </div>

          <div>
            <h3 className="text-slate-100 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-sm hover:text-slate-100 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('books')}
                  className="text-sm hover:text-slate-100 transition-colors"
                >
                  Books
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-sm hover:text-slate-100 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="text-sm hover:text-slate-100 transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="text-sm hover:text-slate-100 transition-colors"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-100 font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="https://www.amazon.com/stores/RP-Ruth/author/B07VN22QJH"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:text-slate-100 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Amazon Author Page</span>
              </a>
              
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} R.P. Ruth Books. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
