"use client"
export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://www.mouratoglou.com/wp-content/uploads/2024/11/4df3e1c9-7baf-4af0-b600-c526326aff50-2SHOTSDRONELIGHT.mp4" />
      </video>

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