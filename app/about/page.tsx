import squareVisionImage from '@/src/images/square-vision.jpg';
import visionMission from '@/src/images/vision-mission.jpg';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Grid overlay */}
      <div className="grid-overlay"></div>

      {/* Noise texture */}
      <div className="fixed inset-0 noise-texture pointer-events-none z-0"></div>

      {/* Hero Section - Simple text-based */}
      <section className="relative pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 lg:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-block">
                <span className="text-[#0002ba] font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase">
                  About AllyCo
                </span>
                <div className="h-px bg-gradient-to-r from-[#0002ba]/30 to-transparent mt-2 w-64"></div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#000000] leading-tight">
                Building the future through <span className="text-[#0002ba] italic font-light">intelligent</span> transformation
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-[#31312d]/60 leading-relaxed font-light max-w-2xl">
                We partner with organizations to navigate complexity and deliver sustainable digital outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Diagonal accent line */}
        <div className="diagonal-accent" style={{ top: '30%', left: '-10%' }}></div>
      </section>

      {/* Mission Section - Split layout */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#f5f5f5]/30 gradient-mesh-1 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#0002ba]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#0002ba]/3 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            {/* Content */}
            <div className="space-y-8 sm:space-y-10 scroll-reveal">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-[#0002ba] to-transparent"></div>
                  <span className="text-[#0002ba] font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase">Our Mission</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] leading-tight">
                  Trusted Partnership in <span className="text-[#0002ba]">Digital Evolution</span>
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-[#31312d]/70 leading-relaxed font-light">
                <p>
                  AllyCo exists to bridge the gap between strategic vision and operational reality. We bring deep
                  intelligence and expertise to help organizations transform how they work, deliver value, and compete.
                </p>
                <p>
                  Digital transformation transcends technology—it encompasses people, processes, and culture. Our
                  holistic approach ensures all dimensions of change receive the attention they require.
                </p>
                <p>
                  Through incremental delivery and continuous collaboration, we create sustainable results that generate
                  measurable business impact.
                </p>
              </div>
            </div>

            {/* Image with architectural frame */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] scroll-reveal-2">
              <div className="professional-card magnetic-card bg-white border border-[#f5f5f5] hover:border-[#0002ba]/20 rounded-2xl shadow-elevated-hover overflow-hidden">
                <div className="relative h-full w-full">
                  <Image src={squareVisionImage} alt="Our Mission" fill className="object-cover parallax-image" priority />
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0002ba]/10 via-transparent to-white/70"></div>
                </div>

                {/* Refined frame corners */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-t-2 border-l-2 border-white/60"></div>
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-b-2 border-r-2 border-white/60"></div>

                {/* Corner dots */}
                <div className="absolute top-3 left-3 sm:top-5 sm:left-5 w-2 h-2 bg-white/70 rounded-full"></div>
                <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 w-2 h-2 bg-white/70 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Refined cards */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="flex items-center gap-4 sm:gap-8 mb-6">
              <div className="w-8 sm:w-12 h-px bg-[#0002ba]"></div>
              <span className="text-[#0002ba] font-medium tracking-widest text-xs sm:text-sm uppercase">Our core belief</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] max-w-3xl">Principles That Guide Our Work</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Philosophy 1 */}
            <div className="group professional-card bg-white border border-[#f5f5f5] p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#0002ba]/5 border border-[#0002ba]/10 group-hover:bg-[#0002ba] transition-all duration-500">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-[#0002ba] group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#000000]">Trust</h3>
                <p className="text-sm sm:text-base text-[#31312d]/70 leading-relaxed">
                  Transparent impact measurement and honest assessment of readiness.
                </p>
              </div>
            </div>

            {/* Philosophy 2 */}
            <div className="group professional-card bg-white border border-[#f5f5f5] p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#0002ba]/5 border border-[#0002ba]/10 group-hover:bg-[#0002ba] transition-all duration-500">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-[#0002ba] group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#000000]">Agility</h3>
                <p className="text-sm sm:text-base text-[#31312d]/70 leading-relaxed">
                  Incremental delivery and adapted to operational constraints.
                </p>
              </div>
            </div>

            {/* Philosophy 3 */}
            <div className="group professional-card bg-white border border-[#f5f5f5] p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#0002ba]/5 border border-[#0002ba]/10 group-hover:bg-[#0002ba] transition-all duration-500">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-[#0002ba] group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#000000]">Value</h3>
                <p className="text-sm sm:text-base text-[#31312d]/70 leading-relaxed">
                  Improvement tied to financial improvement and no scale without results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose - List format with image */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] order-2 lg:order-1 scroll-reveal">
              <div className="professional-card magnetic-card bg-white border border-[#f5f5f5] hover:border-[#0002ba]/20 rounded-2xl shadow-elevated-hover overflow-hidden h-full">
                <div className="relative h-full w-full">
                  <Image src={visionMission} alt="Why AllyCo" fill className="object-cover parallax-image" />
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0002ba]/20 via-transparent to-white/60"></div>
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
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8 scroll-reveal-2">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-[#0002ba] to-transparent"></div>
                  <span className="text-[#0002ba] font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase">Why AllyCo</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] leading-tight">
                  What Sets Us <span className="text-[#0002ba]">Apart</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#31312d]/60 leading-relaxed font-light">
                  We combine strategic thinking with operational excellence to deliver transformation that lasts.
                </p>
              </div>

              {/* List */}
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: 'Client-Centric Approach',
                    description:
                      'Deep listening and understanding to tailor solutions for your unique organizational context.',
                  },
                  {
                    title: 'Practical Experience',
                    description:
                      'Real-world knowledge in guiding organizations through complex digital transformation challenges.',
                  },
                  {
                    title: 'Continuous Partnership',
                    description:
                      'Ongoing collaboration throughout your transformation journey, from vision to sustained adoption.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex gap-4 sm:gap-6 items-start professional-card magnetic-card bg-white p-6 sm:p-8 border border-[#f5f5f5] hover:border-[#0002ba]/20 rounded-xl shadow-elevated-hover"
                  >
                    <div className="shrink-0 pt-1">
                      <div className="w-2 h-2 bg-[#0002ba] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#000000]">{item.title}</h3>
                      <p className="text-sm sm:text-base text-[#31312d]/70 leading-relaxed font-light">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Refined and professional */}
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
                <span className="text-white/70 font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase">Next Steps</span>
                <div className="h-px w-24 bg-gradient-to-r from-white/40 to-transparent mt-3"></div>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Begin Your <span className="italic font-light">Transformation</span> Journey
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl font-light">
                Connect with our team to explore how AllyCo can support your digital transformation goals.
              </p>

              <div className="pt-4 sm:pt-6">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#0002ba] font-bold hover:bg-[#f5f5f5] transition-all duration-300 text-sm sm:text-base rounded-xl shadow-elevated-hover btn-premium"
                >
                  <span>Get in Touch</span>
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
