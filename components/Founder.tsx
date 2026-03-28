export default function Founder() {
  return (
    <section className="p-20 bg-black text-white flex flex-col md:flex-row items-center gap-12">
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold mb-6">A Word From The Founder</h2>
        <p>Our philosophy adapts to every player, from beginner to professional.</p>
      </div>
      <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800&auto=format&fit=crop" className="w-80 grayscale" />
    </section>
  );
}