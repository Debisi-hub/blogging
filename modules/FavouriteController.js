class FavouriteController {
    hasUserLikedPost(user, post) {
        const isLiked = post.likes.find((like) => like.userId === user.id);
        return isLiked;
    }
    hasUserUnlikedPost(user, post) {
        const isUnlike = post.dislikes.find(
            (dislike) => dislike.userId === user.id
        );

        return isUnlike;
    }

    unlike(user, post) {
        post.likes = post.likes.filter((like) => like.userId !== user.id);
    }
    undisliking(user, post) {
        post.dislikes = post.dislikes.filter(
            (dislike) => dislike.userId !== user.id
        );
    }

    like(user, post) {
        this.hasUserLikedPost(user, post)
            ? this.unlike(user, post)
            : post.likes.push({userId: user.id});
        console.log(post.likes);
        renderPost.renderLikeCount();
        if (
            this.hasUserUnlikedPost(user, post) &&
            this.hasUserLikedPost(user, post)
        ) {
            post.dislikes = post.dislikes.filter(
                (disLike) => disLike.userId !== user.id
            );
            renderPost.renderDislikeCount();
        }
    }

    dislike(user, post) {
        if (this.hasUserLikedPost(user, post)) {
            post.likes = post.likes.filter((like) => like.userId != user.id);
            post.dislikes.push({userId: user.id});
            renderPost.renderDislikeCount();
            renderPost.renderLikeCount();
        } else if (
            !this.hasUserLikedPost(user, post) &&
            !this.hasUserUnlikedPost(user, post)
        ) {
            post.dislikes.push({userId: user.id});
            renderPost.renderDislikeCount();
        } else if (
            !this.hasUserLikedPost(user, post) &&
            this.hasUserUnlikedPost(user, post)
        ) {
            post.dislikes = post.dislikes.filter(
                (obj) => obj.userId !== user.id
            );
            renderPost.renderDislikeCount();
        }

        // this.hasUserUnlikedPost(user, post) ? this.undisliking(user, post) : post.dislikes.push({userId: user.id})
        // renderPost.renderDislikeCount();
    }

    // render to screen
    
    comment(user, post) {
        const value = input.value;
        if (value.trim()) {
            let comment = {
                id: user.id,
                comment: value,
                userName: user.name,
                ...getCurrentDate()

            };
            post.comments.unshift(comment);
            input.value = "";
            console.log(post.comments);
            getCurrentDate()
            renderPost.renderScreen();
        }
    }
}

const favouriteHandler = new FavouriteController();
