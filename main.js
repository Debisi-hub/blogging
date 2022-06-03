function buildPost() {
  renderPost.renderImage();
  renderPost.renderPostBody();
  renderPost.renderCommentCount();
  renderPost.renderDislikeCount();
  renderPost.renderLikeCount();
  renderPost.renderScreen();
}

function bootstrap() {
  buildPost();
  likeBtn.addEventListener("click", () => favouriteHandler.like(user, post));
  dislikeBtn.addEventListener("click", () => favouriteHandler.dislike(user, post))
  submitBtn.addEventListener("click", () => favouriteHandler.comment(user, post))
}

bootstrap();
// Function that generate the exact date and time of current
function getCurrentDate() {
        // Getting the date and year dynamically
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth();
        let currentDay = currentDate.getDate();

        const year = currentDate.getFullYear();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        let month = currentDate.getMonth();
        month = months[month];
        const date = currentDate.getDate();
        const weekday = weekdays[currentDate.getDay()];

          return { weekday, date, month, hours, minutes, year };
    }
