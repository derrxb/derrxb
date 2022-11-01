import clsx from "clsx";
import React from "react";

export type AnnotatedImageProps = {};

export const AnnotatedImage = (props: any) => {
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
        backgroundSize: "cover",
      }}
      className={clsx(
        "relative h-full w-full bg-black bg-center object-cover object-center bg-no-repeat bg-cover overflow-hidden aspect-video",
        props?.className
      )}
    >
      <img
        ref={imageRef}
        alt={props.image.alt}
        srcSet={props.image.srcSet}
        sizes={props.image.sizes}
        style={{
          opacity: imageLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in",
        }}
        src={props.image.src}
        className={clsx(
          "absolute top-0 left-0 w-full h-full object-cover object-center aspect-video",
          props?.className
        )}
        onLoad={() => {
          setLoaded(true);
        }}
      />
    </figure>
  );
};
