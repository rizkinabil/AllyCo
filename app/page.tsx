'use client';

import heroAbout from '@/src/images/hero-image.jpg';
import visionMission from '@/src/images/vision-mission.jpg';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  // Scroll reveal animation
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-reveal');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    });

    const elements = document.querySelectorAll(
      '.scroll-reveal-1, .scroll-reveal-2, .scroll-reveal-3, .scroll-reveal-4',
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Grid overlay for architectural feel */}
      <div className="grid-overlay"></div>

      {/* Noise texture for premium feel */}
      <div className="fixed inset-0 noise-texture pointer-events-none z-0"></div>

      {/* Hero Section - Asymmetric precision */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={visionMission}
              alt="AllyCo Banner"
              fill
              className="object-cover parallax-image"
              priority
              quality={90}
              sizes="100vw"
            />
          </div>
          {/* Enhanced gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/45 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Text content */}
            <div className="relative space-y-6 sm:space-y-8">
              {/* Corner accent */}
              <div className="corner-accent top-0 left-0"></div>

              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] text-reveal">
                  <span className="block drop-shadow-2xl">Intelligence</span>
                  <span className="block mt-1 sm:mt-2 text-white/85 font-light italic">meets</span>
                  <span className="block mt-1 sm:mt-2 drop-shadow-2xl">Expertise</span>
                </h1>

                <div className="h-px w-24 bg-white delay-300 text-reveal"></div>
              </div>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed max-w-xl font-light text-reveal delay-200 bg-black/40 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-white/10 shadow-elevated">
                AllyCo partners with organizations to deliver operational digital transformation through incremental,
                measurable value.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 text-reveal delay-300">
                <a
                  href="/about"
                  className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0002ba] font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl rounded-lg btn-premium text-sm sm:text-base shadow-elevated-hover"
                >
                  <span className="relative z-10 hover:text-white">Learn Our Story</span>
                  <svg
                    className="w-4 h-4 relative z-10 transform group-hover:translate-x-1 group-hover:text-white transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-[#0002ba] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>

                <a
                  href="/services"
                  className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/80 text-white font-semibold hover:border-white hover:bg-white/15 transition-all duration-300 backdrop-blur-md text-sm sm:text-base rounded-lg shadow-elevated-hover"
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
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] text-reveal delay-400">
              <div className="absolute inset-0 layered-depth">
                <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-elevated border border-white/10">
                  <Image
                    src={heroAbout}
                    alt="AllyCo Digital Transformation"
                    fill
                    className="object-cover grayscale-30 parallax-image"
                    priority
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0002ba]/15 via-transparent to-white/90"></div>

                  {/* Refined frame accents */}
                  <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border-t-2 border-r-2 border-white/40"></div>
                  <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border-b-2 border-l-2 border-white/40"></div>

                  {/* Corner dots for precision */}
                  <div className="absolute top-3 right-3 sm:top-7 sm:right-7 w-2 h-2 bg-white/60 rounded-full"></div>
                  <div className="absolute bottom-3 left-3 sm:bottom-7 sm:left-7 w-2 h-2 bg-white/60 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 animate-fade-in-up delay-500">
          <span className="text-xs text-white tracking-[0.3em] font-semibold">SCROLL</span>
          <div className="relative w-6 h-10 border-2 border-white/60 rounded-full">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-white/80 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Section - Offset grid layout */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-[#f5f5f5]/30 gradient-mesh-1 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#0002ba]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#0002ba]/3 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="mb-12 sm:mb-16 lg:mb-24 scroll-reveal">
            <div className="flex items-center gap-4 sm:gap-8 mb-6 sm:mb-8">
              <div className="w-8 sm:w-12 h-px bg-linear-to-r from-[#0002ba] to-transparent"></div>
              <span className="text-[#0002ba] font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase">
                Who We Are
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#000000] max-w-4xl leading-tight">
              AllyCo helps manufacturers improve productivity through{' '}
              <span className="text-[#0002ba]">practical digitalization</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 offset-grid">
            {/* Card 1 */}
            <div className="group professional-card magnetic-card bg-white p-6 sm:p-8 lg:p-10 border border-[#f5f5f5] hover:border-[#0002ba]/20 transition-all duration-500 rounded-2xl shadow-elevated-hover scroll-reveal-1">
              <div className="space-y-4 sm:space-y-6">
                <div className="relative inline-block">
                  <span
                    className="decorated-number text-6xl sm:text-7xl lg:text-8xl font-bold gradient-number"
                    data-number="01"
                  >
                    01
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#000000] leading-tight">
                  Operations-driven technology partner
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-[#0002ba] to-transparent rounded-full"></div>
                <p className="text-sm sm:text-base text-[#31312d]/70 leading-relaxed font-light">
                  We align with your business objectives, serving as a committed advisor invested in your long-term
                  success.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group professional-card magnetic-card bg-white p-6 sm:p-8 lg:p-10 border border-[#f5f5f5] hover:border-[#0002ba]/20 transition-all duration-500 rounded-2xl shadow-elevated-hover scroll-reveal-2">
              <div className="space-y-4 sm:space-y-6">
                <div className="relative inline-block">
                  <span
                    className="decorated-number text-6xl sm:text-7xl lg:text-8xl font-bold gradient-number"
                    data-number="02"
                  >
                    02
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#000000] leading-tight">
                  End-to-end digital transformation support
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-[#0002ba] to-transparent rounded-full"></div>
                <p className="text-sm sm:text-base text-[#31312d]/70 leading-relaxed font-light">
                  Comprehensive knowledge across technology, strategy, and organizational transformation disciplines.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group professional-card magnetic-card bg-white p-6 sm:p-8 lg:p-10 border border-[#f5f5f5] hover:border-[#0002ba]/20 transition-all duration-500 rounded-2xl shadow-elevated-hover scroll-reveal-3">
              <div className="space-y-4 sm:space-y-6">
                <div className="relative inline-block">
                  <span
                    className="decorated-number text-6xl sm:text-7xl lg:text-8xl font-bold gradient-number"
                    data-number="03"
                  >
                    03
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#000000] leading-tight">
                  Measured Value
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-[#0002ba] to-transparent rounded-full"></div>
                <p className="text-sm sm:text-base text-[#31312d]/70 leading-relaxed font-light">
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
                Ready to <span className="italic font-light">accelerate</span> your digital transformation?
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl font-light">
                Partner with AllyCo to build sustainable capabilities and achieve measurable business outcomes.
              </p>

              <div className="pt-4 sm:pt-6 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#0002ba] font-bold hover:bg-[#f5f5f5] transition-all duration-300 text-sm sm:text-base rounded-xl shadow-elevated-hover btn-premium"
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

                <a
                  href="/framework"
                  className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/80 text-white font-bold hover:bg-white/10 hover:border-white transition-all duration-300 text-sm sm:text-base rounded-xl backdrop-blur-sm"
                >
                  <span>Explore Our Framework</span>
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
