const API_KEY: string = process.env.API_KEY!;
import { dataInterfaces } from "./utils/Interface";

export const getMovie = async (id: number): Promise<dataInterfaces> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-EN&page=1&primary_release_year=${id}`
  );
  const data = await response.json();
  return data;
};
