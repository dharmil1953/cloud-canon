import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

interface PostProps {
  date: string;
  author: string;
  title: string;
  content: string;
  featured_image?: string;
  categories?: string[];
}

async function getPostData(slug: string): Promise<PostProps | null> {
  const filePath = path.join(process.cwd(), "content", "posts", `${slug}.md`);

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    const htmlContent = marked(content);
    return {
      ...data,
      content: htmlContent,
    } as PostProps;
  } catch (error) {
    return null;
  }
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "content", "posts"));
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(".md", ""),
    }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {post.featured_image && (
        <img
          src={post.featured_image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
      )}
      <article className="prose prose-lg max-w-none">
        <h1>{post.title}</h1>
        <div className="flex gap-4 text-gray-600 mb-8">
          <span>By {post.author}</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
          {post.categories && (
            <div className="flex gap-2">
              {post.categories.map((category: string) => (
                <span
                  key={category}
                  className="bg-gray-100 px-2 py-1 rounded text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          )}
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
}
