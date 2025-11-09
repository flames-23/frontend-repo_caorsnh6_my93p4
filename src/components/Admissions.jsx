import { CheckCircle2, FileSpreadsheet, Mail, Phone, ArrowRight } from 'lucide-react';

const steps = [
  'Choose your program and review requirements',
  'Prepare transcripts and portfolio (if applicable)',
  'Submit online application and fee',
  'Track status and attend interview if invited',
];

export default function Admissions() {
  return (
    <section id="admissions" className="relative py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Admissions</h2>
            <p className="mt-3 text-gray-600 max-w-prose">
              Join a curious, collaborative community. Applications are reviewed holistically—academic performance, passion, and potential.
            </p>
            <ul className="mt-6 space-y-3">
              {steps.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-red-600" />
                  <span className="text-gray-700">{s}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 text-white px-5 py-3 font-semibold shadow-lg shadow-red-600/30 hover:bg-red-700 transition"
              >
                Start application
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold ring-1 ring-gray-200 hover:ring-gray-300"
              >
                Download brochure
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 bg-gradient-to-br from-red-50 to-white">
            <h3 className="text-xl font-semibold text-gray-900">Need help?</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Our admissions team is here to guide you through requirements, scholarships, and timelines.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a className="flex items-center gap-3 rounded-xl bg-white p-4 ring-1 ring-gray-200 hover:ring-gray-300 transition" href="mailto:admissions@redridge.edu">
                <Mail className="h-5 w-5 text-red-700" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <p className="text-xs text-gray-600">admissions@redridge.edu</p>
                </div>
              </a>
              <a className="flex items-center gap-3 rounded-xl bg-white p-4 ring-1 ring-gray-200 hover:ring-gray-300 transition" href="tel:+1234567890">
                <Phone className="h-5 w-5 text-red-700" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <p className="text-xs text-gray-600">+1 (234) 567-890</p>
                </div>
              </a>
              <a className="flex items-center gap-3 rounded-xl bg-white p-4 ring-1 ring-gray-200 hover:ring-gray-300 transition" href="#">
                <FileSpreadsheet className="h-5 w-5 text-red-700" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Scholarships</p>
                  <p className="text-xs text-gray-600">Merit & need-based aid</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
