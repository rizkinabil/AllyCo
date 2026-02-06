export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Welcome to AllyCo</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Your trusted partner in digital transformation
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            We bring intelligence and expertise to help your organization succeed in operational digital transformation
            with incremental delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Learn About Us
            </a>
            <a
              href="/services"
              className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose AllyCo?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted Partnership</h3>
              <p className="text-gray-700">
                We partner with you as a trusted advisor, aligned with your business goals and success metrics.
              </p>
            </div>
            <div className="p-8 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Guidance</h3>
              <p className="text-gray-700">
                Our team brings deep intelligence and expertise across digital transformation disciplines.
              </p>
            </div>
            <div className="p-8 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Incremental Delivery</h3>
              <p className="text-gray-700">
                We deliver value incrementally, reducing risk and enabling continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how AllyCo can help you achieve your digital transformation goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
