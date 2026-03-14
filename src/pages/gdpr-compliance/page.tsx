import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const GDPRCompliance = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">GDPR Compliance</h1>
          <p className="text-gray-600 mb-12">Last Updated: January 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Our Commitment to GDPR</h2>
              <p className="text-gray-600 leading-relaxed">
                DIYAI is committed to protecting the privacy and personal data of all individuals, including those in the European Union (EU) and European Economic Area (EEA). We comply with the General Data Protection Regulation (GDPR) and have implemented appropriate technical and organizational measures to ensure the security and privacy of your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Legal Basis for Processing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We process your personal data based on the following legal grounds:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Consent:</strong> You have given clear consent for us to process your personal data for specific purposes</li>
                <li><strong>Contract:</strong> Processing is necessary for the performance of a contract with you</li>
                <li><strong>Legal Obligation:</strong> Processing is necessary to comply with legal obligations</li>
                <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate interests or those of a third party, provided your rights do not override those interests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Your Rights Under GDPR</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Under GDPR, you have the following rights:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Right to Access</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You have the right to request copies of your personal data. We may charge a reasonable fee for additional copies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Right to Rectification</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You have the right to request correction of any inaccurate or incomplete personal data.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Right to Erasure</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You have the right to request deletion of your personal data under certain conditions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Right to Restrict Processing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You have the right to request restriction of processing your personal data under certain conditions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Right to Data Portability</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You have the right to request transfer of your data to another organization or directly to you in a structured, commonly used format.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Right to Object</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You have the right to object to processing of your personal data under certain conditions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Right to Withdraw Consent</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Where we rely on consent to process your data, you have the right to withdraw that consent at any time.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Protection Measures</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement the following measures to protect your data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Encryption of data in transit and at rest using industry-standard protocols</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection and privacy</li>
                <li>Data minimization and purpose limitation principles</li>
                <li>Regular backups and disaster recovery procedures</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. International Data Transfers</h2>
              <p className="text-gray-600 leading-relaxed">
                When we transfer personal data outside the EU/EEA, we ensure appropriate safeguards are in place, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mt-4">
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>Adequacy decisions by the European Commission</li>
                <li>Binding Corporate Rules where applicable</li>
                <li>Your explicit consent for specific transfers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mt-4">
                <li>Account data: Until account closure plus 30 days</li>
                <li>Call recordings and transcripts: 90 days by default (customizable)</li>
                <li>Billing information: 7 years for tax and accounting purposes</li>
                <li>Marketing data: Until consent is withdrawn</li>
                <li>Legal claims: Duration of applicable statute of limitations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Data Processing Agreement</h2>
              <p className="text-gray-600 leading-relaxed">
                For customers who are data controllers under GDPR, we act as a data processor. We offer a Data Processing Agreement (DPA) that includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mt-4">
                <li>Description of processing activities</li>
                <li>Security measures and obligations</li>
                <li>Sub-processor arrangements</li>
                <li>Data subject rights assistance</li>
                <li>Breach notification procedures</li>
                <li>Audit rights and compliance verification</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Data Breach Notification</h2>
              <p className="text-gray-600 leading-relaxed">
                In the event of a personal data breach, we will:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mt-4">
                <li>Notify the relevant supervisory authority within 72 hours of becoming aware</li>
                <li>Notify affected individuals without undue delay if the breach poses a high risk</li>
                <li>Document all breaches and our response measures</li>
                <li>Take immediate steps to contain and remediate the breach</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Children's Data</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not knowingly process personal data of children under 16 years of age without parental consent. If we become aware that we have collected data from a child without proper consent, we will take steps to delete that information promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Automated Decision-Making</h2>
              <p className="text-gray-600 leading-relaxed">
                Our AI agents may make automated decisions in processing customer communications. You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mt-4">
                <li>Request human intervention in automated decisions</li>
                <li>Express your point of view regarding automated decisions</li>
                <li>Contest decisions made solely by automated means</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Supervisory Authority</h2>
              <p className="text-gray-600 leading-relaxed">
                You have the right to lodge a complaint with a supervisory authority, particularly in the EU member state of your habitual residence, place of work, or place of alleged infringement if you believe our processing of your personal data violates GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Exercising Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To exercise any of your GDPR rights, please contact us at:
              </p>
              <ul className="list-none space-y-2 text-gray-600">
                <li>Email: gdpr@diyai.ai</li>
                <li>Phone: +1 (561) 940-2697</li>
                <li>Subject Line: "GDPR Rights Request"</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                We will respond to your request within one month. In complex cases, we may extend this period by two additional months, and we will inform you of any such extension.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Data Protection Officer</h2>
              <p className="text-gray-600 leading-relaxed">
                We have appointed a Data Protection Officer (DPO) to oversee our GDPR compliance. You can contact our DPO at:
              </p>
              <ul className="list-none space-y-2 text-gray-600 mt-4">
                <li>Email: dpo@diyai.ai</li>
                <li>Subject: Data Protection Inquiry</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">14. Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this GDPR Compliance statement from time to time. We will notify you of any material changes by posting the updated statement on our website and, where appropriate, by email. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GDPRCompliance;