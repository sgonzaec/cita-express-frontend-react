import { useEffect, useState } from "react";
import DummyImage from "../../../Assets/dummy-profile.png";

interface BinaryToImageProps {
    binaryData: string;
}

const BinaryToImage: React.FC<BinaryToImageProps> = ({ binaryData }) => {
    const [imageUrl, setImageUrl] = useState<string>('');
  
    useEffect(() => {
      const blob = new Blob([binaryData], { type: 'image/png' });
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
  
      return () => URL.revokeObjectURL(url);
    }, [binaryData]);
  
    return imageUrl ? (
      <img
        src={binaryData ? imageUrl : DummyImage}
        alt="profilePhoto"
        style={{ minWidth: "10em", minHeight: "10em" }}
      />
    ) : null;
  };
  
  export default BinaryToImage;