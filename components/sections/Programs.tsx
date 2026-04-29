export default function Programs() {
  const programs = [
    {
      title: "Kids Program",
      subtitle: "Ages 5–10",
      description: "A fun and engaging introduction to tennis focusing on coordination, movement, and basic strokes.",
      image: "/images/transform-tennis/new-program-1.jpg"
    },
    {
      title: "Beginner Program",
      description: "Ideal for players starting their tennis journey with focus on technique and basic gameplay.",
      image: "/images/transform-tennis/new-program-3.jpg"
    },
    {
      title: "Intermediate Program",
      description: "For players looking to refine their skills, improve consistency, and develop match strategy.",
      image: "/images/transform-tennis/new-program-3-v2.jpg"
    },
    {
      title: "Adult Program",
      description: "A program designed for adult players of all skill levels, whether you are learning tennis for the first time or returning.",
      image: "/images/transform-tennis/Program 4.jpeg"
    },
    {
      title: "Advanced / Competitive",
      description: "High-performance training for players preparing for tournaments and competitive tennis.",
      image: "/images/transform-tennis/Program 5.jpeg"
    }
  ];

  return (
    <section id="programs" className="py-32 px-6 md:px-12 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
            TRAINING PROGRAMS
          </h2>
          <p className="text-xl max-w-2xl mx-auto font-light leading-relaxed text-gray-300">
            Structured player development programs tailored for every age and skill level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group overflow-hidden bg-surface transition-all duration-300 hover:bg-white hover:text-black shadow-xl border border-white/5"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold uppercase tracking-tight">{program.title}</h3>
                </div>
                {program.subtitle && (
                  <span className="inline-block bg-gray-200 text-black px-3 py-1 text-xs font-bold mb-4 tracking-widest uppercase">
                    {program.subtitle}
                  </span>
                )}
                <p className="leading-relaxed font-light text-gray-400 group-hover:text-gray-800">
                  {program.description}
                </p>
              </div>
            </div>
          ))}

          {/* Special 'Why Choose Us' Card */}
          <div className="bg-primary p-8 flex flex-col justify-center text-black">
            <h3 className="text-2xl font-black tracking-tight mb-6 uppercase border-b border-black/20 pb-4">Why Choose TTA?</h3>
            <ul className="space-y-4 font-semibold text-sm tracking-wide">
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></div>
                <span>Professional and experienced coaches</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></div>
                <span>Structured player development</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></div>
                <span>Focus on technique, fitness & strategy</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></div>
                <span>Individual attention for every player</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></div>
                <span>Safe and motivating environment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
