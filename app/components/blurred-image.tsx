import clsx from "clsx";
import { createAnimationState } from "framer-motion/types/render/utils/animation-state";
import React from "react";

export const BlurredImage = (props: any) => {
  const [imageLoaded, setLoaded] = React.useState(false);
  const imageRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (imageRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const annotate = () => {
    if (!imageRef.current && !canvasRef.current) {
      console.log("Skipping;");
      return;
    }

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d") as CanvasRenderingContext2D;
    context.font = "30px Arial";
    context?.fillText("Hello", 10, 10);
  };

  return (
    <figure
      style={{
        backgroundImage: `url(${props.image.lqip})`,
        // paddingTop: `calc(100% / ${props.image.aspectRatio})`,
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
          annotate();
        }}
      />

      <canvas ref={canvasRef} width="300px" height="300px" />
    </figure>
  );
};
