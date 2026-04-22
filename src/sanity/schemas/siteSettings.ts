import { defineType, defineField } from 'sanity';

export const siteSettingsSchema = defineType({
  name: 'siteSettings',
  title: 'Configuración del Sitio',
  type: 'document',
  fields: [
    defineField({ name: 'phone',           title: 'Teléfono (display)',      type: 'string' }),
    defineField({ name: 'phoneTel',        title: 'Teléfono (href tel:)',    type: 'string' }),
    defineField({ name: 'whatsapp',        title: 'WhatsApp URL',            type: 'url' }),
    defineField({ name: 'whatsappDisplay', title: 'WhatsApp (display)',      type: 'string' }),
    defineField({ name: 'instagram',       title: 'Instagram URL',           type: 'url' }),
    defineField({ name: 'instagramHandle', title: 'Instagram handle',        type: 'string' }),
    defineField({ name: 'facebook',        title: 'Facebook URL',            type: 'url' }),
    defineField({ name: 'address',         title: 'Dirección',               type: 'string' }),
    defineField({ name: 'city',            title: 'Ciudad y CP',             type: 'string' }),
    defineField({ name: 'province',        title: 'Provincia y País',        type: 'string' }),
    defineField({ name: 'googleMapsUrl',   title: 'Google Maps URL (link)',  type: 'url' }),
    defineField({ name: 'googleMapsEmbed', title: 'Google Maps Embed src',   type: 'url' }),
    defineField({
      name: 'hours',
      title: 'Horarios',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day',  title: 'Día(s)',   type: 'string' },
            { name: 'time', title: 'Horario',  type: 'string' },
          ],
          preview: { select: { title: 'day', subtitle: 'time' } },
        },
      ],
    }),
  ],
});
