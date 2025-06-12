
const Values = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        
        <div className="mb-16">
          <h2 className="font-heading text-5xl lg:text-6xl text-text mb-8 tracking-tight">
            The way design
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 h-64 flex items-end">
            <div className="text-left">
              <div className="text-black/60 text-sm mb-2">Subscribe</div>
              <div className="text-black font-semibold text-lg">Subscribe to a plan & request as many designs as you'd like.</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 h-64 flex items-end">
            <div className="text-left">
              <div className="text-white/60 text-sm mb-2">Receive</div>
              <div className="text-white font-semibold text-lg">Receive your design within a few business days on average, Monday to Friday.</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl p-8 h-64 flex items-end">
            <div className="text-left">
              <div className="text-white/60 text-sm mb-2">Revise</div>
              <div className="text-white font-semibold text-lg">We'll revise the design until you're 100% satisfied.</div>
            </div>
          </div>
        </div>

        <p className="text-text-light text-sm">
          + fast turnaround in 1-2 days using AI
        </p>
      </div>
    </section>
  );
};

export default Values;
