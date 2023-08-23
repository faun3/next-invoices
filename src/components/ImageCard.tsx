import Image from "next/image";

const ImageCard = ({ src }: { src: string }) => {
  return (
    <div>
      <Image src={src} alt=""></Image>
    </div>
  );
};
export default ImageCard;
