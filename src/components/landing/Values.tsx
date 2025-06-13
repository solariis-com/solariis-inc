
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
          <div className="rounded-2xl h-80 flex flex-col items-center justify-end relative overflow-hidden bg-cover bg-center" style={{
            backgroundImage: 'url("https://cdn.midjourney.com/baf373eb-cd86-4f09-9d11-42da95046e68/0_0.png")'
          }}>
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
            <div className="relative z-10 text-black font-bold text-8xl mb-4">1</div>
            <div className="relative z-10 text-center pb-8">
              <div className="text-black text-sm mb-2">Subscribe</div>
              <div className="text-black font-semibold text-lg">Choose a plan that fits your scale</div>
            </div>
          </div>
          
          <div className="rounded-2xl h-80 flex flex-col items-center justify-end relative overflow-hidden bg-cover bg-center" style={{
            backgroundImage: 'url("https://cdn.midjourney.com/91cdbbe8-db78-42e4-874c-440ee155aed1/0_1.png")'
          }}>
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
            <div className="relative z-10 text-black font-bold text-8xl mb-4">2</div>
            <div className="relative z-10 text-center pb-8">
              <div className="text-black text-sm mb-2">Upload</div>
              <div className="text-black font-semibold text-lg">Add briefs to your custom design board</div>
            </div>
          </div>
          
          <div className="rounded-2xl h-80 flex flex-col items-center justify-end relative overflow-hidden bg-cover bg-center" style={{
            backgroundImage: 'url("https://cdn.midjourney.com/1576975d-bece-4966-8284-c83442b0a06b/0_0.png")'
          }}>
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
            <div className="relative z-10 text-black font-bold text-8xl mb-4">3</div>
            <div className="relative z-10 text-center pb-8">
              <div className="text-black text-sm mb-2">We Create</div>
              <div className="text-black font-semibold text-lg">Our AI-enhanced team delivers in days</div>
            </div>
          </div>

          <div className="rounded-2xl h-80 flex flex-col items-center justify-end relative overflow-hidden bg-cover bg-center" style={{
            backgroundImage: 'url("https://cdn.midjourney.com/c2920b57-d689-4602-b101-11b7387b2b44/0_2.png")'
          }}>
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
            <div className="relative z-10 text-black font-bold text-8xl mb-4">4</div>
            <div className="relative z-10 text-center pb-8">
              <div className="text-black text-sm mb-2">Refine</div>
              <div className="text-black font-semibold text-lg">Revisions handled with speed and clarity</div>
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
