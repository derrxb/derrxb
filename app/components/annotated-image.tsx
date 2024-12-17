import clsx from "clsx";
import React from "react";

export type AnnotatedImageProps = {};

export const AnnotatedImage = (props: any & AnnotatedImageProps) => {
  const [imageLoaded, setLoaded] = React.useState(false);
  const imageRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (imageRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <>
      <figure
        style={{
          backgroundImage: `url(${props.image.lqip})`,
          backgroundSize: "cover",
        }}
        className={clsx(
          "relative w-full bg-black bg-center object-cover object-center bg-no-repeat bg-cover overflow-hidden aspect-video max-w-5xl",
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
            "absolute top-0 left-0 w-full max-w-5xl object-cover object-center aspect-video",
            props?.className
          )}
          onLoad={() => {
            setLoaded(true);
          }}
        />
      </figure>
    </>
  );
};
