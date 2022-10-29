import React from "react";
import { LoaderFunction, useLoaderData } from "remix";
import { GalleryDocument } from "~/@types/content";
import { BlurredImage } from "~/components/blurred-image";
import { getClient } from "~/lib/sanity/client";
import { getImageProps } from "~/lib/sanity/image-builder";

export const loader: LoaderFunction = async () => {
  const photography = await getClient().fetch<GalleryDocument[]>(`
  	*[_type == "stories"]{ _id, images[]{ _ref, alt, asset-> }}
  `);

  const images = photography?.[0]?.images?.map((image) =>
    getImageProps(image, {
      widths: [280, 560, 840, 1100, 1650, 2500, 2100, 3100],
      sizes: [
        "(max-width:1023px) 80vw",
        "(min-width:1024px) and (max-width:1620px) 67vw",
        "1100px",
      ],
      transformations: {
        background: "rgb:e6e9ee",
      },
    })
  );

  return images;
};

export default function Photography() {
  const urls = useLoaderData();

  return (
    <main className="px-8 bg:white dark:bg-black-home">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 dark:gap-0">
        {urls.map((image: ReturnType<typeof getImageProps>, index: number) => (
          <BlurredImage key={index} image={image} />
        ))}
      </div>

      <div className="flex flex-col">
        {urls.map((image: ReturnType<typeof getImageProps>, index: number) => (
          <BlurredImage
            key={index}
            image={image}
            className="max-h-full object-cover"
          />
        ))}
      </div>
    </main>
  );
}
