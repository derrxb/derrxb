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

const BlurredImage = (props: any) => {
  const [imageLoaded, setLoaded] = React.useState(false);
  const imageRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (imageRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <figure
      style={{
        backgroundImage: `url(${props.image.lqip})`,
        paddingTop: `calc(100% / ${props.image.aspectRatio})`,
        backgroundRepeat: "no-repeat",
      }}
      className="relative m-0 w-full bg-black bg-center bg-cover bg-no-repeat"
    >
      {
        <img
          ref={imageRef}
          alt={props.image.alt}
          srcSet={props.image.srcSet}
          sizes={props.image.sizes}
          style={{
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 1s ease-in",
          }}
          src={props.image.src}
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          onLoad={() => {
            setLoaded(true);
          }}
        />
      }
    </figure>
  );
};

export default function Photography() {
  const urls = useLoaderData();

  return (
    <div>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {urls.map((image: ReturnType<typeof getImageProps>, index: number) => (
          <BlurredImage key={index} image={image} />
        ))}
      </main>
    </div>
  );
}
