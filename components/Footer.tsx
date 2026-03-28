export default function Footer() {
  return (
    <footer className="bg-black text-center py-8 border-t border-white/5">
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Transform Tennis Academy. All rights reserved.
      </p>
    </footer>
  );
}