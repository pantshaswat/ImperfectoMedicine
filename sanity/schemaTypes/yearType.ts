import {TagIcon} from '@sanity/icons'
import {defineField, defineType, defineArrayMember} from 'sanity'

export const yearType = defineType({
  name: 'year',
  title: 'Year',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
        name: 'subjects',
        type: 'array',
        of: [defineArrayMember({type: 'reference', to: {type: 'subject'}})],
      }),
  ],
})
