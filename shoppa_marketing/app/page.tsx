import LandingHero from '@/components/landing/LandingHero'
import FeaturesGrid from '@/components/landing/FeaturesGrid'
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';

export default function Page() {
  return (
    <div>
      <LandingHero />
      <FeaturesGrid />
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-primary-container rounded-[3rem] p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <h2 className="text-4xl md:text-6xl font-extrabold text-on-primary-container leading-tight relative z-10">Ready to Professionalize <br className="hidden md:block" /> Your Shopping Business?</h2>
          <p className="text-on-primary-container/80 text-xl max-w-2xl mx-auto relative z-10">Install Shoppas on your home screen today. No app store fees, no friction, just pure operational power.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 relative z-10">
            <DownloadButton/>
            <Link href="/features" >
            <button className="bg-white text-primary px-10 py-5 rounded-2xl font-extrabold text-xl shadow-ambient flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform">Explore Features</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
