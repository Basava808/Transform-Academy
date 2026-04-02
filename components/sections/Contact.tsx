"use client";

import { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";

const LOCATIONS = [
  {
    id: "bommanahalli",
    name: "Bommanahalli Branch",
    address: "16th Cross, 13th Main, Virat Nagar, Bommanahalli, Bengaluru – 560068",
    phone: "73494 43332",
    email: "bommanahalli@transformtennis.in",
  },
  {
    id: "hennur",
    name: "Hennur Branch",
    address: "Ashwath Katte Road Bileshivale Dodda Gubbi, Post, Bengaluru, Karnataka 560077",
    phone: "99009 47708",
    email: "hennur@transformtennis.in",
  },
];

export default function Contact() {
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0].id);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const selectedBranch = LOCATIONS.find((l) => l.id === selectedLocation)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${selectedBranch.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-white text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
              GET IN TOUCH
            </h2>
            <p className="text-xl text-gray-700 mb-12 font-light leading-relaxed">
              Ready to start your tennis journey? Contact us today to enroll or inquire about our programs.
            </p>

            <div className="space-y-8">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocation(loc.id)}
                  className={`w-full flex items-start space-x-6 border pb-8 pt-4 px-4 rounded-lg transition-all text-left ${
                    selectedLocation === loc.id
                      ? "border-black bg-gray-50 shadow-sm"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <div className={`mt-1 transition-colors ${selectedLocation === loc.id ? "text-black" : "text-gray-400"}`}>
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2 uppercase tracking-wide flex items-center gap-2">
                      {loc.name}
                      {selectedLocation === loc.id && (
                        <span className="text-xs bg-black text-white px-2 py-0.5 rounded font-normal tracking-wider">SELECTED</span>
                      )}
                    </h4>
                    <p className="text-gray-600 font-light mb-3">{loc.address}</p>
                    <p className="text-black font-bold flex items-center mb-1">
                      <Phone className="w-4 h-4 mr-3"/> {loc.phone}
                    </p>
                    <p className="text-gray-500 font-light flex items-center text-sm">
                      <Mail className="w-4 h-4 mr-3"/> {loc.email}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-10 border border-gray-200">
            <h3 className="text-2xl font-black tracking-tight mb-2 uppercase">Send us a message</h3>
            <p className="text-sm text-gray-500 mb-8">
              Your message will be sent to <span className="font-bold text-black">{selectedBranch.name}</span>
            </p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-gray-500 font-bold tracking-widest uppercase">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-black transition-colors"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-500 font-bold tracking-widest uppercase">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-black transition-colors"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs text-gray-500 font-bold tracking-widest uppercase">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-white border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-black transition-colors"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-500 font-bold tracking-widest uppercase">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full bg-white border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-black transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-500 font-bold tracking-widest uppercase">Message</label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-white border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-black transition-colors"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className={`w-full font-bold text-sm tracking-widest uppercase py-4 transition-colors duration-300 ${
                  submitted
                    ? "bg-green-600 text-white"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {submitted ? "✓ Opening Email Client..." : "Submit Enquiry"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
