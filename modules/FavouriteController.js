class FavouriteController {
  hasUserLikedPost(user, post) {
    const isLiked = post.likes.find((like) => like.userId === user.id);
    return isLiked;
  }

  unlike(user, post) {
    post.likes = post.likes.filter((like) => like.userId !== user.id);
  }

  like(user, post) {
    this.hasUserLikedPost(user, post)
      ? this.unlike(user, post)
      : post.likes.push({ userId: user.id });

    renderPost.renderLikeCount();
  }

  dislike() {}
}

const favouriteHandler = new FavouriteController();
