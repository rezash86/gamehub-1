import React, { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import apiClient from "../services/api-client";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";

// interface Game {
//   id: number;
//   name: string;
// }
// interface FetchGamesResponse {
//   count: number;
//   results: [Game];
// }
const GameGrid = () => {
  // const [games, setGames] = useState<Game[]>([]);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   apiClient
  //     .get<FetchGamesResponse>("/games")
  //     .then((res) => setGames(res.data.results))
  //     .catch((err) => setError(err.message));
  // });

  // const { games, error } = useGames();
  const { data, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}
      >
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
