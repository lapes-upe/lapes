import Image from "next/image";

type CustomImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const CustomImage = ({ src, alt, width, height }: CustomImageProps) => {
  return (
    <div className="relative">
      <div
        className="absolute left-2 top-2 bg-amber-700/70"
        style={{ width, height }}
      />
      <div className="relative">
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
    </div>
  )
}
