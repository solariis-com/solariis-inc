
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
          <div className="bg-white border border-gray-200 rounded-3xl p-8 h-80 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">1</span>
              </div>
            </div>
            <div className="text-center flex-1 flex flex-col justify-end">
              <div className="text-text-light text-sm mb-2 uppercase tracking-wide">Subscribe</div>
              <div className="text-text font-semibold text-lg">Choose a plan that fits your scale</div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-3xl p-8 h-80 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">2</span>
              </div>
            </div>
            <div className="text-center flex-1 flex flex-col justify-end">
              <div className="text-text-light text-sm mb-2 uppercase tracking-wide">Upload</div>
              <div className="text-text font-semibold text-lg">Add briefs to your custom design board</div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-3xl p-8 h-80 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">3</span>
              </div>
            </div>
            <div className="text-center flex-1 flex flex-col justify-end">
              <div className="text-text-light text-sm mb-2 uppercase tracking-wide">We Create</div>
              <div className="text-text font-semibold text-lg">Our AI-enhanced team delivers in days</div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 h-80 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">4</span>
              </div>
            </div>
            <div className="text-center flex-1 flex flex-col justify-end">
              <div className="text-text-light text-sm mb-2 uppercase tracking-wide">Refine</div>
              <div className="text-text font-semibold text-lg">Revisions handled with speed and clarity</div>
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
