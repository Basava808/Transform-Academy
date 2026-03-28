
"use client"
interface Props {
  id: string;
  title: string;
  content: string[];
  theme: "light" | "dark";
  reverse?: boolean;
  image?: string;
}

export default function MixedSection({
  id,
  title,
  content,
  theme,
  reverse,
  image,
}: Props) {
  return (
    <section
      id={id}
      className={`py-24 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {image && (
          <img src={image} className="w-full object-cover rounded-lg" />
        )}

        <div>
          <h2 className="text-4xl font-bold mb-8">{title}</h2>

          <ul className="space-y-4">
            {content.map((item) => (
              <li key={item} className="text-lg">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}