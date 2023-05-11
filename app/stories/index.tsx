export default function PhotographyIndexRoute() {
  return (
    <div className="px-2 md:px-24 pt-20 bg-white dark:bg-black flex h-full w-full fixed flex-col">
      <div className="flex flex-col">
        <div className="flex flex-col w-full h-fit relative">
          <img
            className="aspect-video rounded-3xl shadow-md object-cover"
            src="https://res.cloudinary.com/derrxb/image/upload/v1637675220/exploring-cahal-pech-in-san-ignacio-belize/cahal-pech-07_lqofby.jpg"
            alt="cahal-pech"
          />
        </div>
      </div>
    </div>
  );
}
