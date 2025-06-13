
const Values = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/30">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-24">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            ✨ AI-Enhanced Creative Process
          </div>
          <h2 className="font-heading text-6xl lg:text-7xl text-text mb-8 tracking-tight leading-none">
            How Solariis
            <span className="block text-primary">Works</span>
          </h2>
          <p className="text-xl text-text-light max-w-2xl mx-auto leading-relaxed">
            From creative brief to brilliant execution in four seamless steps — 
            <span className="text-text font-medium"> powered by AI, perfected by humans</span>
          </p>
        </div>

        <div className="relative mb-24">
          {/* Desktop connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 z-0">
            <div className="flex justify-between items-center px-20">
              <div className="w-1/4"></div>
              <div className="flex-1 mx-8 relative">
                <div className="h-0.5 bg-gradient-to-r from-primary/30 to-primary/60"></div>
                <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary animate-pulse"></div>
              </div>
              <div className="flex-1 mx-8 relative">
                <div className="h-0.5 bg-gradient-to-r from-primary/60 to-primary/80"></div>
                <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
              <div className="flex-1 mx-8 relative">
                <div className="h-0.5 bg-gradient-to-r from-primary/80 to-primary"></div>
                <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <div className="w-1/4"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            
            {/* Step 1: Subscribe */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">1</span>
                <div className="text-xs font-medium text-text-light bg-gray-50 px-3 py-1 rounded-full">Start Here</div>
              </div>
              
              {/* Enhanced abstract motif */}
              <div className="w-28 h-28 mx-auto mb-8 relative group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"></div>
                <div className="absolute inset-3 rounded-full border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300"></div>
                <div className="absolute inset-6 rounded-full border-2 border-primary/40 group-hover:border-primary/80 transition-colors duration-300"></div>
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 group-hover:from-primary/40 group-hover:to-primary/60 transition-all duration-300"></div>
                <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold text-text group-hover:text-primary transition-colors duration-300">Subscribe</h3>
                <p className="text-text-light leading-relaxed">
                  Choose a plan that fits your scale and creative ambitions. Start immediately with flexible billing.
                </p>
              </div>
            </div>
            
            {/* Step 2: Upload Briefs */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">2</span>
                <div className="text-xs font-medium text-text-light bg-gray-50 px-3 py-1 rounded-full">Share Vision</div>
              </div>
              
              {/* Enhanced upload motif */}
              <div className="w-28 h-28 mx-auto mb-8 relative group-hover:scale-110 transition-transform duration-500">
                <div className="flex flex-col items-center justify-center h-full space-y-2">
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:animate-bounce"></div>
                  <div className="w-3 h-3 rounded-full bg-primary/80 group-hover:animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-4 h-4 rounded-full bg-primary/60 group-hover:animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-5 h-5 rounded-full bg-primary/40 group-hover:animate-bounce" style={{animationDelay: '0.3s'}}></div>
                  <div className="w-6 h-6 rounded-full bg-primary/20 group-hover:animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  <div className="w-8 h-8 rounded-full bg-primary/10 group-hover:animate-bounce" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold text-text group-hover:text-primary transition-colors duration-300">Upload Briefs</h3>
                <p className="text-text-light leading-relaxed">
                  Share your vision on your custom design board. Upload references, describe goals, set parameters.
                </p>
              </div>
            </div>
            
            {/* Step 3: AI + Human Creation */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">3</span>
                <div className="text-xs font-medium text-text-light bg-gray-50 px-3 py-1 rounded-full">AI + Human</div>
              </div>
              
              {/* Enhanced creation motif */}
              <div className="w-28 h-28 mx-auto mb-8 relative group-hover:scale-110 transition-transform duration-500">
                <svg width="80" height="80" viewBox="0 0 80 80" className="text-primary mx-auto group-hover:rotate-12 transition-transform duration-500">
                  <defs>
                    <linearGradient id="spiral-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.2"/>
                      <stop offset="50%" stopColor="currentColor" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="currentColor" stopOpacity="1"/>
                    </linearGradient>
                  </defs>
                  <path
                    d="M40 8c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32c0-12.8 7.5-24 18.4-29.3"
                    stroke="url(#spiral-gradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    className="group-hover:stroke-primary transition-colors duration-300"
                  />
                  <path
                    d="M40 16c13.2 0 24 10.8 24 24s-10.8 24-24 24-24-10.8-24-24c0-9 5-16.8 12.3-21"
                    stroke="url(#spiral-gradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M40 24c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-6 3.3-11.2 8.2-14"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle cx="40" cy="40" r="4" fill="currentColor" className="group-hover:animate-pulse"/>
                </svg>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold text-text group-hover:text-primary transition-colors duration-300">AI + Human Creation</h3>
                <p className="text-text-light leading-relaxed">
                  Our AI-enhanced creative team produces exceptional work with human taste and AI speed.
                </p>
              </div>
            </div>

            {/* Step 4: Delivery */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">4</span>
                <div className="text-xs font-medium text-text-light bg-gray-50 px-3 py-1 rounded-full">Complete</div>
              </div>
              
              {/* Enhanced delivery motif */}
              <div className="w-28 h-28 mx-auto mb-8 relative group-hover:scale-110 transition-transform duration-500">
                <div className="relative group-hover:rotate-3 transition-transform duration-300">
                  {/* Enhanced box outline */}
                  <div className="w-16 h-14 border-3 border-primary rounded-lg relative bg-gradient-to-br from-primary/5 to-primary/15 group-hover:from-primary/15 group-hover:to-primary/25 transition-colors duration-300 mx-auto">
                    {/* Box details */}
                    <div className="absolute top-0 left-1/4 w-px h-full bg-primary/40"></div>
                    <div className="absolute top-0 right-1/4 w-px h-full bg-primary/40"></div>
                    <div className="absolute top-1/3 left-0 w-full h-px bg-primary/40"></div>
                    
                    {/* Enhanced checkmark */}
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300">
                      <svg width="14" height="10" viewBox="0 0 14 10" className="text-white">
                        <path
                          d="M1 5l3.5 3.5L13 1"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    
                    {/* Enhanced motion lines */}
                    <div className="absolute -left-4 top-3 w-3 h-0.5 bg-primary/40 group-hover:bg-primary/60 transition-colors duration-300"></div>
                    <div className="absolute -left-5 top-6 w-4 h-0.5 bg-primary/60 group-hover:bg-primary/80 transition-colors duration-300"></div>
                    <div className="absolute -left-4 top-9 w-3 h-0.5 bg-primary/40 group-hover:bg-primary/60 transition-colors duration-300"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold text-text group-hover:text-primary transition-colors duration-300">Rapid Delivery</h3>
                <p className="text-text-light leading-relaxed">
                  Lightning-fast delivery with unlimited revisions. Your satisfaction is guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced bottom section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-text mb-4">
              From brief to brilliant in days — not weeks
            </h3>
            <div className="flex items-center justify-center space-x-3 text-primary mb-6">
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
              <span className="text-lg font-medium text-text">AI-enhanced creativity for 10x faster delivery</span>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-text-light">Expert human oversight</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-text-light">AI-powered efficiency</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-text-light">Unlimited revisions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
