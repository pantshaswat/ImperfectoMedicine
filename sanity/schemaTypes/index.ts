import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {topicType} from './topicType'
import {postType} from './postType'
import {authorType} from './authorType'
import { sectionType } from './sectionType'
import { subjectType } from './subjectType'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, topicType, postType, authorType, sectionType, subjectType],
}
