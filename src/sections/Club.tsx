import Image from 'next/image';
import { CLUB } from '@/content';

type ClubProps = {
  data: typeof CLUB;
};

export default function Club({ data }: ClubProps) {
  return (
    <section id="club" className="relative py-32 bg-[#131313] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#653e0f]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#9F2A1F]/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-24">
          <div>
            <span className="block text-[#9F2A1F] font-headline font-bold tracking-[0.2em] uppercase text-xs mb-5">
              {data.label}
            </span>
            <h2 className="font-headline font-black text-5xl md:text-7xl uppercase tracking-tighter leading-[0.88]">
              {data.heading[0]}<br />
              {data.heading[1]}<br />
              <span className="text-transparent inline-block pt-1" style={{ WebkitTextStroke: '1px #ffb4a9' }}>
                {data.heading[2]}
              </span>
            </h2>
          </div>
          <div className="lg:pb-2">
            <div className="w-12 h-px bg-[#9F2A1F] mb-6" />
            {data.bodyCopy.map((paragraph, i) => (
              <p key={i} className={`text-base leading-relaxed ${i === 0 ? 'text-[#e0bfba] text-lg mb-4' : 'text-[#a78a86]'}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-12 grid-rows-2 gap-1 h-[420px] md:h-[560px] mb-24">
          <div className="col-span-12 md:col-span-7 row-span-2 relative overflow-hidden">
            <Image src={data.photos[0].src} alt={data.photos[0].alt} fill className="object-cover brightness-75 hover:scale-[1.03] transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#a78a86]">{data.photos[0].caption}</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 row-span-1 relative overflow-hidden border-b border-[#131313]">
            <Image src={data.photos[1].src} alt={data.photos[1].alt} fill className="object-cover brightness-75 hover:scale-[1.03] transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#131313]/50" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#a78a86]">{data.photos[1].caption}</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 row-span-1 relative overflow-hidden">
            <Image src={data.photos[2].src} alt={data.photos[2].alt} fill className="object-cover brightness-75 hover:scale-[1.03] transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/50 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#a78a86]">{data.photos[2].caption}</span>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#ffffff08]">
          {data.pillars.map((p, i) => (
            <div key={p.number} className={`p-8 md:p-10 group transition-colors duration-300 hover:bg-[#1c1b1b] ${i < data.pillars.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#ffffff08]' : ''}`}>
              <span className="block font-headline font-black text-5xl text-[#ffffff06] group-hover:text-[#9F2A1F]/20 transition-colors duration-300 mb-4 leading-none select-none">
                {p.number}
              </span>
              <h3 className="font-headline font-bold text-sm tracking-[0.2em] uppercase text-[#9F2A1F] mb-3">{p.title}</h3>
              <p className="text-[#a78a86] text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
