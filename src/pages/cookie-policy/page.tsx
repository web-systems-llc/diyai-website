import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const CookiePolicy = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Cookie Policy</h1>
          <p className="text-gray-600 mb-12">Last Updated: January 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site. DIYAI uses cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the operation of our website and services</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Analytics Cookies:</strong> Collect information about how you use our services</li>
                <li><strong>Marketing Cookies:</strong> Track your activity to deliver relevant advertisements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Session Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These are temporary cookies that expire when you close your browser. They help us maintain your session and remember your actions during a single browsing session.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Persistent Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies remain on your device for a set period or until you delete them. They help us recognize you when you return to our website and remember your preferences.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">First-Party Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These are cookies set by DIYAI directly. We use them to provide core functionality and improve our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Third-Party Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These are cookies set by third-party services we use, such as analytics providers, advertising networks, and social media platforms.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Specific Cookies We Use</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Cookie Name</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">session_id</td>
                      <td className="border border-gray-300 px-4 py-2">Maintains your login session</td>
                      <td className="border border-gray-300 px-4 py-2">Session</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">user_preferences</td>
                      <td className="border border-gray-300 px-4 py-2">Stores your settings and preferences</td>
                      <td className="border border-gray-300 px-4 py-2">1 year</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">analytics_id</td>
                      <td className="border border-gray-300 px-4 py-2">Tracks usage patterns and performance</td>
                      <td className="border border-gray-300 px-4 py-2">2 years</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">marketing_consent</td>
                      <td className="border border-gray-300 px-4 py-2">Records your cookie preferences</td>
                      <td className="border border-gray-300 px-4 py-2">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the following third-party services that may set cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Stripe:</strong> For payment processing</li>
                <li><strong>Intercom:</strong> For customer support and communication</li>
                <li><strong>Facebook Pixel:</strong> For advertising and remarketing</li>
                <li><strong>LinkedIn Insight Tag:</strong> For professional advertising</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Managing Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have several options to manage cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies through their settings</li>
                <li><strong>Opt-Out Tools:</strong> Use industry opt-out tools like the Network Advertising Initiative opt-out page</li>
                <li><strong>Cookie Preferences:</strong> Use our cookie preference center to customize your settings</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Please note that blocking or deleting cookies may impact your experience and some features may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Browser-Specific Instructions</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Google Chrome</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Settings &gt; Privacy and security &gt; Cookies and other site data
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Mozilla Firefox</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Options &gt; Privacy & Security &gt; Cookies and Site Data
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Safari</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Preferences &gt; Privacy &gt; Manage Website Data
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Microsoft Edge</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Settings &gt; Cookies and site permissions &gt; Cookies and site data
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Do Not Track Signals</h2>
              <p className="text-gray-600 leading-relaxed">
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. Currently, there is no industry standard for how to respond to DNT signals. We do not currently respond to DNT signals, but we respect your privacy choices and provide options to manage cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <ul className="list-none space-y-2 text-gray-600 mt-4">
                <li>Email: privacy@diyai.ai</li>
                <li>Phone: +1 (561) 940-2697</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CookiePolicy;