'use client';

import heroAbout from '@/src/images/hero-image.jpg';
import Image from 'next/image';
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
      {/* Hero Section with Background Image */}
      <section className="relative h-64 sm:h-72 md:h-80 bg-[#0002ba] text-white overflow-hidden">
        <Image src={heroAbout} alt="Get in Touch" fill className="object-cover opacity-40" priority />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center z-10">
          <div className="text-center animate-fade-in-up px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Get in Touch</h1>
            <p className="text-base sm:text-lg md:text-xl font-light">
              We&apos;d love to hear from you. Let&apos;s discuss how AllyCo can support your transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 gap-8 sm:gap-12">
            {/* Contact Information */}
            {/* <div>
              <h2 className="text-4xl font-bold text-[#000000] mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="text-3xl text-[#0002ba] shrink-0">📍</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#000000] mb-2">Address</h3>
                    <p className="text-[#31312d] font-light">
                      123 Business Avenue
                      <br />
                      Tech City, TC 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl text-[#0002ba] shrink-0">📞</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#000000] mb-2">Phone</h3>
                    <p className="text-[#31312d] font-light">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl text-[#0002ba] shrink-0">✉️</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#000000] mb-2">Email</h3>
                    <p className="text-[#31312d] font-light">
                      <a href="mailto:info@allyco.com" className="text-[#0002ba] hover:underline">
                        info@allyco.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl text-[#0002ba] shrink-0">🕐</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#000000] mb-2">Business Hours</h3>
                    <p className="text-[#31312d] font-light">
                      Monday – Friday: 9:00 AM – 6:00 PM
                      <br />
                      Saturday – Sunday: Closed
                    </p>
                  </div>
                </div>
              </div> */}

            {/* Social Links */}
            {/* <div className="mt-12 pt-8 border-t border-[#b5b5b5]">
                <h3 className="text-xl font-bold text-[#000000] mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-[#0002ba] hover:text-[#31312d] font-semibold transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-[#0002ba] hover:text-[#31312d] font-semibold transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-[#0002ba] hover:text-[#31312d] font-semibold transition-colors">
                    Facebook
                  </a>
                </div>
              </div> */}
            {/* </div> */}

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] mb-6 sm:mb-8">
                Send us a Message
              </h2>

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
                    className="w-full bg-blue-900 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-sm sm:text-base"
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
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="border border-gray-300 rounded-lg p-5 sm:p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                How long does a typical transformation take?
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                The timeline varies based on complexity and scope, but our incremental delivery approach typically shows
                results within 3-6 months with continued value delivery thereafter.
              </p>
            </div>
            <div className="border border-gray-300 rounded-lg p-5 sm:p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                What industries do you serve?
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                We have experience across multiple industries including finance, healthcare, manufacturing, retail, and
                technology sectors.
              </p>
            </div>
            <div className="border border-gray-300 rounded-lg p-5 sm:p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                Do you provide post-implementation support?
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Yes, we offer comprehensive post-implementation support including training, optimization, and ongoing
                advisory services.
              </p>
            </div>
            <div className="border border-gray-300 rounded-lg p-5 sm:p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                How do you measure success?
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
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
