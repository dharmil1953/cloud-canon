import { getContent } from "@/lib/content";

export default function Home() {
  const data = getContent("pages.json");

  return (
    <div>
      {data?.about?.title}
      {data?.contact?.title}
    </div>
  );
}
