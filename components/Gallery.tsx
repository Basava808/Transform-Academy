export default function Gallery() {
  return (
    <section id="gallery" className="p-20 bg-white text-black">
      <h2 className="text-3xl font-bold mb-10 text-center">Gallery</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="overflow-hidden">
            <img src={`/images/img${i+1}.jpg`} className="hover:scale-110 transition duration-500 w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}