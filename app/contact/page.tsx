'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Grid overlay */}
      <div className="grid-overlay"></div>

      {/* Noise texture */}
      <div className="fixed inset-0 noise-texture pointer-events-none z-0"></div>

      {/* Hero Section - Modern gradient design without image */}
      <section className="relative pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 bg-linear-to-br from-[#0002ba] via-[#0002ba] to-[#0003dd] text-white overflow-hidden">
        {/* Enhanced background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 border-2 border-white rounded-full blur-sm"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 sm:w-125 sm:h-125 border-2 border-white rounded-full blur-sm"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-150 h-150 border border-white/40 rounded-full"></div>
        </div>

        {/* Noise texture */}
        <div className="absolute inset-0 noise-texture opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-block">
                <span className="text-white/70 font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase">
                  Contact Us
                </span>
                <div className="h-px w-24 bg-linear-to-r from-white/40 to-transparent mt-3 mx-auto"></div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-2xl">
                Let&apos;s Start a <span className="italic font-light">Conversation</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-light">
                We&apos;re here to help you navigate your digital transformation journey. Reach out to discuss your
                goals and challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced corner accents */}
        <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 w-20 h-20 sm:w-24 sm:h-24 border-b-2 border-r-2 border-white/30"></div>
        <div className="absolute top-8 left-8 sm:top-12 sm:left-12 w-16 h-16 sm:w-20 sm:h-20 border-t border-l border-white/20"></div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Information Card */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-6 sm:w-8 h-px bg-linear-to-r from-[#0002ba] to-transparent"></div>
                  <span className="text-[#0002ba] font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase">
                    Get in Touch
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000]">We&apos;re Here to Help</h2>
                <p className="text-sm sm:text-base md:text-lg text-[#31312d]/70 leading-relaxed font-light">
                  Whether you have questions about our services or want to discuss your transformation goals, we&apos;re
                  ready to connect.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="professional-card magnetic-card bg-white p-6 border border-[#f5f5f5] hover:border-[#0002ba]/20 rounded-xl shadow-elevated-hover">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#0002ba]/5 border border-[#0002ba]/10 rounded-lg shrink-0">
                      <svg className="w-6 h-6 text-[#0002ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#000000] mb-1">Email</h3>
                      <a
                        href="mailto:rizki.aufa@allyco.id"
                        className="text-sm sm:text-base text-[#0002ba] hover:underline font-light"
                      >
                        rizki.aufa@allyco.id
                      </a>
                    </div>
                  </div>
                </div>

                <div className="professional-card magnetic-card bg-white p-6 border border-[#f5f5f5] hover:border-[#0002ba]/20 rounded-xl shadow-elevated-hover">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#0002ba]/5 border border-[#0002ba]/10 rounded-lg shrink-0">
                      <svg className="w-6 h-6 text-[#0002ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#000000] mb-1">Business Hours</h3>
                      <p className="text-sm sm:text-base text-[#31312d]/70 font-light">
                        Monday – Friday: 9:00 AM – 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="professional-card magnetic-card bg-white p-6 border border-[#f5f5f5] hover:border-[#0002ba]/20 rounded-xl shadow-elevated-hover">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#0002ba]/5 border border-[#0002ba]/10 rounded-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-[#0002ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#000000] mb-1">Response Time</h3>
                      <p className="text-sm sm:text-base text-[#31312d]/70 font-light">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="professional-card bg-white p-8 sm:p-10 border border-[#f5f5f5] rounded-2xl shadow-elevated">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#000000] mb-6 sm:mb-8">Send us a Message</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-300 text-green-700 px-6 sm:px-8 py-5 sm:py-6 rounded-lg text-center">
                  <p className="text-lg sm:text-xl font-semibold mb-2">Thank you for reaching out!</p>
                  <p className="text-sm sm:text-base">We&apos;ll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-[#31312d] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-[#b5b5b5] rounded-lg focus:ring-2 focus:ring-[#0002ba] focus:border-transparent outline-none text-black"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-[#31312d] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-[#b5b5b5] rounded-lg focus:ring-2 focus:ring-[#0002ba] focus:border-transparent outline-none text-black"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#31312d] mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-[#b5b5b5] rounded-lg focus:ring-2 focus:ring-[#0002ba] focus:border-transparent outline-none text-black"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#31312d] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-[#b5b5b5] rounded-lg focus:ring-2 focus:ring-[#0002ba] focus:border-transparent outline-none text-black"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-[#31312d] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-[#b5b5b5] rounded-lg focus:ring-2 focus:ring-[#0002ba] focus:border-transparent outline-none text-black"
                      placeholder="Tell us about your transformation goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0002ba] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-[#000000] transition-all duration-300 text-sm sm:text-base shadow-elevated-hover btn-premium"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative bg-[#f5f5f5]/30 py-16 sm:py-20 lg:py-24 gradient-mesh-1 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#0002ba]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#0002ba]/3 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 sm:mb-16 text-center">
            <div className="flex items-center justify-center gap-4 sm:gap-8 mb-6">
              <div className="w-8 sm:w-12 h-px bg-linear-to-r from-transparent via-[#0002ba] to-transparent"></div>
              <span className="text-[#0002ba] font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase">FAQ</span>
              <div className="w-8 sm:w-12 h-px bg-linear-to-r from-transparent via-[#0002ba] to-transparent"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#31312d]/70 max-w-2xl mx-auto font-light">
              Find answers to common questions about our transformation process
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="professional-card magnetic-card bg-white border border-[#f5f5f5] hover:border-[#0002ba]/20 rounded-xl p-6 sm:p-8 shadow-elevated-hover">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#000000] mb-3 sm:mb-4">
                How long does a typical transformation take?
              </h3>
              <div className="w-12 h-1 bg-linear-to-r from-[#0002ba] to-transparent rounded-full mb-3"></div>
              <p className="text-sm sm:text-base text-[#31312d]/70 leading-relaxed font-light">
                The timeline varies based on complexity and scope, but our incremental delivery approach typically shows
                results within 3-6 months with continued value delivery thereafter.
              </p>
            </div>

            <div className="professional-card magnetic-card bg-white border border-[#f5f5f5] hover:border-[#0002ba]/20 rounded-xl p-6 sm:p-8 shadow-elevated-hover">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#000000] mb-3 sm:mb-4">
                What industries do you serve?
              </h3>
              <div className="w-12 h-1 bg-linear-to-r from-[#0002ba] to-transparent rounded-full mb-3"></div>
              <p className="text-sm sm:text-base text-[#31312d]/70 leading-relaxed font-light">
                We have experience across multiple industries including finance, healthcare, manufacturing, retail, and
                technology sectors.
              </p>
            </div>

            <div className="professional-card magnetic-card bg-white border border-[#f5f5f5] hover:border-[#0002ba]/20 rounded-xl p-6 sm:p-8 shadow-elevated-hover">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#000000] mb-3 sm:mb-4">
                Do you provide post-implementation support?
              </h3>
              <div className="w-12 h-1 bg-linear-to-r from-[#0002ba] to-transparent rounded-full mb-3"></div>
              <p className="text-sm sm:text-base text-[#31312d]/70 leading-relaxed font-light">
                Yes, we offer comprehensive post-implementation support including training, optimization, and ongoing
                advisory services.
              </p>
            </div>

            <div className="professional-card magnetic-card bg-white border border-[#f5f5f5] hover:border-[#0002ba]/20 rounded-xl p-6 sm:p-8 shadow-elevated-hover">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#000000] mb-3 sm:mb-4">
                How do you measure success?
              </h3>
              <div className="w-12 h-1 bg-linear-to-r from-[#0002ba] to-transparent rounded-full mb-3"></div>
              <p className="text-sm sm:text-base text-[#31312d]/70 leading-relaxed font-light">
                We establish clear KPIs at the beginning and track them throughout the transformation to ensure
                alignment with your business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
