import { MapPin } from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      name: "Transform Tennis Academy, Bommanahalli",
      courts: "8 Clay courts",
      address: "16th Cross, 13th Main, Virat Nagar, Bommanahalli, Bengaluru – 560068",
      image: "https://images.unsplash.com/photo-1595435742656-3272d1a38a77?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Transform Tennis Academy, Hennur",
      courts: "6 Clay courts with flood lights",
      address: "Ashwath Katte Road Bileshivale Dodda Gubbi, Post, Bengaluru, Karnataka 560077",
      image: "https://images.unsplash.com/photo-1505553556485-ecbc8514e82d?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="facilities" className="py-32 px-6 md:px-12 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
            OUR FACILITIES
          </h2>
          <p className="text-xl max-w-2xl mx-auto font-light leading-relaxed text-gray-400">
            Train at our top-tier clay court facilities designed for optimal performance and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {facilities.map((facility, index) => (
            <div key={index} className="group overflow-hidden bg-surface transition-all duration-300 border border-white/5 hover:bg-white hover:text-black hover:border-white">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src={facility.image} 
                  alt={facility.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold tracking-tight uppercase mb-4 text-white group-hover:text-black transition-colors">{facility.name}</h3>
                <div className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold mb-6 tracking-widest uppercase transition-colors group-hover:bg-black group-hover:text-white">
                  {facility.courts}
                </div>
                <div className="flex items-start font-light space-x-3 text-gray-400 group-hover:text-gray-800 transition-colors">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-current" />
                  <p>{facility.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
