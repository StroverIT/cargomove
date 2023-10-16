import Image from "next/image";

// Components
import Icons from "./Icons";

function ImageContaner({ icon, imageData, size }) {
  if (imageData?.className) {
    return (
      <div className={`${imageData.className} relative`}>
        <Image
          src={`/pages-images/admin/${imageData.url}`}
          fill
          alt={imageData.alt}
        />
      </div>
    );
  }
  return (
    <div className={`pr-2 ${size ? size : "text-4xl"}`}>
      <Icons iconType={icon} />
    </div>
  );
}

export default ImageContaner;
