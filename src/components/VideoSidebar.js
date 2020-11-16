import React, { useState } from "react";
import "./css/VideoSidebar.css";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

function VideoSidebar({ likes = 0, shares = 0, messages = 0 }) {
  const [liked, setLiked] = useState(false);
  const [likedCount, setLikedCount] = useState(likes);

  const likeHandler = () => {
    if (!liked) {
      setLikedCount(likedCount + 1);
      setLiked(true);
    } else {
      setLikedCount(likedCount - 1);
      setLiked(false);
    }
  };
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={likeHandler} />
        ) : (
          <FavoriteBorderIcon fontSize="large" onClick={likeHandler} />
        )}
        <p>{likedCount}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
