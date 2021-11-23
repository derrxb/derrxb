import cloudinary from "cloudinary";
import { json, LoaderFunction, useLoaderData } from "remix";

export const loader: LoaderFunction = async ({ params }) => {
  cloudinary.v2.config({
    cloud_name: "derrxb",
    api_key: "824895549433489",
    api_secret: "yKNhsv-HefYGCRXf-0WjnYjpVSM",
    secure: true,
  });

  const folderName = params?.photographyId as string;
  const folderResult = await cloudinary.v2.search
    .expression(`${folderName}`)
    .sort_by("public_id", "desc")
    .max_results(15)
    .execute();
  const images = folderResult.resources as {
    asset_id: string;
    url: string;
    secure_url: string;
    filename: string;
    public_id: string;
  }[];

  return json({
    images: images.map((image) => ({
      id: image.public_id,
      url: image.url,
      secure_url: image.secure_url,
      name: image.filename,
    })),
  });
};

export default function PhotographyRoute() {
  const data = useLoaderData() as {
    images: { id: string; url: string; name: string }[];
  };

  return (
    <div>
      <h1>Title</h1>
      {data.images.map((item) => (
        <img
          src={item.url}
          key={item.id}
          style={{ height: "250px", width: "480px" }}
        />
      ))}
    </div>
  );
}
