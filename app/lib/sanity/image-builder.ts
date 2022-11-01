import ImageUrlBuilder from "@sanity/image-url";
import type { GalleryDocument } from "~/@types/content";
import { sanityClient } from "./client";

const imageBuilder = ImageUrlBuilder(sanityClient);

export const urlFor = (source: any) => {
  return imageBuilder.image(source);
};

export type AnnotatedImage = {
  id: string;
  lqip?: string;
  aspectRatio?: string;
  alt: string;
  src: string;
  srcSet: string;
  sizes: string;
};

export const getImageProps = (
  image: GalleryDocument["images"][0],
  {
    widths,
    sizes,
    transformations,
  }: {
    widths: Array<number>;
    sizes: Array<string>;
    transformations?: any;
  }
): AnnotatedImage => {
  const averageSize = Math.ceil(widths.reduce((a, s) => a + s) / widths.length);

  return {
    id: image.asset._ref,
    lqip: String(image.asset.metadata?.lqip),
    aspectRatio: (image.asset.metadata?.dimensions as { aspectRatio?: string })
      ?.aspectRatio,
    alt: image.alt,
    src: imageBuilder
      .image(image)
      .quality(80)
      .format("jpg")
      .width(averageSize)
      .url(),
    // src: imageBuilder({
    //   quality: "auto",
    //   format: "auto",
    //   ...transformations,
    //   resize: { width: averageSize, ...transformations?.resize },
    // }),
    srcSet: widths
      .map((width) =>
        [
          imageBuilder
            .image(image)
            .quality(80)
            .format("jpg")
            .width(width)
            .url(),
          //   ({
          //   quality: "auto",
          //   format: "auto",
          //   ...transformations,
          //   resize: { width, ...transformations?.resize },
          // }),
          `${width}w`,
        ].join(" ")
      )
      .join(", "),
    sizes: sizes.join(", "),
  };
};
