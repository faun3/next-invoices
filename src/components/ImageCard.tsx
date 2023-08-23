import Image, { StaticImageData } from "next/image";

const ImageCard = ({
  src,
  children,
}: {
  src: StaticImageData;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <Image src={src} alt="" width={600} height={600}></Image>
      <div className="text-center">{children}</div>
    </div>
  );
};
export default ImageCard;
