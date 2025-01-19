"use client"

import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { format } from "date-fns";

const builder = imageUrlBuilder(client);

interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

// Define proper types for the components
const components = {
  types: {
    image: ({ value }: { value: SanityImage }) => {
      return (
        <Image
          src={builder.image(value.asset).width(1000).height(500).url()}
          alt={value.alt || "Post image"}
          width={800}
          height={200}
          className="my-8 rounded-lg"
        />
      );
    },
  },
};

const PostComp = ({ post }: { post: SanityDocument }) => {
  return (
    <main className="container mx-auto prose prose-xl px-4 py-10">
      <h1>{post.title}</h1>
      <div className="flex items-center gap-4">
  {post.author?.image ? (
    <Image
      className="rounded-full"
      src={builder.image(post.author?.image).width(150).height(150).url()}
      alt={post.author?.name || "author"}
      width={60}
      height={60}
    />
  ) : (
    <Image
      className="rounded-full"
      src="/pic.webp"
      alt={post.author?.name || "author"}
      width={60}
      height={60}
    />
  )}
  <div >
    <div >{post.author?.name}</div>
    <div className="text-sm text-gray-500">
      {post.publishedAt
        ? format(new Date(post.publishedAt), "MMMM dd, yyyy")
        : "Unknown date"}
    </div>
  </div>
</div>
<div>
{post.mainImage?.asset?.url? (
        <Image
        src={builder.image(post.mainImage?.asset?.url).width(1000).height(600).url()}
                  alt={post?.mainImage.alt || "image"}
          width={800}
          height={100}
        />
      ) : null}
      {post?.body ? <PortableText value={post.body} components={components} /> : null}
</div>
    
    </main>
  )
}

export default PostComp