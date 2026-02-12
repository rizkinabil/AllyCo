import capabilitiesImage from '@/src/images/capabilities.jpg';
import squareVision from '@/src/images/square-vision.jpg';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Systems Integration & Logistics',
      description:
        'Enterprise Synchronization: ERP/MES Integration, Smart Warehouse Automation (RFID & AGV), and Cross-Enterprise Visibility Platforms.',
    },
    {
      number: '02',
      title: 'Industrial IoT (IIoT) & Infrastructure',
      description:
        'Asset Connectivity & Data Fusion: Real-time machine monitoring, Edge Computing deployment, and OT/IT Network Security.',
    },
    {
      number: '03',
      title: 'Artificial Intelligence & Analytics',
      description:
        'Predictive AI: Predictive Maintenance, Defect Detection, Dynamic Production Scheduling, and Energy Optimization.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Grid overlay */}
      <div className="grid-overlay"></div>

      {/* Noise texture */}
      <div className="fixed inset-0 noise-texture pointer-events-none z-0"></div>

      {/* Hero Section - Simple text-based */}
      <section className="relative pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 lg:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <div className="space-y-6 sm:space-y-8 scroll-reveal">
              <div className="inline-block">
                <span className="text-[#0002ba] font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase">
                  Capabilities
                </span>
                <div className="h-px bg-gradient-to-r from-[#0002ba]/30 to-transparent mt-2 w-64"></div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#000000] leading-tight">
                Comprehensive Solutions for <span className="text-[#0002ba] italic font-light">Digital Success</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#31312d]/60 leading-relaxed font-light">
                End-to-end capabilities designed to support every phase of your transformation journey.
              </p>
            </div>

            {/* Image accent */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] scroll-reveal-2">
              <div className="professional-card magnetic-card bg-white border border-[#f5f5f5] hover:border-[#0002ba]/20 rounded-2xl shadow-elevated-hover overflow-hidden h-full">
                <div className="relative h-full w-full">
                  <Image
                    src={capabilitiesImage}
                    alt="Our Services"
                    fill
                    className="object-cover parallax-image"
                    priority
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0002ba]/10 via-transparent to-white/70"></div>
                </div>

                {/* Refined frame corners */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-t-2 border-r-2 border-white/60"></div>
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-b-2 border-l-2 border-white/60"></div>

                {/* Corner dots */}
                <div className="absolute top-3 right-3 sm:top-5 sm:right-5 w-2 h-2 bg-white/70 rounded-full"></div>
                <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 w-2 h-2 bg-white/70 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="diagonal-accent" style={{ top: '60%', left: '-10%' }}></div>
      </section>

      {/* Services Grid - Clean professional cards */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-[#f5f5f5]/30 gradient-mesh-1 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#0002ba]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#0002ba]/3 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="mb-12 sm:mb-16 lg:mb-20 scroll-reveal">
            <div className="flex items-center gap-4 sm:gap-8 mb-6">
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-[#0002ba] to-transparent"></div>
              <span className="text-[#0002ba] font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] max-w-3xl leading-tight">
              Capabilities That Drive <span className="text-[#0002ba]">Transformation</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group professional-card magnetic-card bg-white border border-[#f5f5f5] hover:border-[#0002ba]/20 p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 rounded-2xl shadow-elevated-hover scroll-reveal-${index + 1}`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="text-6xl sm:text-7xl lg:text-8xl font-bold gradient-number"
                    data-number={service.number}
                  >
                    {service.number}
                  </span>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 border border-[#0002ba]/10 group-hover:border-[#0002ba]/30 group-hover:bg-[#0002ba]/5 transition-all duration-500 rounded"></div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#000000] leading-tight">
                    {service.title}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-[#0002ba] to-transparent rounded-full"></div>
                  <p className="text-sm sm:text-base text-[#31312d]/70 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div className="h-px w-12 bg-[#0002ba]/0 group-hover:w-full group-hover:bg-[#0002ba]/20 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Split layout with image */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] scroll-reveal">
              <div className="professional-card magnetic-card bg-white border border-[#f5f5f5] hover:border-[#0002ba]/20 rounded-2xl shadow-elevated-hover overflow-hidden h-full">
                <div className="relative h-full w-full">
                  <Image
                    src={squareVision}
                    alt="Business Impact"
                    fill
                    className="object-cover parallax-image"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tl from-[#0002ba]/20 via-transparent to-white/60"></div>
                </div>

                {/* Refined frame corners */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-t-2 border-l-2 border-white/60"></div>
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-b-2 border-r-2 border-white/60"></div>

                {/* Corner dots */}
                <div className="absolute top-3 left-3 sm:top-5 sm:left-5 w-2 h-2 bg-white/70 rounded-full"></div>
                <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 w-2 h-2 bg-white/70 rounded-full"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 sm:space-y-8 scroll-reveal-2">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-[#0002ba] to-transparent"></div>
                  <span className="text-[#0002ba] font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase">
                    Benefits
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] leading-tight">
                  Measurable <span className="text-[#0002ba]">Business Impact</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#31312d]/60 leading-relaxed font-light">
                  Our services deliver tangible outcomes that drive sustainable competitive advantage.
                </p>
              </div>

              {/* List */}
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: 'Accelerated Time to Value',
                    description:
                      'Proven methodologies that compress transformation timelines without sacrificing quality.',
                  },
                  {
                    title: 'Cost Optimization',
                    description:
                      'Strategic technology investments and process improvements that reduce operational costs.',
                  },
                  {
                    title: 'Operational Excellence',
                    description: 'Enhanced efficiency, agility, and resilience across the organization.',
                  },
                  {
                    title: 'Sustainable Capabilities',
                    description: 'Internal skill development and knowledge transfer for long-term independence.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex gap-4 sm:gap-6 items-start professional-card magnetic-card bg-white p-6 sm:p-8 border border-[#f5f5f5] hover:border-[#0002ba]/20 rounded-xl shadow-elevated-hover"
                  >
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-2 h-2 bg-[#0002ba] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#000000]">{item.title}</h3>
                      <p className="text-sm sm:text-base text-[#31312d]/70 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-28 lg:py-40 bg-gradient-to-br from-[#0002ba] via-[#0002ba] to-[#0003dd] text-white overflow-hidden">
        {/* Enhanced background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 border-2 border-white rounded-full blur-sm"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 sm:w-[500px] sm:h-[500px] border-2 border-white rounded-full blur-sm"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/40 rounded-full"></div>
        </div>

        {/* Noise texture */}
        <div className="absolute inset-0 noise-texture opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 z-10">
          <div className="max-w-4xl scroll-reveal">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-block">
                <span className="text-white/70 font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase">
                  Get Started
                </span>
                <div className="h-px w-24 bg-gradient-to-r from-white/40 to-transparent mt-3"></div>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Explore How Our Services Can <span className="italic font-light">Support</span> Your Goals
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl font-light">
                Schedule a consultation to discuss your transformation challenges and opportunities.
              </p>

              <div className="pt-4 sm:pt-6">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#0002ba] font-bold hover:bg-[#f5f5f5] transition-all duration-300 text-sm sm:text-base rounded-xl shadow-elevated-hover btn-premium"
                >
                  <span>Schedule a Consultation</span>
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
