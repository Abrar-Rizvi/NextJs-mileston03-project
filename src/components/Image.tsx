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
    // Image component
    <Image src={src || '/fallback-image.jpg'}
     alt={alt}
     width={width}
     height={height} 
     className={className}
    />
  )
}

export default Imagecomponent