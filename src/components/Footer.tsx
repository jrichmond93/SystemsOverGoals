import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="text-white font-bold text-lg mb-2">Systems Over Goals</p>
            <p className="text-sm leading-relaxed">
              A collection of AI-powered tools built on the belief that consistent systems
              create more lasting results than one-time goals.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Navigation</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Featured Tool</p>
            <p className="text-sm mb-4 leading-relaxed">
              Turn any goal into a personalized system of daily habits and routines — powered by AI.
            </p>
            <Link
              href="https://goalstosystems.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Visit GoalsToSystems.com ↗
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-xs text-center text-slate-500">
          © {currentYear} Systems Over Goals. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
