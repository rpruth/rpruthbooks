import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-slate-300" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-slate-300">
            Last updated: December 1, 2025
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
                <p className="text-slate-700 leading-relaxed">
                  This Privacy Policy describes how R.P. Ruth ("we", "us", or "our") collects, uses, and shares your personal information when you visit our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  When you visit our website, we may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Contact information you provide through our contact form (name, email address, message content)</li>
                  <li>Technical information such as your IP address, browser type, and device information</li>
                  <li>Usage data including pages visited and time spent on our site</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Respond to your inquiries and communications</li>
                  <li>Improve our website and user experience</li>
                  <li>Analyze website usage and trends</li>
                  <li>Send you updates about new books and related content (only if you have opted in)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Information Sharing</h2>
                <p className="text-slate-700 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with trusted service providers who assist us in operating our website, provided they agree to keep this information confidential.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies</h2>
                <p className="text-slate-700 leading-relaxed">
                  Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect your ability to use certain features of our site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Links</h2>
                <p className="text-slate-700 leading-relaxed">
                  Our website contains links to third-party sites, including Amazon. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
                <p className="text-slate-700 leading-relaxed">
                  We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
                <p className="text-slate-700 leading-relaxed">
                  Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Policy</h2>
                <p className="text-slate-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                </p>
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
