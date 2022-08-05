import React, { useState } from "react";
import VotePassive from "./assets/votepassive.svg";
import Upvote from "./assets/upvote.svg";
import Downvote from "./assets/downvote.svg";
import ToolTip from "./ToolTip";
import OutsideClickHandler from "react-outside-click-handler";
import Clock from "./assets/clock.svg";

const SingleNews = ({
  title,
  image,
  link,
  month,
  day,
  year,
  onNewsClick,
  theme,
  upvotes,
  downvotes,
  onSingleUpVoteClick,
  onSingleDownVoteClick,
}) => {
  const [likeIndicator, setLikeIndicator] = useState(false);
  const [dislikeIndicator, setDislikeIndicator] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const bal1 = Number(localStorage.getItem("balance1"));
  const bal2 = Number(localStorage.getItem("balance2"));

  const handleLikeStates = () => {
    if (bal1 === 0 && bal2 === 0) {
      setLikeIndicator(false);
      setShowTooltip(true);
    } else {
      if (likeIndicator === true) {
        setLikeIndicator(false);
        onSingleDownVoteClick();
      } else if (likeIndicator === false) {
        setLikeIndicator(true);
        onSingleUpVoteClick();
      }
    }
  };

  const handleDisLikeStates = () => {
    if (bal1 === 0 && bal2 === 0) {
      setLikeIndicator(false);
      onSingleDownVoteClick();
    } else {
      if (dislikeIndicator === true) {
        setDislikeIndicator(false);
        onSingleUpVoteClick();
      } else if (dislikeIndicator === false) {
        onSingleDownVoteClick();
        setDislikeIndicator(true);
      }
    }
  };

  return (
    <div className="singlenews-body" onClick={onNewsClick}>
      <div className="row m-0 justify-content-between" style={{ gap: 20 }}>
        <div className="singlenews-wrapper">
          {/* <a href={link} target={"_blank"}> */}
          <h4 className="singlenews-title">{title}</h4>
          {/* </a> */}

          <div className="news-bottom-wrapper">
            <div className="like-wrapper">
              <img
                src={
                  likeIndicator === false && dislikeIndicator === false
                    ? VotePassive
                    : likeIndicator === true
                    ? Upvote
                    : Downvote
                }
                alt=""
                className="like-indicator"
                onClick={(e) => {
                  handleLikeStates();
                  e.stopPropagation();
                }}
              />
              {showTooltip === true ? (
                <OutsideClickHandler
                  onOutsideClick={() => {
                    setShowTooltip(false);
                  }}
                >
                  <ToolTip />
                </OutsideClickHandler>
              ) : (
                <></>
              )}
              {Number(upvotes) - Number(downvotes)}

              <img
                src={
                  likeIndicator === false && dislikeIndicator === false
                    ? VotePassive
                    : likeIndicator === true
                    ? Upvote
                    : Downvote
                }
                alt=""
                className="like-indicator"
                id="dislike"
                onClick={(e) => {
                  handleDisLikeStates();
                  e.stopPropagation();
                }}
              />
            </div>
            {/* <img
              src={theme === "theme-dark" ? WhiteDots : Dots}
              alt=""
              style={{ width: "auto" }}
            /> */}
            <div className="date-wrapper">
              <img src={Clock} alt="" style={{ width: "auto" }} />
              <h6 className="date-content">
                {month} {day}, {year}
              </h6>
            </div>
          </div>
        </div>
        <a href={link} target={"_blank"}>
          <div>
            <img src={image} alt="" className="singlenews-image d-none" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SingleNews;
