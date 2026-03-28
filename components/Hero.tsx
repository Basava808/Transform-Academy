export default function Hero() {
  return (
    <section className="h-[calc(100vh-80px)] mt-[80px] relative flex items-center justify-center text-center px-4 w-full">
      <img
        src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2000&auto=format&fit=crop"
        alt="Transform Tennis Academy background"
        className="absolute w-full h-full object-cover"
      />
      <div className="relative z-20 flex flex-col items-center w-full max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-[70px] font-black tracking-tighter leading-[1.1] mb-6 uppercase text-white drop-shadow-2xl">
          THE TRANSFORM ACADEMY,<br/> THE ULTIMATE<br/> TENNIS EXPERIENCE
        </h1>
        <div className="mt-4 bg-white text-black px-6 py-2 text-sm font-bold uppercase tracking-widest shadow-xl">
          Bengaluru, India
        </div>
      </div>
    </section>
  );
}