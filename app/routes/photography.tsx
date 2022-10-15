import React from "react";
import { LoaderFunction, useLoaderData } from "remix";
import { GalleryDocument } from "~/@types/content";
import { getClient } from "~/lib/sanity/client";
import { getImageProps } from "~/lib/sanity/image-builder";

export const loader: LoaderFunction = async () => {
  const photography = await getClient().fetch<GalleryDocument[]>(`
  	*[_type == "stories"]{ _id, images[]{ asset-> }}
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
  const [imageLoaded, setLoaded] = React.useState(false);

  return (
    <div>
      <main>
        {urls.map((image: ReturnType<typeof getImageProps>, index: number) => (
          <figure
            key={image.id + index}
            style={{
              backgroundImage: `url(${image.lqip})`,
              paddingTop: `calc(100% / ${image.aspectRatio})`,
              backgroundRepeat: "no-repeat",
            }}
            className="relative m-0 w-full bg-black bg-cover bg-no-repeat"
          >
            {
              <img
                alt={image.alt}
                srcSet={image.srcSet}
                sizes={image.sizes}
                style={{
                  opacity: imageLoaded ? 1 : 0,
                  transition: "opacity 1s ease-in",
                }}
                src={image.src}
                className="absolute top-0 left-0 w-full"
                onLoad={() => {
                  setLoaded(true);
                }}
              />
            }
          </figure>
        ))}
      </main>
    </div>
  );
}
