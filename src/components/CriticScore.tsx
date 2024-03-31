import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score }: { score: number }) => {
  return (
    <Badge colorScheme="green" fontSize="14px" borderRadius="md" px={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
