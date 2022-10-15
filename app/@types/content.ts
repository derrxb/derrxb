type ImageSource = {
  _key: string;
  _type: string;
  alt: string;
  asset: {
    _ref: string;
    _type: string;
    metadata: Record<string, unknown>;
  };
};

export type GalleryDocument = {
  _id: string;
  images: ImageSource[];
};
