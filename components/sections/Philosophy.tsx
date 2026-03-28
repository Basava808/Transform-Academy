import { CheckCircle2 } from "lucide-react";

export default function Philosophy() {
  const pillars = [
    "Strong technical fundamentals",
    "Intelligent match strategy",
    "Physical fitness and agility",
    "Mental strength and discipline",
    "Respect and sportsmanship",
    "Learning to enjoy the grind and embrace the journey"
  ];

  return (
    <section id="philosophy" className="py-32 px-6 md:px-12 bg-white text-black overflow-hidden relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 uppercase">
          OUR PHILOSOPHY
        </h2>
        
        <p className="text-xl md:text-2xl mb-16 font-light leading-relaxed text-gray-800">
          At TTA, we focus on holistic player development. Tennis is not just about winning matches — it is about building character, resilience, discipline, and confidence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-4 hover:bg-gray-50 border-b border-gray-200 p-6 transition-colors duration-300 group"
            >
              <div className="p-3 text-black">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
              </div>
              <span className="text-lg font-bold text-black uppercase tracking-wide">{pillar}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
