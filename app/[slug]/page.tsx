import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

interface PageProps {
  title: string;
  description?: string;
  featured_image?: string;
  content: string;
}
async function getPageData(slug: string): Promise<PageProps | null> {
  const filePath = path.join(process.cwd(), "content", "pages", `${slug}.md`);

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    const htmlContent = marked(content);
    return {
      ...data,
      content: htmlContent,
    } as PageProps;
  } catch (error) {
    return null;
  }
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "content", "pages"));
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(".md", ""),
    }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getPageData(params.slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {page.featured_image && (
        <img
          src={page.featured_image}
          alt={page.title || ""}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
      )}
      <h1 className="text-4xl font-bold mb-4">{page.title}</h1>
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </div>
  );
}
