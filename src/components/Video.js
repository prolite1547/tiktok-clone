import React, { useRef, useState } from "react";
import "./css/Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({
  url,
  userid,
  description,
  song,
  likes = 0,
  shares = 0,
  messages = 0,
}) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={handleVideoPress}
        ref={videoRef}
        src={url}
      ></video>

      <VideoFooter userid={userid} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
