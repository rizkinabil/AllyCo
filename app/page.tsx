import heroAbout from '@/src/images/hero-image.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative h-screen bg-[#0002ba] text-white overflow-hidden">
        <Image
          src={heroAbout}
          alt="AllyCo - Digital Transformation"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="text-center animate-fade-in-up z-10">
            <h1 className="text-6xl md:text-7xl font-bold text-[#ffffff] mb-6">Welcome to AllyCo</h1>
            <p className="text-2xl md:text-3xl text-[#b5b5b5] mb-8 max-w-3xl mx-auto font-light">
              Your trusted partner in digital transformation
            </p>
            <p className="text-lg text-[#b5b5b5] max-w-2xl mx-auto mb-12 font-light">
              We bring intelligence and expertise to help your organization succeed in operational digital
              transformation with incremental delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right delay-200">
              <a
                href="/about"
                className="bg-white text-[#0002ba] px-10 py-4 rounded-lg font-semibold hover:bg-[#f5f5f5] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]"
              >
                Learn About Us
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0002ba] transition-all duration-300 transform hover:translate-y-[-2px]"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#000000] mb-16">Why Choose AllyCo?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-5px] animate-fade-in-up">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-[#000000] mb-4">Trusted Partnership</h3>
              <p className="text-[#31312d] leading-relaxed">
                We partner with you as a trusted advisor, aligned with your business goals and success metrics.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-5px] animate-fade-in-up delay-100">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-[#000000] mb-4">Expert Guidance</h3>
              <p className="text-[#31312d] leading-relaxed">
                Our team brings deep intelligence and expertise across digital transformation disciplines.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-5px] animate-fade-in-up delay-200">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-[#000000] mb-4">Incremental Delivery</h3>
              <p className="text-[#31312d] leading-relaxed">
                We deliver value incrementally, reducing risk and enabling continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0002ba] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-light">
            Let's discuss how AllyCo can help you achieve your digital transformation goals.
          </p>
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
