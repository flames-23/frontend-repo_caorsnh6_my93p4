import Hero from './components/Hero';
import Programs from './components/Programs';
import CampusLife from './components/CampusLife';
import Admissions from './components/Admissions';
import Footer from './components/Footer';

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight text-gray-900">Redridge</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#programs" className="text-gray-700 hover:text-red-700">Programs</a>
          <a href="#admissions" className="text-gray-700 hover:text-red-700">Admissions</a>
          <a href="#campus" className="text-gray-700 hover:text-red-700">Campus</a>
          <a href="#contact" className="text-gray-700 hover:text-red-700">Contact</a>
        </nav>
        <a href="#admissions" className="inline-flex items-center rounded-xl bg-red-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-red-700">Apply</a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Programs />
        <div id="campus"><CampusLife /></div>
        <Admissions />
      </main>
      <Footer />
    </div>
  );
}
