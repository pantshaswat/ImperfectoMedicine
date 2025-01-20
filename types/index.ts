// types/index.ts
export interface Author {
    name: string
    slug: { current: string }
    imageUrl?: string
  }
  
  export interface Post {
    _id: string
    title: string
    slug: { current: string }
    author: Author
    mainImageUrl?: string,
    mainImageAlt?: string,
    body: any,
    publishedAt: string
  }
  
  export interface Topic {
    _id: string
    title: string
    slug: { current: string }
    description: string
    posts: Post[]
  }
  
  export interface Subject {
    _id: string
    name: string
    slug: { current: string }
    description: string
    topics: Topic[]
  }
  
  export interface Section {
    _id: string
    name: string
    slug: { current: string }
    description: string
    subjects: Subject[]
  }