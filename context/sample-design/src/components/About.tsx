export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8F8F8' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-8" style={{ color: '#000000' }}>
          About Solariis
        </h2>
        
        <div className="space-y-6">
          <p className="body-large" style={{ color: '#000000' }}>
            Solariis is a new company with a bold mission: to bridge the gap between international brands and the vibrant markets of Venezuela and Latin America.
          </p>
          
          <p className="body-large" style={{ color: '#666666' }}>
            Our approach combines local expertise, regulatory insight, and AI-driven intelligence — ensuring that brands enter these markets with clarity and thrive long-term.
          </p>
          
          <p className="body-large" style={{ color: '#666666' }}>
            At Solariis, we don't just represent brands — we craft their expansion stories and help them grow with confidence.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: '#FF6A00' }}></div>
            </div>
            <div className="display-text mb-3" style={{ color: '#FF6A00', fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}>AI-Driven</div>
            <p className="body-small" style={{ color: '#666666' }}>Market Intelligence</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: '#000000' }}></div>
            </div>
            <div className="display-text mb-3" style={{ color: '#000000', fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}>Creative &</div>
            <p className="body-small" style={{ color: '#666666' }}>Strategic Services</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: '#FF6A00' }}></div>
            </div>
            <div className="display-text mb-3" style={{ color: '#FF6A00', fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}>Always-On</div>
            <p className="body-small" style={{ color: '#666666' }}>Local Insight</p>
          </div>
        </div>
      </div>
    </section>
  );
}