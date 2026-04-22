import Image from 'next/image';
import type { MenuItem } from '@/content';

type MenuProps = {
  items: MenuItem[];
};

export default function Menu({ items }: MenuProps) {
  return (
    <section id="menu" className="py-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-[#9F2A1F] font-bold text-sm">Nuestro Menú</span>
          <h2 className="font-headline font-black text-5xl md:text-7xl tracking-tighter mt-3">THE RAW SELECTION</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.name} className="bg-[#131313] rounded-2xl overflow-hidden group relative">
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {item.badge && (
                <div className="absolute top-4 right-4 bg-[#9F2A1F] text-[10px] px-2 py-1 font-headline font-bold text-white uppercase tracking-widest">
                  {item.badge}
                </div>
              )}
              <div className="p-6">
                <h3 className="font-headline font-bold text-2xl">{item.name}</h3>
                <p className="text-gray-400 text-sm mt-2">{item.description}</p>
                <div className="text-[#9F2A1F] font-bold text-xl mt-4">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
