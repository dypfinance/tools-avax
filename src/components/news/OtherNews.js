import React, { useState } from "react";
import VotePassive from "./assets/votepassive.svg";
import Upvote from "./assets/upvote.svg";
import Downvote from "./assets/downvote.svg";
import ToolTip from "./ToolTip";
import Clock from "./assets/clock.svg";
import OutsideClickHandler from "react-outside-click-handler";

const OtherNews = ({
  image,
  link,
  title,
  date,
  year,
  month,
  theme,
  onOtherNewsClick,
  newsId,
  upvotes,
  downvotes,
  onUpVoteClick,
  onDownVoteClick,
  isConnected,
  onHandlePressDownvote,
  onHandlePressUpvote,
  isPremium

}) => {
  const [likeIndicator, setLikeIndicator] = useState(false);
  const [dislikeIndicator, setDislikeIndicator] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const bal1 = Number(localStorage.getItem("balance1"));
  const bal2 = Number(localStorage.getItem("balance2"));

  const handleLikeStates = () => {
    if ((bal1 === 0 && bal2 === 0 && isPremium === false) || isConnected === false) {
      setLikeIndicator(false);
      setShowTooltip(true);
    } else {
      if (likeIndicator === true) {
        setLikeIndicator(false);
        onDownVoteClick(newsId);
      } else if (likeIndicator === false) {
        setLikeIndicator(true);
        onUpVoteClick(newsId);
      }
    }
  };

  const handleDisLikeStates = () => {
    if ((bal1 === 0 && bal2 === 0 && isPremium === false) || isConnected === false) {
      setLikeIndicator(false);
      setShowTooltip(true)
    } else {
      if (dislikeIndicator === true) {
        setDislikeIndicator(false);
        onUpVoteClick(newsId);
      } else if (dislikeIndicator === false) {
        onDownVoteClick(newsId);
        setDislikeIndicator(true);
      }
    }
  };
  return (
    <div
      className="other-news-singlewrapper"
       onClick={() => {
        onOtherNewsClick(newsId);
      setLikeIndicator(false);
      setDislikeIndicator(true);
      }}
    >
      <div>
        <img src={image} alt="" className="other-news-image"/>
        <div style={{ padding: 12, gap: 10 }} className="d-flex flex-column">
          {/* <a href={link} target={"_blank"}> */}
          <h4 className="singlenews-title">{title}</h4>
          {/* </a> */}
          <div className="news-bottom-wrapper" style={{justifyContent: 'space-between'}}>
            <div className="like-wrapper">
              <img
                src={
                  (likeIndicator === false && dislikeIndicator === false)
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
                  (likeIndicator === false && dislikeIndicator === false)
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
              <h6 className="date-content">{date} {month}, {year}</h6>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default OtherNews;
