import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export const queries = {
  getAllYears: `*[_type == "year"] {
    _id,
    name,
    slug,
    description,
    "subjects": subjects[]-> {
      _id,
      name,
      slug,
      description,
      "topics": topics[]-> {
        _id,
        title,
        slug,
        description,
        "posts": posts[]-> {
          _id,
          title,
          slug,
          publishedAt,
          "author": author-> {
            name,
            slug,
            "imageUrl": image.asset->url
          },
          "mainImageUrl": mainImage.asset->url
        }
      }
    }
  }`,
  getAllYearsSubjectsTopics: `*[_type == "year"] {
    _id,
    name,
    slug,
    description,
    "subjects": subjects[]-> {
      _id,
      name,
      slug,
      description,
      "topics": topics[]-> {
        _id,
        title,
        slug,
        description
      }
    }
  }`,
  getPostBySlug: `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    body,
    mainImage {
      asset -> {
        url
      },
      alt
    },
    author -> {
      name,
      image
    },
    publishedAt
  }
`,
}