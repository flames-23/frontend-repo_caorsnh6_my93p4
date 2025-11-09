import Spline from '@splinetool/react-spline';
import { ArrowRight, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* soft gradient edges so text stays readable without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-28 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-red-50 text-red-700 px-3 py-1 text-sm font-medium ring-1 ring-red-100 shadow-sm">
          <GraduationCap className="h-4 w-4" />
          A Modern College Experience
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Redridge College
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-gray-700">
          Where curiosity meets craft. Explore future-forward programs, hands-on learning, and a vibrant campus life designed to help you thrive.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <a
            href="#admissions"
            className="inline-flex items-center justify-center rounded-xl bg-red-600 text-white px-6 py-3 font-semibold shadow-lg shadow-red-600/30 hover:bg-red-700 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#programs"
            className="inline-flex items-center justify-center rounded-xl bg-white/80 backdrop-blur text-gray-900 px-6 py-3 font-semibold ring-1 ring-gray-200 hover:ring-gray-300 hover:bg-white transition"
          >
            Explore Programs
          </a>
        </div>
      </div>
    </section>
  );
}
