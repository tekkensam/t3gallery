// app/page.tsx
import { db } from "~/server/db/index";
import { image } from "~/server/db/schema";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const imageList = await db.query.image.findMany({
    orderBy: (img, { desc }) => desc(img.id),
  });

  return (
    <main className="p-4">
      <div className="flex flex-wrap gap-4">
        {[...imageList,...imageList,...imageList].map((image,index) => (
          <div key={image.id} className="flex w-48 flex-col">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
