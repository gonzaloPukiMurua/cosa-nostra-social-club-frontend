export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-[#9F2A1F] font-bold text-sm">Nuestro Menú</span>
          <h2 className="font-headline font-black text-5xl md:text-7xl tracking-tighter mt-3">THE RAW SELECTION</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder cards - replace with real data/photos later */}
          <div className="bg-[#131313] rounded-2xl overflow-hidden group">
            <div className="relative h-64 bg-gray-800">
              {/* Image will go here */}
            </div>
            <div className="p-6">
              <h3 className="font-headline font-bold text-2xl">GODFATHER BURGER</h3>
              <p className="text-gray-400 text-sm mt-2">Doble patty, cheddar fundido y salsa secreta</p>
              <div className="text-[#9F2A1F] font-bold text-xl mt-4">$12.500</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}