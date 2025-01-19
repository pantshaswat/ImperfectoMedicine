import {TagIcon} from '@sanity/icons'
import {defineField, defineType, defineArrayMember} from 'sanity'

export const subjectType = defineType({
  name: 'subject',
  title: 'subject',
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
        name: 'topics',
        type: 'array',
        of: [defineArrayMember({type: 'reference', to: {type: 'topic'}})],
      }),
  ],
})
