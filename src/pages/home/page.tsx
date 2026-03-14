import { useEffect, useState } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const HomePage = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .hero-gradient {
        background: linear-gradient(-45deg, #e0e7ff, #ddd6fe, #fce7f3, #dbeafe);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
      }
      .timer-animation {
        animation: pulse 2s ease-in-out infinite;
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-16 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://lsaapi-uploads.s3.us-east-1.amazonaws.com/2af2b7cccdf3c92e7241f6297e99c47b.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            top: '64px',
          }}
        >
          <div className="absolute inset-0 bg-white/60"></div>
        </div>
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4 md:px-6 py-10 md:py-20">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-3/5 p-6 md:p-8 lg:p-12 rounded-xl">
                <div className="timer-animation inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full mb-4 md:mb-6 text-sm md:text-base">
                  30-Second Money-Back Guarantee • Powered by Answer30
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                  Conversational AI Agents That Answer Every Call, Chat, Text & Email in 30 Seconds—Or It's Free
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 max-w-2xl">
                  DIYAI Answer30 agents answers in 30 Seconds. "I just want the phone answered 24/7." Now you can.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <a
                    href="sms:15619402697"
                    className="bg-primary text-white px-4 md:px-6 py-3 rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-base md:text-lg font-medium cursor-pointer"
                  >
                    <div className="w-5 md:w-6 h-5 md:h-6 flex items-center justify-center">
                      <i className="ri-message-3-line"></i>
                    </div>
                    Text Answer30 Agent
                  </a>
                  <a
                    href="tel:15619402697"
                    className="border border-gray-300 bg-white text-gray-800 px-4 md:px-6 py-3 rounded-button whitespace-nowrap hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-base md:text-lg font-medium cursor-pointer"
                  >
                    <div className="w-5 md:w-6 h-5 md:h-6 flex items-center justify-center">
                      <i className="ri-phone-line"></i>
                    </div>
                    Call Answer30 Agent
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-2/5 h-[600px]">
                <iframe
                  src="https://app.diyai.ai/chat?u=52a39805-92e1-4f8d-99ae-5923c20d47d9&p=+15619402697"
                  className="w-full h-full rounded-xl border border-gray-200"
                  title="DIYAI Chat Widget"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">See DIYAI in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how our AI agent handles calls, chats, and messages in real-time
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src="https://www.loom.com/embed/198d615f957546d5a3b7c171b6e4b16e?sid=9b1b79ea-69f1-4b82-b987-dac211df415a"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="DIYAI Demo Video"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Agent Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Your New Voice Agent</h2>
              <p className="text-xl text-gray-600 mb-8">
                Natural conversations that feel human. Our voice AI understands context, handles complex queries, speaks 50+ languages fluently, books appointments, & warm transfers.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full shrink-0 mt-1">
                    <i className="ri-voice-recognition-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Natural Speech Recognition</h3>
                    <p className="text-gray-600">
                      Understands natural language, accents, and industry terminology with 99% accuracy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full shrink-0 mt-1">
                    <i className="ri-customer-service-2-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Context-Aware Responses</h3>
                    <p className="text-gray-600">
                      Maintains conversation context and provides relevant, personalized responses.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full shrink-0 mt-1">
                    <i className="ri-translate-2-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
                    <p className="text-gray-600">
                      Speaks and understands 50+ languages with native-level fluency and natural accents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <iframe
                src="https://gemini-voice-diy.vercel.app/"
                className="w-full h-[600px] rounded-xl border-0 shadow-lg"
                allow="microphone"
                title="Voice Agent Demo"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Reddit Problems Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Real Problems We Solve (In Their Words)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real business owners sharing their challenges on Reddit
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 flex items-center justify-center text-orange-500">
                  <i className="ri-reddit-line ri-lg"></i>
                </div>
                <span className="text-gray-500">Posted on r/smallbusiness</span>
              </div>
              <div className="space-y-8">
                <div className="border-l-4 border-primary/20 pl-6 py-2">
                  <p className="text-gray-800 text-2xl leading-relaxed font-bold">
                    "People hate robotic-sounding voice agents — not just because they know it's AI, but because it feels unnatural."
                  </p>
                </div>
                <div className="border-l-4 border-primary/20 pl-6 py-2">
                  <p className="text-gray-800 text-2xl leading-relaxed font-bold">
                    "85% of customers won't call back if they don't get someone on the line right away."
                  </p>
                </div>
                <div className="border-l-4 border-primary/20 pl-6 py-2">
                  <p className="text-gray-800 text-2xl leading-relaxed font-bold">
                    "Do I just turn away customers that I know I could help?"
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 flex items-center justify-center text-orange-500">
                  <i className="ri-reddit-line ri-lg"></i>
                </div>
                <span className="text-gray-500">Posted on r/customerservice</span>
              </div>
              <div className="space-y-8">
                <div className="border-l-4 border-primary/20 pl-6 py-2">
                  <p className="text-gray-800 text-2xl leading-relaxed font-bold">
                    "Callers often hesitate to interact with AI… many freeze up and don't say a word."
                  </p>
                </div>
                <div className="border-l-4 border-primary/20 pl-6 py-2">
                  <p className="text-gray-800 text-2xl leading-relaxed font-bold">
                    "I want it to sound like our brand, not some default script."
                  </p>
                </div>
                <div className="border-l-4 border-primary/20 pl-6 py-2">
                  <p className="text-gray-800 text-2xl leading-relaxed font-bold">
                    "I'm drowning in DMs, texts, and emails."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes DIYAI Different */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Makes DIYAI Different</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge AI technology designed specifically for business communication
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center mb-6">
                <img
                  src="https://static.readdy.ai/image/34705f08fa6c6c45f9f5b6f295f3bd90/de087b4e8e4797db76ae9246b0ed9336.png"
                  alt="Natural Speech Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Natural Speech-to-Speech AI</h3>
              <p className="text-gray-600">
                Human-like conversations with perfect understanding and natural responses.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center mb-6">
                <img
                  src="https://static.readdy.ai/image/34705f08fa6c6c45f9f5b6f295f3bd90/5f19752e87309a0e06087e6fbfa19a8f.png"
                  alt="Speed Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sub-0.6s Latency</h3>
              <p className="text-gray-600">
                Lightning-fast responses that keep conversations flowing naturally.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center mb-6">
                <img
                  src="https://static.readdy.ai/image/34705f08fa6c6c45f9f5b6f295f3bd90/b929f3685b2cf5ea44d38d39926b946a.png"
                  alt="Voice + Text Booking Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Voice + Text Booking</h3>
              <p className="text-gray-600">
                Seamless appointment scheduling across all communication channels.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center mb-6">
                <img
                  src="https://static.readdy.ai/image/34705f08fa6c6c45f9f5b6f295f3bd90/38c8c427bcb11755cf8ae5ed89a09406.png"
                  alt="Multilingual Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multilingual (42+ languages)</h3>
              <p className="text-gray-600">
                Break language barriers with native-level conversations in 42+ languages.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center mb-6">
                <img
                  src="https://static.readdy.ai/image/34705f08fa6c6c45f9f5b6f295f3bd90/cfa2af6173d2338c654966d11812283e.png"
                  alt="Voice Cloning Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Voice Cloning & Custom Training</h3>
              <p className="text-gray-600">
                Create a unique voice and personality that matches your brand.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center mb-6">
                <img
                  src="https://static.readdy.ai/image/34705f08fa6c6c45f9f5b6f295f3bd90/c84fb1f0d07b8c8d6e6ccb91b33b9b94.png"
                  alt="Smart Call Flow Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Call Flow & Live Transfers</h3>
              <p className="text-gray-600">
                Intelligent routing and seamless handoffs to your team when needed.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center mb-6">
                <img
                  src="https://static.readdy.ai/image/34705f08fa6c6c45f9f5b6f295f3bd90/b14c09a5605bd4e8540bbb1338486323.png"
                  alt="Communication Channels Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">One Agent for All Channels</h3>
              <p className="text-gray-600">
                Unified communication across calls, texts, chats, and emails.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center mb-6">
                <img
                  src="https://static.readdy.ai/image/34705f08fa6c6c45f9f5b6f295f3bd90/e5a69a87accd7cf1d275605e5a4cc3d6.png"
                  alt="Reviews Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Outbound Follow-Up & Reviews</h3>
              <p className="text-gray-600">
                Automated follow-ups and review requests to boost engagement.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center mb-6">
                <img
                  src="https://static.readdy.ai/image/34705f08fa6c6c45f9f5b6f295f3bd90/d11ba03ae4792be726441960b23d862e.png"
                  alt="Data Export Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Full Data Export Anytime</h3>
              <p className="text-gray-600">
                Complete control over your data with easy exports and integrations.
              </p>
            </div>
          </div>
          <div className="bg-primary/5 p-8 rounded-xl text-center">
            <p className="text-2xl font-semibold text-gray-800 max-w-3xl mx-auto">
              "&gt; 85% of missed callers won't call back. DIYAI makes sure you never lose another lead."
            </p>
          </div>
        </div>
      </section>

      {/* Missed Calls Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Missed Calls Are Killing Your Business</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every unanswered call is a lost opportunity. Every delayed response is a customer gone forever.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center bg-rose-50 text-rose-500 rounded-full mb-4">
                <i className="ri-phone-off-line ri-lg"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Google Punishes Slow Response</h3>
              <p className="text-gray-600">
                Google penalizes businesses that don't pick up calls within 30 seconds, hurting your rankings and visibility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center bg-rose-50 text-rose-500 rounded-full mb-4">
                <i className="ri-message-2-line ri-lg"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Yelp Messages Ghost</h3>
              <p className="text-gray-600">
                Slow responses on platforms like Yelp result in ghosted conversations and lost potential customers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center bg-rose-50 text-rose-500 rounded-full mb-4">
                <i className="ri-money-dollar-circle-line ri-lg"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Burning Cash on Fake Leads</h3>
              <p className="text-gray-600">
                Paying for leads that never convert because you couldn't respond fast enough is wasting your marketing budget.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center bg-rose-50 text-rose-500 rounded-full mb-4">
                <i className="ri-time-line ri-lg"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Weekend Coverage Gap</h3>
              <p className="text-gray-600">
                Can't babysit the phone all weekend? You're missing out on prime-time leads when competitors are closed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet DIYAI—Your 24/7 Multilingual Intake & Support Specialist
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              DIYAI Answer30 agents listen in real speech and replies on every channel—voice, text, chat, email—within 30 seconds.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20AI%20dashboard%20interface%20showing%20live%20calls%20and%20chats%20in%20progress%2C%20clean%20design%20with%20blue%20accent%20colors%2C%20professional%20business%20software%20interface%2C%20multiple%20communication%20channels%20displayed%20simultaneously%2C%20user-friendly%20layout%2C%20high-tech%20but%20approachable%2C%20detailed%20screen%20showing%20active%20conversations&width=600&height=450&seq=dashboard1&orientation=landscape"
                alt="Dewey Dashboard"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full shrink-0">
                    <i className="ri-customer-service-2-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Answers Every Channel</h3>
                    <p className="text-gray-600">
                      Answer30 Ai Agent handles calls, texts, chats, and emails with the same level of professionalism and speed.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full shrink-0">
                    <i className="ri-calendar-check-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Books Appointments Automatically</h3>
                    <p className="text-gray-600">
                      Answer30 Ai Agent can schedule appointments directly on your calendar, eliminating back-and-forth communications.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full shrink-0">
                    <i className="ri-phone-forward-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Warm Transfers Hot Leads</h3>
                    <p className="text-gray-600">
                      When a high-value prospect calls, Answer30 Ai Agent can immediately transfer them to your team for personal attention.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full shrink-0">
                    <i className="ri-translate-2-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Speaks 50+ Languages</h3>
                    <p className="text-gray-600">
                      Communicate with customers in their preferred language with perfect accents and natural conversation flow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Win the 30-Second Race</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capture every lead before they move on to your competitors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-6 mx-auto">
                <i className="ri-timer-line ri-2x"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">30-Second Response Time</h3>
              <p className="text-gray-600 text-center">
                Google LSA calls, website chats, Bing emails—Dewey grabs them all before the clock hits :30 so every paid lead gets answered, not ghosted.
              </p>
              <div className="mt-6 flex justify-center">
                <img
                  src="https://readdy.ai/api/search-image?query=Stopwatch%20frozen%20at%2000:29%20next%20to%20an%20upward%20arrow%2C%20professional%20business%20concept%2C%20clean%20background%2C%20showing%20success%20metric%2C%20time%20efficiency%2C%20deadline%20achievement%2C%20professional%20lighting%2C%20clear%20visualization%20of%20time%20management&width=300&height=200&seq=stopwatch1&orientation=landscape"
                  alt="30-Second Response"
                  className="rounded-lg h-40 object-cover"
                />
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-6 mx-auto">
                <i className="ri-calendar-event-line ri-2x"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">24/7 Appointment Booking</h3>
              <p className="text-gray-600 text-center">
                Dewey drops confirmed slots on your calendar—nights, weekends, holidays. Never miss another opportunity due to office hours.
              </p>
              <div className="mt-6 flex justify-center">
                <img
                  src="https://readdy.ai/api/search-image?query=Calendar%20slot%20auto-filling%20while%20a%20phone%20icon%20jumps%20to%20Live%20transfer%2C%20professional%20business%20concept%2C%20digital%20calendar%20interface%2C%20appointment%20scheduling%20visualization%2C%20clean%20background%2C%20professional%20lighting%2C%20showing%20automation%20of%20business%20process&width=300&height=200&seq=calendar1&orientation=landscape"
                  alt="24/7 Booking"
                  className="rounded-lg h-40 object-cover"
                />
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-6 mx-auto">
                <i className="ri-global-line ri-2x"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Multilingual Support</h3>
              <p className="text-gray-600 text-center">
                "If someone talks back in Spanish and English, I'll win more jobs." DIYAI is fluent in 50+ languages—perfect accents, zero awkward pauses.
              </p>
              <div className="mt-6 flex justify-center">
                <img
                  src="https://readdy.ai/api/search-image?query=Chat%20bubbles%20with%20globe%20icons%20linking%20English%20and%20Spanish%20flags%2C%20professional%20business%20concept%2C%20language%20translation%20visualization%2C%20international%20communication%2C%20clean%20background%2C%20professional%20lighting%2C%20showing%20multilingual%20support&width=300&height=200&seq=language1&orientation=landscape"
                  alt="Multilingual Support"
                  className="rounded-lg h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Business Owners Nationwide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Answer30 agents are transforming businesses across industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer">
              <div className="flex items-center mb-4">
                <div className="text-amber-400 flex">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "Leads jumped 40% and my phones never ring unanswered. I can focus on cases while Answer30 Ai Agent handles intake perfectly."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-4">
                  <i className="ri-user-line ri-lg"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Claudia Martinez</h4>
                  <p className="text-sm text-gray-500">Immigration Attorney</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer">
              <div className="flex items-center mb-4">
                <div className="text-amber-400 flex">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "From 1.57 hrs to 0.03 hrs response time—game changer. Our conversion rate has doubled since implementing Answer30."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-4">
                  <i className="ri-user-line ri-lg"></i>
                </div>
                <div>
                  <h4 className="font-semibold">MVP Accident Attorneys</h4>
                  <p className="text-sm text-gray-500">Legal Services</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer">
              <div className="flex items-center mb-4">
                <div className="text-amber-400 flex">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "100 calls answered in ten seconds flat. Weekends included. We've never been more efficient at capturing and converting leads."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-4">
                  <i className="ri-user-line ri-lg"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Aladdin Pools</h4>
                  <p className="text-sm text-gray-500">Pool Construction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Answer30 Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how businesses are transforming their intake with Answer30 agents
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/abOfsmHRYhE"
                  title="Customer Success Story 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">Service Provider Success Story</h3>
                <p className="text-gray-600">
                  Increase from 79 to 114 leads per month in less than a month from Answer30 on Google Local Service Ads
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/WPbhpv9BXvA"
                  title="Customer Success Story 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">Attorney Success Story</h3>
                <p className="text-gray-600">
                  46% increase in absolute top percentage ranking on Google Local Service Ads with Answer30
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Got Questions? We've Got You Covered</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about Answer30 agents and how it can transform your business.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {/* Technology & Features */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => toggleSection('tech')}
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                    <i className="ri-code-line ri-lg"></i>
                  </div>
                  <h3 className="text-2xl font-semibold">Technology & Features</h3>
                  <div className="ml-auto w-6 h-6 flex items-center justify-center text-primary">
                    <i className={`ri-arrow-${openSection === 'tech' ? 'up' : 'down'}-s-line ri-lg`}></i>
                  </div>
                </div>
                {openSection === 'tech' && (
                  <div className="space-y-4 mt-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleFAQ('faq-0')}
                      >
                        <h3 className="text-xl font-semibold">
                          What makes DIYAI different from GoHighLevel or Retell AI?
                        </h3>
                        <div className="w-6 h-6 flex items-center justify-center text-primary">
                          <i className={`ri-arrow-${openFAQ === 'faq-0' ? 'up' : 'down'}-s-line ri-lg`}></i>
                        </div>
                      </div>
                      {openFAQ === 'faq-0' && (
                        <div className="mt-4 text-gray-600">
                          <p>
                            DIYAI doesn't rely on flow builders or rigid decision trees. Our agents use advanced large language models (LLMs) with real-time contextual memory and proprietary vector database (RAG) for better long-term recall — and we're the only platform that lets you use one single phone number for voice, SMS, and chat.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Communication & Features */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => toggleSection('comm')}
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                    <i className="ri-customer-service-line ri-lg"></i>
                  </div>
                  <h3 className="text-2xl font-semibold">Communication & Features</h3>
                  <div className="ml-auto w-6 h-6 flex items-center justify-center text-primary">
                    <i className={`ri-arrow-${openSection === 'comm' ? 'up' : 'down'}-s-line ri-lg`}></i>
                  </div>
                </div>
                {openSection === 'comm' && (
                  <div className="space-y-4 mt-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleFAQ('faq-2')}
                      >
                        <h3 className="text-xl font-semibold">
                          Does it really work in Spanish or other languages?
                        </h3>
                        <div className="w-6 h-6 flex items-center justify-center text-primary">
                          <i className={`ri-arrow-${openFAQ === 'faq-2' ? 'up' : 'down'}-s-line ri-lg`}></i>
                        </div>
                      </div>
                      {openFAQ === 'faq-2' && (
                        <div className="mt-4 text-gray-600">
                          <p>
                            Yes - Answer30 speaks and understands 50+ languages with native-level fluency. It handles natural conversations in Spanish, Mandarin, French, Arabic, and many more languages with proper accents and cultural understanding.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose the perfect plan for your business needs</p>
            <p className="text-sm text-gray-500 mt-4">
              * Additional conversations can be purchased for $2 each if you exceed your monthly limit
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4">Starter</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold">$30</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-gray-600 mt-4">Perfect for small businesses</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center text-primary">
                    <i className="ri-checkbox-circle-line"></i>
                  </div>
                  <span>Embed chat widget on website</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center text-primary">
                    <i className="ri-checkbox-circle-line"></i>
                  </div>
                  <span>Invite others via email & SMS</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center text-primary">
                    <i className="ri-checkbox-circle-line"></i>
                  </div>
                  <span>Admin tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center text-primary">
                    <i className="ri-checkbox-circle-line"></i>
                  </div>
                  <span>30 Conversations</span>
                </li>
              </ul>
              <a href="https://app.diyai.ai/signup/business/plan/Ya94qNFIJFKblzdW-MPk6fc7qArvH">
                <button className="w-full bg-white border-2 border-primary text-primary px-6 py-3 rounded-button whitespace-nowrap hover:bg-primary/5 transition-colors font-medium cursor-pointer">
                  Purchase
                </button>
              </a>
            </div>

            <div className="bg-white border-2 border-primary rounded-xl p-8 hover:shadow-lg transition-all relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4">Professional</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold">$100</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-gray-600 mt-4">For growing businesses</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center text-primary">
                    <i className="ri-checkbox-circle-line"></i>
                  </div>
                  <span>Get dedicated phone number</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center text-primary">
                    <i className="ri-checkbox-circle-line"></i>
                  </div>
                  <span>Choice for voice or text agent</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center text-primary">
                    <i className="ri-checkbox-circle-line"></i>
                  </div>
                  <span>Customer Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center text-primary">
                    <i className="ri-checkbox-circle-line"></i>
                  </div>
                  <span>100 Conversations</span>
                </li>
              </ul>
              <a href="https://app.diyai.ai/signup/business/plan/nbnUUze7Czz62oII-ILvlZvEmZS8r">
                <button className="w-full bg-primary text-white px-6 py-3 rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors font-medium cursor-pointer">
                  Purchase
                </button>
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4">Business</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold">$500</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-gray-600 mt-4">For larger organizations</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center text-primary">
                    <i className="ri-checkbox-circle-line"></i>
                  </div>
                  <span>Voice & SMS texts on the same number</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center text-primary">
                    <i className="ri-checkbox-circle-line"></i>
                  </div>
                  <span>Custom UI & admin tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center text-primary">
                    <i className="ri-checkbox-circle-line"></i>
                  </div>
                  <span>1 software/CRM integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center text-primary">
                    <i className="ri-checkbox-circle-line"></i>
                  </div>
                  <span>500 Conversations</span>
                </li>
              </ul>
              <a href="https://app.diyai.ai/signup/business/plan/Ya94qNFIJFKblzdW-MPk6fc7qArvH">
                <button className="w-full bg-white border-2 border-primary text-primary px-6 py-3 rounded-button whitespace-nowrap hover:bg-primary/5 transition-colors font-medium cursor-pointer">
                  Purchase
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/95 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Free, Go Live in Minutes</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Lock in your Answer30-second money-back guarantee today and never miss another lead.
          </p>
          <a href="https://app.diyai.ai/signup">
            <button className="bg-white text-primary px-8 py-4 rounded-button whitespace-nowrap hover:bg-gray-100 transition-colors text-lg font-medium inline-flex items-center gap-2 cursor-pointer">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-message-3-line"></i>
              </div>
              Chat with DIYAI
            </button>
          </a>
          <p className="mt-6 text-white/80">No credit card required • Set up in minutes • Cancel anytime</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;