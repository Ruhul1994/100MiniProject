import { getMovieReviews } from "./Data.js";

function init() {
    const movieReviewsData = getMovieReviews();
    paintStatistics(movieReviewsData);
}

function paintStatistics(movieReviewsData) {
    const flatReviewData = movieReviewsData.flat();
    const totalMovies = movieReviewsData.length;
    const totalReviews = flatReviewData.length;
    const totalRating = flatReviewData.reduce((acc, review) => acc + review.rating, 0);
    const averageRating = (totalRating / totalReviews).toFixed(2);

    const totalMoviesEl = document.getElementById("tMoviesId");
    const averageRatingEl = document.getElementById("tAvagRatingId"); // Fixed ID

    if (totalMoviesEl) assignStat(totalMoviesEl, totalMovies);
    if (averageRatingEl) assignStat(averageRatingEl, averageRating);
}

function assignStat(elem, value) {
    elem.innerHTML = ""; // Clear previous content
    const spanEl = document.createElement("span");
    spanEl.innerText = value;
    elem.appendChild(spanEl);
}

init();
