
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
          <div className="rounded-2xl p-8 h-48 flex flex-col items-center justify-center relative overflow-hidden bg-cover bg-center" style={{
            backgroundImage: 'url("https://cdn.midjourney.com/baf373eb-cd86-4f09-9d11-42da95046e68/0_0.png")'
          }}>
            <div className="relative z-10 text-white font-bold text-6xl mb-4 drop-shadow-lg">1</div>
            <div className="relative z-10 text-center">
              <div className="text-white/90 text-sm mb-2 drop-shadow">Subscribe</div>
              <div className="text-white font-semibold text-lg drop-shadow">Choose a plan that fits your scale</div>
            </div>
          </div>
          
          <div className="rounded-2xl p-8 h-48 flex flex-col items-center justify-center relative overflow-hidden bg-cover bg-center" style={{
            backgroundImage: 'url("https://cdn.midjourney.com/91cdbbe8-db78-42e4-874c-440ee155aed1/0_1.png")'
          }}>
            <div className="relative z-10 text-white font-bold text-6xl mb-4 drop-shadow-lg">2</div>
            <div className="relative z-10 text-center">
              <div className="text-white/90 text-sm mb-2 drop-shadow">Upload</div>
              <div className="text-white font-semibold text-lg drop-shadow">Add briefs to your custom design board</div>
            </div>
          </div>
          
          <div className="rounded-2xl p-8 h-48 flex flex-col items-center justify-center relative overflow-hidden bg-cover bg-center" style={{
            backgroundImage: 'url("https://cdn.midjourney.com/1576975d-bece-4966-8284-c83442b0a06b/0_0.png")'
          }}>
            <div className="relative z-10 text-white font-bold text-6xl mb-4 drop-shadow-lg">3</div>
            <div className="relative z-10 text-center">
              <div className="text-white/90 text-sm mb-2 drop-shadow">We Create</div>
              <div className="text-white font-semibold text-lg drop-shadow">Our AI-enhanced team delivers in days</div>
            </div>
          </div>

          <div className="rounded-2xl p-8 h-48 flex flex-col items-center justify-center relative overflow-hidden bg-cover bg-center" style={{
            backgroundImage: 'url("https://cdn.midjourney.com/c2920b57-d689-4602-b101-11b7387b2b44/0_2.png")'
          }}>
            <div className="relative z-10 text-white font-bold text-6xl mb-4 drop-shadow-lg">4</div>
            <div className="relative z-10 text-center">
              <div className="text-white/90 text-sm mb-2 drop-shadow">Refine</div>
              <div className="text-white font-semibold text-lg drop-shadow">Revisions handled with speed and clarity</div>
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
