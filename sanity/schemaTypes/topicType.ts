import {TagIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const topicType = defineType({
  name: 'topic',
  title: 'topic',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'posts',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'post'}})],
    }),
  ],
})
