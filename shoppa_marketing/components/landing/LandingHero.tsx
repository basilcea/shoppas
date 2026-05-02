export default function LandingHero() {
  return (
    <section className="px-6 py-16 md:py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">bolt</span>
            Operational Excellence
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tight font-headline">
            The Operating Platform for <span className="text-primary">Personal Shoppers</span>.
          </h1>
          <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed font-body">
            Scale your shopping business with a high precision tool designed for the modern concierge. Run smarter sessions, optimize routes, and delight clients.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn-gradient text-on-primary px-8 py-4 rounded-xl font-bold text-lg shadow-ambient flex items-center gap-2 group">
              Download App
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
            {/* <button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-variant transition-colors">
              View Demo
            </button> */}
          </div>
        </div>
        <div className="relative min-h-[420px] md:min-h-[560px] perspective-1200">
          <div className="h-full w-full flex items-center justify-center preserve-3d">
            {/* Phone frame container - 3D */}
            <div className="relative w-full max-w-[380px] aspect-[9/19] rounded-[2rem] phone-frame-3d phone-tilt">
              {/* Antenna bands */}
              <div className="absolute -left-0.5 top-20 h-10 w-[2px] bg-white/10 rounded-full" />
              <div className="absolute -right-0.5 top-40 h-8 w-[2px] bg-white/10 rounded-full" />

              {/* Screen area lifted */}
              <div className="absolute inset-1 m-3 md:m-4  rounded-[1.5rem] bg-white overflow-hidden screen-wrap ">
                <img
                  className="w-full h-full object-contain"
                  alt="Shoppa operating screen with live session, checklist, approvals, route and KPIs"
                  src="/hero/shoppa-ops-screen.svg"
                />
                {/* Notch and sensors */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-b-2xl z-10" />
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-slate-700/70 rounded-full z-10" />
                <div className="absolute top-2 right-6 w-2.5 h-2.5 bg-slate-700/70 rounded-full z-10" /> 
                 <div className="screen-gloss" /> 
              </div>
            </div>
          </div>
          {/* Soft floor shadow */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-2 phone-shadow-3d" />
        </div>
      </div>
    </section>
  )
}
