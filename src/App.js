import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./components/Video";

import axios from "./config/axios";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios.get("/v1/videos").then((data) => {
      setVideos(data.data);
    });
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((video, i) => {
          return (
            <Video
              key={video.url}
              url={video.url}
              userid={video.userid}
              description={video.description}
              song={video.song}
              likes={parseInt(video.likes)}
              shares={parseInt(video.shares)}
              messages={parseInt(video.messages)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
