import heroAbout from '@/src/images/hero-image.jpg';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-96 bg-[#0002ba] text-white overflow-hidden">
        <Image src={heroAbout} alt="About AllyCo" fill className="object-cover opacity-40" priority />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="text-center animate-fade-in-up z-10">
            <h1 className="text-6xl font-bold mb-6">About AllyCo</h1>
            <p className="text-xl font-light">
              Learn more about our mission, values, and what drives us to help organizations succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-[#000000] mb-6">Our Mission</h2>
              <p className="text-lg text-[#31312d] mb-4 font-light">
                At AllyCo, we are committed to being a trusted partner that brings intelligence and expertise to help
                organizations succeed in their digital transformation journey.
              </p>
              <p className="text-lg text-[#31312d] mb-4 font-light">
                We understand that digital transformation is not just about technology—it's about people, processes, and
                culture. That's why we take a holistic approach to every engagement.
              </p>
              <p className="text-lg text-[#31312d] font-light">
                Through incremental delivery and continuous collaboration, we ensure sustainable results that create
                real business value.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg animate-scale-in">
              <Image
                src={heroAbout}
                alt="Our Mission"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#000000] mb-12 text-center">Our Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f5f5f5] p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-5px] animate-fade-in-up">
              <h3 className="text-2xl font-bold text-[#0002ba] mb-4">Trusted Partnership</h3>
              <p className="text-[#31312d] font-light">
                We build long-term relationships based on trust, transparency, and mutual success. Your goals become our
                goals.
              </p>
            </div>
            <div className="bg-[#f5f5f5] p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-5px] animate-fade-in-up delay-100">
              <h3 className="text-2xl font-bold text-[#0002ba] mb-4">Intelligence & Expertise</h3>
              <p className="text-[#31312d] font-light">
                Our team combines deep knowledge of technology, business strategy, and organizational change management.
              </p>
            </div>
            <div className="bg-[#f5f5f5] p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-5px] animate-fade-in-up delay-200">
              <h3 className="text-2xl font-bold text-[#0002ba] mb-4">Incremental Delivery</h3>
              <p className="text-[#31312d] font-light">
                We break down complex transformations into manageable, deliverable increments that create continuous
                value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AllyCo */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#000000] mb-12">Why Choose AllyCo?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 animate-slide-in-left">
              <div className="text-3xl text-[#0002ba] flex-shrink-0 font-bold">✓</div>
              <div>
                <h3 className="text-xl font-bold text-[#000000] mb-2">Proven Track Record</h3>
                <p className="text-[#31312d] font-light">
                  Years of successful digital transformation engagements across diverse industries.
                </p>
              </div>
            </div>
            <div className="flex gap-4 animate-slide-in-right">
              <div className="text-3xl text-[#0002ba] flex-shrink-0 font-bold">✓</div>
              <div>
                <h3 className="text-xl font-bold text-[#000000] mb-2">Customer-Centric Approach</h3>
                <p className="text-[#31312d] font-light">
                  We listen, understand, and tailor our approach to your unique organizational needs.
                </p>
              </div>
            </div>
            <div className="flex gap-4 animate-slide-in-left delay-100">
              <div className="text-3xl text-[#0002ba] flex-shrink-0 font-bold">✓</div>
              <div>
                <h3 className="text-xl font-bold text-[#000000] mb-2">Expert Team</h3>
                <p className="text-[#31312d] font-light">
                  Our consultants bring decades of combined experience in digital transformation and organizational
                  change.
                </p>
              </div>
            </div>
            <div className="flex gap-4 animate-slide-in-right delay-100">
              <div className="text-3xl text-[#0002ba] flex-shrink-0 font-bold">✓</div>
              <div>
                <h3 className="text-xl font-bold text-[#000000] mb-2">Continuous Support</h3>
                <p className="text-[#31312d] font-light">
                  We don't just deliver a solution; we partner with you throughout your transformation journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0002ba] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6">Let's Start Your Transformation</h2>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0002ba] px-10 py-4 rounded-lg font-semibold hover:bg-[#f5f5f5] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
