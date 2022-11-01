export default {
  name: "stories",
  type: "document",
  title: "Stories",
  fields: [
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
            metadata: ["blurhash", "lqip", "palette"],
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
            {
              name: "tag",
              type: "string",
              title: "Tag",
            },
            {
              name: "location",
              type: "geopoint",
              title: "Location",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
  preview: {
    select: {
      images: "images",
      image: "images.0",
    },
    prepare(selection) {
      const { images, image } = selection;

      return {
        title: `Gallery block of ${Object.keys(images).length} images`,
        subtitle: `Alt text: ${image.alt}`,
        media: image,
      };
    },
  },
};
