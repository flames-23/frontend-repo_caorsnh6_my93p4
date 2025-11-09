import { CalendarDays, Users2, Music2, Trophy, Building2 } from 'lucide-react';

const events = [
  {
    icon: Music2,
    title: 'Fall Music Fest',
    date: 'Oct 21',
    desc: 'Live performances from campus bands and regional artists.',
  },
  {
    icon: Trophy,
    title: 'Inter-College Sports Meet',
    date: 'Nov 05',
    desc: 'Cheer for our teams at the annual athletics and e-sports meet.',
  },
  {
    icon: CalendarDays,
    title: 'Research Showcase',
    date: 'Dec 02',
    desc: 'Student-faculty research posters and lightning talks.',
  },
];

export default function CampusLife() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-red-50/40">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-red-600/10 text-red-700 grid place-items-center">
            <Users2 className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Campus Life</h2>
            <p className="text-gray-600">A supportive community with events, clubs, and spaces to belong.</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map(({ icon: Icon, title, date, desc }) => (
            <div key={title} className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-red-600/10 text-red-700 grid place-items-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                </div>
                <span className="text-sm font-medium text-red-700">{date}</span>
              </div>
              <p className="mt-3 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Residences', desc: 'Modern housing with study lounges and wellness rooms.', icon: Building2 },
            { title: 'Clubs & Societies', desc: '140+ student-led communities across interests.', icon: Users2 },
            { title: 'Facilities', desc: 'Makerspaces, media labs, and green courtyards.', icon: Trophy },
          ].map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl bg-white/60 backdrop-blur border border-gray-200 p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-red-600/10 text-red-700 grid place-items-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
