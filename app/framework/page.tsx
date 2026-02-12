import heroAbout from '@/src/images/hero-image.jpg';
import squareVision from '@/src/images/square-vision.jpg';
import Image from 'next/image';

export default function Framework() {
  const methodology = [
    {
      phase: 'Validate & Prioritize',
      description:
        'Listen to your challenges, validate problems with facts, and prioritize use-cases that deliver the highest impact.',
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      phase: 'Prove Value First',
      description:
        'Demonstrate measurable impact through proof of value before building a justified business case for scaled investment.',
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      phase: 'Scale & Optimize',
      description:
        'Implement solutions at scale and establish continuous improvement cycles for long-term value creation.',
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  const pillars = [
    {
      number: '01',
      title: 'Strategic Vision',
      description: 'Establish a clear vision aligned with business objectives. Define what success looks like and how digital transformation will drive value creation.',
    },
    {
      number: '02',
      title: 'Organizational Readiness',
      description: 'Assess and prepare your organization for change. Build stakeholder engagement, set up governance structures, and establish change management practices.',
    },
    {
      number: '03',
      title: 'Technology Enablement',
      description: 'Select and implement technology solutions that support your transformation goals. Ensure systems are properly integrated and optimized.',
    },
    {
      number: '04',
      title: 'Capability Development',
      description: 'Build skills, knowledge, and capabilities within your teams. Provide training, mentoring, and support throughout the transformation journey.',
    },
    {
      number: '05',
      title: 'Continuous Improvement',
      description: 'Establish mechanisms for ongoing monitoring, feedback, and optimization. Ensure sustained benefits and continuous evolution.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Grid overlay */}
      <div className="grid-overlay"></div>

      {/* Noise texture */}
      <div className="fixed inset-0 noise-texture pointer-events-none z-0"></div>

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={heroAbout}
              alt="AllyCo Transformation Framework"
              fill
              className="object-cover parallax-image"
              priority
              quality={90}
              sizes="100vw"
            />
          </div>
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0002ba]/80 via-[#0002ba]/60 to-[#0002ba]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 sm:py-32 w-full">
          <div className="max-w-4xl text-center mx-auto">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-block bg-white/90 backdrop-blur-md px-4 py-2 rounded">
                <span className="text-[#0002ba] font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase">
                  Transformation Framework
                </span>
                <div className="h-px bg-gradient-to-r from-[#0002ba]/30 to-transparent mt-2"></div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                AllyCo <span className="italic font-light">Transformation</span> Framework
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed font-light max-w-2xl mx-auto bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 shadow-elevated">
                Our proven methodology for successful digital transformation.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
          <span className="text-xs text-white tracking-[0.3em] font-semibold">SCROLL</span>
          <div className="relative w-6 h-10 border-2 border-white/60 rounded-full">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-white/80 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 sm:mb-16 lg:mb-20 scroll-reveal">
            <div className="flex items-center gap-4 sm:gap-8 mb-6">
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-[#0002ba] to-transparent"></div>
              <span className="text-[#0002ba] font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase">Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] max-w-3xl leading-tight">
              How We <span className="text-[#0002ba]">Deliver Value</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {methodology.map((item, index) => (
              <div key={index} className="group relative">
                {/* Connection line */}
                {index < methodology.length - 1 && (
                  <div className="hidden md:block absolute top-20 -right-6 lg:-right-12 w-12 lg:w-24 h-px bg-gradient-to-r from-[#0002ba]/30 to-transparent"></div>
                )}

                <div className="professional-card magnetic-card bg-white p-6 sm:p-8 lg:p-10 border border-[#f5f5f5] hover:border-[#0002ba]/20 rounded-2xl shadow-elevated-hover scroll-reveal-1">
                  <div className="space-y-4 sm:space-y-6">
                    {/* Icon */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-[#0002ba]/5 border border-[#0002ba]/10 rounded-xl group-hover:bg-[#0002ba] group-hover:border-[#0002ba] transition-all duration-500">
                      <div className="text-[#0002ba] group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                    </div>

                    {/* Number */}
                    <div className="text-6xl sm:text-7xl font-bold gradient-number" data-number={`0${index + 1}`}>
                      0{index + 1}
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#000000] leading-tight">{item.phase}</h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-[#0002ba] to-transparent rounded-full"></div>
                      <p className="text-sm sm:text-base text-[#31312d]/70 leading-relaxed font-light">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Pillars of Success */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-[#f5f5f5]/30 gradient-mesh-1 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#0002ba]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#0002ba]/3 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="mb-12 sm:mb-16 lg:mb-20 scroll-reveal text-center">
            <div className="flex items-center justify-center gap-4 sm:gap-8 mb-6">
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-[#0002ba] to-transparent"></div>
              <span className="text-[#0002ba] font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase">Success Framework</span>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-[#0002ba] to-transparent"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] max-w-3xl mx-auto leading-tight">
              Five Pillars of <span className="text-[#0002ba]">Success</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className={`professional-card magnetic-card bg-white p-6 sm:p-8 lg:p-10 border border-[#f5f5f5] hover:border-[#0002ba]/20 rounded-2xl shadow-elevated-hover scroll-reveal-${(index % 3) + 1} ${index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-6xl sm:text-7xl lg:text-8xl font-bold gradient-number" data-number={pillar.number}>
                    {pillar.number}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#000000] leading-tight">{pillar.title}</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#0002ba] to-transparent rounded-full"></div>
                    <p className="text-sm sm:text-base text-[#31312d]/70 leading-relaxed font-light">{pillar.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incremental Delivery Model */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8 scroll-reveal">
              <div className="inline-block">
                <div className="flex items-center gap-4 sm:gap-6 mb-6">
                  <div className="w-6 sm:w-8 h-px bg-[#0002ba]"></div>
                  <span className="text-[#0002ba] font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase">Delivery Approach</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000] leading-tight">
                  Incremental Delivery Model
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#31312d]/70 leading-relaxed font-light">
                Instead of attempting a "big bang" transformation, we break complex initiatives into manageable increments that deliver value progressively.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#000000]">Key Benefits</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Faster time to initial value',
                    'Reduced project risk',
                    'Continuous stakeholder feedback',
                    'Better resource management',
                    'Adaptive and flexible approach',
                    'Measurable progress tracking'
                  ].map((benefit, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0002ba]/10 border border-[#0002ba]/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-[#0002ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base text-[#31312d] font-light">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Card */}
            <div className="relative scroll-reveal-2">
              <div className="professional-card bg-gradient-to-br from-[#0002ba] to-[#0003dd] p-8 sm:p-10 lg:p-12 rounded-2xl shadow-elevated border border-[#0002ba]/20">
                <div className="space-y-6">
                  {/* Visual representation */}
                  <div className="space-y-3">
                    {[
                      { label: 'Discovery', width: '40%' },
                      { label: 'Proof of Value', width: '65%' },
                      { label: 'Scale', width: '90%' },
                      { label: 'Optimize', width: '100%' }
                    ].map((phase, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-white/90 text-sm font-semibold">{phase.label}</span>
                          <span className="text-white/60 text-xs">Phase {index + 1}</span>
                        </div>
                        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-white rounded-full transition-all duration-1000"
                            style={{ width: phase.width }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-white/90 text-base sm:text-lg font-light leading-relaxed">
                      Each increment delivers <span className="font-semibold text-white">measurable business value</span> and enables continuous learning throughout the transformation journey.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-[#0002ba]/20 rounded-tr-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-[#0002ba]/20 rounded-bl-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-[#f5f5f5]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 sm:mb-16 text-center scroll-reveal">
            <div className="flex items-center justify-center gap-4 sm:gap-8 mb-6">
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-[#0002ba] to-transparent"></div>
              <span className="text-[#0002ba] font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase">Implementation</span>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-[#0002ba] to-transparent"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000] max-w-3xl mx-auto">
              Four-Phase Implementation
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                phase: 'Phase 1',
                title: 'Digital Foundation',
                items: ['Stakeholder alignment', 'Vision & roadmap', 'Team setup', 'Governance structure']
              },
              {
                phase: 'Phase 2',
                title: 'System Integration',
                items: ['Platform selection', 'Data integration', 'System configuration', 'Process automation']
              },
              {
                phase: 'Phase 3',
                title: 'Operational Optimization',
                items: ['Workflow optimization', 'Performance tracking', 'Training & adoption', 'Continuous improvement']
              },
              {
                phase: 'Phase 4',
                title: 'Smart Manufacturing & AI',
                items: ['Predictive analytics', 'AI-powered insights', 'IoT integration', 'Advanced automation']
              }
            ].map((item, index) => (
              <div key={index} className={`professional-card magnetic-card bg-white p-6 sm:p-8 border border-[#f5f5f5] hover:border-[#0002ba]/20 rounded-2xl shadow-elevated-hover scroll-reveal-${(index % 4) + 1}`}>
                <div className="space-y-4 sm:space-y-6">
                  <div className="space-y-2">
                    <div className="text-4xl sm:text-5xl font-bold text-[#0002ba]">{item.phase.split(' ')[1]}</div>
                    <h3 className="text-base sm:text-lg font-bold text-[#000000] leading-tight">{item.title}</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#0002ba] to-transparent rounded-full"></div>
                  </div>
                  <ul className="space-y-2">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="flex gap-2 items-start text-sm text-[#31312d]/70 font-light">
                        <span className="text-[#0002ba] mt-1">•</span>
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-28 lg:py-40 bg-gradient-to-br from-[#0002ba] via-[#0002ba] to-[#0003dd] text-white overflow-hidden">
        {/* Enhanced background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 border-2 border-white rounded-full blur-sm"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 sm:w-[500px] sm:h-[500px] border-2 border-white rounded-full blur-sm"></div>
        </div>

        {/* Noise texture */}
        <div className="absolute inset-0 noise-texture opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 z-10">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-block">
                <span className="text-white/70 font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase">Get Started</span>
                <div className="h-px w-24 bg-gradient-to-r from-white/40 to-transparent mt-3 mx-auto"></div>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Ready to <span className="italic font-light">Transform</span>?
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-light">
                Let's discuss how the AllyCo Framework can support your transformation goals.
              </p>

              <div className="pt-4 sm:pt-6">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#0002ba] font-bold hover:bg-[#f5f5f5] transition-all duration-300 text-sm sm:text-base rounded-xl shadow-elevated-hover btn-premium"
                >
                  <span>Contact Us</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced corner accents */}
        <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 w-20 h-20 sm:w-24 sm:h-24 border-b-2 border-r-2 border-white/30"></div>
        <div className="absolute top-8 left-8 sm:top-12 sm:left-12 w-16 h-16 sm:w-20 sm:h-20 border-t border-l border-white/20"></div>
      </section>
    </div>
  );
}
