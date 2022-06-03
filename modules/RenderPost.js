class RenderPostController {
    constructor() {}

    renderImage() {
        const {image} = post;
        img.setAttribute("src", image.src);
        img.setAttribute("alt", image.alt);
    }

    renderPostBody() {
        const {body} = post;
        postBody.innerHTML = body;
    }

    renderCommentCount() {
        const {comments} = post;
        comment.innerHTML = `(${comments.length})`;
    }
    

    renderScreen() {
        if (post.comments.length) {
            let commentOnScreen = "";
            for (let i = 0; i < post.comments.length; i++) {
                commentOnScreen += `<h4 class="user">${post.comments[i].userName}<span class="date"><i class="fas fa-circle"></i>${post.comments[i].weekday}, ${post.comments[i].date} ${post.comments[i].month} ${post.comments[i].year} ${post.comments[i].hours}:${post.comments[i].minutes}pm </span></h4><p class="user-comment">${post.comments[i].comment}</p>`;
            }
            commentListed.innerHTML = commentOnScreen;
            comment.innerHTML = post.comments.length;
        }
    }

    renderLikeCount() {
        const {likes} = post;
        increase.innerHTML = likes.length;
    }

    renderDislikeCount() {
        const {dislikes} = post;
        decrease.innerHTML = dislikes.length;
    }
}

const renderPost = new RenderPostController();
