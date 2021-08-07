import { Movie } from "./Type";

export interface dataInterfaces {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
