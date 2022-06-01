function buildPost() {
  renderPost.renderImage();
  renderPost.renderPostBody();
  renderPost.renderCommentCount();
  renderPost.renderDislikeCount();
  renderPost.renderLikeCount();
}

function bootstrap() {
  buildPost();
  likeBtn.addEventListener("click", () => favouriteHandler.like(user, post));
}

bootstrap();
