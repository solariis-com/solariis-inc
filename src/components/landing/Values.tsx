
const Values = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        
        <div className="mb-16">
          <h2 className="font-heading text-5xl lg:text-6xl text-text mb-8 tracking-tight">
            How Solariis Works
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 h-64 flex items-end">
            <div className="text-left">
              <div className="text-black/60 text-sm mb-2">Subscribe</div>
              <div className="text-black font-semibold text-lg">Choose a plan that fits your scale</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 h-64 flex items-end">
            <div className="text-left">
              <div className="text-white/60 text-sm mb-2">Upload</div>
              <div className="text-white font-semibold text-lg">Add briefs to your custom design board</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl p-8 h-64 flex items-end">
            <div className="text-left">
              <div className="text-white/60 text-sm mb-2">We Create</div>
              <div className="text-white font-semibold text-lg">Our AI-enhanced team delivers in days</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl p-8 h-64 flex items-end">
            <div className="text-left">
              <div className="text-white/60 text-sm mb-2">Refine</div>
              <div className="text-white font-semibold text-lg">Revisions handled with speed and clarity</div>
            </div>
          </div>
        </div>

        <p className="text-text-light text-sm">
          + AI-enhanced creativity for 10x faster delivery
        </p>
      </div>
    </section>
  );
};

export default Values;
