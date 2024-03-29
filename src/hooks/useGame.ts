import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  //new
  background_image: string;
  //platform
  parent_platforms: { platform: Platform }[];
  //critic
  metacritic: number;
}
// interface FetchGamesResponse {
//   count: number;
//   results: [Game];
// }

// const useGames = () => {
// const [games, setGames] = useState<Game[]>([]);
// const [error, setError] = useState("");
// useEffect(() => {
//   const controller = new AbortController(); //optioanl
//   apiClient
//     .get<FetchGamesResponse>("/games", { signal: controller.signal })
//     .then((res) => setGames(res.data.results))
//     .catch((err) => {
//       if (err instanceof CanceledError) return; //optional
//       setError(err.message);
//     });
//   return () => controller.abort();
// }, []);
// return { games, error };
// };

const useGames = () => useData<Game>("/games");

export default useGames;
