import missionImage from '@/src/images/vision-mission.jpg';
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

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-[#0002ba] font-medium tracking-widest text-sm uppercase opacity-60">
                  Capabilities
                </span>
                <div className="h-px bg-gradient-to-r from-[#0002ba]/30 to-transparent mt-2 w-64"></div>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold text-[#000000] leading-tight">
                Comprehensive Solutions for Digital Success
              </h1>

              <p className="text-xl text-[#31312d]/60 leading-relaxed font-light">
                End-to-end capabilities designed to support every phase of your transformation journey.
              </p>
            </div>

            {/* Image accent */}
            <div className="relative h-[500px] professional-card">
              <div className="absolute inset-0 layered-depth">
                <div className="relative h-full w-full overflow-hidden">
                  <Image src={missionImage} alt="Our Services" fill className="object-cover grayscale-[20%]" priority />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0002ba]/10 to-white/60"></div>
                </div>
              </div>
              <div className="absolute top-6 right-6 w-24 h-24 border-t-2 border-r-2 border-[#0002ba]/30"></div>
              <div className="absolute bottom-6 left-6 w-24 h-24 border-b-2 border-l-2 border-[#0002ba]/30"></div>
            </div>
          </div>
        </div>

        <div className="diagonal-accent" style={{ top: '60%', left: '-10%' }}></div>
      </section>

      {/* Services Grid - Clean professional cards */}
      <section className="relative py-32 bg-[#f5f5f5]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <div className="flex items-center gap-8 mb-6">
              <div className="w-12 h-px bg-[#0002ba]"></div>
              <span className="text-[#0002ba] font-medium tracking-widest text-sm uppercase">Our Services</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#000000] max-w-3xl">
              Capabilities That Drive Transformation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group professional-card bg-white border border-[#f5f5f5] p-10 space-y-6 hover:shadow-lg transition-all duration-500"
              >
                <div className="flex items-start justify-between">
                  <span className="decorated-number text-5xl font-bold text-[#0002ba]/10">{service.number}</span>
                  <div className="w-8 h-8 border border-[#0002ba]/10 group-hover:border-[#0002ba]/30 group-hover:bg-[#0002ba]/5 transition-all duration-500"></div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#000000]">{service.title}</h3>
                  <p className="text-[#31312d]/70 leading-relaxed">{service.description}</p>
                </div>

                <div className="h-px w-12 bg-[#0002ba]/0 group-hover:w-full group-hover:bg-[#0002ba]/20 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Split layout */}
      <section className="relative py-32 bg-[#f5f5f5]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-8 h-px bg-[#0002ba]"></div>
                <span className="text-[#0002ba] font-medium tracking-widest text-sm uppercase">Benefits</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#000000]">Measurable Business Impact</h2>
              <p className="text-lg text-[#31312d]/60 leading-relaxed font-light">
                Our services deliver tangible outcomes that drive sustainable competitive advantage.
              </p>
            </div>

            {/* List */}
            <div className="space-y-6">
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
                  className="group flex gap-6 items-start professional-card bg-white p-8 border border-[#f5f5f5]"
                >
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-2 h-2 bg-[#0002ba] group-hover:scale-150 transition-transform duration-300"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#000000]">{item.title}</h3>
                    <p className="text-[#31312d]/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 bg-[#0002ba] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 border border-white rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] border border-white rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-white/60 font-medium tracking-widest text-sm uppercase">Get Started</span>
                <div className="h-px bg-gradient-to-r from-white/30 to-transparent mt-2"></div>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Explore How Our Services Can Support Your Goals
              </h2>

              <p className="text-xl text-white/70 leading-relaxed max-w-2xl font-light">
                Schedule a consultation to discuss your transformation challenges and opportunities.
              </p>

              <div className="pt-6">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-[#0002ba] font-semibold hover:bg-[#f5f5f5] transition-all duration-300"
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

        <div className="absolute bottom-12 right-12 w-24 h-24 border-b border-r border-white/20"></div>
      </section>
    </div>
  );
}
