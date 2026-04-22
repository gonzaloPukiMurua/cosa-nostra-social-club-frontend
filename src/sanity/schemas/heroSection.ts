import { defineType, defineField } from 'sanity';

export const heroSectionSchema = defineType({
  name: 'heroSection',
  title: 'Sección Hero',
  type: 'document',
  fields: [
    defineField({ name: 'headline',       title: 'Titular línea 1',      type: 'string' }),
    defineField({ name: 'headlineAccent', title: 'Palabra destacada',    type: 'string' }),
    defineField({ name: 'headlineSuffix', title: 'Titular línea 3',      type: 'string' }),
    defineField({ name: 'subheadline',    title: 'Subtítulo',            type: 'string' }),
    defineField({ name: 'ctaPrimary',     title: 'Botón principal',      type: 'string' }),
    defineField({ name: 'ctaSecondary',   title: 'Botón secundario',     type: 'string' }),
    defineField({
      name: 'backgroundImage',
      title: 'Imagen de fondo',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
});
