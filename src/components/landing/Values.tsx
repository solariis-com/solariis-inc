
const Values = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        
        <div className="mb-16">
          <h2 className="font-heading text-5xl lg:text-6xl text-text mb-8 tracking-tight">
            How Solariis Works
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            From idea to impact in four seamless steps
          </p>
        </div>

        <div className="relative">
          {/* Desktop flow arrows */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-1/2 z-0">
            <div className="flex justify-between items-center px-8">
              <div className="w-1/4"></div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/60 to-primary/30 mx-4"></div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/60 to-primary/30 mx-4"></div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/60 to-primary/30 mx-4"></div>
              <div className="w-1/4"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16 relative z-10">
            {/* Step 1: Subscribe */}
            <div className="relative h-80 rounded-3xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://cdn.midjourney.com/baf373eb-cd86-4f09-9d11-42da95046e68/0_0.png)'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/90 via-orange-400/50 to-transparent"></div>
              
              {/* Step number */}
              <div className="absolute top-6 left-6">
                <div className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">1</span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-left">
                  <div className="text-4xl font-bold text-black mb-3">Subscribe</div>
                  <div className="text-black/80 text-lg font-medium">
                    Choose a plan that fits your scale and ambitions
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2: Upload Briefs */}
            <div className="relative h-80 rounded-3xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://cdn.midjourney.com/91cdbbe8-db78-42e4-874c-440ee155aed1/0_1.png)'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/90 via-orange-400/50 to-transparent"></div>
              
              {/* Step number */}
              <div className="absolute top-6 left-6">
                <div className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">2</span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-left">
                  <div className="text-4xl font-bold text-black mb-3">Upload Briefs</div>
                  <div className="text-black/80 text-lg font-medium">
                    Share your vision on your custom design board
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3: Human/Agent Creation */}
            <div className="relative h-80 rounded-3xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://cdn.midjourney.com/1576975d-bece-4966-8284-c83442b0a06b/0_0.png)'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/90 via-orange-400/50 to-transparent"></div>
              
              {/* Step number */}
              <div className="absolute top-6 left-6">
                <div className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">3</span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-left">
                  <div className="text-4xl font-bold text-black mb-3">Human/Agent Creation</div>
                  <div className="text-black/80 text-lg font-medium">
                    AI-enhanced team creates exceptional work
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Delivery */}
            <div className="relative h-80 rounded-3xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://cdn.midjourney.com/c2920b57-d689-4602-b101-11b7387b2b44/0_2.png)'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/90 via-orange-400/50 to-transparent"></div>
              
              {/* Step number */}
              <div className="absolute top-6 left-6">
                <div className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">4</span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-left">
                  <div className="text-4xl font-bold text-black mb-3">Delivery</div>
                  <div className="text-black/80 text-lg font-medium">
                    Rapid delivery with unlimited revisions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <p className="text-text-light text-lg font-medium">
            AI-enhanced creativity for 10x faster delivery
          </p>
          <div className="flex items-center space-x-2 text-primary">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-medium">From brief to brilliant in days, not weeks</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
