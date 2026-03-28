export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tight">
            ABOUT <br/> <span className="text-primary">TTA</span>
          </h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light pr-8">
            <p>
              At Transform Tennis Academy (TTA), we believe in a future where every Indian has access to a high-quality tennis experience, regardless of age, gender, ability, culture, language, or financial circumstance.
            </p>
            <p>
              It is our deepest conviction that barriers to access should never prevent genuine talent from discovering tennis. Our experience has consistently shown us that talent often emerges from the most unexpected places.
            </p>
            <p>
              Through structured coaching, disciplined training, and a supportive environment, TTA is committed to nurturing players and helping them grow both as athletes and individuals.
            </p>
          </div>
        </div>
        
        <div className="bg-surface p-8 md:p-12 border-l-4 border-primary rounded-r-3xl rounded-bl-3xl relative shadow-2xl">
          <div className="absolute -top-6 -left-6 text-8xl font-serif text-primary opacity-30 select-none">"</div>
          <p className="text-xl md:text-2xl italic mb-8 relative z-10 leading-relaxed font-light text-gray-200">
            A former tennis player myself and a coach now for the last 15 years, I strongly believe Indian youth have the talent to win Grand Slams and Olympic medals, if we can level the playing field for our players by identifying them young and supporting their journey.
          </p>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-1 bg-primary"></div>
            <div>
              <h4 className="font-bold text-xl text-white tracking-wide uppercase">KISHORE SRINIVASAN</h4>
              <p className="text-gray-400 text-sm uppercase tracking-widest mt-1 font-light">Founder – TTA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
