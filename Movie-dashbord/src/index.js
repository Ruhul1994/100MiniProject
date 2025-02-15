import {getMovieReviews} from "./Data.js"
function init(){
    const movieReviewsData = getMovieReviews();
    paint
    paintStatistics(movieReviewsData);
}

function paintStatistics(movieReviewsData){
    const flatReviewData = movieReviewsData.flat();
    const totalMovies = movieReviewsData.length;
    const totalReviews = flatReviewData.length;
    const totalRating = flatReviewData.reduce((acc, review)=> acc + review.rating, 0);
       const averageRating = (totalRating /totalReviews).toFixed(2);
   }

init();
