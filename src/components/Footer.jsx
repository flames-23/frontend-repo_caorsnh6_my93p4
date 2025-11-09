import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-2xl font-extrabold tracking-tight">Redridge College</p>
            <p className="mt-1 text-sm text-gray-600">Inspiring minds since 1968</p>
          </div>
          <nav className="flex gap-6 text-sm text-gray-700">
            <a href="#programs" className="hover:text-red-700">Programs</a>
            <a href="#admissions" className="hover:text-red-700">Admissions</a>
            <a href="#campus" className="hover:text-red-700">Campus Life</a>
            <a href="#contact" className="hover:text-red-700">Contact</a>
          </nav>
          <div className="flex items-center gap-3 text-gray-700">
            <a href="#" aria-label="Instagram" className="hover:text-red-700"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-red-700"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-red-700"><Linkedin className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-red-700"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Redridge College. All rights reserved.</div>
      </div>
    </footer>
  );
}
