import { CONTACT, HOURS } from '@/content';

type LocationProps = {
  contact: typeof CONTACT;
  hours: typeof HOURS;
};

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.12 1.18 2 2 0 012.1 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.103 1.518 5.83L.057 23.5l5.806-1.523A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.001-1.373l-.36-.213-3.44.902.919-3.352-.233-.374A9.77 9.77 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function Location({ contact, hours }: LocationProps) {
  const contactItems = [
    { Icon: PhoneIcon,     label: 'Teléfono',  value: contact.phone,           href: contact.phoneTel },
    { Icon: WhatsAppIcon,  label: 'WhatsApp',  value: contact.whatsappDisplay, href: contact.whatsapp },
    { Icon: InstagramIcon, label: 'Instagram', value: contact.instagramHandle, href: contact.instagram },
  ];

  return (
    <section id="location" className="relative bg-[#1c1b1b] overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#9F2A1F]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative w-full h-[320px] md:h-[420px] grayscale brightness-[0.65] contrast-[1.1]">
        <iframe
          src={contact.googleMapsEmbed}
          width="100%" height="100%"
          style={{ border: 0 }}
          allowFullScreen loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Cosa Nostra Social Club"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1b1b]/30 via-transparent to-[#1c1b1b] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c1b1b]/40 via-transparent to-[#1c1b1b]/40 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[#ffffff08] -mt-1">

          <div className="lg:col-span-1 p-10 border-b lg:border-b-0 lg:border-r border-[#ffffff08]">
            <span className="block text-[#9F2A1F] font-headline font-bold tracking-[0.2em] uppercase text-[10px] mb-6">Nuestra Sede</span>
            <h2 className="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter leading-none mb-6">ENCUÉN<br />TRANOS</h2>
            <address className="not-italic text-[#a78a86] text-sm leading-relaxed mb-8">
              {contact.address}<br />{contact.city}<br />{contact.province}
            </address>
            <a href={contact.googleMapsUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#9F2A1F] text-[#9F2A1F] hover:bg-[#9F2A1F] hover:text-white px-6 py-3 font-headline font-bold uppercase tracking-[0.15em] text-[11px] transition-all duration-200 group">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Cómo llegar
            </a>
          </div>

          <div className="lg:col-span-1 p-10 border-b lg:border-b-0 lg:border-r border-[#ffffff08]">
            <span className="block text-[#9F2A1F] font-headline font-bold tracking-[0.2em] uppercase text-[10px] mb-6">Contacto</span>
            <ul className="space-y-6">
              {contactItems.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="mt-0.5 text-[#9F2A1F] shrink-0"><Icon /></span>
                  <div>
                    <p className="text-[9px] font-headline font-bold tracking-[0.2em] uppercase text-[#58413e] mb-1">{label}</p>
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-headline text-base text-[#e0bfba] hover:text-white transition-colors duration-200">
                      {value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1 p-10">
            <span className="block text-[#9F2A1F] font-headline font-bold tracking-[0.2em] uppercase text-[10px] mb-6">Horarios</span>
            <ul className="space-y-4">
              {hours.map(({ day, time }) => (
                <li key={day} className="flex justify-between items-baseline gap-4 border-b border-[#ffffff06] pb-3 last:border-0 last:pb-0">
                  <span className="text-[#a78a86] text-xs uppercase tracking-wider">{day}</span>
                  <span className="font-headline font-bold text-sm text-[#e0bfba] shrink-0">{time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-[#ffffff08]">
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#9F2A1F] hover:bg-[#b83122] text-white py-4 font-headline font-bold uppercase tracking-[0.15em] text-[11px] transition-all duration-200 hover:shadow-[0_0_24px_rgba(159,42,31,0.35)]">
                Pedir por WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
