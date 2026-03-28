import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Anchors from "../components/sections/Anchors";
import About from "../components/sections/About";
import Philosophy from "../components/sections/Philosophy";
import Programs from "../components/sections/Programs";
import Accomplishments from "../components/sections/Accomplishments";
import Facilities from "../components/sections/Facilities";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Anchors />
      <About />
      <Philosophy />
      <Programs />
      <Accomplishments />
      <Facilities />
      <Contact />
      <Footer />
    </main>
  );
}