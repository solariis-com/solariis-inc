
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
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center mb-6">
              <span className="text-white font-bold text-lg">1</span>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 w-full aspect-square flex flex-col justify-center text-center">
              <div className="text-black/60 text-sm mb-3 font-medium">Subscribe</div>
              <div className="text-black font-bold text-lg leading-tight">Choose a plan that fits your scale</div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center mb-6">
              <span className="text-white font-bold text-lg">2</span>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 w-full aspect-square flex flex-col justify-center text-center">
              <div className="text-white/70 text-sm mb-3 font-medium">Upload</div>
              <div className="text-white font-bold text-lg leading-tight">Add briefs to your custom design board</div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center mb-6">
              <span className="text-white font-bold text-lg">3</span>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl p-8 w-full aspect-square flex flex-col justify-center text-center">
              <div className="text-white/70 text-sm mb-3 font-medium">We Create</div>
              <div className="text-white font-bold text-lg leading-tight">Our AI-enhanced team delivers in days</div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center mb-6">
              <span className="text-white font-bold text-lg">4</span>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-8 w-full aspect-square flex flex-col justify-center text-center">
              <div className="text-white/70 text-sm mb-3 font-medium">Refine</div>
              <div className="text-white font-bold text-lg leading-tight">Revisions handled with speed and clarity</div>
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
