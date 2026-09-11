import React, { useState } from 'react';
import { Mail, MapPin, Check, ChevronRight } from 'lucide-react';
import './App.css';

export default function ExdriveConsignment() {
  const [formData, setFormData] = useState({
    ownerName: '',
    email: '',
    phone: '',
    year: '',
    make: '',
    model: '',
    mileage: '',
    condition: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/xoeqbrnn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'New Consignment Inquiry from ExDrive Website',
          _replyto: formData.email
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          ownerName: '',
          email: '',
          phone: '',
          year: '',
          make: '',
          model: '',
          mileage: '',
          condition: ''
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('There was an issue submitting your form. Please try again.');
      }
    } catch (err) {
      setError('Connection error. Please check your internet and try again.');
      console.error('Form submission error:', err);
    }
    setIsLoading(false);
  };

  const processSteps = [
    {
      step: 1,
      title: 'Inspection',
      description: 'Comprehensive evaluation of your vehicle's condition, documentation, and market potential'
    },
    {
      step: 2,
      title: 'Detail',
      description: 'Professional cleaning, polishing, and detailing to showcase your car in its best form'
    },
    {
      step: 3,
      title: 'Photograph',
      description: 'Studio and location photography capturing every detail with professional lighting'
    },
    {
      step: 4,
      title: 'Content',
      description: 'Professional BaT listing crafted with complete history, service records, and specifications'
    },
    {
      step: 5,
      title: 'List',
      description: 'Strategic timing and positioning on Bring a Trailer for maximum reach'
    },
    {
      step: 6,
      title: 'Auction',
      description: 'Real-time engagement with serious bidders and transparent sale execution'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800 backdrop-blur sticky top-0 z-50 bg-slate-950/80">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">ExDrive</div>
          <div className="text-sm text-slate-400">Consignment Services</div>
        </div>
      </nav>

      {/* Hero Section with Featured Car */}
      <div className="relative h-96 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1200&h=500&fit=crop"
          alt="Red Porsche Cayenne luxury SUV"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          loading="eager"
        />
        <div className="relative max-w-6xl mx-auto px-6 h-full flex flex-col justify-center z-20">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-xl">
            Sell Your Enthusiast Car for Top Dollar
          </h1>
          <p className="text-lg text-slate-300 max-w-lg">
            The fastest, most expert path to getting your vehicle in front of serious buyers on Bring a Trailer.
          </p>
        </div>
      </div>

      {/* Value Props */}
      <div className="bg-slate-900 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-semibold mb-3 text-white">BaT Specialists</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              We live and breathe Bring a Trailer. Deep knowledge of auction mechanics, buyer expectations, and what sells.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-white">95% Success Rate</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Nearly every car we consign sells. Transparent process, realistic pricing, expert positioning.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-white">Personalized Service</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Yev handles every car personally. No mass-market operations. Your car gets individual attention.
            </p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-16">The ExDrive Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((item, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition-colors">
              <div className="text-4xl font-light text-slate-500 mb-4">{item.step}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Sales */}
      <div className="bg-slate-900 border-y border-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16">Recent Sales</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {/* Cayenne Turbo S */}
            <div className="relative group overflow-hidden rounded-lg aspect-square bg-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=400&fit=crop"
                alt="2014 Porsche Cayenne Turbo S - Red SUV"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-medium rounded">Sold</span>
                </div>
                <p className="font-semibold text-sm">2014 Porsche Cayenne Turbo S</p>
              </div>
            </div>

            {/* 911 Carrera 4S */}
            <div className="relative group overflow-hidden rounded-lg aspect-square bg-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1585345604214-4230a8ce3dcf?w=400&h=400&fit=crop"
                alt="2004 Porsche 911 Carrera 4S Cabriolet - Silver"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-medium rounded">Sold</span>
                </div>
                <p className="font-semibold text-sm">2004 Porsche 911 Carrera 4S</p>
              </div>
            </div>

            {/* Range Rover */}
            <div className="relative group overflow-hidden rounded-lg aspect-square bg-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1606661160336-a0a40f9d1ecd?w=400&h=400&fit=crop"
                alt="2020 Land Rover Range Rover SVAutobiography - Black"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-medium rounded">Sold</span>
                </div>
                <p className="font-semibold text-sm">2020 Land Rover Range Rover</p>
              </div>
            </div>

            {/* SL65 AMG */}
            <div className="relative group overflow-hidden rounded-lg aspect-square bg-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1553882900-d174edf69254?w=400&h=400&fit=crop"
                alt="2005 Mercedes-Benz SL65 AMG - Black"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-medium rounded">Sold</span>
                </div>
                <p className="font-semibold text-sm">2005 Mercedes-Benz SL65 AMG</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consignment Form */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-8">Start Your Consignment</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Tell us about your vehicle. We'll review the details and reach out within 24 hours to discuss positioning and timeline.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <Mail className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">support@exdrive.us</p>
                  <p className="text-slate-400">We reply within 24 hours</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">Sacramento, CA</p>
                  <p className="text-slate-400">Drive Exchange LLC</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-lg p-8">
            {submitted && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-800 rounded-lg flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm mb-1">Thanks for reaching out!</p>
                  <p className="text-xs text-slate-400">We'll review your vehicle and contact you within 24 hours.</p>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-900/30 border border-red-800 rounded-lg">
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            <div className="space-y-4 mb-6">
              <input
                type="text"
                name="ownerName"
                placeholder="Your Name"
                value={formData.ownerName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg focus:border-slate-600 focus:outline-none text-white placeholder-slate-500 text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg focus:border-slate-600 focus:outline-none text-white placeholder-slate-500 text-sm"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg focus:border-slate-600 focus:outline-none text-white placeholder-slate-500 text-sm"
              />
            </div>

            <div className="space-y-4 mb-6">
              <input
                type="text"
                name="year"
                placeholder="Year (e.g., 2020)"
                value={formData.year}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg focus:border-slate-600 focus:outline-none text-white placeholder-slate-500 text-sm"
              />
              <input
                type="text"
                name="make"
                placeholder="Make (e.g., Porsche)"
                value={formData.make}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg focus:border-slate-600 focus:outline-none text-white placeholder-slate-500 text-sm"
              />
              <input
                type="text"
                name="model"
                placeholder="Model (e.g., 911 Carrera)"
                value={formData.model}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg focus:border-slate-600 focus:outline-none text-white placeholder-slate-500 text-sm"
              />
              <input
                type="text"
                name="mileage"
                placeholder="Mileage (e.g., 45000)"
                value={formData.mileage}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg focus:border-slate-600 focus:outline-none text-white placeholder-slate-500 text-sm"
              />
            </div>

            <textarea
              name="condition"
              placeholder="Brief description of condition (optional)"
              value={formData.condition}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg focus:border-slate-600 focus:outline-none text-white placeholder-slate-500 text-sm mb-6 resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {isLoading ? 'Submitting...' : 'Submit Consignment Inquiry'}
              <ChevronRight className="w-4 h-4" />
            </button>

            <p className="text-xs text-slate-500 mt-4 text-center">
              By submitting, you agree we'll contact you about your vehicle.
            </p>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <p className="font-semibold mb-4">ExDrive</p>
              <p className="text-sm text-slate-400">BaT specialists. Your car, top dollar.</p>
            </div>
            <div>
              <p className="font-semibold text-sm mb-4">Contact</p>
              <p className="text-sm text-slate-400">support@exdrive.us</p>
              <p className="text-sm text-slate-400">Sacramento, CA</p>
            </div>
            <div>
              <p className="font-semibold text-sm mb-4">Consignment</p>
              <p className="text-sm text-slate-400">95% success rate</p>
              <p className="text-sm text-slate-400">24-hour response</p>
            </div>
            <div>
              <p className="font-semibold text-sm mb-4">Bring a Trailer</p>
              <a href="https://bringatrailer.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                View Listings
              </a>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-xs text-slate-500 text-center">
              © 2026 ExDrive LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
