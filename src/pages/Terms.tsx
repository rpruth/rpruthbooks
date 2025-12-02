import { FileText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FileText className="w-16 h-16 mx-auto mb-6 text-slate-300" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms of Service</h1>
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
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
                <p className="text-slate-700 leading-relaxed">
                  By accessing or using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Use License</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Permission is granted to temporarily access the materials (information or software) on R.P. Ruth Books's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or mirror the materials on any other server</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Intellectual Property</h2>
                <p className="text-slate-700 leading-relaxed">
                  All content on this website, including but not limited to text, images, book covers, logos, and graphics, is the property of R.P. Ruth Books or used with permission and is protected by copyright and intellectual property laws. Unauthorized use of any materials may violate copyright, trademark, and other laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Book Purchases</h2>
                <p className="text-slate-700 leading-relaxed">
                  This website contains links to third-party retailers such as Amazon for book purchases. We are not responsible for the terms, policies, or practices of these third-party sites. All purchases are subject to the terms and conditions of the respective retailer.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Disclaimer</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The materials on this website are provided on an 'as is' basis. R.P. Ruth Books makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Further, R.P. Ruth Books does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitations</h2>
                <p className="text-slate-700 leading-relaxed">
                  In no event shall R.P. Ruth Books or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if R.P. Ruth Books or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Accuracy of Materials</h2>
                <p className="text-slate-700 leading-relaxed">
                  The materials appearing on this website could include technical, typographical, or photographic errors. R.P. Ruth Books does not warrant that any of the materials on its website are accurate, complete, or current. R.P. Ruth Books may make changes to the materials contained on its website at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Links</h2>
                <p className="text-slate-700 leading-relaxed">
                  R.P. Ruth Books has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by R.P. Ruth Books of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">User Conduct</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Use the website in any way that violates applicable laws or regulations</li>
                  <li>Transmit any harmful code, viruses, or malicious software</li>
                  <li>Attempt to gain unauthorized access to any portion of the website</li>
                  <li>Harass, abuse, or harm another person through use of this website</li>
                  <li>Impersonate or misrepresent your affiliation with any person or entity</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Modifications</h2>
                <p className="text-slate-700 leading-relaxed">
                  R.P. Ruth Books may revise these Terms of Service at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms of Service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Governing Law</h2>
                <p className="text-slate-700 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
