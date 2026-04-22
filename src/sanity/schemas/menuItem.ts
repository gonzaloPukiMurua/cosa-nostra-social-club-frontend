import { defineType, defineField } from 'sanity';

export const menuItemSchema = defineType({
  name: 'menuItem',
  title: 'Ítem del Menú',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del plato',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'price',
      title: 'Precio (ej: $12.500)',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'image',
      title: 'Foto del plato',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'badge',
      title: 'Badge (ej: Favorito, Nuevo)',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Smash Burger', value: 'burger' },
          { title: 'Pizza',        value: 'pizza' },
          { title: 'Entrante',     value: 'entrant' },
          { title: 'Postre',       value: 'dessert' },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'order',
      title: 'Orden de aparición',
      type: 'number',
    }),
  ],
  orderings: [
    { title: 'Orden', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'price', media: 'image' },
  },
});
