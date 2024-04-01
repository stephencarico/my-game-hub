import { Box, SimpleGrid, GridItem, Text } from "@chakra-ui/react";

import useGames from "../hooks/useGames";

import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";

const GamesGrid = () => {
  const { data, error } = useGames();

  if (error) return <Text>Network Error</Text>;

  return (
    <Box p={2}>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {data.map((game) => (
          <GridItem key={game.id}>
            <GameCardContainer>
              <GameCard game={game} />
            </GameCardContainer>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GamesGrid;
