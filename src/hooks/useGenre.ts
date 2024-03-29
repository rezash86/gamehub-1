import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// interface FetchGenreResponse {
//   count: number;
//   results: Genre[];
// }
// const useGenres = () => {
//   const [genres, setGenres] = useState<Genre[]>([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const controller = new AbortController(); //optioanl

//     apiClient
//       .get<FetchGenreResponse>("/genres", { signal: controller.signal })
//       .then((res) => setGenres(res.data.results))
//       .catch((err) => {
//         if (err instanceof CanceledError) return; //optional
//         setError(err.message);
//       });

//     return () => controller.abort();
//   }, []);

//   return { genres, error };
// };

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
