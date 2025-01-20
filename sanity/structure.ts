import type { StructureResolver } from 'sanity/structure';
import { CalendarIcon, BookIcon } from '@sanity/icons';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('ImperfectoMedicine')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('author').title('Authors'),
      S.listItem()
        .title('Academic Structure')
        .child(
          S.list()
            .title('Academic Structure')
            .items([
              S.documentTypeListItem('section').title('Sections').icon(CalendarIcon),
              S.documentTypeListItem('subject').title('Subjects').icon(BookIcon),
              S.documentTypeListItem('topic').title('Topics'),
            ]),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !['post', 'author', 'section', 'subject', 'topic'].includes(item.getId()!),
      ),
    ]);