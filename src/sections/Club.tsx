import Image from 'next/image';

const PILLARS = [
  {
    number: '01',
    title: 'LA TÉCNICA',
    body: 'El Smash perfecto requiere precisión: 180g de carne, plancha a 260°C y exactamente 10 segundos de presión. Sin trucos.',
  },
  {
    number: '02',
    title: 'EL INGREDIENTE',
    body: 'Proveedores locales de las Sierras de Córdoba. Carne de pastura, pan artesanal horneado a diario, quesos de tambos cercanos.',
  },
  {
    number: '03',
    title: 'EL AMBIENTE',
    body: 'Un club donde cada cliente es familia. Sin reservas, sin pretensiones. Solo buena comida, buena música y buena compañía.',
  },
];

export default function Club() {
  return (
    <section id="club" className="relative py-32 bg-[#131313] overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#653e0f]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#9F2A1F]/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Top: Label + Heading + Intro ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-24">
          <div>
            <span className="block text-[#9F2A1F] font-headline font-bold tracking-[0.2em] uppercase text-xs mb-5">
              Nuestra Historia
            </span>
            <h2 className="font-headline font-black text-5xl md:text-7xl uppercase tracking-tighter leading-[0.88]">
              BIENVENIDOS A<br />
              COSA NOSTRA<br />
              <span
                className="text-transparent inline-block pt-1"
                style={{ WebkitTextStroke: '1px #ffb4a9' }}
              >
                SOCIAL CLUB
              </span>
            </h2>
          </div>
          <div className="lg:pb-2">
            <div className="w-12 h-px bg-[#9F2A1F] mb-6" />
            <p className="text-[#e0bfba] text-lg leading-relaxed mb-4">
              No somos solo una hamburguesería. Somos un refugio para los que aprecian la calidad cruda, el respeto por el ingrediente y el ambiente de un verdadero club social clandestino.
            </p>
            <p className="text-[#a78a86] text-base leading-relaxed">
              Nuestra cocina se basa en tres pilares: la técnica del Smash perfecta, ingredientes locales de primera y un ambiente donde cada cliente es parte de la familia.
            </p>
          </div>
        </div>

        {/* ── Middle: Photo grid ── */}
        <div className="grid grid-cols-12 grid-rows-2 gap-1 h-[420px] md:h-[560px] mb-24">

          {/* Large left image */}
          <div className="col-span-12 md:col-span-7 row-span-2 relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
              alt="Interior del Cosa Nostra Social Club"
              fill
              className="object-cover brightness-75 hover:scale-[1.03] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#a78a86]">El Ambiente</span>
            </div>
          </div>

          {/* Top-right image */}
          <div className="col-span-12 md:col-span-5 row-span-1 relative overflow-hidden border-b border-[#131313]">
            <Image
              src="https://images.unsplash.com/photo-1627308595229-7830a5c18106?q=80&w=800&auto=format&fit=crop"
              alt="Smash burger en la plancha"
              fill
              className="object-cover brightness-75 hover:scale-[1.03] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#131313]/50" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#a78a86]">La Técnica</span>
            </div>
          </div>

          {/* Bottom-right image */}
          <div className="col-span-12 md:col-span-5 row-span-1 relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop"
              alt="Ingredientes frescos"
              fill
              className="object-cover brightness-75 hover:scale-[1.03] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/50 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#a78a86]">El Ingrediente</span>
            </div>
          </div>
        </div>

        {/* ── Bottom: Three pillars ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#ffffff08]">
          {PILLARS.map((p, i) => (
            <div
              key={p.number}
              className={`p-8 md:p-10 group transition-colors duration-300 hover:bg-[#1c1b1b] ${
                i < PILLARS.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#ffffff08]' : ''
              }`}
            >
              <span className="block font-headline font-black text-5xl text-[#ffffff06] group-hover:text-[#9F2A1F]/20 transition-colors duration-300 mb-4 leading-none select-none">
                {p.number}
              </span>
              <h3 className="font-headline font-bold text-sm tracking-[0.2em] uppercase text-[#9F2A1F] mb-3">
                {p.title}
              </h3>
              <p className="text-[#a78a86] text-sm leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
