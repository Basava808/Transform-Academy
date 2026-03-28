"use client";

import { Phone, MapPin } from "lucide-react";

export default function Contact() {
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
              <div className="flex items-start space-x-6 border-b border-gray-200 pb-8 hover:bg-gray-50 transition-colors p-4 -ml-4 rounded-lg">
                <div className="text-black mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black mb-2 uppercase tracking-wide">Bommanahalli Branch</h4>
                  <p className="text-gray-600 font-light mb-4">16th Cross, 13th Main, Virat Nagar, Bommanahalli, Bengaluru – 560068</p>
                  <p className="text-black font-bold flex items-center"><Phone className="w-4 h-4 mr-3"/> 73494 43332</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 border-b border-gray-200 pb-8 hover:bg-gray-50 transition-colors p-4 -ml-4 rounded-lg">
                <div className="text-black mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black mb-2 uppercase tracking-wide">Hennur Branch</h4>
                  <p className="text-gray-600 font-light mb-4">Ashwath Katte Road Bileshivale Dodda Gubbi, Post, Bengaluru, Karnataka 560077</p>
                  <p className="text-black font-bold flex items-center"><Phone className="w-4 h-4 mr-3"/> 99009 47708</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-10 border border-gray-200">
            <h3 className="text-2xl font-black tracking-tight mb-8 uppercase">Send us a message</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-gray-500 font-bold tracking-widest uppercase">First Name</label>
                  <input type="text" className="w-full bg-white border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-black transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-500 font-bold tracking-widest uppercase">Last Name</label>
                  <input type="text" className="w-full bg-white border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-black transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs text-gray-500 font-bold tracking-widest uppercase">Email</label>
                <input type="email" className="w-full bg-white border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-black transition-colors" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-500 font-bold tracking-widest uppercase">Phone Number</label>
                <input type="tel" className="w-full bg-white border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-black transition-colors" placeholder="+91 XXXXX XXXXX" />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-500 font-bold tracking-widest uppercase">Message</label>
                <textarea rows={4} className="w-full bg-white border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-black transition-colors" placeholder="How can we help you?"></textarea>
              </div>

              <button className="w-full bg-black text-white font-bold text-sm tracking-widest uppercase py-4 hover:bg-gray-800 transition-colors duration-300">
                Submit Enquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
