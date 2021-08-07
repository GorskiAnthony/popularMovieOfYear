import { getMovie } from "./getMovie";
import { Movie } from "./utils/Type";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const FORM = document.querySelector(".form")!;
const YEAR_FORM: HTMLInputElement = document.querySelector(
  "#year"
) as HTMLInputElement;
const CARD = document.querySelector(".all-card")!;

function displayHtml(movie: Movie) {
  CARD.innerHTML += `<div class="card">
  <h2 class="text-center mb-4 text-gray-700 text-lg font-semibold">
    ${movie.title}
  </h2>
  <img
    src="${IMAGE_URL + movie.poster_path}"
    class="mb-4"
  />
  <p>
    ${movie.overview}
  </p>
</div>
  `;
}

FORM?.addEventListener("submit", (e) => {
  e.preventDefault();
  const year: number = parseInt(YEAR_FORM.value, 10);
  const data: Promise<any> = getMovie(year)!;

  data.then((data) => {
    for (let index = 0; index < 3; index++) {
      displayHtml(data.results[index] as Movie);
    }
  });

  YEAR_FORM.value = "";
  CARD.innerHTML = "";
});
