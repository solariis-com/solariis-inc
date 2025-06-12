
const Portfolio = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl lg:text-6xl text-text mb-8 tracking-tight">
            One subscription,
          </h2>
        </div>

        <div className="max-w-md mx-auto bg-text rounded-3xl p-8 text-white text-center">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Monthly Club</h3>
            <div className="text-4xl font-bold mb-2">$4,995<span className="text-lg font-normal">/m</span></div>
          </div>
          
          <div className="space-y-3 text-left mb-8 text-sm">
            <div className="flex justify-between">
              <span>One request at a time</span>
            </div>
            <div className="flex justify-between">
              <span>Average 48 hour delivery</span>
            </div>
            <div className="flex justify-between">
              <span>Unlimited brands</span>
            </div>
            <div className="flex justify-between">
              <span>Unlimited users</span>
            </div>
            <div className="flex justify-between">
              <span>Design board</span>
            </div>
            <div className="flex justify-between">
              <span>Unlimited revisions</span>
            </div>
            <div className="flex justify-between">
              <span>Pause anytime</span>
            </div>
          </div>

          <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
            Get started
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16 text-center">
          <div>
            <h4 className="font-semibold text-text mb-2">Pause anytime</h4>
            <p className="text-text-light text-sm">Billing pauses and you won't be charged when paused.</p>
          </div>
          <div>
            <h4 className="font-semibold text-text mb-2">Try it for a week</h4>
            <p className="text-text-light text-sm">Not happy? We'll refund your money, no questions asked.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
