import { FlaskConical, Code2, Palette, Cpu, BookOpenCheck } from 'lucide-react';

const programs = [
  {
    icon: Code2,
    title: 'Computer Science',
    desc: 'AI, data structures, cloud-native apps, and collaborative projects.',
  },
  {
    icon: Cpu,
    title: 'Electrical Engineering',
    desc: 'Circuits, embedded systems, and clean energy innovation labs.',
  },
  {
    icon: FlaskConical,
    title: 'Biotechnology',
    desc: 'Genomics, bioinformatics, and lab-based learning with real datasets.',
  },
  {
    icon: Palette,
    title: 'Design & Media',
    desc: 'UX/UI, motion graphics, and interactive storytelling studios.',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Programs</h2>
            <p className="mt-2 text-gray-600 max-w-xl">
              Explore future-ready programs designed with industry partnerships and hands-on learning.
            </p>
          </div>
          <a href="#admissions" className="inline-flex items-center gap-2 text-red-700 font-semibold hover:text-red-800">
            View admissions
            <BookOpenCheck className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-red-50 to-transparent" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-red-600/10 text-red-700 grid place-items-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{desc}</p>
                <button className="mt-4 inline-flex items-center text-sm font-medium text-red-700 hover:text-red-800">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
