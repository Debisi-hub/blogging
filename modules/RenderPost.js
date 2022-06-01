class RenderPostController {
  constructor() {}

  renderImage() {
    const { image } = post;
    img.setAttribute("src", image.src);
    img.setAttribute("alt", image.alt);
  }

  renderPostBody() {
    const { body } = post;
    postBody.innerHTML = body;
  }

  renderCommentCount() {
    const { comments } = post;
    comment.innerHTML = `(${comments.length})`;
  }

  renderLikeCount() {
    const { likes } = post;
    increase.innerHTML = likes.length;
  }

  renderDislikeCount() {
    const { dislikes } = post;
    decrease.innerHTML = dislikes.length;
  }
}

const renderPost = new RenderPostController();
