import BullsEye from "../assets/bulls-eye.webp";
import ThumbsUp from "../assets/thumbs-up.webp";
import Meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

const Emoji = ({ rating }: { rating: number }) => {
  if (rating < 3) return null;

  const emojiMap: { [key: string]: ImageProps } = {
    5: { src: BullsEye, alt: "bulls-eye", boxSize: "35px" },
    4: { src: ThumbsUp, alt: "thumbs-up", boxSize: "25px" },
    3: { src: Meh, alt: "meh", boxSize: "25px" },
  };

  return <Image {...emojiMap[rating]} mt={1} />;
};

export default Emoji;
