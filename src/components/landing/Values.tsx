

const Values = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        
        <div className="mb-20">
          <h2 className="font-heading text-5xl lg:text-6xl text-text mb-8 tracking-tight">
            How Solariis Works
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            From idea to impact in four seamless steps
          </p>
        </div>

        <div className="relative">
          {/* Desktop flow arrows */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 z-0">
            <div className="flex justify-between items-center px-16">
              <div className="w-1/4"></div>
              <div className="flex-1 h-px bg-text-light/20 mx-8"></div>
              <div className="flex-1 h-px bg-text-light/20 mx-8"></div>
              <div className="flex-1 h-px bg-text-light/20 mx-8"></div>
              <div className="w-1/4"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 relative z-10">
            {/* Step 1: Subscribe */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="text-text-light text-sm font-medium mb-6">Step 1</div>
              
              {/* Abstract motif - soft ripple */}
              <div className="w-24 h-24 mx-auto mb-8 relative">
                <div className="absolute inset-0 rounded-full border-2 border-primary/20"></div>
                <div className="absolute inset-2 rounded-full border-2 border-primary/30"></div>
                <div className="absolute inset-4 rounded-full border-2 border-primary/40"></div>
                <div className="absolute inset-6 rounded-full bg-primary/10"></div>
                <div className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-heading font-bold text-text">Subscribe</h3>
                <p className="text-text-light leading-relaxed">
                  Choose a plan that fits your scale and ambitions
                </p>
              </div>
            </div>
            
            {/* Step 2: Upload Briefs */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="text-text-light text-sm font-medium mb-6">Step 2</div>
              
              {/* Abstract motif - floating feather/dotted line */}
              <div className="w-24 h-24 mx-auto mb-8 relative flex items-center justify-center">
                <div className="flex flex-col items-center space-y-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/80"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-primary/60"></div>
                  <div className="w-4.5 h-4.5 rounded-full bg-primary/40"></div>
                  <div className="w-5.5 h-5.5 rounded-full bg-primary/20"></div>
                  <div className="w-6.5 h-6.5 rounded-full bg-primary/10"></div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-heading font-bold text-text">Upload Briefs</h3>
                <p className="text-text-light leading-relaxed">
                  Share your vision on your custom design board
                </p>
              </div>
            </div>
            
            {/* Step 3: Human/Agent Creation */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="text-text-light text-sm font-medium mb-6">Step 3</div>
              
              {/* Abstract motif - spiral/swirl */}
              <div className="w-24 h-24 mx-auto mb-8 relative flex items-center justify-center">
                <svg width="60" height="60" viewBox="0 0 48 48" className="text-primary">
                  <path
                    d="M24 4c11 0 20 9 20 20s-9 20-20 20-20-9-20-20c0-8 4.7-15 12-18.3"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    className="opacity-30"
                  />
                  <path
                    d="M24 8c9 0 16 7 16 16s-7 16-16 16-16-7-16-16c0-6 3.3-11.2 8.2-14"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    className="opacity-60"
                  />
                  <path
                    d="M24 12c7 0 12 5 12 12s-5 12-12 12-12-5-12-12c0-4.5 2.5-8.4 6.2-10.4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-heading font-bold text-text">Human/Agent Creation</h3>
                <p className="text-text-light leading-relaxed">
                  AI-enhanced team creates exceptional work
                </p>
              </div>
            </div>

            {/* Step 4: Delivery */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="text-text-light text-sm font-medium mb-6">Step 4</div>
              
              {/* Abstract motif - clean arrow/spark */}
              <div className="w-24 h-24 mx-auto mb-8 relative flex items-center justify-center">
                <div className="relative">
                  <div className="w-10 h-0.5 bg-primary"></div>
                  <div className="absolute right-0 top-0 w-0 h-0 border-l-[6px] border-l-primary border-t-[3px] border-b-[3px] border-t-transparent border-b-transparent"></div>
                  <div className="absolute -top-1.5 -right-3 w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                  <div className="absolute -bottom-1.5 right-1.5 w-1 h-1 rounded-full bg-primary/60"></div>
                  <div className="absolute -top-2.5 -right-1 w-0.5 h-0.5 rounded-full bg-primary/40"></div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-heading font-bold text-text">Delivery</h3>
                <p className="text-text-light leading-relaxed">
                  Rapid delivery with unlimited revisions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-text font-medium text-lg mb-2">
            From brief to brilliant in days — not weeks
          </p>
          <div className="flex items-center justify-center space-x-2 text-primary">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-medium text-text-light">AI-enhanced creativity for 10x faster delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

