import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const TermsOfService = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-12">Last Updated: January 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using DIYAI's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Permission is granted to temporarily use DIYAI's services for personal or commercial purposes. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose without proper licensing</li>
                <li>Attempt to decompile or reverse engineer any software contained in DIYAI's services</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Service Description</h2>
              <p className="text-gray-600 leading-relaxed">
                DIYAI provides conversational AI agent services that answer calls, chats, texts, and emails. Our services include voice recognition, natural language processing, appointment booking, and multi-channel communication management. We strive to provide accurate and reliable service, but we do not guarantee 100% uptime or error-free operation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. User Accounts</h2>
              <p className="text-gray-600 leading-relaxed">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service. You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Payment Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Subscription fees are billed in advance on a monthly basis and are non-refundable except as required by law or as explicitly stated in our 30-second money-back guarantee. We reserve the right to change our subscription plans or adjust pricing at any time with 30 days notice to existing subscribers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. 30-Second Guarantee</h2>
              <p className="text-gray-600 leading-relaxed">
                We guarantee that our AI agents will respond to incoming communications within 30 seconds during normal operation. If we fail to meet this standard consistently, you may be eligible for service credits or refunds as determined on a case-by-case basis. This guarantee does not apply during scheduled maintenance or force majeure events.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Acceptable Use Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree not to use DIYAI's services to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Distribute spam or unsolicited communications</li>
                <li>Transmit malicious code or viruses</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Harass, abuse, or harm another person</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                The service and its original content, features, and functionality are and will remain the exclusive property of DIYAI and its licensors. The service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of DIYAI.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Data and Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Your use of our service is also governed by our Privacy Policy. We collect, use, and protect your data as described in our Privacy Policy. You retain all rights to your data, and we will not use your data for purposes other than providing and improving our services without your explicit consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the service will immediately cease. You may cancel your subscription at any time through your account settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                In no event shall DIYAI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed">
                Your use of the service is at your sole risk. The service is provided on an "AS IS" and "AS AVAILABLE" basis. The service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">14. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">15. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms, please contact us at support@diyai.ai or call us at +1 (561) 940-2697.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;