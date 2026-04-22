import Image from 'next/image';
import { HERO, CONTACT } from '@/content';

type HeroProps = {
  data: typeof HERO;
  contact: typeof CONTACT;
};

export default function Hero({ data, contact }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={data.backgroundImage}
          alt="Smash Burger"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full">
        <h1 className="font-headline font-black text-6xl md:text-8xl leading-none tracking-tighter mb-6 text-white">
          {data.headline}<br />
          <span className="text-[#9F2A1F]">{data.headlineAccent}</span> {data.headlineSuffix}
        </h1>
        <p className="text-2xl text-gray-300 mb-12">{data.subheadline}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#9F2A1F] hover:bg-red-700 text-white px-12 py-5 font-headline font-bold uppercase tracking-widest text-lg transition"
          >
            {data.ctaPrimary}
          </a>
          <a
            href={contact.phoneTel}
            className="border-2 border-[#9F2A1F] hover:bg-white/10 px-12 py-5 font-headline font-bold uppercase tracking-widest text-lg transition"
          >
            {data.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
