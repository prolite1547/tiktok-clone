import React from "react";
import "./css/VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter({ userid, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>{userid}_</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => {
              return <p>{song}</p>;
            }}
          </Ticker>
        </div>
      </div>
      <img
        src="./music-plate.png"
        className="videoFooter__record"
        alt="Music Plate"
      />
    </div>
  );
}

export default VideoFooter;
