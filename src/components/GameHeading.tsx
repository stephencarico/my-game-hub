import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GamesHeader = ({ gameQuery: { genre, platform } }: Props) => {
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GamesHeader;
