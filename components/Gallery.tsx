const galleryImages = [
  "/images/transform-tennis/Gallery alt 1.jpeg",
  "/images/transform-tennis/Gallery alt 2.jpeg",
  "/images/transform-tennis/Gallery alt 5.jpeg",
  "/images/transform-tennis/Gallery 1.jpeg",
  "/images/transform-tennis/Gallery 2.jpeg",
  "/images/transform-tennis/Gallery 3.jpeg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="p-20 bg-white text-black">
      <h2 className="text-3xl font-bold mb-10 text-center">Gallery</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {galleryImages.map((src, i) => (
          <div key={i} className="overflow-hidden">
            <img src={src} className="hover:scale-110 transition duration-500 w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}