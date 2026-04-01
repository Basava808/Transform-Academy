"use client"
export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <img
        src="/images/transform-tennis/Hero 1.jpeg"
        alt="Transform Tennis Academy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <p className="text-sm uppercase tracking-widest mb-4">
          Home / The Academy
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          The Ultimate Tennis Experience
        </h1>

        {/* <p className="mt-6 text-lg text-gray-300">
          Biot, Côte d’Azur, France
        </p> */}
      </div>
    </section>
  );
}