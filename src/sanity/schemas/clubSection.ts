import { defineType, defineField } from 'sanity';

export const clubSectionSchema = defineType({
  name: 'clubSection',
  title: 'Sección El Club',
  type: 'document',
  fields: [
    defineField({ name: 'label',   title: 'Label superior',  type: 'string' }),
    defineField({ name: 'bodyCopy1', title: 'Párrafo 1',     type: 'text', rows: 4 }),
    defineField({ name: 'bodyCopy2', title: 'Párrafo 2',     type: 'text', rows: 4 }),
    defineField({
      name: 'photos',
      title: 'Fotos del Club (3)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image',   title: 'Foto',    type: 'image', options: { hotspot: true } },
            { name: 'alt',     title: 'Alt text', type: 'string' },
            { name: 'caption', title: 'Caption',  type: 'string' },
          ],
          preview: { select: { title: 'caption', media: 'image' } },
        },
      ],
      validation: (R) => R.max(3),
    }),
    defineField({
      name: 'pillars',
      title: 'Los 3 Pilares',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', title: 'Número (01, 02…)', type: 'string' },
            { name: 'title',  title: 'Título',           type: 'string' },
            { name: 'body',   title: 'Descripción',      type: 'text', rows: 3 },
          ],
          preview: { select: { title: 'title', subtitle: 'number' } },
        },
      ],
      validation: (R) => R.max(3),
    }),
  ],
});
