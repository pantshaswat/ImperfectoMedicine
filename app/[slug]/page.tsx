
import { SanityDocument } from "@sanity/client";
import { client, queries } from '@/sanity/lib/client';
import PostCom from "../../components/posts";
import Link from 'next/link';
export const revalidate = 60;

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug

  // Fetch the post using the slug
  const post: SanityDocument | null = await client.fetch(queries.getPostBySlug, {
    slug,
  });

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center">Post not found</div>;
  }
  return (
    <div className="min-h-screen bg-gray-50">
            <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
        <Link 
            href="/" 
            className="text-4xl font-bold mb-2 hover:text-gray-200 transition-colors cursor-pointer"
          >
            Imperfecto Medicine!
          </Link>

        </div>
      </div>
      <PostCom post={post} />
    </div>
  );
};

export default PostPage;
