import heroAbout from '@/src/images/hero-image.jpg';
import Image from 'next/image';

export default function Framework() {
  const methodology = [
    {
      phase: 'Validate & Prioritize',
      description:
        'Listen to your challenges, validate problems with facts, and prioritize use-cases that deliver the highest impact.',
    },
    {
      phase: 'Prove Value First',
      description:
        'Demonstrate measurable impact through proof of value before building a justified business case for scaled investment.',
    },
    {
      phase: 'Scale & Optimize',
      description:
        'Implement solutions at scale and establish continuous improvement cycles for long-term value creation.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-96 bg-[#0002ba] text-white overflow-hidden">
        <Image
          src={heroAbout}
          alt="AllyCo Transformation Framework"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-6xl font-bold mb-6">AllyCo Transformation Framework</h1>
            <p className="text-xl font-light">Our proven methodology for successful digital transformation.</p>
          </div>
        </div>
      </section>

      {/* Methodology Section - Timeline style */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <div className="flex items-center gap-8 mb-6">
              <div className="w-12 h-px bg-[#0002ba]"></div>
              <span className="text-[#0002ba] font-medium tracking-widest text-sm uppercase">Methodology</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#000000] max-w-3xl">How We Deliver Value</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {methodology.map((item, index) => (
              <div key={index} className="group space-y-6">
                {/* Number circle */}
                <div className="relative">
                  <div className="w-20 h-20 border-2 border-[#0002ba]/20 flex items-center justify-center bg-white group-hover:bg-[#0002ba] group-hover:border-[#0002ba] transition-all duration-500">
                    <span className="text-2xl font-bold text-[#0002ba] group-hover:text-white transition-colors">
                      {index + 1}
                    </span>
                  </div>
                  {/* Connection line */}
                  {index < methodology.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-20 w-[calc(100%+3rem)] h-px bg-gradient-to-r from-[#0002ba]/20 to-[#0002ba]/5"></div>
                  )}
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#000000]">{item.phase}</h3>
                  <p className="text-[#31312d]/70 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Pillars */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#000000] mb-12 text-center">Five Pillars of Success</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-[#0002ba] pl-8 py-4 animate-slide-in-left">
              <h3 className="text-2xl font-bold text-[#0002ba] mb-3">1. Strategic Vision</h3>
              <p className="text-lg text-[#31312d] font-light">
                Establish a clear vision aligned with business objectives. Define what success looks like and how
                digital transformation will drive value creation.
              </p>
            </div>
            <div className="border-l-4 border-[#0002ba] pl-8 py-4 animate-slide-in-left delay-100">
              <h3 className="text-2xl font-bold text-[#0002ba] mb-3">2. Organizational Readiness</h3>
              <p className="text-lg text-[#31312d] font-light">
                Assess and prepare your organization for change. Build stakeholder engagement, set up governance
                structures, and establish change management practices.
              </p>
            </div>
            <div className="border-l-4 border-[#0002ba] pl-8 py-4 animate-slide-in-left delay-200">
              <h3 className="text-2xl font-bold text-[#0002ba] mb-3">3. Technology Enablement</h3>
              <p className="text-lg text-[#31312d] font-light">
                Select and implement technology solutions that support your transformation goals. Ensure systems are
                properly integrated and optimized.
              </p>
            </div>
            <div className="border-l-4 border-[#0002ba] pl-8 py-4 animate-slide-in-left delay-300">
              <h3 className="text-2xl font-bold text-[#0002ba] mb-3">4. Capability Development</h3>
              <p className="text-lg text-[#31312d] font-light">
                Build skills, knowledge, and capabilities within your teams. Provide training, mentoring, and support
                throughout the transformation journey.
              </p>
            </div>
            <div className="border-l-4 border-[#0002ba] pl-8 py-4 animate-slide-in-left delay-400">
              <h3 className="text-2xl font-bold text-[#0002ba] mb-3">5. Continuous Improvement</h3>
              <p className="text-lg text-[#31312d] font-light">
                Establish mechanisms for ongoing monitoring, feedback, and optimization. Ensure sustained benefits and
                continuous evolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Incremental Delivery Model */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Incremental Delivery Model</h2>
          <p className="text-lg text-[#31312d] mb-12 font-light">
            Instead of attempting a &quot;big bang&quot; transformation, we break complex initiatives into manageable
            increments that deliver value progressively.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold text-[#000000] mb-6">Benefits</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-[#0002ba] font-bold text-lg">✓</span>
                  <span className="text-[#31312d] font-light">Faster time to initial value</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#0002ba] font-bold text-lg">✓</span>
                  <span className="text-[#31312d] font-light">Reduced project risk</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#0002ba] font-bold text-lg">✓</span>
                  <span className="text-[#31312d] font-light">Continuous stakeholder feedback</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#0002ba] font-bold text-lg">✓</span>
                  <span className="text-[#31312d] font-light">Better resource management</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#0002ba] font-bold text-lg">✓</span>
                  <span className="text-[#31312d] font-light">Adaptive and flexible approach</span>
                </li>
              </ul>
            </div>
            <div className="bg-linear-to-br from-[#0002ba] to-[#31312d] rounded-xl p-8 flex items-center justify-center shadow-lg animate-scale-in">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-lg text-white font-light">
                  Each increment delivers measurable business value and enables continuous learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#000000] mb-12 text-center">Implementation Phases</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up">
              <div className="text-4xl font-bold text-[#0002ba] mb-4">Phase 1</div>
              <h3 className="text-xl font-bold text-[#000000] mb-3">Digital Foundation</h3>
              <ul className="space-y-2 text-[#31312d] text-sm font-light">
                <li>• Stakeholder alignment</li>
                <li>• Vision & roadmap</li>
                <li>• Team setup</li>
                <li>• Governance structure</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up delay-100">
              <div className="text-4xl font-bold text-[#0002ba] mb-4">Phase 2</div>
              <h3 className="text-xl font-bold text-[#000000] mb-3">System Integration</h3>
              <ul className="space-y-2 text-[#31312d] text-sm font-light">
                <li>• Platform selection</li>
                <li>• Data integration</li>
                <li>• System configuration</li>
                <li>• Process automation</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up delay-200">
              <div className="text-4xl font-bold text-[#0002ba] mb-4">Phase 3</div>
              <h3 className="text-xl font-bold text-[#000000] mb-3">Operational Optimization</h3>
              <ul className="space-y-2 text-[#31312d] text-sm font-light">
                <li>• Workflow optimization</li>
                <li>• Performance tracking</li>
                <li>• Training & adoption</li>
                <li>• Continuous improvement</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up delay-300">
              <div className="text-4xl font-bold text-[#0002ba] mb-4">Phase 4</div>
              <h3 className="text-xl font-bold text-[#000000] mb-3">Smart Manufacturing & AI</h3>
              <ul className="space-y-2 text-[#31312d] text-sm font-light">
                <li>• Predictive analytics</li>
                <li>• AI-powered insights</li>
                <li>• IoT integration</li>
                <li>• Advanced automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0002ba] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform?</h2>
          <p className="text-xl mb-8 font-light">
            Let&apos;s discuss how the AllyCo Framework can support your transformation goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0002ba] px-10 py-4 rounded-lg font-semibold hover:bg-[#f5f5f5] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
