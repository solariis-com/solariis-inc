
const Values = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        
        <div className="mb-16">
          <h2 className="font-heading text-5xl lg:text-6xl text-text mb-8 tracking-tight">
            How Solariis Works
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 h-48 flex flex-col justify-between relative">
            <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-orange-600 font-bold text-lg">1</span>
            </div>
            <div className="mt-8">
              <div className="text-white/80 text-sm mb-2">Subscribe</div>
              <div className="text-white font-semibold text-lg">Choose a plan that fits your scale</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-8 h-48 flex flex-col justify-between relative">
            <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-orange-600 font-bold text-lg">2</span>
            </div>
            <div className="mt-8">
              <div className="text-white/80 text-sm mb-2">Upload</div>
              <div className="text-white font-semibold text-lg">Add briefs to your custom design board</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 h-48 flex flex-col justify-between relative">
            <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-orange-600 font-bold text-lg">3</span>
            </div>
            <div className="mt-8">
              <div className="text-white/80 text-sm mb-2">We Create</div>
              <div className="text-white font-semibold text-lg">Our AI-enhanced team delivers in days</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-8 h-48 flex flex-col justify-between relative">
            <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-orange-600 font-bold text-lg">4</span>
            </div>
            <div className="mt-8">
              <div className="text-white/80 text-sm mb-2">Refine</div>
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
