import Image from "next/image"


interface ImageI {
    src: string;
    width?: number;
    height?: number;
    alt: string;
    className: string
}
const Imagecomponent = ({src, width, height, alt, className}: ImageI) => {
  return (
    // image component
    <Image src={src}
     alt={alt}
     width={width}
     height={height} 
     className={className}
    />
  )
}

export default Imagecomponent