
const Services = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent-dark">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="font-heading text-5xl lg:text-6xl text-text mb-6 tracking-tight">
              "Designjoy shows that they know the art of subtlety."
            </h2>
          </div>
          <div>
            <h2 className="font-heading text-5xl lg:text-6xl text-text mb-6 tracking-tight">
              "Design is everything, and these guys have nailed it."
            </h2>
            <div className="flex items-center mt-8">
              <img 
                src="/lovable-uploads/2402b619-b4b5-464a-b073-a3f87599ae58.png" 
                alt="Client"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <div className="font-semibold text-text">Josh Wardle</div>
                <div className="text-text-light">Creator of Wordle</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl aspect-square p-6 flex flex-col justify-between">
            <div className="text-white/80 text-sm">Apps</div>
            <div className="text-white font-semibold">iOS & Android apps</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl aspect-square p-6 flex flex-col justify-between">
            <div className="text-white/80 text-sm">Dashboard</div>
            <div className="text-white font-semibold">Web applications</div>
          </div>
          
          <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-3xl aspect-square p-6 flex flex-col justify-between">
            <div className="text-white/80 text-sm">Websites</div>
            <div className="text-white font-semibold">Landing pages & sites</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl aspect-square p-6 flex flex-col justify-between">
            <div className="text-white/80 text-sm">Brands</div>
            <div className="text-white font-semibold">Logos & brand identity</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-text-light">Recent work</p>
          <div className="flex justify-center space-x-4 mt-4">
            <div className="w-8 h-8 bg-primary rounded"></div>
            <div className="w-8 h-8 bg-coral rounded"></div>
            <div className="w-8 h-8 bg-teal rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
