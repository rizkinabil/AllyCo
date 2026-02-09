import heroAbout from '@/src/images/hero-image.jpg';
import visionMission from '@/src/images/vision-mission.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Grid overlay for architectural feel */}
      <div className="grid-overlay"></div>

      {/* Hero Section - Asymmetric precision */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image src={visionMission} alt="AllyCo Banner" fill className="object-cover" priority />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <div className="relative space-y-8">
              {/* Corner accent */}
              <div className="corner-accent top-0 left-0"></div>

              <div className="space-y-6">
                <div className="inline-block bg-white/90 backdrop-blur-md px-4 py-2 rounded">
                  <span className="text-[#0002ba] font-medium tracking-widest text-sm uppercase">
                    Digital Transformation
                  </span>
                  <div className="h-px bg-linear-to-r from-[#0002ba]/30 to-transparent mt-2"></div>
                </div>

                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] text-reveal drop-shadow-lg">
                  Intelligence
                  <span className="block mt-2 text-white/90">meets</span>
                  <span className="block mt-2">Expertise</span>
                </h1>

                <div className="h-px w-24 bg-white delay-300 text-reveal"></div>
              </div>

              <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-xl font-light text-reveal delay-200 bg-black/30 backdrop-blur-sm px-6 py-4 rounded-xl">
                AllyCo partners with organizations to deliver operational digital transformation through incremental,
                measurable value.
              </p>

              <div className="flex flex-wrap gap-4 pt-4 text-reveal delay-300">
                <a
                  href="/about"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0002ba] font-medium overflow-hidden transition-all duration-300 hover:shadow-xl hover:bg-gray-50"
                >
                  <span className="relative z-10">Learn Our Story</span>
                  <svg
                    className="w-4 h-4 relative z-10 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-[#000000] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>

                <a
                  href="/services"
                  className="group inline-flex items-center gap-2 px-8 py-4 border border-white text-white font-medium hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  View Capabilities
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Image with layered effect */}
            <div className="relative lg:h-175 h-125 text-reveal delay-400">
              <div className="absolute inset-0 layered-depth">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={heroAbout}
                    alt="AllyCo Digital Transformation"
                    fill
                    className="object-cover grayscale-30"
                    priority
                  />
                  {/* Diagonal overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-[#0002ba]/10 via-transparent to-white/80"></div>

                  {/* Frame accent */}
                  <div className="absolute top-8 right-8 w-32 h-32 border-t-2 border-r-2 border-[#0002ba]/30"></div>
                  <div className="absolute bottom-8 left-8 w-32 h-32 border-b-2 border-l-2 border-[#0002ba]/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-[#31312d] tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-linear-to-b from-[#31312d] to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* Why Choose Section - Offset grid layout */}
      <section className="relative py-32 bg-[#f5f5f5]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-24">
            <div className="flex items-center gap-8 mb-6">
              <div className="w-12 h-px bg-[#0002ba]"></div>
              <span className="text-[#0002ba] font-medium tracking-widest text-sm uppercase">Who We Are?</span>
            </div>
            <h2 className="text-2xl lg:text-5xl font-bold text-[#000000] max-w-4xl">
              AllyCo helps manufacturers improve productivity through practical digitalization
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 offset-grid">
            {/* Card 1 */}
            <div className="group professional-card bg-white p-10 border border-[#f5f5f5] hover:border-[#0002ba]/10 transition-all duration-500">
              <div className="space-y-6">
                <div className="relative inline-block">
                  <span className="decorated-number text-7xl font-bold text-[#0002ba]/10">01</span>
                </div>
                <h3 className="text-2xl font-bold text-[#000000]">Operations-driven technology partner</h3>
                <p className="text-[#31312d]/70 leading-relaxed">
                  We align with your business objectives, serving as a committed advisor invested in your long-term
                  success.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group professional-card bg-white p-10 border border-[#f5f5f5] hover:border-[#0002ba]/10 transition-all duration-500">
              <div className="space-y-6">
                <div className="relative inline-block">
                  <span className="decorated-number text-7xl font-bold text-[#0002ba]/10">02</span>
                </div>
                <h3 className="text-2xl font-bold text-[#000000]">End-to-end digital transformation support</h3>
                <p className="text-[#31312d]/70 leading-relaxed">
                  Comprehensive knowledge across technology, strategy, and organizational transformation disciplines.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group professional-card bg-white p-10 border border-[#f5f5f5] hover:border-[#0002ba]/10 transition-all duration-500">
              <div className="space-y-6">
                <div className="relative inline-block">
                  <span className="decorated-number text-7xl font-bold text-[#0002ba]/10">03</span>
                </div>
                <h3 className="text-2xl font-bold text-[#000000]">Measured Value</h3>
                <p className="text-[#31312d]/70 leading-relaxed">
                  Continuous delivery of measurable outcomes, reducing risk while building sustainable capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Impact Section - Clean and minimal */}
      {/* <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-3 group">
              <div className="text-5xl font-bold text-[#0002ba]">100%</div>
              <div className="h-px w-16 bg-[#0002ba]/20 group-hover:w-24 group-hover:bg-[#0002ba] transition-all duration-500"></div>
              <p className="text-[#31312d]/60 text-sm uppercase tracking-wider">Client Aligned</p>
            </div>

            <div className="space-y-3 group">
              <div className="text-5xl font-bold text-[#0002ba]">360°</div>
              <div className="h-px w-16 bg-[#0002ba]/20 group-hover:w-24 group-hover:bg-[#0002ba] transition-all duration-500"></div>
              <p className="text-[#31312d]/60 text-sm uppercase tracking-wider">Transformation View</p>
            </div>

            <div className="space-y-3 group">
              <div className="text-5xl font-bold text-[#0002ba]">∞</div>
              <div className="h-px w-16 bg-[#0002ba]/20 group-hover:w-24 group-hover:bg-[#0002ba] transition-all duration-500"></div>
              <p className="text-[#31312d]/60 text-sm uppercase tracking-wider">Continuous Improvement</p>
            </div>

            <div className="space-y-3 group">
              <div className="text-5xl font-bold text-[#0002ba]">1:1</div>
              <div className="h-px w-16 bg-[#0002ba]/20 group-hover:w-24 group-hover:bg-[#0002ba] transition-all duration-500"></div>
              <p className="text-[#31312d]/60 text-sm uppercase tracking-wider">Partnership Ratio</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section - Architectural precision */}
      <section className="relative py-40 bg-[#0002ba] text-white overflow-hidden">
        {/* Subtle background patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 border border-white rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-125 h-125 border border-white rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-white/60 font-medium tracking-widest text-sm uppercase">Get Started</span>
                <div className="h-px bg-linear-to-r from-white/30 to-transparent mt-2"></div>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Ready to accelerate your digital transformation?
              </h2>

              <p className="text-xl text-white/70 leading-relaxed max-w-2xl font-light">
                Partner with AllyCo to build sustainable capabilities and achieve measurable business outcomes.
              </p>

              <div className="pt-6">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-[#0002ba] font-semibold hover:bg-[#f5f5f5] transition-all duration-300"
                >
                  <span>Start the Conversation</span>
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

        {/* Corner accent */}
        <div className="absolute bottom-12 right-12 w-24 h-24 border-b border-r border-white/20"></div>
      </section>
    </div>
  );
}
