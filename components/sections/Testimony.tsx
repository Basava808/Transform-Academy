"use client"
export default function Testimony() {
  return (
    <section id="the-founder" className="py-32 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <blockquote>
          <p className="text-xl leading-relaxed mb-8">
            “Our philosophy has always been to adapt to each player,
            whatever their level.”
          </p>

          <cite className="text-sm uppercase tracking-widest">
            Patrick Mouratoglou – Founder
          </cite>
        </blockquote>

        <img
          src="/images/founder.jpg"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
}