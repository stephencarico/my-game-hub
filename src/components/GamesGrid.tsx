import { Box } from "@chakra-ui/react";

import useGames from "../hooks/useGames";

const GamesGrid = () => {
  const { data } = useGames();

  return (
    <Box p={2}>
      {data.map((game) => (
        <p key={game.id}>{game.name}</p>
      ))}
    </Box>
  );
};

export default GamesGrid;
