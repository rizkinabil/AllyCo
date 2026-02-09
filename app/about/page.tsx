import squareVisionImage from '@/src/images/square-vision.jpg';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Grid overlay */}
      <div className="grid-overlay"></div>

      {/* Hero Section - Minimal and refined */}
      <section className="relative pt-40 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-[#0002ba] font-medium tracking-widest text-sm uppercase opacity-60">
                  About AllyCo
                </span>
                <div className="h-px bg-linear-to-r from-[#0002ba]/30 to-transparent mt-2 w-64"></div>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold text-[#000000] leading-tight">
                Building the future through intelligent transformation
              </h1>

              <p className="text-2xl text-[#31312d]/60 leading-relaxed font-light max-w-2xl">
                We partner with organizations to navigate complexity and deliver sustainable digital outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Diagonal accent line */}
        <div className="diagonal-accent" style={{ top: '30%', left: '-10%' }}></div>
      </section>

      {/* Mission Section - Split layout */}
      <section className="relative py-24 bg-[#f5f5f5]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Content */}
            <div className="space-y-10 lg:sticky lg:top-32">
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-8 h-px bg-[#0002ba]"></div>
                  <span className="text-[#0002ba] font-medium tracking-widest text-sm uppercase">Our Mission</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#000000]">
                  Trusted Partnership in Digital Evolution
                </h2>
              </div>

              <div className="space-y-6 text-lg text-[#31312d]/70 leading-relaxed font-light">
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
            <div className="relative h-150 professional-card">
              <div className="absolute inset-0 layered-depth">
                <div className="relative h-full w-full overflow-hidden">
                  <Image src={squareVisionImage} alt="Our Mission" className="object-contain grayscale-20" />
                  <div className="absolute inset-0 bg-linear-to-tr from-[#0002ba]/10 to-transparent"></div>
                </div>
              </div>

              {/* Frame corners */}
              <div className="absolute top-6 left-6 w-20 h-20 border-t-2 border-l-2 border-[#0002ba]/40"></div>
              <div className="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-[#0002ba]/40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Refined cards */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <div className="flex items-center gap-8 mb-6">
              <div className="w-12 h-px bg-[#0002ba]"></div>
              <span className="text-[#0002ba] font-medium tracking-widest text-sm uppercase">Our core belief</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#000000] max-w-3xl">Principles That Guide Our Work</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Philosophy 1 */}
            <div className="group professional-card bg-white border border-[#f5f5f5] p-10 space-y-6">
              <div className="w-16 h-16 flex items-center justify-center bg-[#0002ba]/5 border border-[#0002ba]/10 group-hover:bg-[#0002ba] transition-all duration-500">
                <svg
                  className="w-8 h-8 text-[#0002ba] group-hover:text-white transition-colors"
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
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#000000]">Trust</h3>
                <p className="text-[#31312d]/70 leading-relaxed">
                  Transparent impact measurement and honest assessment of readiness.
                </p>
              </div>
            </div>

            {/* Philosophy 2 */}
            <div className="group professional-card bg-white border border-[#f5f5f5] p-10 space-y-6">
              <div className="w-16 h-16 flex items-center justify-center bg-[#0002ba]/5 border border-[#0002ba]/10 group-hover:bg-[#0002ba] transition-all duration-500">
                <svg
                  className="w-8 h-8 text-[#0002ba] group-hover:text-white transition-colors"
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
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#000000]">Agility</h3>
                <p className="text-[#31312d]/70 leading-relaxed">
                  Incremental delivery and adapted to operational constraints.
                </p>
              </div>
            </div>

            {/* Philosophy 3 */}
            <div className="group professional-card bg-white border border-[#f5f5f5] p-10 space-y-6">
              <div className="w-16 h-16 flex items-center justify-center bg-[#0002ba]/5 border border-[#0002ba]/10 group-hover:bg-[#0002ba] transition-all duration-500">
                <svg
                  className="w-8 h-8 text-[#0002ba] group-hover:text-white transition-colors"
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
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#000000]">Value</h3>
                <p className="text-[#31312d]/70 leading-relaxed">
                  Improvement tied to financial improvement and no scale without results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose - List format */}
      <section className="relative py-32 bg-[#f5f5f5]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-8 h-px bg-[#0002ba]"></div>
                <span className="text-[#0002ba] font-medium tracking-widest text-sm uppercase">Why AllyCo</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#000000]">What Sets Us Apart</h2>
              <p className="text-lg text-[#31312d]/60 leading-relaxed font-light">
                We combine strategic thinking with operational excellence to deliver transformation that lasts.
              </p>
            </div>

            {/* List */}
            <div className="space-y-6">
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
                  className="group flex gap-6 items-start professional-card bg-white p-8 border border-[#f5f5f5]"
                >
                  <div className="shrink-0 pt-1">
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

      {/* CTA - Clean and minimal */}
      <section className="relative py-40 bg-[#0002ba] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 border border-white rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-125 h-125 border border-white rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-white/60 font-medium tracking-widest text-sm uppercase">Next Steps</span>
                <div className="h-px bg-linear-to-r from-white/30 to-transparent mt-2"></div>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">Begin Your Transformation Journey</h2>

              <p className="text-xl text-white/70 leading-relaxed max-w-2xl font-light">
                Connect with our team to explore how AllyCo can support your digital transformation goals.
              </p>

              <div className="pt-6">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-[#0002ba] font-semibold hover:bg-[#f5f5f5] transition-all duration-300"
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

        <div className="absolute bottom-12 right-12 w-24 h-24 border-b border-r border-white/20"></div>
      </section>
    </div>
  );
}
