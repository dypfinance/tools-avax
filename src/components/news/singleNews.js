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
  isConnected,
  onSingleUpVoteClick,
  onSingleDownVoteClick,
  isPremium

}) => {
  const [likeIndicator, setLikeIndicator] = useState(false);
  const [dislikeIndicator, setDislikeIndicator] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const bal1 = Number(localStorage.getItem("balance1"));
  const bal2 = Number(localStorage.getItem("balance2"));

  const handleLikeStates = () => {
    const logout = localStorage.getItem("logout");

    if ((bal1 === 0 && bal2 === 0 && isPremium === false) || logout === 'true') {
      setLikeIndicator(false);
      setDislikeIndicator(false);
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
    const logout = localStorage.getItem("logout");

    if ((bal1 === 0 && bal2 === 0 && isPremium === false) || logout === 'true') {
      setLikeIndicator(false);
      setDislikeIndicator(false);

      setShowTooltip(true);
    } else {
      if (dislikeIndicator === true) {
        setDislikeIndicator(false);
        onSingleUpVoteClick();
      } else if (dislikeIndicator === false) {
        onSingleDownVoteClick();
        setLikeIndicator(false);
        setDislikeIndicator(true);
      }
    }
  };

  return (
    <div className="singlenews-body">
      <div className="row m-0 justify-content-between" style={{ gap: 20 }}>
        <div className="singlenews-wrapper">
          {/* <a href={link} target={"_blank"}> */}
          <h4 className="singlenews-title" onClick={onNewsClick}>{title}</h4>
          {/* </a> */}

          <div className="news-bottom-wrapper justify-content-between">
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
                  <ToolTip status={
                    isConnected
                      ? "You need to be holding DYP to vote"
                      : "Please connect your wallet"
                  }/>
                </OutsideClickHandler>
              ) : (
                <></>
              )}
            <span> {Number(upvotes) - Number(downvotes)}</span>

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
                {month} {day} {year}
              </h6>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default SingleNews;
