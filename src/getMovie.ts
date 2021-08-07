const API_KEY: string = process.env.API_KEY!;
export const getMovie = async (id: number): Promise<object> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR&page=1&primary_release_year=${id}`
  );
  const data: object = await response.json();
  return data;
};
